<template>
  <nav>
    <button type="button" class="btn border px-4 py-3" :class="{'btn-secondary': aEAnsOnlineCurrentMenu!==enMenuBtn}" v-for="(menuBtn,enMenuBtn, index) in ansOnlineMenuList" :key="`menuBtn${index}`" @click="$store.commit('AE_EXAM_CURRENTBLOCK', enMenuBtn)">{{ menuBtn }}</button>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },

  computed: {
    ...mapState(['aEAnsOnlineCurrentMenu'])
  },

  data () {
    return {
      ansOnlineMenuList: {
        examEdit: '考試編輯',
        importExamPaper: '匯入試卷',
        setExamPaper: '試卷設定',
        examPaperContent: '試卷內容',
        previewExamPaper: '預覽試卷'
      }
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
//* 清除 BS 按鈕 focus 的樣式
.btn-check:focus + .btn, .btn:focus {
  box-shadow: none;
}
</style>
