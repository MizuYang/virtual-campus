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
          <input type="date">
          時間：
          <!-- 小時 -->
          <select>
            <option value="00">00</option>
            <option :value="time" v-for="time in 23" :key="time">{{ time<10? `0${time}`: time }}</option>
          </select>
          時
          <!-- 分鐘 -->
          <select>
            <option value="00">00</option>
            <option :value="time" v-for="time in 59" :key="time">{{ time<10? `0${time}`: time }}</option>
          </select>
          分
        </div>
      </section>

    </form>
  </div>
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
.form-bg-pink {
  background-color: #FFEEEE;
}
.container {
  max-width: 100%;
}
</style>
