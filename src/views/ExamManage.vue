<template>
  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
// @ is an alias to /src
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
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
