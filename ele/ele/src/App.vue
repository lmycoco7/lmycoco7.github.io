<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App"
};

window.onbeforeunload = function() {
  localStorage.removeItem("userId");
  localStorage.removeItem("isLogin");
};
</script> 

<style>
html,
body {
  background-color: #f5f5f5;
}
#nprogress .bar {
  background: greenyellow !important; 
}
</style>
