<template>
 <div class="jobskill-top">
    <ul>
      <li class="job-li" v-for="item of jobList" :key="item.index" >
        <div class="job-left">
          <p class="job-lefttime">
            <span class="iconfont job-lefticon">&#xe605;</span>
             {{item.StartTime}} - {{item.EndTime}}
           </p>
           <div class="job-menu">
             <ul>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   学校名称:
                 </div>
                 <div class="teach-menuliright">
                  {{item.unit}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   学校类型:
                 </div>
                 <div class="teach-menuliright">
                  {{item.unitType}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   学历:
                 </div>
                 <div class="teach-menuliright">
                  {{item.education}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   专业类别:
                 </div>
                 <div class="teach-menuliright">
                  {{item.ProfessionType}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   专业:
                 </div>
                 <div class="teach-menuliright">
                  {{item.Profession}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   教育形式:
                 </div>
                 <div class="teach-menuliright">
                  {{item.TeachModus}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   学历证书编号:
                 </div>
                 <div class="teach-menuliright">
                  {{item.CertificateNumber}}
                 </div>
               </li>
               <li class="teach-menuli">
                 <div class="teach-menulileft teachtitle-color">
                   学位证书编号:
                 </div>
                 <div class="teach-menuliright">
                  {{item.DegreeNumber}}
                 </div>
               </li>
             </ul>
             <textarea name="" class="job-Remarks" placeholder="暂无备注" disabled="true" v-model="item.Remarks"></textarea>
           </div>
        </div>
        <div class="job-right" @click="To_WriteJob(item.index)">
          <span class="iconfont job-toDetails">&#xe601;</span>
        </div>
      </li>
    </ul>
    <p class="job_add" >
      <span class="iconfont job_addimg" @click="Creat_job">&#xe608;</span>
    </p>
    <div class="job_footer">
      <mt-button type="primary" size="large">保存</mt-button>
    </div>
 </div>
</template>
<script>
export default {
  name: 'TeachBg',
  data () {
    return {
      jobList: [
        {
          StartTime: '2016-10-29',
          EndTime: '2018-10-19',
          unit: '北京大学',
          unitType: '211高等学校',
          education: '本科',
          ProfessionType: '管理学',
          Profession: '人力资源管理',
          TeachModus: '全日制',
          CertificateNumber: '104765201605701784',
          DegreeNumber: '104765201605701784',
          Remarks: ''
        }, {
          StartTime: '2016-10-29',
          EndTime: '2018-10-19',
          unit: '北京大学',
          unitType: '211高等学校',
          education: '本科',
          ProfessionType: '管理学',
          Profession: '人力资源管理',
          TeachModus: '全日制',
          CertificateNumber: '104765201605701784',
          DegreeNumber: '104765201605701784',
          Remarks: ''
        }
      ]
    }
  },
  methods: {
    To_WriteJob (index) {
      this.$router.push({
        path: `/teachdata`
      })
    },
    Creat_job () {
      this.$router.push({
        path: `/teachdata`,
        query: {
          name: '哒哒哒'
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/minxs.styl'
.job-li
 padding-left:.12rem
 margin-top:.3rem
 display:flex
 .job-left
  flex:10
  width: 0
  .job-lefttime
    color:$darkTextColor
    .job-lefticon
      color:#26a2ff
      font-size:.2rem
    .jobiconbgcolor
      color:red
      font-size:.2rem
  .job-menu
   margin-left:.1rem
   border-left:1px solid pink
   .teach-menuli
     display:flex
     height: .7rem
     line-height: 0.7rem
     font-size:.3rem
     .teach-menulileft
      flex:5
      text-align:right
     .teachtitle-color
      color:$darkTextColor
     .teach-menuliright
      padding-left:.2rem
      flex:7
      ellipsis()
   .job-Remarks
    box-sizing:border-box
    padding-left:.2rem
    width:100%
    height:.5rem
    color:$darkTextColor
    background:#fff
 .job-right
  display:flex
  flex:2
  justify-content:center
  align-items:center
  .job-toDetails
   font-size:.5rem
   color:$darkTextColor
.job_add
 box-sizing:border-box
 padding:0.1rem 0.4rem
 text-align:right
 .job_addimg
  font-size:.5rem
  color:#26a2ff
.job_footer
 padding:.2rem
</style>
