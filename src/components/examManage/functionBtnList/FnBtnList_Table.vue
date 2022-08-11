<template>
  <ul class="d-flex bg-blue-light border list-unstyled">
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" @click.prevent="$store.commit('EXAM_MANAGE_BLOCK', 'addExam')">
        <span>新增考試</span>
      </a>
    </li>
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1">
        <span>命題紙下載</span>
      </a>
    </li>
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" @click.prevent="$store.commit('EXAM_MANAGE_BLOCK', 'indexManage')">
        <span>索引管理</span>
      </a>
    </li>
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1">
        <span>匯入英文上機期中考</span>
      </a>
    </li>
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1">
        <span>匯入英文上機期末考</span>
      </a>
    </li>
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" @click.prevent="$store.commit('EXAM_MANAGE_BLOCK', 'course')">
        <span>歷程</span>
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },

  watch: {
  },

  methods: {
    // changeBlock (val) {
    //   this.$store.commit('EXAM_MANAGE_BLOCK', val)
    // }
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope>
@import '@/assets/stylesheets/helpers/pages/examManage/FnBtnList.scss'
</style>
