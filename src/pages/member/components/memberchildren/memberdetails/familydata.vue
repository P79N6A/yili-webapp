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
             与本人关系
           </div>
           <div class="job_right" @click="User_Selectsk">
              {{familymember.relation}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             姓名
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" :value="familymember.name"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             性别
           </div>
           <div class="job_right" @click="User_Selectsexsk">
               {{familymember.sex}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             出生日期
           </div>
           <div class="job_right" @click="setDate">
               {{familymember.birthday}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             联系方式
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" :value="familymember.contactphone"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             工作单位/学习院校
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" :value="familymember.unit"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             职位/身份
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" :value="familymember.office"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             住址信息
           </div>
           <div class="job_right" @click="showPicker4">
               {{familymember.address}}
               <span class="iconfont Basiciconfont-time">&#xe64c;</span>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             详细地址
           </div>
           <div class="job_right">
               <input type="text" placeholder="如道路、门牌号、小区等" :value="familymember.inaddress"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             紧急联系人
           </div>
           <div class="job_right" @click="User_Selectcrashsk">
               {{familymember.crash}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" >
             是否在伊利工作
           </div>
           <div class="job_right" @click="User_Selectyilisk">
               {{familymember.yilijob}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             家庭成员员工ID
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" :value="familymember.StaffID"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             配偶是否有工作
           </div>
           <div class="job_right" @click="User_Selectmatesk">
               {{familymember.matejob}}
           </div>
         </li>
       </ul>
       <div class="job_keep">
          <mt-button type="primary" size="normal" class="job_btn">保存</mt-button>
          <mt-button type="danger" size="normal"  class="job_btn job_delete">删除</mt-button>
       </div>
       <mt-popup
          v-model="parentVisible"
          position="bottom"
          popup-transition="popup-fade">
            <mt-picker :slots="slots" @change="onValuesChange"  class="levelselect" showToolbar>
                 <div class="picker-toolbar-title">
                     <div class="usi-btn-cancel" @click="User_Selectsk">
                        取消
                     </div>
                     <div>
                     </div>
                     <div class="usi-btn-sure" @click="User_SelectSure">
                       确定
                     </div>
                  </div>
           </mt-picker>
        </mt-popup>
    <mt-popup
        v-model="sexVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="sexslots" @change="onValuessexChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selectsexsk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelectsexSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
   <mt-popup
        v-model="crashVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="crashslots" @change="onValuescrashChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selectcrashsk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelectcrashSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
   <mt-popup
        v-model="yiliVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="yilislots" @change="onValuesyiliChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selectyilisk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelectyiliSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
   <mt-popup
        v-model="mateiVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="mateslots" @change="onValuesmateChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selectmatesk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelectmateSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
   <awesome-picker
      ref="picker4"
      :textTitle="picker4.textTitle"
      :data="picker4.data"
      :anchor="picker4.anchor"
      :colorConfirm="picker4.areaconbg"
      :colorCancel="picker4.areaconbg"
      @confirm="handlePicker4Confirm">
    </awesome-picker>
</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import areaData from '@/assets/js/area'
import AwesomePicker from 'vue-awesome-picker'
Vue.use(AwesomePicker)

export default {
  name: 'FamilyData',
  data () {
    return {
      parentVisible: false,
      sexVisible: false,
      crashVisible: false,
      yiliVisible: false,
      mateiVisible: false,
      MemberTitle: {
        back: '返回',
        title: '家庭成员'
      },
      familymember: {
        relation: '父',
        name: '张大牛',
        sex: '男',
        birthday: '1980-10-10',
        contactphone: '13701232834',
        unit: '伊利商学院',
        office: '主管',
        address: '北京市 直辖区 东城区',
        inaddress: '伊利商学院职工小区',
        crash: '是',
        yilijob: '是',
        StaffID: '140XXXXXXXXX',
        matejob: '是',
        relation_set: '',
        sex_set: '',
        crash_set: '',
        yilijob_set: '',
        matejob_set: ''
      },
      slots: [
        {
          flex: 1,
          values: ['配偶', '子', '女', '父/母', '兄/嫂', '弟/弟媳', '姐/姐夫', '妹/妹夫', '其他'],
          textAlign: 'center'
        }
      ],
      sexslots: [
        {
          flex: 1,
          values: ['男', '女'],
          textAlign: 'center'
        }
      ],
      crashslots: [
        {
          flex: 1,
          values: ['是', '否'],
          textAlign: 'center'
        }
      ],
      yilislots: [
        {
          flex: 1,
          values: ['是', '否'],
          textAlign: 'center'
        }
      ],
      mateslots: [
        {
          flex: 1,
          values: ['是', '否'],
          textAlign: 'center'
        }
      ],
      picker4: {
        anchor: [],
        textTitle: '',
        areaconbg: '#000',
        data: areaData
      }
    }
  },
  methods: {
    User_Selectsk () {
      this.parentVisible = !this.parentVisible
    },
    User_SelectSure () {
      this.familymember.relation = this.familymember.relation_set
      this.parentVisible = !this.parentVisible
    },
    onValuesChange (picker, values) {
      this.familymember.relation_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_Selectsexsk () {
      this.sexVisible = !this.sexVisible
    },
    User_SelectsexSure () {
      this.familymember.sex = this.familymember.sex_set
      this.sexVisible = !this.sexVisible
    },
    onValuessexChange (picker, values) {
      this.familymember.sex_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_Selectcrashsk () {
      this.crashVisible = !this.crashVisible
    },
    User_SelectcrashSure () {
      this.familymember.crash = this.familymember.crash_set
      this.crashVisible = !this.crashVisible
    },
    onValuescrashChange (picker, values) {
      this.familymember.crash_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_Selectyilisk () {
      this.yiliVisible = !this.yiliVisible
    },
    User_SelectyiliSure () {
      this.familymember.yilijob = this.familymember.yilijob_set
      this.yiliVisible = !this.yiliVisible
    },
    onValuesyiliChange (picker, values) {
      this.familymember.yilijob_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_Selectmatesk () {
      this.mateiVisible = !this.mateiVisible
    },
    User_SelectmateSure () {
      this.familymember.matejob = this.familymember.matejob_set
      this.mateiVisible = !this.mateiVisible
    },
    onValuesmateChange (picker, values) {
      this.familymember.matejob_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.familymember.birthday = date
        }
      })
    },
    showPicker4 () {
      this.$refs.picker4.show()
    },
    handlePicker4Confirm (v) {
      this.picker4.anchor = v
      this.value = v ? JSON.stringify(v) : null
      // console.log('籍贯id是否正确' + JSON.stringify(this.picker4))
      let objarea = JSON.parse(this.value)
      this.familymember.address = objarea[0].value + ' ' + objarea[1].value + ' ' + objarea[2].value
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
</style>
