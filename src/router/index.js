import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Member from '@/pages/member/Member'
import Entry from '@/pages/entry/Entry'
import Upload from '@/pages/upload/Upload'
import ConTainer from '@/pages/usermsg/ConTainer'
import Race from '@/pages/usermsg/Race'
import Political from '@/pages/usermsg/political'
import Blood from '@/pages/usermsg/blood'
import Religion from '@/pages/usermsg/religion'
import Marriage from '@/pages/usermsg/Marriage'
import Account from '@/pages/usermsg/account'
import Wage from '@/pages/usermsg/wage'
import Jobdata from '@/pages/member/components/memberchildren/memberdetails/jobdata'
import Teachdata from '@/pages/member/components/memberchildren/memberdetails/teachdata'
import leveldata from '@/pages/member/components/memberchildren/memberdetails/lgleveldata'

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
    }, {
      path: '/political',
      name: 'Political',
      component: Political,
      meta: { keepAlive: true }
    }, {
      path: '/blood',
      name: 'Blood',
      component: Blood,
      meta: { keepAlive: true }
    }, {
      path: '/religion',
      name: 'Religion',
      component: Religion,
      meta: { keepAlive: true }
    }, {
      path: '/marriage',
      name: 'Marriage',
      component: Marriage,
      meta: { keepAlive: true }
    }, {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { keepAlive: true }
    }, {
      path: '/wage',
      name: 'Wage',
      component: Wage,
      meta: { keepAlive: true }
    }, {
      path: '/jobdata',
      name: 'Jobdata',
      component: Jobdata,
      meta: { keepAlive: true }
    }, {
      path: '/teachdata',
      name: 'Teachdata',
      component: Teachdata,
      meta: { keepAlive: true }
    }, {
      path: '/leveldata',
      name: 'leveldata',
      component: leveldata,
      meta: { keepAlive: true }
    }
  ]
})
