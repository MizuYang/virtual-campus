<template>
  <ul class="d-flex bg-blue-light border list-unstyled">
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" @click.prevent="$store.commit('CURRENT_BLOCK', 'table')">
        <span>回考試列表</span>
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
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope>
@import '@/assets/stylesheets/helpers/pages/examManage/FnBtnList.scss'
</style>
