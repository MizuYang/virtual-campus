<template>
  <div class="container">
    <form>

      <!-- 考試類別 -->
      <section class="row border">
        <h3 class="col-2 fs-5 required my-auto">考試類別</h3>
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
        <h3 class="col-2 fs-5 required my-auto">考試標題</h3>
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
          <i class="text-gray">在公開日期未到之前，不會顯示在學生的考試列表之中，未設定表示立即公開</i>
        </div>
      </section>

      <!-- 起始日期 -->
      <section class="row border">
        <h3 class="col-2 fs-5 required my-auto">起始日期</h3>
        <div class="col-10 form-bg-pink py-2">
          <DateNormal></DateNormal>
          <i class="text-gray">當起始日期已到時，學生才能開始考試，不能再修改試卷</i>
        </div>
      </section>

      <!-- 結束日期 -->
      <section class="row border">
        <h3 class="col-2 fs-5 required my-auto">結束日期</h3>
        <div class="col-10 form-bg-pink py-2">
          <DateNormal></DateNormal>
        </div>
      </section>

      <!-- 成績 公佈日期 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">成績 公佈日期</h3>
        <div class="col-10 form-bg-pink py-2">
          <DateNormal></DateNormal>
          <i class="text-gray">不填[公佈成績日期]代表成績不予公佈</i>
        </div>
      </section>

      <!-- 補考 起始日期 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">補考 起始日期</h3>
        <div class="col-10 form-bg-pink py-2">
          <DateNormal></DateNormal>
        </div>
      </section>

      <!-- 補考 結束日期 -->
      <section class="row border">
        <h3 class="col-2  fs-5 my-auto">補考 結束日期</h3>
        <div class="col-10 form-bg-pink py-2">
          <DateNormal></DateNormal>
        </div>
      </section>

      <!-- 課程進度 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">課程進度</h3>
        <div class="col-10 form-bg-pink py-2">
          <select class="form-control">
            <option value="">(不設定)</option>
          </select>
        </div>
      </section>

      <!-- 考試方式 //! 線上作答顯示，紙本考試不顯示-->

      <!-- 考試 檔案 -->
      <section class="row border">
        <h3 class="col-2 fs-5 my-auto">考試 檔案</h3>
        <div class="col-10 form-bg-pink py-2">
          <!-- 檔案敘述 -->
          <div class="d-flex align-items-center">
            <label for="fileDescription" class="me-2">檔案敘述</label>
            <input type="text" id="fileDescription">
          </div>
          <!-- 上傳檔案 -->
          <div class="d-flex align-items-center">
            <label for="uploadFile" class="me-2">上傳檔案</label>
            <input type="file" class="border" id="uploadFile">
            <button type="button" class="btn btn-secondary border-dark">上傳</button>
          </div>
          <!-- 上傳檔案相關限制 -->
          <div>
            <i class="text-gray">(上傳檔案大小請在 10MB 以下) 檔案名稱長度限制為 200 字</i>
            <br />
            <div class="d-flex align-items-end">
              <a href="javascript:;" class="text-red me-5">課程總使用容量</a>
              <!-- 進度條 -->
              <span class="progress-wrap">
                <span class="progress-finish"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 表單尾 -->
      <section class="d-flex justify-content-between border">
        <h3 class="fs-5 text-gray required my-auto">為必填欄位</h3>
        <div class="py-2">
          <button type="button" class="btn btn-secondary border-dark me-2">儲存</button>
          <button type="button" class="btn btn-secondary border-dark">取消</button>
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
.container {
  max-width: 100%;
}
  .form-bg-pink {
    background-color: #FFEEEE;
  }
  .text-gray {
    color: #777777;
  }
  .text-red {
    color: #CC3300;
  }
//* 進度條
.progress-wrap {
  position: relative;
  width: 200px;
  height: 25px;
  display: inline-block;
  border: 1px solid #008000;
}
//* 進度條中的顏色
.progress-finish {
  position: absolute;
  background-color: #008000;
  width: 20%; //* 不可超過 100%
  height: 23px;
}
//* 必填符號
.required::before {
  content: "*";
  color: red;
}
</style>
