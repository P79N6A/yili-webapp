<template>
    <div class="Basic_Menutop">
      <ul class="Basic_ul">
            <li  v-for="item of BasicList" :key="item.id">
                <div class="Basic-top" @click="BasicSetShow" :cid="item.id">
                    <div class="Basic-topbg">
                    </div>
                    <div class="Basic-title">
                    <span class="Basicmsg">{{item.title}}</span>
                    <div class="Basic-Up">
                        <span class="iconfont Basicfontdown" v-show="!item.comshow">&#xe603;</span>
                        <span class="iconfont Basicfont" v-show="item.comshow">&#xe60b;</span>
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
export default {
  name: 'BascicMenu',
  data () {
    return {
      BasicList: [
        {
          id: '001',
          title: '基本信息',
          children: 'BasicMsg',
          comshow: true
        }, {
          id: '002',
          title: '历史工作经历',
          children: '',
          comshow: false
        }, {
          id: '003',
          title: '教育背景',
          children: '',
          comshow: false
        }, {
          id: '004',
          title: '外语水平',
          children: '',
          comshow: false
        }, {
          id: '005',
          title: '家庭成员',
          children: '',
          comshow: false
        }, {
          id: '006',
          title: '健康信息',
          children: '',
          comshow: false
        }, {
          id: '007',
          title: '在伊利工作亲属关系',
          children: '',
          comshow: false
        }
      ]
    }
  },
  components: {
    BasicMsg
  },
  methods: {
    BasicSetShow (event) {
      let el = event.currentTarget
      let cids = el.getAttribute('cid')
      if (cids === '001') {
        let arrlist = this.BasicList
        arrlist.forEach(function (item) {
          if (item.id === cids) {
            item.comshow = !item.comshow
          }
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
       font-size:.6rem
       color:rgba(28, 170, 254, 1)
      .Basicfontdown
       font-size:.5rem
       color:rgba(28, 170, 254, 1)
</style>
