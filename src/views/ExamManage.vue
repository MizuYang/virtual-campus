<template>
  <!-- 功能按鈕列表 -->
  <FunctionBtnList></FunctionBtnList>

  <!-- 考試表格 -->
  <ExamTable></ExamTable>
{{examManage_showBlock}}
  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import FunctionBtnList from '@/components/examManage/FunctionBtnList.vue'
import ExamTable from '@/components/examManage/ExamTable.vue'
import { mapState } from 'vuex'
//! import emitter from '@/utils/emitter.js'
export default {
  components: {
    FunctionBtnList,
    ExamTable
  },

  computed: {
    ...mapState(['examManage_showBlock'])
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
