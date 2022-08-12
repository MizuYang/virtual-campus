<template>
  <!-- 考試方式 (只在線上作答顯示) -->
  <section class="row border">
    <h3 class="col-2 fs-5 text-center my-auto">考試方式</h3>
    <div class="col-10 form-bg-pink">
      <!-- 成績選擇 -->
      <div class="d-flex border-bottom mb-1">
        <p class="bg-light fs-5 px-4 my-auto me-2">成績選擇</p>
        <select>
          <option value="">取平均成績</option>
        </select>
      </div>

      <!-- 考試次數 -->
      <div class="d-flex border-bottom mb-1">
        <label for="examCount" class="bg-light fs-5 px-4 my-auto me-2">考試次數</label>
        <input type="text" id="examCount" size="5">
        <i class="text-gray my-auto ms-2">設定 0 次，表示不限作答次數</i>
      </div>

      <!-- 考試時間 -->
      <div class="d-flex border-bottom align-items-center mb-1">
        <p class="bg-light fs-5 px-4 my-auto me-2">考試時間</p>
        <input type="number" size="5" class="me-1">時
        <input type="number" size="5" class="mx-1">分
      </div>

      <!-- 答案公佈日期 -->
      <div class="d-flex border-bottom mb-5">
        <p class="bg-light fs-5 my-auto me-2 px-4 py-3">答案公佈日期</p>
        <div class="d-flex flex-column justify-content-center">
          <div>
            <input type="radio" id="radio1" name="radio">
            <label for="radio1">公佈答案</label>
            <input type="radio" class="ms-3" id="radio2" name="radio">
            <label for="radio2">不公佈答案</label>
          </div>
          <div>
            <DateNormal></DateNormal>
            <i class="text-gray ms-2">未設定日期時，表示交卷後立即公佈答案</i>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import DateNormal from '@/components/utils/date/DateNormal.vue'
export default {
  components: {
    DateNormal
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
.bg-light {
  background-color: #fff !important;
}
input[type='number']{
    width: 45px;
}
</style>
