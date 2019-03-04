<template>
  <div class="take">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">教我拍大片</span>
    </div>
    <div class="markdown">
      <p> 
          <img src="../../../../static/img/photo1.png" alt="">
          ## 1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。
          <br>
          <br>
          <br>
          <img src="../../../../static/img/photo2.png" alt="">
           ## 2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。
           <br>
          <br>
          <br>
          <img src="../../../../static/img/photo3.png" alt="">
            ## 3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。
          <br>
          <br>
          <br>
          <img src="../../../../static/img/photo4.png" alt="">
             ## 4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~
          <br>
          <br>
          <br>
          <img src="../../../../static/img/photo5.png" alt="">
             ## 5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。
          <br>
          <br>
          <br>
          <img src="../../../../static/img/photo6.png" alt="">
             ## 6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。
          </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "redexplain1",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.take{
    z-index: 300;
  background-color: #fff;
}
.my_header {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  text-align: center;
  position: relative;
}
.el-icon-arrow-left {
  margin-left: 0.05rem;
  font-size: 0.25rem;
  color: #fff;
  float: left;
  line-height: 0.5rem;
}
.my_header span {
  font-size: 0.2rem;
  line-height: 0.5rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  position: relative;
  left: -0.12rem;
}
.markdown {
  line-height: 0.25rem;
    font-size: .155rem;
    color: #666;
    padding: 0 .1325rem ;
}

p{
    color: #666;
    line-height: 0.225rem;
} 
.markdown p img{
    width: 100%;
}
</style>
