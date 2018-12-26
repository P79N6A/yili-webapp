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
           <p>（1）请按照时间倒序（从最近一段工作经历开始）依次填写</p>
           <p>（2）毕业前实习经历小于6个月，无需提供</p>
           <p>（3）若待业≧30天，请在原单位处填写“待业”，职位处填写“无”，以保证经历的连续性</p>
           <p>（4）工作单位属于某企业分子公司或分支机构的，需填写所在企业的分子公司或分支机构名称，如：建设银行内蒙古支行</p>
           <p>（5）以下情况，按如下标准进行填写:</p>
           <ul>
             <li>1.如为个体：请在原单位处填写“个体店名”，职位处填写“个体”；如无店名，请在原单位处填写“无”，职位处填写“个体（行业类别）”</li>
             <li>2.如为自主创业：请在原单位处填写“公司名称”，职位处填写“自主创业”</li>
             <li>3.如为农民工/打零工：请在原单位处填写“无”，职位处填写“农民工/打零工”</li>
             <li>4.如为务农：请在原单位处填写“无”，职位处填写“农民”</li>
           </ul>
           <p>（6）联系电话处如为固定电话，格式应为：区号+ 电话号码（例如：04713351234）</p>
       </div>
</div>
</template>

<script type="text/javascript">

export default {
  name: 'userjob',
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
