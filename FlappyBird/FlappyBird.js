// 获取页面元素
var headDiv = document.getElementById("head");
var startMenu = document.getElementById("startMenu");
var startBtn = document.querySelector("#startMenu img");
var endMenu = document.getElementById("endMenu");
var curScore = document.getElementById("currentScore");
var bestScore = document.getElementById("bestScore");
var bird = document.getElementById("bird");
var scoreDiv = document.getElementById("score");
var pipeUL = document.getElementById("pipeUL");
var gameMus = document.getElementById("gameMusic");
var bulletMus = document.getElementById("bulletMusic");
var overMus = document.getElementById("overMusic");
var gameDiv = document.getElementById("game");


var birdDownTimer, birdUpTimer;
localStorage.setItem("bestScore1",undefined);

// 开始按钮关联点击事件
startBtn.onclick = function(e) {
	var even = e || window.event;
	// 阻止事件传播
	even.stopPropagation();
	// 1, 背景音乐
	gameMus.loop = "loop";
	gameMus.play();
	// 2, 隐藏标题
	headDiv.style.display = "none";
	// 3, 隐藏开始菜单
	startMenu.style.display = "none";
	// 4, 出现分数
	scoreDiv.style.display = "block";
	// 5, 生成管道
	setInterval(createPipe, 3000);
	// 6, 出现鸟
	bird.style.display = "block";
	// 7, 小鸟下落
	birdDownTimer = setInterval(birdDown, 30);
	// 8, 给 gameDiv 关联点击事件
	gameDiv.onclick = gameClick;
	// 9, 碰撞检测
	setInterval(function() {
		// 获取 li
		var lis = pipeUL.getElementsByTagName("li");
		for (var i = 0; i < lis.length; i++) {
			checkP(lis[i].firstChild);
			checkP(lis[i].lastChild);
		}
	}, 16);
}
// 定义函数碰撞检测
function checkP(pipe) {
	// 1, 获取鸟的位置
	var birdL = bird.offsetLeft;
	var birdR = birdL + bird.clientWidth;
	var birdT = bird.offsetTop;
	var birdB = birdT + bird.clientHeight;
	
	// 2, 获取 pipe 的位置
	var pipeL = pipe.offsetParent.offsetLeft;
	var pipeR = pipeL + pipe.clientWidth;
	var pipeT = pipe.offsetTop;
	var pipeB = pipeT + pipe.clientHeight;
	
	// !没有碰在一起
	if (!(birdR < pipeL || birdL > pipeR || birdB < pipeT || birdT > pipeB)) {
		// 游戏结束
		gameOver();
	}
}


// 定义函数, 创建单个管道
function createPipe() {
	/*
	 * 一,  创建管道
	 */
	// 创建 li
	var li = document.createElement("li");
	li.className = "pipe";
	li.style.left = pipeUL.clientWidth + "px";
	pipeUL.appendChild(li);
	
	// 小鸟通过的洞口高度
	var doorH = 123;
	// 随机上管道高度[60, 423 - 123 - 60]
	var topH = Math.floor(Math.random() * (li.clientHeight - doorH - 60 - 60 + 1) + 60);
	// 计算下管道高度
	var botH = li.clientHeight - topH - doorH;
	
	// 创建上管道
	var topDiv = document.createElement("div");
	topDiv.className = "pipe_top";
	topDiv.style.height = topH + "px";
	li.appendChild(topDiv);
	
	// 创建下管道
	var botDiv = document.createElement("div");
	botDiv.className = "pipe_bottom";
	botDiv.style.height = botH + "px";
	li.appendChild(botDiv);
	
	/*
	 * 二, 移动管道
	 */
	var maxL = pipeUL.clientWidth;
	var pipeTimer = setInterval(function() {
		maxL--;
		li.style.left = maxL + "px";
		// 判断得分
		if (maxL == 0) {
			// 得分
			changeScore();
		}
		// 清除计时器
		if (maxL <= -li.clientWidth) {
			clearInterval(pipeTimer);
			// 删除 li
			pipeUL.removeChild(li);
		}
	}, 16);
}
var num = 0;
// 定义函数, 处理分数的变化
function changeScore() {
	num++;
	// 清除内部的内容
	scoreDiv.innerHTML = "";
	// 根据 num 生成对应的img
	if (num < 10) {
		// 一个 img
		var img = document.createElement("img");
		img.src = "img/" + num + ".jpg";
		scoreDiv.appendChild(img);
	} else if(num < 100) {
		// 两个 img
		// 十位
		var imgS = document.createElement("img");
		imgS.src = "img/" + Math.floor(num / 10) + ".jpg";
		scoreDiv.appendChild(imgS);
		// 个位
		var imgG = document.createElement("img");
		imgG.src = "img/" + (num % 10) + ".jpg";;
		scoreDiv.appendChild(imgG);
	} else if(num < 1000) {
		// 三个 img
		// 百位
		// 十位
		// 个位
	}
}

var speed = 0;
// 定义函数, 处理小鸟下落
function birdDown() {
	// 1, 修改 src
	bird.src = "img/down_bird.png";
	// 2, 修改 top值
	speed += 0.5;
	if (speed >= 8) {
		speed = 8;// 设置最大速度
	}
	bird.style.top = bird.offsetTop + speed + "px";
	
	// 3, 判断是否接触地面
	if (bird.offsetTop + bird.clientHeight >= 423) {
		// 游戏结束
		gameOver();
	}
}
// 定义函数, 处理小鸟上升
function birdUp() {
	// 1, 修改 src
	bird.src = "img/up_bird.png";
	// 2, 修改 top
	speed -= 0.5;
	// 当小鸟上升速度小于 0 时
	if (speed < 0) {
		// 不能继续上升
		clearInterval(birdUpTimer);
		// 小鸟开始下落
		speed = 0;
		birdDownTimer = setInterval(birdDown, 30);
	}
	bird.style.top = bird.offsetTop - speed + "px";
	// 3, 判断是否触顶
	if (bird.offsetTop <= 0) {
		// 游戏结束
		gameOver();
	}
}
// gameDiv 的点击事件
function gameClick() {
	// 1, 播放音效
	bulletMus.play();
	// 2, 停止下落
	clearInterval(birdDownTimer);
	// 3, 开始上升
	clearInterval(birdUpTimer);
	speed = 8;
	birdUpTimer = setInterval(birdUp, 30);
}

// 游戏结束
function gameOver() {
	// 1, 播放游戏结束的音乐
	overMus.play();
	// 2, 停止游戏背景音乐
	gameMus.pause();
	// 3, 清除页面所有计时器
	var newTimer = setInterval(function() {}, 1);
	for (var i = 1; i <= newTimer; i++) {
		clearInterval(i);
	}
	// 4, 清除 点击事件
	gameDiv.onclick = null;
	// 5, 显示结束菜单
	endMenu.style.display = "block";
	// 6, 处理分数
	curScore.innerHTML = num;
	console.log(localStorage.bestScore1);
	if (localStorage.bestScore1 = undefined) {
		
		localStorage.bestScore1 = num;
		bestScore.innerHTML = localStorage.bestScore1;
	} else  if(num > localStorage.bestScore1 ){
		localStorage.bestScore1 = num ;
		bestScore.innerHTML = localStorage.bestScore1;
	}else if(localStorage.bestScore1 >= num){
		
	}

	
	
}

console.log(localStorage.bestScore1);


