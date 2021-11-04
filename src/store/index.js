import { createStore } from 'vuex'

export default createStore({
  //数据存储属性
  state: {
    scrollTop: 0
  },
  //方法属性
  mutations: {
    SETSCROLLTOP:function(state,scrollTop) {
       state.scrollTop = scrollTop;
    }
  },
  //异步属性
  actions: {
    setScrollTop:function({commit},scrollTop){
      commit("SETSCROLLTOP",scrollTop)
    }
  },
  //计算属性
  getters:{
    // GETaddnum:function(state){
    //   return state.num += 20;
    // }
  },
  modules: {
  }
})