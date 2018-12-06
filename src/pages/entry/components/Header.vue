<template>
<div>
  <div class="Member-nav">
   <router-link to="/">
     <div class="Member-back">
        <span class="iconfont ">&#xe602;</span>
     </div>
   </router-link>
   <div class="Member-collection">
       <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
   </div>
   <div class="Member-refer">
      <h4 class="Member-submit">{{MemberTitle.refer}}</h4>
   </div>
 </div>
 <div class="entry-progress">
   <span class="enrty-progresstext">{{MemberTitle.progress}}</span>
   <div class="entry-progressright">
     <el-progress :text-inside="true" :stroke-width="18" :percentage="80"  status="success"></el-progress>
   </div>
 </div>
</div>
</template>
<script>
export default {
  name: 'EntryHeader',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '入职材料补充',
        refer: '提交',
        progress: '进度情况'
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
   .Member-refer
    box-sizing: border-box
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    .Member-submit
      font-weight:400
      font-size:.4rem
      color:#CC3300
      text-align:center
.entry-progress
  width:99%
  float:right
  height:.4rem
  padding-bottom:.2rem
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137)
  .enrty-progresstext
    float:left
    box-sizing:border-box
    width:25%
    padding-left:.2rem
    padding-right:.1rem
    font-size:.3rem
   .entry-progressright
    float:left
    width:65%
</style>
