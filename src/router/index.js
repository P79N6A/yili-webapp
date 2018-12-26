import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Member from '@/pages/member/Member'
import Entry from '@/pages/entry/Entry'
import Upload from '@/pages/upload/Upload'
import ConTainer from '@/pages/usermsg/ConTainer'
import usernorm from '@/pages/usernorm/userBasic'
import userjobnorm from '@/pages/usernorm/userjob'
import userteachnorm from '@/pages/usernorm/userteachbg'
import userlanguagenorm from '@/pages/usernorm/userlanguage'
import userhealthnorm from '@/pages/usernorm/userhealth'
import userfamilynorm from '@/pages/usernorm/userfamily'
import useryilinorm from '@/pages/usernorm/useryili'
import Jobdata from '@/pages/member/components/memberchildren/memberdetails/jobdata'
import Teachdata from '@/pages/member/components/memberchildren/memberdetails/teachdata'
import leveldata from '@/pages/member/components/memberchildren/memberdetails/lgleveldata'
import familydata from '@/pages/member/components/memberchildren/memberdetails/familydata'
import healthdata from '@/pages/member/components/memberchildren/memberdetails/healthdata'
import yilimandata from '@/pages/member/components/memberchildren/memberdetails/yilijobdata'
import bankCard from '@/pages/upload/components/bankCard'
import diploma from '@/pages/upload/components/diploma'
import IDCard from '@/pages/upload/components/IDCard'
import medicalReport from '@/pages/upload/components/medicalReport'
import personPhone from '@/pages/upload/components/personPhone'
import quitProve from '@/pages/upload/components/quitProve'
import specialWork from '@/pages/upload/components/specialWork'

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
      component: Entry
    }, {
      path: '/entry/upload',
      name: 'Upload',
      component: Upload
    }, {
      path: '/container',
      name: 'ConTainer',
      component: ConTainer,
      meta: { keepAlive: true }
    }, {
      path: '/jobdata',
      name: 'Jobdata',
      component: Jobdata
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
    }, {
      path: '/familydata',
      name: 'familydata',
      component: familydata,
      meta: { keepAlive: true }
    }, {
      path: '/healthdata',
      name: 'healthdata',
      component: healthdata,
      meta: { keepAlive: true }
    }, {
      path: '/yilimandata',
      name: 'yilimandata',
      component: yilimandata,
      meta: { keepAlive: true }
    }, {
      path: '/usernorm',
      name: 'usernorm',
      component: usernorm,
      meta: { keepAlive: true }
    }, {
      path: '/userjobnorm',
      name: 'userjobnorm',
      component: userjobnorm,
      meta: { keepAlive: true }
    }, {
      path: '/userteachnorm',
      name: 'userteachnorm',
      component: userteachnorm,
      meta: { keepAlive: true }
    }, {
      path: '/userlanguagenorm',
      name: 'userlanguagenorm',
      component: userlanguagenorm,
      meta: { keepAlive: true }
    }, {
      path: '/userhealthnorm',
      name: 'userhealthnorm',
      component: userhealthnorm,
      meta: { keepAlive: true }
    }, {
      path: '/userfamilynorm',
      name: 'userfamilynorm',
      component: userfamilynorm,
      meta: { keepAlive: true }
    }, {
      path: '/useryilinorm',
      name: 'useryilinorm',
      component: useryilinorm,
      meta: { keepAlive: true }
    }, {
      path: '/upload/components/bankCard',
      name: 'bankCard',
      component: bankCard
    }, {
      path: '/upload/components/specialWork',
      name: 'specialWork',
      component: specialWork
    }, {
      path: '/upload/components/personPhone',
      name: 'personPhone',
      component: personPhone
    }, {
      path: '/upload/components/quitProve',
      name: 'quitProve',
      component: quitProve
    }, {
      path: '/upload/components/medicalReport',
      name: 'medicalReport',
      component: medicalReport
    }, {
      path: '/upload/components/IDCard',
      name: 'IDCard',
      component: IDCard
    }, {
      path: '/upload/components/diploma',
      name: 'diploma',
      component: diploma
    }
  ]
})
