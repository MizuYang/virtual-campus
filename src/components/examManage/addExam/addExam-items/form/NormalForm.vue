<template>
  <div class="container">
    <form>

      <!-- 考試類別 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">考試類別</h3>
        <div class="col-10 form-bg-pink py-2">
          <select>
            <option value="">平時考</option>
          </select>
        </div>
      </section>

      <!-- 索引 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">索引</h3>
        <div class="col-10 form-bg-pink py-2">
          <select>
            <option value="">新增索引</option>
          </select>
        </div>
      </section>

      <!-- 考試標題 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">考試標題</h3>
        <div class="col-10 form-bg-pink py-2">
          <input type="text" size="70">
        </div>
      </section>

      <!-- 考試 說明 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">考試 說明</h3>
        <div class="col-10 form-bg-pink py-2">
          <textarea name="" id="" cols="70" rows="10"></textarea>
        </div>
      </section>

      <!-- 公開日期 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">公開日期</h3>
        <div class="col-10 form-bg-pink py-2">
          <DateNormal></DateNormal>
        </div>
      </section>

    </form>
  </div>
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
.form-bg-pink {
  background-color: #FFEEEE;
}
.container {
  max-width: 100%;
}
</style>
