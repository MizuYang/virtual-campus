<template>
  <!-- 考試表格 -->
  <template v-if="examTableCurrentBlock === 'table'">
    <!-- 功能按鈕列表 -->
    <FnListTable></FnListTable>
    <ExamTable></ExamTable>
  </template>

  <!-- 新增考試 -->
  <template v-if="examTableCurrentBlock === 'addExam'">
    <FnListComeBack></FnListComeBack>
    <AddExamWrap></AddExamWrap>
  </template>

  <!-- 索引管理 -->
  <template v-if="examTableCurrentBlock === 'indexManage'">
    <FnListComeBack></FnListComeBack>
    <IndexManage></IndexManage>
  </template>

  <!-- 歷程 -->
  <template v-if="examTableCurrentBlock === 'course'">
    <FnListCourse></FnListCourse>
    <FnListOrder></FnListOrder>
    <CourseWrap></CourseWrap>
  </template>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import { mapState } from 'vuex'
//* 表格
import ExamTable from '@/components/examManage/ExamTable.vue'
//* 新增考試
import AddExamWrap from '@/components/examManage/addExam/AddExam_Wrap.vue'
//* 索引管理
import IndexManage from '@/components/examManage/IndexManage.vue'
//* 歷程
import CourseWrap from '@/components/examManage/course/Course_Wrap.vue'
//* 選單
import FnListCourse from '@/components/examManage/functionList/FnList_Course.vue'
import FnListOrder from '@/components/examManage/functionList/FnList_Order.vue'
import FnListTable from '@/components/examManage/functionList/FnList_Table.vue'
import FnListComeBack from '@/components/examManage/functionList/FnList_ComeBack.vue'
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
    ExamTable,
    AddExamWrap,
    IndexManage,
    CourseWrap,
    FnListTable,
    FnListCourse,
    FnListOrder,
    FnListComeBack
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
