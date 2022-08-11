<template>
  <!-- 考試表格 -->
  <template v-if="currentBlock === 'table'">
    <!-- 功能按鈕列表 -->
    <FnBtnListTable></FnBtnListTable>
    <ExamTable></ExamTable>
  </template>

  <!-- 新增考試 -->
  <template v-if="currentBlock === 'addExam'">
    <FnBtnListComeBack></FnBtnListComeBack>
  </template>

  <!-- 索引管理 -->
  <template v-if="currentBlock === 'indexManage'">
    索引管理
  </template>

  <!-- 歷程 -->
  <template v-if="currentBlock === 'course'">
    歷程
  </template>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import ExamTable from '@/components/examManage/ExamTable.vue'
import FnBtnListTable from '@/components/examManage/functionBtnList/FnBtnList_Table.vue'
import FnBtnListComeBack from '@/components/examManage/functionBtnList/FnBtnList_ComeBack.vue'
import { mapState } from 'vuex'
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
    FnBtnListTable,
    ExamTable,
    FnBtnListComeBack
  },

  computed: {
    ...mapState(['currentBlock'])
  },

  data () {
    return {
      showBlockList: {

      },
      isLoading: false
    }
  },

  mounted () {
  }
}
</script>
