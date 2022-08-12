<template>
  <!-- 線上考試 - 選單 -->
  <AEAnsOnlineMenu></AEAnsOnlineMenu>

  <!-- 選單項目各自元件 -->
  <!-- 考試編輯 -->
  <template v-if="aEAnsOnlineCurrentMenu==='examEdit'">
    <ExamEdit></ExamEdit>
  </template>

  <!-- 匯入試卷 -->
  <template v-if="aEAnsOnlineCurrentMenu==='importExamPaper'">
    <ImportExamPaper></ImportExamPaper>
  </template>

  <!-- 試卷設定 -->
  <template v-if="aEAnsOnlineCurrentMenu==='setExamPaper'">
    <SetExamPaper></SetExamPaper>
  </template>

  <!-- 試卷內容 -->
  <template v-if="aEAnsOnlineCurrentMenu==='examPaperContent'">
    <ExamPaperContent></ExamPaperContent>
  </template>

  <!-- 預覽試卷 -->
  <template v-if="aEAnsOnlineCurrentMenu==='previewExamPaper'">
    <PreviewExamPaper></PreviewExamPaper>
  </template>

</template>

<script>
import { mapState } from 'vuex'
//* 線上考試 - 選單
import AEAnsOnlineMenu from './menu/AE_AnsOnline_Menu.vue'
//* 選單項目各自元件
import ExamEdit from './menu-items/ExamEdit.vue'
import ExamPaperContent from './menu-items/ExamPaperContent.vue'
import ImportExamPaper from './menu-items/ImportExamPaper.vue'
import PreviewExamPaper from './menu-items/PreviewExamPaper.vue'
import SetExamPaper from './menu-items/SetExamPaper.vue'
export default {
  components: {
    AEAnsOnlineMenu,
    ExamEdit,
    ExamPaperContent,
    ImportExamPaper,
    PreviewExamPaper,
    SetExamPaper
  },

  computed: {
    ...mapState(['aEAnsOnlineCurrentMenu'])
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

<style lang='scss' scope></style>
