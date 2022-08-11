<template>
  <!-- 考試表格 -->
  <template v-if="examTableCurrentBlock === 'table'">
    <!-- 功能按鈕列表 -->
    <FnBtnListTable></FnBtnListTable>
    <ExamTable></ExamTable>
  </template>

  <!-- 新增考試 -->
  <template v-if="examTableCurrentBlock === 'addExam'">
    <FnBtnListComeBack></FnBtnListComeBack>
    <AddExamWrap></AddExamWrap>
  </template>

  <!-- 索引管理 -->
  <template v-if="examTableCurrentBlock === 'indexManage'">
    <FnBtnListComeBack></FnBtnListComeBack>
    <IndexManage></IndexManage>
  </template>

  <!-- 歷程 -->
  <template v-if="examTableCurrentBlock === 'course'">
    <FnBtnListComeBack></FnBtnListComeBack>
    歷程
  </template>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import { mapState } from 'vuex'
//* 表格
import ExamTable from '@/components/examManage/ExamTable.vue'
import FnBtnListTable from '@/components/examManage/functionBtnList/FnBtnList_Table.vue'
//* 新增考試
import AddExamWrap from '@/components/examManage/addExam/AddExam_Wrap.vue'
//* 索引管理
import IndexManage from '@/components/examManage/IndexManage.vue'
import FnBtnListComeBack from '@/components/examManage/functionBtnList/FnBtnList_ComeBack.vue'
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
    FnBtnListTable,
    ExamTable,
    AddExamWrap,
    IndexManage,
    FnBtnListComeBack
  },

  computed: {
    ...mapState(['examTableCurrentBlock'])
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
