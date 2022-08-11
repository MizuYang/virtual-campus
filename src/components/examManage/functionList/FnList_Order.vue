<template>
  <div class="bg-blue-light border p-2">
    排序：
    <select>
      <option :value="list" v-for="list in selectList[courseCurrentBlock]" :key="list">
        {{ list }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },

  computed: {
    ...mapState(['courseCurrentBlock'])
  },

  data () {
    return {
      selectList: {
        learnCourse: ['系級', '學號', '姓名', '檔案(下載)', '作業(缺繳)', '考試(補考)', '出席異常', '未讀取', '分組'],
        logonRecord: ['系級', '學號', '姓名', '使用時數', '最後登入系統時間', '排名', '分組'],
        discuss: ['系級', '學號', '姓名', '分組'],
        file: ['系級', '學號', '姓名', '已下載', '未下載', '分組'],
        homework: ['系級', '學號', '姓名', '分組'],
        exam: ['系級', '學號', '姓名', '分組'],
        rollCall: ['系級', '學號', '姓名', '分組'],
        post: ['系級', '學號', '姓名', '讀取', '未讀取', '分組']
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
@import "@/assets/stylesheets/helpers/pages/examManage/FnBtnList.scss";
</style>
