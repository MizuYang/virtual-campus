<template>

  <!-- 表格: 選擇線上作答 or 紙本考試 -->
  <template v-if="addExamCurrentBlock === 'table'">
    <AddExamTable></AddExamTable>
  </template>

  <!-- 線上作答 -->
  <template v-if="addExamCurrentBlock === 'answerOnline'">
    <AddExamAnswerOnline></AddExamAnswerOnline>
  </template>

  <!-- 紙本考試 -->
    <template v-if="addExamCurrentBlock === 'paperTest'">
    <AddExamPaperTest></AddExamPaperTest>
  </template>

</template>

<script>
import { mapState } from 'vuex'
import AddExamTable from '@/components/examManage/addExam/addExam-items/AddExam_Table.vue'
import AddExamAnswerOnline from '@/components/examManage/addExam/addExam-items/AddExam_AnswerOnline.vue'
import AddExamPaperTest from '@/components/examManage/addExam/addExam-items/AddExam_PaperTest.vue'
export default {
  components: {
    AddExamTable,
    AddExamAnswerOnline,
    AddExamPaperTest
  },

  computed: {
    ...mapState(['addExamCurrentBlock'])
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
</style>
