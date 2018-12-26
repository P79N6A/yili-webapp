<template>
   <div>
       <ul>
           <li class="lglevel-li" v-for="item of languagelist" :key="item.index">
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
               <div class="level-right" @click="To_leveldata">
                   <span class="iconfont lg-toDetails">&#xe601;</span>
               </div>
           </li>
       </ul>
       <p class="lg_add">
        <span class="iconfont lg_addimg">&#xe608;</span>
       </p>
       <div class="lg_footer">
          <mt-button type="primary" size="large">保存</mt-button>
       </div>
   </div>
</template>

<script type="text/javascript">
export default {
  name: 'language',
  data () {
    return {
      languagelist: [
        {
          language: '英语',
          level: '英语六级证书',
          date: '2018-09-09',
          Grade: 70,
          skilled: '非常熟练'
        }, {
          language: '日语',
          level: '日语二级证书',
          date: '2018-09-09',
          Grade: 70,
          skilled: '非常熟练'
        }
      ]
    }
  },
  methods: {
    To_leveldata () {
      this.$router.push({
        path: `/leveldata`
      })
    }
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
