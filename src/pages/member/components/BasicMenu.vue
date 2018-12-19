<template>
    <div class="Basic_Menutop">
      <ul class="Basic_ul">
            <li  v-for="item of BasicList" :key="item.id">
                <div class="Basic-top">
                    <div class="Basic-topbg">
                    </div>
                    <div class="Basic-title">
                    <span class="Basicmsg"  @click="BasicSetShow" :cid="item.id">{{item.title}}</span>
                    <div class="Basic-Up">
                        <span class="iconfont Basicfont" @click="BasicRead" :cids="item.id">&#xe646;</span>
                    </div>
                  </div>
                </div>
                <div :is="item.children" v-show="item.comshow"></div>
            </li>
      </ul>
    </div>
</template>

<script type="text/javascript">
import BasicMsg from './BasicMsg'
import BasicJob from './memberchildren/jobskill'
import BasicTeach from './memberchildren/teachbg'
import BasicLanguage from './memberchildren/lglevel'
import BasicFamily from './memberchildren/family'
import BasicHealth from './memberchildren/health'
import BasicYili from './memberchildren/yilijob'

export default {
  name: 'BascicMenu',
  data () {
    return {
      BasicList: [
        {
          id: '001',
          title: '基本信息',
          children: 'BasicMsg',
          comshow: false
        }, {
          id: '002',
          title: '历史工作经历',
          children: 'BasicJob',
          comshow: false
        }, {
          id: '003',
          title: '教育背景',
          children: 'BasicTeach',
          comshow: false
        }, {
          id: '004',
          title: '外语水平',
          children: 'BasicLanguage',
          comshow: false
        }, {
          id: '005',
          title: '家庭成员',
          children: 'BasicFamily',
          comshow: false
        }, {
          id: '006',
          title: '健康信息',
          children: 'BasicHealth',
          comshow: false
        }, {
          id: '007',
          title: '在伊利工作亲属关系',
          children: 'BasicYili',
          comshow: false
        }
      ]
    }
  },
  components: {
    BasicMsg,
    BasicJob,
    BasicTeach,
    BasicLanguage,
    BasicFamily,
    BasicHealth,
    BasicYili
  },
  methods: {
    BasicSetShow (event) {
      let el = event.currentTarget
      let cids = el.getAttribute('cid')
      let arrlist = this.BasicList
      arrlist.forEach(function (item) {
        if (item.id === cids) {
          item.comshow = !item.comshow
        } else {
          item.comshow = false
        }
      })
    },
    BasicRead (event) {
      let el = event.currentTarget
      let cids = el.getAttribute('cids')
      if (cids === '001') {
        this.$router.push({
          path: `/usernorm`
        })
      } else if (cids === '002') {
        this.$router.push({
          path: `/userjobnorm`
        })
      } else if (cids === '003') {
        this.$router.push({
          path: `/userteachnorm`
        })
      } else if (cids === '004') {
        this.$router.push({
          path: `/userlanguagenorm`
        })
      } else if (cids === '005') {
        this.$router.push({
          path: `/userfamilynorm`
        })
      } else if (cids === '006') {
        this.$router.push({
          path: `/userhealthnorm`
        })
      } else if (cids === '007') {
        this.$router.push({
          path: `/useryilinorm`
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.Basic-top
  box-sizing: border-box
  display:flex
  width:100%
  padding-left:.15rem
  .Basic-topbg
   width:.2rem
   height:.5rem
   margin-top:.2rem
   background:rgba(28, 170, 254, 1)
  .Basic-title
    display:flex
    flex:1
    padding-left:.2rem
    height:1rem
    line-height:1rem
    text-align:left
    font-size:.35rem
    border-bottom:1px solid transparent
    -moz-border-image:url(../../../assets/img/u236.png) 30 30 round
    -webkit-border-image:url(../../../assets/img/u236.png) 30 30 round
    -o-border-image:url(../../../assets/img/u236.png) 30 30 round
    border-image:url(../../../assets/img/u236.png) 30 30 round
    .Basicmsg
     flex:.95
    .Basic-Up
      margin-top:-0.2rem
      .Basicfont
       font-size:.5rem
       color:rgba(28, 170, 254, 1)
      .Basicfontdown
       font-size:.5rem
       color:rgba(28, 170, 254, 1)
</style>
