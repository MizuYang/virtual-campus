<template>
<main>
  <section class="container">
    <div class="d-flex">
      <a class="foldBtn" href="javascript:;" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" @click="hideTable"
        >－</a>
      <h2 class="fs-5 my-auto ms-3 py-1 px-2">--未設定--</h2>
    </div>
    <table class="table table-hover text-center align-middle my-3" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-refId="table1" ref="table1">

      <thead class="table-head-bg table-head-text table-head-border-top border-bottom-styleClear">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">考試方式</th>
          <th scope="col">考試類別</th>
          <th scope="col">考試標題</th>
          <th scope="col">起始日期</th>
          <th scope="col">結束日期</th>
          <th scope="col">成績公佈日期</th>
          <th scope="col">編輯</th>
          <th scope="col">刪除</th>
          <th scope="col">成績</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(table,  index) in table" :key="`table${index}`">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ table.mode }}</td>
          <td>{{ table.type }}</td>
          <td>
            <a href="javascript:;" class="text-decoration-none hover-border-bottom">
              <span>{{ table.title }}</span>
            </a>
            <br />
            <span class="text-danger" v-if="!table.score">
              試卷總分未滿100分，學生無法開始作答
            </span>
          </td>
          <td>{{ table.startDate }}</td>
          <td>{{ table.endDate }}</td>
          <td>{{ table.scorePublicDate }}</td>
          <td>
            <button type="button" class="btn btn-secondary">編輯</button>
          </td>
          <td>
            <button type="button" class="btn btn-secondary">刪</button>
          </td>
          <td>
            <button type="button" class="btn btn-secondary">查看</button>
          </td>
        </tr>

      </tbody>
    </table>
  </section>
</main>
</template>

<script>

export default {

  data () {
    return {
      table: [
        {
          mode: '線上作答', //* 考試方式
          type: '平時', //* 考試類別
          title: '線上考試作答新增測試', //* 考試標題
          startDate: '2022/8/10', //* 起始日期
          endDate: '2022/8/10', //* 結束日期
          scorePublicDate: '2022/8/10', //* 成績公佈日期
          score: true //* 成績
        },
        {
          mode: '紙本作答', //* 考試方式
          type: '期中考', //* 考試類別
          title: '中國文化大學進學部98學年暑期班期中考(英文上機)', //* 考試標題
          startDate: '2022/8/13', //* 起始日期
          endDate: '2022/8/13', //* 結束日期
          scorePublicDate: '2022/8/13', //* 成績公佈日期
          score: false //* 成績
        },
        {
          mode: '線上作答', //* 考試方式
          type: '專題', //* 考試類別
          title: '測試線上作答 2022.8.10', //* 考試標題
          startDate: '2022/8/15', //* 起始日期
          endDate: '2022/8/15', //* 結束日期
          scorePublicDate: '2022/8/15', //* 成績公佈日期
          score: false //* 成績
        }
      ]
    }
  },

  watch: {
  },

  methods: {
    hideTable (e) {
      //* target 是 a 標籤，先回父層再取得子層 table 的 ref
      const refId = e.target.parentNode.parentNode.children[1].getAttribute('data-refId')
      const elIsHide = this.$refs[refId].className.split(' ').includes('d-none')
      if (elIsHide) {
        this.$refs[refId].classList.remove('d-none')
      } else {
        this.$refs[refId].classList.add('d-none')
      }
    }
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope>
@import '@/assets/stylesheets/helpers/pages/examManage/ExamTable.scss'
</style>
