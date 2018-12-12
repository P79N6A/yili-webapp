<template>
<div>
   <div v-show="teach_control.Menu">
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
           *学校名称
         </div>
         <div class="job_right">
             <input type="text" placeholder="请在此处输入"  :value="JobData.unit"/>
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           *学校类型
         </div>
         <div class="job_right" @click="Get_SchoolType">
             {{JobData.unitType}}
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           *学历
         </div>
         <div class="job_right" @click="Get_UserEducation">
             {{JobData.education}}
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           专业类别
         </div>
         <div class="job_right" @click="Get_Profession">
             {{JobData.ProfessionType}}
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           专业
         </div>
         <div class="job_right">
              <input type="text" placeholder="请在此处输入"  :value="JobData.Profession"/>
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           教育形式
         </div>
         <div class="job_right" @click="Get_TeachType">
             {{JobData.TeachModus}}
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           学历证书编号
         </div>
         <div class="job_right">
             <input type="text" placeholder="请在此处输入"  :value="JobData.CertificateNumber"/>
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           学位证书编号
         </div>
         <div class="job_right">
              <input type="text" placeholder="请在此处输入"  :value="JobData.DegreeNumber"/>
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
   <!--子组件-->
   <teach-school v-show="teach_control.school" :control="teach_control" @GetSchool="School_Name"></teach-school>
   <teach-education v-show="teach_control.education" @GetEducation="User_Education"></teach-education>
   <profession-type v-show="teach_control.profession" @GetProfession="User_Profession"></profession-type>
   <teach-modus v-show="teach_control.mouds" @ChangeUserModus="Get_UserModus"></teach-modus>
 </div>
</template>
<script>
import TeachSchool from '@/pages/usermsg/SchoolType'
import TeachEducation from '@/pages/usermsg/education'
import ProfessionType from '@/pages/usermsg/ProfessionType'
import TeachModus from '@/pages/usermsg/TeachModus'

export default {
  name: 'teachdata',
  data () {
    return {
      teach_control: {
        school: false,
        education: false,
        profession: false,
        mouds: false,
        Menu: true
      },
      MemberTitle: {
        back: '返回',
        title: '教育经历'
      },
      JobData: {
        StartTime: '2010-01-09',
        EndTime: '2020-09-11',
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
    }
  },
  components: {
    TeachSchool,
    TeachEducation,
    ProfessionType,
    TeachModus
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
      console.log('我是保存按钮')
    },
    Get_SchoolType () {
      this.teach_control.school = !this.teach_control.school
    },
    School_Name (item) {
      this.JobData.unitType = item
      this.teach_control.school = !this.teach_control.school
    },
    Get_UserEducation () {
      this.teach_control.education = !this.teach_control.education
    },
    User_Education (item) {
      this.JobData.education = item
      this.teach_control.education = !this.teach_control.education
    },
    Get_Profession () {
      this.teach_control.profession = !this.teach_control.profession
    },
    User_Profession (item) {
      this.JobData.ProfessionType = item
      this.teach_control.profession = !this.teach_control.profession
    },
    Get_TeachType () {
      this.teach_control.mouds = !this.teach_control.mouds
    },
    Get_UserModus (item) {
      this.JobData.TeachModus = item
      this.teach_control.mouds = !this.teach_control.mouds
    }
  },
  mounted () {
    // this.JobData.JobWitness = this.$route.query.name
    // console.log(this.JobData.JobWitness)
  },
  watch: {
    'teach_control.school' () {
      this.teach_control.Menu = !this.teach_control.Menu
    },
    'teach_control.education' () {
      this.teach_control.Menu = !this.teach_control.Menu
    },
    'teach_control.profession' () {
      this.teach_control.Menu = !this.teach_control.Menu
    },
    'teach_control.mouds' () {
      this.teach_control.Menu = !this.teach_control.Menu
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
     flex:4
     font-size:.3rem
    .job_right
     flex:8
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
.overlayer
  position: fixed
  left: 0
  top: 0
  z-index:10
  width: 100%
  height: 100%
  opacity: 0.5
  background: #000
</style>
