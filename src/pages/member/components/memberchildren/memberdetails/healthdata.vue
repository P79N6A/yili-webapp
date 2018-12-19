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
           <div class="job_left" >
             发证日期
           </div>
           <div class="job_right"  @click="setDate">
              {{proof.starttime}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             过期日期
           </div>
           <div class="job_right" @click="setDate2">
               {{proof.endtime}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             发证单位
           </div>
           <div class="job_right">
               <input type="text" :value="proof.unit" placeholder="请在此输入" />
           </div>
         </li>
       </ul>
       <p class="job_title">备注</p>
       <textarea class="job_memark" placeholder="请在此处输入" :value="proof.mark"></textarea>
       <div class="job_keep">
          <mt-button type="primary" size="normal" class="job_btn">保存</mt-button>
          <mt-button type="danger" size="normal"  class="job_btn job_delete">删除</mt-button>
       </div>
</div>
</template>

<script type="text/javascript">

export default {
  name: 'healthdata',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '健康信息'
      },
      proof: {
        starttime: '2018-02-10',
        endtime: '2020-10-10',
        unit: '',
        mark: ''
      }
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.proof.starttime = date
        }
      })
    },
    setDate2 () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (e) => {
          this.proof.endtime = e
        }
      })
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
.job_keep
 height:1rem
 display:flex
 justify-content:space-around
 align-items:center
 position:fixed
 left:0
 right:0
 bottom:0
 background:#fff
 .job_btn
   padding: 0 0.8rem
   text-align:center
.levelselect
  width:$selectWidth
  .picker-toolbar-title
    display:flex
    flex-direction: row
    justify-content: space-around
    height: 40px
    line-height: 40px
    font-size: 16px
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
