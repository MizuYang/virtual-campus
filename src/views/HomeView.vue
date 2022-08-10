<template>
  <HelloWorld></HelloWorld>
  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
    HelloWorld
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
