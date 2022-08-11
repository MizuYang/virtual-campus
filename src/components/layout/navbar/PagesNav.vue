<template>
  <nav class="d-flex bg-pink border-primary-d">
    <div class="dropdown">
      <button type="button" class="btn dropdown-toggle text-decoration-none fw-bold mx-1"
              role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
              測試課程 .67 1D
      </button>
      <span class="arrow-end"></span>
      <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <div class="dropdown">
      <button type="button" class="btn dropdown-toggle text-decoration-none mx-1"
              role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
              考試
      </button>
      <span class="arrow-end"></span>
      <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink2">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <div class="dropdown">
      <button type="button" class="btn dropdown-toggle text-decoration-none mx-1"
              role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">
              考試管理
      </button>
      <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink3">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <p class="text-dark text-decoration-none border-start-pink px-2 my-auto">考試管理</p>

    <button type="button" class="btn bg-tip ms-auto" @click="openTip">
      使用說明
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    openTip () {
      window.open('http://ican.sce.pccu.edu.tw/ican5/Course/Dashboard.aspx?cno=971testcourse', '', 'width=1000,height=1000')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/stylesheets/helpers/pages/examManage/PagesNav.scss';
</style>
