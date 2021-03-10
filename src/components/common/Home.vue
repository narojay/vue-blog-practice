<template>
  <el-container>
    <el-aside :width="width">
      <el-button type="primary" @click="tt">主要</el-button>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
 
<script>
export default {
  data() {
    return {
      width: "200px",
      num: 200,
    };
  },
  methods: {
    tt: function () {
      this.num = 50 == this.num ? 200 : 50;
      this.width = this.num + "px";
    },
  },
};
</script>
<style>
#app {
  /* 去除边框*/
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/*  */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: rgb(143, 29, 29);
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 100vh;
  overflow: hidden;

  /* 
   vh就是当前屏幕可见高度的1%，也就是说

height:100vh == height:100%;

但是有个好处是当元素没有内容时候，设置height:100%该元素不会被撑开，

但是设置height:100vh，该元素会被撑开屏幕高度一致。*/
}

.el-main {
  background-color: #e9eef3;
}
</style>