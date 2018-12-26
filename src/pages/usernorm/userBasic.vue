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
       <div class="user_text" v-show="user_type === 'B'">
          <h3>家庭住址:</h3>
          <p>未婚人员指父母的居住地，已婚人员指配偶的居住地；地址需精确到门牌号，如：**小区**号楼/栋**单元**号。（农村地址需具体到村）</p>
          <h3>户籍地址:</h3>
          <p>指户口薄中“住址”信息（一般户口簿与身份证信息一致，如不一致以户口簿信息为准）；需精确到门牌号，如：**小区**号楼/栋**单元**号。（农村地址需具体到村）</p>
          <h3>现住址:</h3>
          <p>需精确到门牌号，如：**小区**号楼/栋**单元**号，（农村地址需具体到村）；校招学生可具体到宿舍号，如咸宁西路**号楼**室</p>
       </div>
       <div v-show="user_type === 'A'" class="user_text">
          <h3>家庭住址:</h3>
          <h3>此项信息为非必填项。如您填写标准如下:</h3>
          <p>未婚人员指父母的居住地，已婚人员指配偶的居住地；地址需精确到门牌号，如：**小区**号楼/栋**单元**号。（农村地址需具体到村）</p>
          <h3>户籍地址:</h3>
          <p>指户口薄中“住址”信息（一般户口簿与身份证信息一致，如不一致以户口簿信息为准）；需精确到门牌号，如：**小区**号楼/栋**单元**号。（农村地址需具体到村）</p>
          <h3>现住址:</h3>
          <p>需精确到门牌号，如：**小区**号楼/栋**单元**号，（农村地址需具体到村）；校招学生可具体到宿舍号，如咸宁西路**号楼**室</p>
       </div>
</div>
</template>

<script type="text/javascript">

export default {
  name: 'userbasicnorm',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '填写说明'
      },
      user_type: 'A'
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
  text-indent:2em
 h3
  padding-top:.2rem
  letter-spacing:.02rem
</style>
