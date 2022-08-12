<template>
  <div class="container border">

    <!-- 選擇課程 -->
    <div class="row border-bottom">
      <div class="col-3">
        <p class="fs-5 text-center my-auto">選擇課程</p>
      </div>
      <div class="col-9 bg-pink-light">
        <select>
          <option value="">請選擇課程</option>
        </select>
      </div>
    </div>

    <!-- 選擇項目 -->
    <div class="row">
      <div class="col-3">
        <p class="fs-5 text-center my-auto">選擇項目</p>
      </div>
      <div class="col-9 bg-pink-light">
        <p class="mb-0">系統查無資料！</p>
      </div>
    </div>

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

<style lang='scss' scope></style>
