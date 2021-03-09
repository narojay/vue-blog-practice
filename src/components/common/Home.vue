<template>
  <el-container>
    <el-aside :width="width">
      <el-button type="primary" @click="tt">主要按钮</el-button>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
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
      this.num = 10 == this.num ? 200 : 10;
      this.width = this.num + "px";
    },
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 100vh;
}

.el-main {
  background-color: #e9eef3;
}
</style>