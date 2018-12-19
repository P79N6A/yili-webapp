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
           <p>（1）需填写父母、兄弟姐妹、配偶、子女的信息</p>
           <p>（2）至少填写一名紧急联系人，且紧急联系人必须填写联系电话；若家庭成员中无紧急联系人，请在与员工关系处勾选“其他”。联系电话如为固定电话，格式为：区号 + 电话号码（例如：04713351234）</p>
           <p>（3）家庭成员为以下情况，请按如下标准进行填写:</p>
           <ul>
             <li>1.如为失业/下岗：工作单位填写“原工作单位：……”，职位填写“失业/下岗”</li>
             <li>2.如为务农：工作单位填写“无”，职位填写“农民”</li>
             <li>3.如为个体：工作单位填写“店名/公司名称”，职位填写“个体”；或工作单位填写“无”，职位填写“个体（行业类别）”</li>
             <li>4.如为学生：工作单位填写“学校名称”，职位填写“学生”；未入学子女：工作单位和职位均填写“无”</li>
             <li>5.如为退休：工作单位填写“退休前工作单位：……”，职位填写“退休”</li>
             <li>6.如为无业（如家庭妇女）：工作单位填写“无”，职位填写“家庭妇女”或“无业在家”</li>
             <li>7.如为农民工/打零工：工作单位填写“无”，职位填写“外出务工/打零工”</li>
             <li>8.自由职业：工作单位填写“无”，职位填写“自由职业（律师/艺术家等）</li>
           </ul>
           <p>（4）配偶是否有工作：个体/务农/打零工/自由职业/退休/下岗请选“否”</p>
       </div>
</div>
</template>

<script type="text/javascript">

export default {
  name: 'userfamily',
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
   margin-top:.1rem
</style>
