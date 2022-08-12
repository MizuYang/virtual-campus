import { createStore } from 'vuex'

export default createStore({
  strict: false, // 嚴謹模式
  state: {
    //* 考試管理
    examTableCurrentBlock: 'table',
    //* 新增考試
    addExamCurrentBlock: 'table',
    //* 新增考試(AE) > 線上作答中的選單
    aEAnsOnlineCurrentMenu: 'examEdit',
    //* 歷程
    courseCurrentBlock: 'learnCourse'
  },
  actions: {
    // 負責觸發 mutations
    // 可處理非同步程式（e.g: 打 API）
  },
  mutations: {
    //* 考試管理
    EXAM_MANAGE_BLOCK (store, val) { //* 切換顯示區塊
      store.examTableCurrentBlock = val
    },
    //* 新增考試
    ADD_EXAM_BLOCK (store, val) { //* 切換顯示區塊
      store.addExamCurrentBlock = val
    },
    //* 新增考試(AE) > 線上作答
    AE_EXAM_CURRENTBLOCK (store, val) {
      store.aEAnsOnlineCurrentMenu = val
    },
    //* 歷程
    COURSE_BLOCK (store, val) { //* 顯示歷程區塊
      store.courseCurrentBlock = val
    }

  },
  getters: {
    // 像 computed 一樣，運算處理 state 資料
  },
  modules: {
    // 按需求分拆 module
    // 每個 module 都有自己的state, actions, mutations, getters, modules
  }
})
