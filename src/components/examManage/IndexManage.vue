<template>
  <table class="table table-bordered w-50 align-middle">

    <tbody>
      <tr>
        <td>現有索引</td>
        <td class="w-75">
          <select class="form-select" size="10" v-model="selectIndex">
            <option :value="index" v-for="(item, index) in indexData" :key="`index${index}`">{{ item }}</option>
          </select>
          <template v-if="editHide">
            <button type="button" class="btn btn-secondary btn-sm border-dark" @click="deleteIndex">刪除</button>
            <button type="button" class="btn btn-secondary btn-sm border-dark" @click="openEdit">編輯</button>
          </template>
          <template v-else>
            <input type="text" :value="indexData[selectIndex]" ref="currentIndexNameTxt">
            <button type="button" class="btn btn-secondary btn-sm border-dark" @click="editName">確定</button>
            <button type="button" class="btn btn-secondary btn-sm border-dark" @click="editHide= !editHide">取消</button>
          </template>
        </td>
      </tr>
      <tr>
        <td>索引名稱</td>
        <td>
          <input type="text" ref="addIndexNameTxt">
          <button type="button" class="btn btn-secondary btn-sm border-dark ms-2" @click="addIndexName">新增</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {

  data () {
    return {
      selectIndex: '',
      indexData: [
        '測試索引1',
        '測試索引2',
        '測試索引3',
        '測試索引4',
        '測試索引5',
        '測試索引6',
        '測試索引7',
        '測試索引8',
        '測試索引9',
        '測試索引10',
        '測試索引11',
        '測試索引12',
        '測試索引13',
        '測試索引14',
        '測試索引15'
      ],
      editHide: true
    }
  },

  methods: {
    deleteIndex () {
      const index = this.selectIndex
      this.indexData.splice(index, 1)
    },
    openEdit () {
      if (!this.selectIndex) {
        alert('請選擇現有索引!!')
        return
      }
      this.editHide = !this.editHide
    },
    editName () {
      const index = this.selectIndex
      const newName = this.$refs.currentIndexNameTxt.value
      this.indexData[index] = newName
      //* 初始化
      this.selectIndex = ''
      this.editHide = true
    },
    addIndexName () {
      const addIndexName = this.$refs.addIndexNameTxt.value
      if (!addIndexName) {
        alert('請輸入索引名稱!!')
        return
      }
      this.indexData.push(addIndexName)
      //* 初始化
      this.$refs.addIndexNameTxt.value = ''
    }
  }

}
</script>

<style lang='scss' scope>
@import '@/assets/stylesheets/helpers/pages/examManage/addExam/_AddExamTable.scss'
</style>
