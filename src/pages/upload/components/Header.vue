<template>
<div>
  <div class="Member-nav">
   <router-link to="/entry">
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
 <div class="Stuff-Id">
   <p class="stuff-idht">{{MemberTitle.idtitle}}</p>
 </div>
</div>
</template>
<script>
export default {
  name: 'UploadHeader',
  data () {
    return {
      MemberTitle: {
        back: '',
        title: '身份证上传',
        refer: '保存',
        idtitle: '请上传身份证正反面照片，注意反光，保证身份证内容清晰可见'
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
.Stuff-Id
  box-sizing:box-sizing
  padding-left:.4rem
  padding-right:.4rem
  .stuff-idht
    height:.4rem
    line-height:.4rem
</style>
