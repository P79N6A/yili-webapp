<template>
 <div class="Member-nav">
   <router-link to="/">
     <div class="Member-back">
        <span class="iconfont ">&#xe602;</span>
        {{MemberTitle.back}}
     </div>
   </router-link>
   <div class="Member-collection">
       <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
   </div>
 </div>
</template>
<script>
export default {
  name: 'MemberHeader',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '员工信息采集'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.Member-nav
  width:100%
  height:$darkHeight
  tex-align:center
  .Member-back
    box-sizing: border-box
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    padding-left:.4rem
    font-size:.3rem
    color:#333
    overflow:hidden
  .Member-collection
    box-sizing: border-box
    float:left
    width:60%
    height:$darkHeight
    line-height:$darkHeight
    .Member-msgtitle
      font-weight:bold
      font-size:.4rem
      color:#666
      text-align:center
</style>
