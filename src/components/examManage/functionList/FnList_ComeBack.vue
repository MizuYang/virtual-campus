<template>
  <ul class="d-flex bg-blue-light border list-unstyled">
    <li class="border-dotted-end hover-border-bottom">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1" @click.prevent="backPage">
        <span>回考試列表</span>
      </a>
    </li>
    <li class="border-dotted-end hover-border-bottom" v-if="addExamCurrentBlock==='answerOnline'">
      <a href="javascript:;" class="text-decoration-none d-inline-block px-4 pe-1 py-1">
        <span>成績輸入</span>
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
    ...mapState(['examTableCurrentBlock', 'addExamCurrentBlock', 'aEAnsOnlineCurrentMenu'])
  },

  data () {
    return {
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

        const isAnswerOnline = this.addExamCurrentBlock === 'answerOnline'
        const isExamEdit = this.aEAnsOnlineCurrentMenu === 'examEdit'
        //* 假設點線上作答，且選擇 "考試編輯" 以外的項目，按上一頁則將區塊改回 "考試編輯"
        if (isAnswerOnline && !isExamEdit) {
          this.$store.commit('AE_EXAM_CURRENTBLOCK', 'examEdit')
        }
      }
      this.$store.commit(mutation, 'table')
    }
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope>
@import '@/assets/stylesheets/helpers/pages/examManage/FnBtnList.scss'
</style>
