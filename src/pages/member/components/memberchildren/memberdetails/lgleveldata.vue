<template>
<div>
   <div class="Member-nav">
     <router-link to="/member">
       <div class="Member-back">
          <span class="iconfont ">&#xe602;</span>
          {{MemberTitle.back}}
       </div>
     </router-link>
     <div class="Member-collection">
         <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
     </div>
   </div>
   <ul class="job_ul">
     <li class="job_li">
       <div class="job_left">
         *语言
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入"  :value="lgData.Language"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         等级证书
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入"  :value="lgData.level"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         获证日期
       </div>
       <div class="job_right"  @click="setDate">
          {{lgData.Time}}
          <span class="iconfont job_time">&#xe644;</span>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         总成绩
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入" :value="lgData.Grade"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         熟练程度
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入" :value="lgData.skilled"/>
       </div>
     </li>
   </ul>
   <div class="job_keep">
      <mt-button type="primary" size="normal" class="job_btn">保存</mt-button>
      <mt-button type="danger" size="normal"  class="job_btn job_delete">删除</mt-button>
   </div>
 </div>
</template>
<script>
export default {
  name: 'lgleveldata',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '语言能力'
      },
      lgData: {
        Language: '英语',
        level: '英语六级证书',
        Time: '2010-01-09',
        Grade: '70',
        skilled: '非常熟练'
      }
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.lgData.Time = date
        }
      })
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
.job_ul
  margin-top:.1rem
  box-sizing: border-box
  width: 100%
  padding-left: 0.2rem
  .job_li
    height: 0.9rem
    line-height: 0.9rem
    font-size: 0.27rem
    display: flex
    border-bottom:1px solid pink
    .job_left
     flex:3
     font-size:.3rem
    .job_right
     flex:9
     font-size:.3rem
     .job_time
      margin-left:.1rem
      font-size:.4rem
.job_keep
 height:1rem
 display:flex
 justify-content:space-around
 align-items:center
 position:fixed
 left:0
 right:0
 bottom:0
 .job_btn
   padding: 0 0.8rem
   text-align:center
.job_title
 box-sizing: border-box
 margin-top:.2rem
 padding-left: 0.2rem
.job_memark
  box-sizing: border-box
  margin-top:.2rem
  padding-left: 0.2rem
  width: 100%
  height:1.5rem
  color: #999
  background:#fff
</style>
