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
         <div class="job_left" >
           *学校类型
         </div>
         <div class="job_right"  @click="User_Selectschoolsk">
             {{JobData.unitType}}
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           *学历
         </div>
         <div class="job_right" @click="User_Selecteducationsk">
             {{JobData.education}}
         </div>
       </li>
       <li class="job_li">
         <div class="job_left">
           专业类别
         </div>
         <div class="job_right" @click="User_SelectProfessionsk">
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
         <div class="job_right" @click="User_SelectTeachModussk">
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
    <mt-popup
        v-model="schoolVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="schoolslots" @change="onValuesschoolChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selectschoolsk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelectschoolSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
   <mt-popup
        v-model="educationVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="educationslots" @change="onValueseducationChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selecteducationsk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelecteducationSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
   <mt-popup
        v-model="ProfessionVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="Professionslots" @change="onValuesProfessionChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_SelectProfessionsk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelecteProfessionSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
    <mt-popup
        v-model="TeachModusVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="TeachModusslots" @change="onValuesTeachModusChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_SelectTeachModussk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelecteTeachModusSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
 </div>
</template>
<script>

export default {
  name: 'teachdata',
  data () {
    return {
      schoolVisible: false,
      educationVisible: false,
      ProfessionVisible: false,
      TeachModusVisible: false,
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
        Remarks: '',
        unitType_set: '',
        education_set: '',
        ProfessionType_set: '',
        TeachModus_set: ''
      },
      schoolslots: [
        {
          flex: 1,
          values: ['985高等学校', '211高等学校', '普通高等学校', '成人高等学校', '党校', '专业类院校', '科研机构', '网络教育', '自学考试', '其他'],
          textAlign: 'center'
        }
      ],
      educationslots: [
        {
          flex: 1,
          values: ['初中', '高中', '中技', '中专', '大专', '大学', '硕士研究生', '博士研究生', '博士后'],
          textAlign: 'center'
        }
      ],
      Professionslots: [
        {
          flex: 1,
          values: ['哲学', '经济学', '法学', '教育学', '文学', '艺术学', '历史学', '理学', '工学', '农学', '医学', '管理学', '军事学', '无'],
          textAlign: 'center'
        }
      ],
      TeachModusslots: [
        {
          flex: 1,
          values: ['普通全日制', '在职全脱产', '在职半脱产', '在职不脱产', '远程教育'],
          textAlign: 'center'
        }
      ]
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
      console.log('我是保存按钮')
    },
    User_Selectschoolsk () {
      this.schoolVisible = !this.schoolVisible
    },
    User_SelectschoolSure () {
      this.JobData.unitType = this.JobData.unitType_set
      this.schoolVisible = !this.schoolVisible
    },
    onValuesschoolChange (picker, values) {
      this.JobData.unitType_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_Selecteducationsk () {
      this.educationVisible = !this.educationVisible
    },
    User_SelecteducationSure () {
      this.JobData.education = this.JobData.education_set
      this.educationVisible = !this.educationVisible
    },
    onValueseducationChange (picker, values) {
      this.JobData.education_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_SelectProfessionsk () {
      this.ProfessionVisible = !this.ProfessionVisible
    },
    User_SelecteProfessionSure () {
      this.JobData.ProfessionType = this.JobData.ProfessionType_set
      this.ProfessionVisible = !this.ProfessionVisible
    },
    onValuesProfessionChange (picker, values) {
      this.JobData.ProfessionType_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_SelectTeachModussk () {
      this.TeachModusVisible = !this.TeachModusVisible
    },
    User_SelecteTeachModusSure () {
      this.JobData.TeachModus = this.JobData.TeachModus_set
      this.TeachModusVisible = !this.TeachModusVisible
    },
    onValuesTeachModusChange (picker, values) {
      this.JobData.TeachModus_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
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
.levelselect
  width:$selectWidth
  .picker-toolbar-title
    display:flex
    flex-direction: row
    justify-content: space-around
    height: 40px
    line-height: 40px
    font-size: 16px
</style>
