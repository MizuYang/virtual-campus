<template>

  <!-- 學習歷程 -->
  <template v-if="courseCurrentBlock==='learnCourse'">
    <CourseLearnCourse></CourseLearnCourse>
  </template>

  <!-- 登入紀錄 -->
  <template v-if="courseCurrentBlock==='logonRecord'">
    <CourseLogonRecord></CourseLogonRecord>
  </template>

  <!-- 討論 -->
  <template v-if="courseCurrentBlock==='discuss'">
    <CourseDiscuss></CourseDiscuss>
  </template>

  <!-- 檔案 -->
  <template v-if="courseCurrentBlock==='file'">
    <CourseFile></CourseFile>
  </template>

  <!-- 作業 -->
  <template v-if="courseCurrentBlock==='homework'">
    <CourseHomework></CourseHomework>
  </template>

  <!-- 考試 -->
  <template v-if="courseCurrentBlock==='exam'">
    <CourseExam></CourseExam>
  </template>

  <!-- 點名 -->
  <template v-if="courseCurrentBlock==='rollCall'">
    <CourseRollCall></CourseRollCall>
  </template>

  <!-- 公告 -->
  <template v-if="courseCurrentBlock==='post'">
    <CoursePost></CoursePost>
  </template>

</template>

<script>
import { mapState } from 'vuex'
//* 歷程 顯示區塊
import CourseLearnCourse from '@/components/examManage/course/course-items/Course_LearnCourse.vue'
import CourseLogonRecord from '@/components/examManage/course/course-items/Course_LogonRecord.vue'
import CourseDiscuss from '@/components/examManage/course/course-items/Course_Discuss.vue'
import CourseFile from '@/components/examManage/course/course-items/Course_File.vue'
import CourseHomework from '@/components/examManage/course/course-items/Course_Homework.vue'
import CourseExam from '@/components/examManage/course/course-items/Course_Exam.vue'
import CourseRollCall from '@/components/examManage/course/course-items/Course_RollCall.vue'
import CoursePost from '@/components/examManage/course/course-items/Course_Post.vue'
export default {
  components: {
    CourseLearnCourse,
    CourseLogonRecord,
    CourseDiscuss,
    CourseFile,
    CourseHomework,
    CourseExam,
    CourseRollCall,
    CoursePost
  },

  computed: {
    ...mapState(['courseCurrentBlock'])
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
