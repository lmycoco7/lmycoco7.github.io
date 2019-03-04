<template>
  <div class="changename">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">编辑地址</span>
      <span class="edit" @click="show=!show">
          <span v-if="show">编辑</span>
          <span v-else>完成</span>
      </span>
      
    </div>
    <router-link to='/profile/info/address/add'>
      <div class="address">
        <div class="addsite">
          <span>新增地址</span>
          <span data-v-0fc4ab7a class="arrow">
            <svg data-v-0fc4ab7a fill="#fff" class="arrow-svg">
              <use
                data-v-0fc4ab7a
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  id="arrow-right"
                  class="icon"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                    class="selected"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "addaddress1",
  data() {
    return {
        show:true
    };
  },
  methods:{
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>
<style scoped>
.my_header {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  text-align: center;
  display: flex;
  top: 0;
  left: 0;
}
.el-icon-arrow-left {
  margin-left: 0.05rem;
  font-size: 0.25rem;
  color: #fff;
  float: left;
  line-height: 0.5rem;
}
.title_text {
  font-size: 0.2rem;
  line-height: 0.5rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  position: absolute;
  left: 40%;
}
.edit {
  font-size: 0.15rem;
  line-height: 0.5rem;
  color: #fff;
  text-align: center;
  position: absolute;
  right: 0.1rem;
}
.address {
  border-top: 1px solid #d9d9d9;
  margin-top: 0.1rem;
}
.address .addsite {
  font-size: 0.15rem;
  background-color: #fff;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.06rem 0.1rem;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 0.1rem;
}
.arrow {
  display: inline-block;
}
.arrow-svg {
  width: 0.156rem;
  height: 0.328rem;
}
svg {
  fill: rgb(216, 216, 216);
}
a{
    color: #333;
}
</style>
