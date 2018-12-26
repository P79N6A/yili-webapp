import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 这里定义初始值
let state = {
  count: 0,
  ContainerName: '中国',
  User_Race: '汉',
  User_Political: '群众',
  User_Blood: 'A型',
  User_Religion: '无宗教信仰',
  User_Marriage: '未婚',
  User_Account: '农业',
  User_Wage: '当月发当月'
}

const mutations = {
  add (context) {
    context.count++
  },
  decrease (context) {
    context.count--
  },
  increment (context, name) {
    context.ContainerName = name
  },
  Get_UserRaceState (context, race) {
    context.User_Race = race
  },
  Get_UserPoliticalState (context, item) {
    context.User_Political = item
  },
  Get_UserBlood (context, item) {
    context.User_Blood = item
  },
  Get_UserReligion (context, item) {
    context.User_Religion = item
  },
  Get_UserMarriage (context, item) {
    context.User_Marriage = item
  },
  Get_UserAccount (context, item) {
    context.User_Account = item
  },
  Get_UserWage (context, item) {
    context.User_Wage = item
  }
}

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  add (add) {
    add.commit('add')
  },
  decrease (decrease) {
    decrease.commit('decrease')
  },
  oddAdd ({commit, state}) {
    if (state.count % 2 === 0) {
      commit('add')
    }
  }
}

// 返回改变后的数值
const getters = {
  count (context) {
    return context.count
  },
  getOdd (context) {
    return context.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
