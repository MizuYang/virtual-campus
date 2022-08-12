<template>
  <table class="table table-bordered w-50">

    <thead class="bg-secondary text-center border-bottom-styleClear">
      <tr>
        <th>
          <a href="javascript:;" class="h4 text-decoration-none d-block m-0 px-5 py-3" @click.prevent="$store.commit('ADD_EXAM_BLOCK', 'answerOnline')">線上作答</a>
        </th>
        <th>
          <a href="javascript:;" class="h4 text-decoration-none d-block m-0 px-5 py-3" @click.prevent="$store.commit('ADD_EXAM_BLOCK', 'paperTest')">紙本考試</a>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <p>
            線上出題，編輯作業卷題目，完成之後學生於開始日期到達後直接於線上作答，成績在交卷時即計算完成。
            <br />
            問答題的部份則由老師於考試結束後透過閱卷批改成績。
          </p>
        </td>
        <td>
          <p>
            此次考試為一般紙本考試。
              <br />
            系統只提供此份考試的描述給予學生了解考試的內容與限制。
          </p>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  components: {
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
@import '@/assets/stylesheets/helpers/pages/examManage/addExam/_AddExamTable.scss'
</style>
