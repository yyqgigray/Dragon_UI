<template>
<el-container>
  <el-header>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">公司介绍</el-menu-item>
      <el-menu-item index="2">案例展示</el-menu-item>
      <el-menu-item index="3"><router-link :to="{ name: 'login'}">登录</router-link></el-menu-item>
    </el-menu>

  </el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
      return{

      };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>