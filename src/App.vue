<template>
    <!-- 頁面導覽 - 麵包屑 -->
    <PagesNav></PagesNav>
  <router-view />
</template>

<script>
import PagesNav from './components/layout/navbar/PagesNav.vue'
export default {
  components: {
    PagesNav
  }
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
