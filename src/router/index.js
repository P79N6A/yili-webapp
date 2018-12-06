import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Member from '@/pages/member/Member'
import Entry from '@/pages/entry/Entry'
import Upload from '@/pages/upload/Upload'
import ConTainer from '@/pages/container/ConTainer'
import Race from '@/pages/race/Race'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    }, {
      path: '/member',
      name: 'Member',
      component: Member,
      meta: { keepAlive: true }
    }, {
      path: '/entry',
      name: 'Entry',
      component: Entry,
      meta: { keepAlive: true }
    }, {
      path: '/entry/upload',
      name: 'Upload',
      component: Upload,
      meta: { keepAlive: true }
    }, {
      path: '/container',
      name: 'ConTainer',
      component: ConTainer,
      meta: { keepAlive: true }
    }, {
      path: '/race',
      name: 'Race',
      component: Race,
      meta: { keepAlive: true }
    }
  ]
})
