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
       <div class="user_text">
           <p>（1）请从最高学历开始依次填写至初中；无初中及以上学历的，填写小学学历</p>
           <p>（2）教育经历时间需连续，不得出现时间断档或重叠现象，如同一时间段有多段教育经历，需备注说明原因</p>
           <p>（3）有复读经历的，若在同一学校，可在同一条经历中填写，但需在“备注”中注明“x年至x年复读”，若在不同学校，则需分开填写；预科学习经历与其后的学习经历分开填写（预科学历填写其后取得的学历，专业不填写，学校名称填写“**学校（预科）”）</p>
           <p>（4）若有第二专业，请填写在学历信息最后一行</p>
           <p>（5）学校名称：初中、高中请从“市”开始填写，例如：呼和浩特市第一中学；中技/中专及以上学历的“学校名称”无需加省市，直接填写学校全称即可，例如：内蒙古大学</p>
           <p>（6）学校类型：如同属于211高等和985高等院校，填写985高等院校</p>
           <p>（7）专业类别：本科及以上学历需填写</p>
           <p>（8）专业：中专、中技、大专及以上学历需填写。职业高中的专业根据实际情况填写，如有专业则填写专业，如无专业则不填写，不得填写“无”</p>
           <p>（9）学历证书编码：需与毕业证信息一致；大专（含）以上学历填写学历证书编号;大专以下及大专及以上未取得学历证书、学位证书，在此栏处填写“无”</p>
           <p>（10）学位证书编码：需与学位证书信息一致；按照学位证书编号填写;学历为大专以下及大专及以上未取得学历证书、学位证书，在此栏处填写“无”</p>
       </div>
</div>
</template>

<script type="text/javascript">

export default {
  name: 'userteach',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '填写说明'
      }
    }
  }
}

</script>

<style type="text/css" lang="stylus" scoped>
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
     flex:5
     font-size:.3rem
    .job_right
     flex:7
     font-size:.3rem
     .job_time
      margin-left:.1rem
      font-size:.4rem
.user_text
 box-sizing:border-box
 padding: .2rem
 p
  margin-top:.2rem
  letter-spacing:.02rem
  font-weight:bold
 ul
  padding-left:1rem
  li
   font-size:.3rem
   letter-spacing:.02rem
</style>
