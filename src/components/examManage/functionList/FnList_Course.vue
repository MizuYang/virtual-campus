<template>
  <ul class="d-flex bg-blue-light border list-unstyled">
    <li class="hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" @click.prevent="backPage">
        <span>回考試列表</span>
      </a>
    </li>
    <li class="hover-border-bottom" v-for="(fnBtn, enFnBtn, index) in fnBtnList" :key="`fnBtn${index}`">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" :class="{currentBlock: enFnBtn===courseCurrentBlock}" @click="$store.commit('COURSE_BLOCK', enFnBtn)">
        <span>{{ fnBtn }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },

  computed: {
    ...mapState(['examTableCurrentBlock', 'addExamCurrentBlock', 'courseCurrentBlock'])
  },

  data () {
    return {
      fnBtnList: {
        learnCourse: '學習歷程',
        logonRecord: '登入紀錄',
        discuss: '討論',
        file: '檔案',
        homework: '作業',
        exam: '考試',
        rollCall: '點名',
        post: '公告'
      }
    }
  },

  watch: {
  },

  methods: {
    backPage () {
      let mutation = 'EXAM_MANAGE_BLOCK'
      //* 若選擇線上考試 or 紙本考試，上一頁則返回 "新增考試"
      if (this.addExamCurrentBlock !== 'table') {
        mutation = 'ADD_EXAM_BLOCK'
      }
      this.$store.commit(mutation, 'table')
    }
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope>
.currentBlock {
  background-color: #FFEEEE;
}
</style>
