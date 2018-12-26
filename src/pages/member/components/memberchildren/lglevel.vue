<template>
   <div>
       <ul>
           <li class="lglevel-li" v-for="item of languagedatalist" :key="item.index">
               <div class="level-left">
                   <ul>
                        <li class="lgmenu-li">
                            <div class="lgmenu-left lgtitle-color">
                                语言
                            </div>
                            <div class="lgmenu-right">
                                {{item.language}}
                            </div>
                        </li>
                        <li class="lgmenu-li">
                            <div class="lgmenu-left lgtitle-color">
                                等级证书
                            </div>
                            <div class="lgmenu-right">
                                {{item.level}}
                            </div>
                        </li>
                        <li class="lgmenu-li lgtitle-color">
                            <div class="lgmenu-left lgtitle-color">
                                获证日期
                            </div>
                            <div class="lgmenu-right">
                                {{item.date}}
                            </div>
                        </li>
                        <li class="lgmenu-li">
                            <div class="lgmenu-left lgtitle-color">
                                总成绩
                            </div>
                            <div class="lgmenu-right">
                                {{item.Grade}}
                            </div>
                        </li>
                        <li class="lgmenu-li">
                            <div class="lgmenu-left lgtitle-color">
                                熟练程度
                            </div>
                            <div class="lgmenu-right">
                                {{item.skilled}}
                            </div>
                        </li>
                   </ul>
               </div>
               <div class="level-right" @click="To_leveldata(item.id)">
                   <span class="iconfont lg-toDetails">&#xe601;</span>
               </div>
           </li>
       </ul>
       <p class="lg_add">
        <span class="iconfont lg_addimg" @click="To_leveldata()">&#xe608;</span>
       </p>
   </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  name: 'language',
  data () {
    return {
      languagelist: [
        {
          id: '001',
          language: '英语',
          level: '英语六级证书',
          date: '2018-09-09',
          Grade: 70,
          skilled: '非常熟练'
        }, {
          id: '002',
          language: '日语',
          level: '日语二级证书',
          date: '2018-09-09',
          Grade: 70,
          skilled: '非常熟练'
        }
      ],
      isOriginHei: true,
      screenHeight: document.documentElement.clientHeight,
      originHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    To_leveldata (itemid) {
      this.$router.push({
        path: `/leveldata`,
        query: {
          name: itemid
        }
      })
    }
  },
  mounted () {
    let self = this
    window.onresize = function () {
      return (function () {
        self.screenHeight = document.documentElement.clientHeight
      })()
    }
  },
  watch: {
    screenHeight (val) {
      if (this.originHeight > val) {
        this.isOriginHei = false
      } else {
        this.isOriginHei = true
      }
    }
  },
  computed: {
    ...mapState({
      languagedatalist: state => state.language.languagedatalist
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.lglevel-li
 display:flex
 font-size:.3rem
 padding:.2rem
 .level-left
  flex:10
  border-bottom:1px solid pink
  .lgmenu-li
    display:flex
    height:.7rem
    line-height:.7rem
    .lgtitle-color
     color:$darkTextColor
    .lgmenu-left
     flex:4
     text-align:right
    .lgmenu-right
     box-sizing:border-box
     padding-left:.2rem
     flex:8
 .level-right
  flex:2
  display:flex
  align-items:center
  justify-content: center
  .lg-toDetails
   font-size: 0.5rem
   color:$darkTextColor
.lg_add
 box-sizing:border-box
 padding:0.1rem 0.4rem
 text-align:right
 .lg_addimg
  font-size:.5rem
  color:#26a2ff
.lg_footer
 padding:.2rem
</style>
