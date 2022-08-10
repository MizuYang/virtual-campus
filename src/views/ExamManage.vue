<template>
  <FunctionBtnList></FunctionBtnList>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import FunctionBtnList from '@/components/examManage/FunctionBtnList.vue'
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
    FunctionBtnList
  },

  data () {
    return {
      isLoading: false
    }
  },

  mounted () {
  }
}
</script>
