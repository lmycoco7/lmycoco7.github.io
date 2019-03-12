var mapCanvas = document.getElementById('map');
// 2D渲染上下文
var context = mapCanvas.getContext('2d');
var loadingDiv = document.getElementById('loading');
var scoreSpan = document.querySelector('#current_score>span');
var menuUl = document.getElementById('menu');
var endScoreLi = document.getElementById('end_score');
var restartLi = document.getElementById('restart');

mapCanvas.width = document.documentElement.clientWidth;
mapCanvas.height = document.documentElement.clientHeight;


/*
 * 预加载: 浏览器只会对相同的图片等加载一次
 */
// 用数组记录图片的名字
var names = ['background.png', 'bullet1.png', 'bullet2.png', 'enemy1.png', 'enemy2.png', 'enemy3.png', 'herofly.png',
    'loading.gif', 'prop.png'
];

var count = 0; // 记录图片 加载完成 的张数

for (var i = 0; i < names.length; i++) {
    var img = new Image();
    img.src = 'img/' + names[i];
    img.onload = function () {
        count++;
        if (count == names.length) {
            console.log('图片加载完毕');
            // 预加载音乐
            loadMusic();
        }
    }
}

// 创建数组, 存储所有的音乐名称
var musicNames = ['bullet.mp3', 'enemy1_down.mp3', 'enemy2_down.mp3', 'enemy3_down.mp3', 'game_music.mp3',
    'game_over.mp3'
];

var musicCount = 0; // 存储加载完成的音乐个数
var musics = []; // 存储加载完成的音乐

// 预加载 音乐
function loadMusic() {
    for (var i = 0; i < musicNames.length; i++) {
        var music = new Audio(); // 自动预加载
        music.src = 'audio/' + musicNames[i];
        musics.push(music);
        music.onloadedmetadata = function () {
            musicCount++;
            if (musicCount == musicNames.length) {
                console.log('音乐加载完毕');
                loadingDiv.style.display = 'none';
                // 播放背景音乐
                musics[4].loop = true; // 循环播放
                musics[4].volume = 0.5; // 音量(0-1)
                musics[4].play(); // 播放
                // 开始游戏
                main();
            }
        }
    }
}


// 背景图
var bgImage = new Image();
bgImage.src = 'img/background.png';

// 背景对象只有一个
var background = {
    x: 0,
    y: 0,
    w: mapCanvas.width,
    h: mapCanvas.height,
    draw: function () {
        // 如何满屏且不调整图片比例
        // Math.ceil(a) 对 a 进行上舍入
        // 例: Math.ceil(1.1) 的结果为 2
        var row = Math.ceil(mapCanvas.height / 568);
        var col = Math.ceil(mapCanvas.width / 320);
        // 绘制
        // 为了保证图片无限滚动, 画两张一模一样的背景图
        for (var i = -row; i < row; i++) { // 行
            for (var j = 0; j < col; j++) { // 列
                // 绘制背景图到 canvas
                context.drawImage(bgImage, j * 320, i * 568 + this.y);
            }
        }
    },
    // 移动
    move: function () {
        this.y++;
        var row = Math.ceil(mapCanvas.height / 568);
        if (this.y == row * 568) {
            this.y = 0;
        }
    }
}


// 英雄图片
var heroImg = new Image();
heroImg.src = 'img/herofly.png';
// 子弹图片
var bulletImg1 = new Image();
bulletImg1.src = 'img/bullet1.png';
var bulletImg2 = new Image();
bulletImg2.src = 'img/bullet2.png';

// 英雄对象
var hero = {    
    // 飞机的位置
    x: mapCanvas.width / 2 - 33,
    y: mapCanvas.height - 82 - 100,
    // 宽高
    w: 66,
    h: 82,
    i: 0, // 第几张图片, 从 0 开始
    flagI: 0, // 图片的切换频率
    bullets: [], // 存储已经发射出去的子弹
    flagShot: 0, // 子弹发射频率
    armType: 0, // 存储武器类型(0, 单排; 1, 双排)
    boom: false, // 是否爆炸

    //方法
    draw: function () {
        // 控制图片的切换
        this.flagI++;
        if (this.flagI == 4) {
            if (this.boom) {
                // 处理爆炸
                this.i++;
                if (this.i == 4) {
                    // 英雄死亡
        -            gameOver();
                }
            } else {
                // 控制图片切换
                this.i = (++this.i) % 2;
            }
            // 重置
            this.flagI = 0;
        }
        // 把 图片 的某一部分 绘制到 canvas 上某个区域
        context.drawImage(heroImg, this.i * this.w, 0, this.w, this.h, this.x, this.y, this.w, this.h);
    },
    // 发射子弹
    shot: function () {
        // 爆炸后不再发射子弹
        if (!this.boom) {
            this.flagShot++;
        }
        if (this.flagShot == 5) {
            // 播放 放射子弹的音乐
            musics[0].play();
            // 创建子弹对象
            if (this.armType) {
                // 双排子弹
                var bullet = new Bullet(this.x + this.w / 2 - 24, this.y - 14, 48, 14, bulletImg2, 2);
            } else {
                // 单排子弹
                var bullet = new Bullet(this.x + this.w / 2 - 3, this.y - 14, 6, 14, bulletImg1, 1);
            }
            // 保存生成的子弹
            this.bullets.push(bullet);
            // 重置
            this.flagShot = 0;
        }
        // 移动每一个子弹
        for (var i = 0; i < this.bullets.length; i++) {
            // 判断子弹是否超出屏幕
            if (this.bullets[i].y <= -this.bullets[i].h) {
                // 删除子弹
                this.bullets.splice(i, 1);
                i--;
            } else {
                // 移动子弹
                this.bullets[i].draw();
                this.bullets[i].move();
            }
        }
    }
}

// 鼠标控制英雄
mapCanvas.onmousedown = function (e) {
    // 1, 获取事件对象
    var even = e || window.event;
    // 2, 获取鼠标位置
    var x = even.offsetX;
    var y = even.offsetY;
    // 3, 判断是否选中飞机(英雄)
    if (x >= hero.x && x <= hero.x + hero.w && y >= hero.y && y <= hero.y + hero.h) {
        // 选中飞机的时候, 才能移动
        mapCanvas.onmousemove = function (e) {
            even = e || window.event;
            // 重新设置飞机位置
            hero.x = even.offsetX - hero.w / 2;
            hero.y = even.offsetY - hero.h / 2;
        }
    }
}
// 鼠标抬起
mapCanvas.onmouseup = function () {
    mapCanvas.onmousemove = null;
}

// 触屏控制英雄
mapCanvas.ontouchstart = function (e) {
    // 1, 获取事件对象
    var even = e || window.event;
    // 2, 获取手指位置
    var x = even.touches[0].clientX;
    var y = even.touches[0].clientY;
    // 3, 判断是否选中飞机(英雄)
    if (x >= hero.x && x <= hero.x + hero.w && y >= hero.y && y <= hero.y + hero.h) {
        // 选中飞机的时候, 才能移动
        mapCanvas.ontouchmove = function (e) {
            even = e || window.event;
            // 重新设置飞机位置
            hero.x = even.touches[0].clientX - hero.w / 2;
            hero.y = even.touches[0].clientY - hero.h / 2;
        }
    }
}
// 手指离开
mapCanvas.ontouchend = function () {
    mapCanvas.ontouchmove = null;
}




/*
 * 子弹类
 */
function Bullet(x, y, w, h, img, hurt) {
    // 属性
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.hurt = hurt; // 伤害
}
// 绘制方法
Bullet.prototype.draw = function () {
    context.drawImage(this.img, this.x, this.y, this.w, this.h);
}
// 移动方法
Bullet.prototype.move = function () {
    this.y -= 5;
}


/*
 * 敌人类
 */
function Enemy(x, y, w, h, img, speed, hp, score, maxI) {
    // 属性
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.speed = speed; // 速度
    this.hp = hp; // 血量
    this.score = score; // 分数
    this.maxI = maxI; // 播放图片的张数
    this.i = 0; // 第几张图片
    this.flagI = 0; // 控制图片切换频率
    this.isDie = false; // 是否死亡
    this.boom = false; // 是否爆炸
}

// 绘制的方法
Enemy.prototype.draw = function () {
    // 爆炸, 切换图片
    if (this.boom) {
        this.flagI++;
        if (this.flagI == 5) {
            this.i++;
            if (this.i == this.maxI) {
                // 图片切换到最后一张, 敌机死亡
                this.isDie = true;
            }
            // 重置
            this.flagI = 0;
        }
    }
    context.drawImage(this.img, this.i * this.w, 0, this.w, this.h, this.x, this.y, this.w, this.h);
}

// 移动
Enemy.prototype.move = function () {
    this.y += this.speed;
}


// 敌机图片
var enemyImg1 = new Image();
enemyImg1.src = 'img/enemy1.png';
var enemyImg2 = new Image();
enemyImg2.src = 'img/enemy2.png';
var enemyImg3 = new Image();
enemyImg3.src = 'img/enemy3.png';

// 定义数组, 存储创建的敌机
var enemies = [];

// 随机产生敌机
function randomEnemy() {
    // 控制产生的频率
    var num = randomNum(0, 1000);
    if (num < 50) {
        if (num <= 40) {
            // 小飞机
            // 随机位置
            var randomX = randomNum(0, mapCanvas.width - 38);
            // 随机速度
            var randomSpeed = randomNum(2, 8);

            // 创建敌机
            // x, y, w, h, img, speed, hp, score, maxI
            var enemy = new Enemy(randomX, -34, 38, 34, enemyImg1, randomSpeed, 1, 100, 5);
            // 记录敌机
            enemies.push(enemy);
        } else if (num <= 48) {
            // 中型飞机
            // 随机位置
            var randomX = randomNum(0, mapCanvas.width - 46);
            // 随机速度
            var randomSpeed = randomNum(2, 6);

            // 创建敌机
            // x, y, w, h, img, speed, hp, score, maxI
            var enemy = new Enemy(randomX, -64, 46, 64, enemyImg2, randomSpeed, 5, 500, 6);
            // 记录敌机
            enemies.push(enemy);
        } else {
            // 大型飞机
            // 随机位置
            var randomX = randomNum(0, mapCanvas.width - 110);
            // 随机速度
            var randomSpeed = randomNum(2, 4);

            // 创建敌机
            // x, y, w, h, img, speed, hp, score, maxI
            var enemy = new Enemy(randomX, -164, 110, 164, enemyImg3, randomSpeed, 10, 1000, 10);
            // 记录敌机
            enemies.push(enemy);
        }

    }
    // 移动飞机
    for (var i = 0; i < enemies.length; i++) {
        // 判断飞机是否超出屏幕 或者 是否死亡
        if (enemies[i].y >= mapCanvas.height || enemies[i].isDie) {
            // 删除
            enemies.splice(i, 1);
            i--;
        } else {
            // 移动
            enemies[i].move();
            enemies[i].draw();
        }
    }
}


/*
 * 道具
 */
// 道具图片
var propImg = new Image();
propImg.src = 'img/prop.png';

// 道具类
function Prop(x, y, w, h, type, speed) {
    // 属性
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type; // 道具类型(0: 炸弹, 1: 双排子弹)
    this.speed = speed;
    this.isUsed = false; // 道具是否被使用
}
// 绘制
Prop.prototype.draw = function () {
    context.drawImage(propImg, this.type * this.w, 0, this.w, this.h, this.x, this.y, this.w, this.h);
}

// 移动
Prop.prototype.move = function () {
    this.y += this.speed;
}

// 定义数组, 存储创建出来的道具
var props = [];

// 随机产生道具
function randomProp() {
    // 控制道具产生频率
    var num = randomNum(0, 1000);
    if (num < 15) {
        // 随机位置
        var randomX = randomNum(0, mapCanvas.width - 38);
        // 随机类型
        var randomType = randomNum(0, 1);
        // 随机速度
        var randomSpeed = randomNum(3, 8);
        // 创建道具对象
        // x, y, w, h, type, speed
        var prop = new Prop(randomX, -68, 38, 68, randomType, randomSpeed);
        // 存储到数组
        props.push(prop);
    }
    // 移动道具
    for (var i = 0; i < props.length; i++) {
        // 判断道具是否超出屏幕 或者 被使用
        if (props[i].y >= mapCanvas.height || props[i].isUsed) {
            // 删除
            props.splice(i, 1);
            i--;
        } else {
            // 移动
            props[i].move();
            props[i].draw();
        }
    }
}


/*
 * 碰撞篇
 */
// 检测两个对象是否碰撞
function crash(obj1, obj2) {
    // 两个物体上下左右的位置
    var left1 = obj1.x;
    var right1 = obj1.x + obj1.w;
    var top1 = obj1.y;
    var bottom1 = obj1.y + obj1.h;

    var left2 = obj2.x;
    var right2 = obj2.x + obj2.w;
    var top2 = obj2.y;
    var bottom2 = obj2.y + obj2.h;

    // 判断是否发生碰撞
    if (right1 < left2 || left1 > right2 || bottom1 < top2 || top1 > bottom2) {
        return false;
    } else {
        return true;
    }
}


// 验证
function justify() {
    // 道具与英雄
    propAndHero();
    // 子弹与敌机
    bulletAndEnemy();
    // 英雄与敌机
    heroAndEnemy();
}

var timeout = null;

// 道具与英雄
function propAndHero() {
    for (var i = 0; i < props.length; i++) {
        if (hero.boom) {
            // 如果英雄爆炸, 跳出
            break;
            //					return;
        }
        if (!crash(props[i], hero)) {
            // 如果道具没有碰撞到英雄, 跳过
            continue;
        }
        // 发生碰撞
        if (props[i].type) {
            // 双排子弹
            // 英雄切换子弹类型
            hero.armType = 1;

            // 清除之前的定时器
            clearTimeout(timeout);
            // 双排子弹持续 5秒
            timeout = setTimeout(function () {
                hero.armType = 0;
            }, 5000);
        } else {
            // 炸弹
            // 所有敌机爆炸
            for (var j = 0; j < enemies.length; j++) {
                enemies[j].boom = true;
                // 计分
                scoreSpan.innerHTML = parseInt(scoreSpan.innerText) + enemies[j].score;
            }
        }
        // 修改道具状态
        props[i].isUsed = true;
    }
}
// 子弹与敌机
function bulletAndEnemy() {
    // 遍历敌机
    for (var i = 0; i < enemies.length; i++) {
        // 遍历子弹
        for (var j = 0; j < hero.bullets.length; j++) {
            if (enemies[i].boom) {
                // 如果 当前敌机 爆炸, 跳出
                break;
            }
            if (!crash(enemies[i], hero.bullets[j])) {
                // 如果 没有发生碰撞, 跳过
                continue;
            }
            // 1, 掉血
            enemies[i].hp -= hero.bullets[j].hurt;
            // 2, 判断敌机是否死亡
            if (enemies[i].hp <= 0) {
                enemies[i].boom = true;
                // 计分
                scoreSpan.innerHTML = parseInt(scoreSpan.innerText) + enemies[i].score;
                // 根据不同的 敌机, 播放不同的敌机死亡声音
                switch (enemies[i].score) {
                    case 100:
                        musics[1].play();
                        break;
                    case 500:
                        musics[2].play();
                        break;
                    case 1000:
                        musics[3].play();
                        break;
                    default:
                        break;
                }
            }
            // 3, 子弹消失
            hero.bullets.splice(j, 1);
            j--;
        }
    }
}
// 英雄与敌机
function heroAndEnemy() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].boom) {
            // 如果 敌机已经爆炸, 跳过
            continue;
        }
        if (crash(hero, enemies[i])) {
            hero.boom = true;
        }
    }
}




// 随机数
function randomNum(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}

// 游戏结束
function gameOver() {
    // 暂停背景音乐
    musics[4].pause();
    // 播放游戏结束音乐
    musics[5].play();
    // 修改菜单的分数
    endScoreLi.innerHTML = scoreSpan.innerText;
    // 显示菜单
    menuUl.style.display = 'block';
}

// 重新开始游戏
restartLi.onclick = function () {
    location.reload();
    // 通过产生不同的随机数, 来刷新页面, 保证每次刷新的 url 不同
    //			location.href = location.href + "?id=" + 10000 * Math.random();
}

// 开始游戏
function main() {
    // 清除画布
    context.clearRect(0, 0, mapCanvas.width, mapCanvas.height);

    // 画背景
    background.draw();
    background.move();
    // 画英雄
    hero.draw();
    hero.shot();
    // 画敌机
    randomEnemy();
    // 画道具
    randomProp();
    // 验证
    if (!hero.boom) {
        justify();
    }

    window.requestAnimationFrame(main);
}