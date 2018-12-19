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
         *开始时间
       </div>
       <div class="job_right"  @click="setDate">
          {{JobData.StartTime}}
          <span class="iconfont job_time">&#xe644;</span>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         *结束时间
       </div>
       <div class="job_right"  @click="setDate2">
          {{JobData.EndTime}}
          <span class="iconfont job_time">&#xe644;</span>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         *工作单位
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入"  :value="JobData.JobUnit"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         *职务
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入" :value="JobData.JobOffice"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         证明人
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入" :value="JobData.JobWitness"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         联系电话
       </div>
       <div class="job_right">
           <input type="text" placeholder="请在此处输入" :value="JobData.JobWitnessPhone"/>
       </div>
     </li>
   </ul>
   <p class="job_title">备注</p>
   <textarea class="job_memark" placeholder="请在此处输入" :value="JobData.JobRemarks"></textarea>
   <div class="job_keep">
      <mt-button type="primary" size="normal" class="job_btn" @click="Job_keep">保存</mt-button>
      <mt-button type="danger" size="normal"  class="job_btn job_delete">删除</mt-button>
   </div>
 </div>
</template>
<script>
export default {
  name: 'Jobdata',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '工作经历'
      },
      JobData: {
        StartTime: '2010-01-09',
        EndTime: '2020-09-11',
        JobUnit: '伊利集团商学院',
        JobOffice: '销售经理',
        JobWitness: '李小明',
        JobWitnessPhone: 18792023874,
        JobRemarks: ''
      }
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.JobData.StartTime = date
        }
      })
    },
    setDate2 () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (e) => {
          this.JobData.EndTime = e
        }
      })
    },
    Job_keep () {
      let name = this.$route.query.name
      console.log(name)
    }
  },
  mounted () {
    console.log('是否被调用')
    this.JobData.JobWitness = this.$route.query.name
    console.log(this.JobData.JobWitness)
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
