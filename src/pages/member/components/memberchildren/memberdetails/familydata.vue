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
           <div class="job_left" :class="{ color_error: familymember.relationActive}">
             与本人关系
           </div>
           <div class="job_right" @click="User_Selectsk">
              {{familymember.relation}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.nameActive}">
             姓名
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" v-model="familymember.name"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.sexActive}">
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
           <div class="job_left" :class="{ color_error: familymember.unitActive}">
             工作单位/学习院校
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入"  v-model="familymember.unit"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.officeActive}">
             职位/身份
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" v-model="familymember.office"/>
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
           <div class="job_left" :class="{ color_error: familymember.inaddressActive}">
             详细地址
           </div>
           <div class="job_right">
               <input type="text" placeholder="如道路、门牌号、小区等" v-model="familymember.inaddress"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.crashkActive}">
             紧急联系人
           </div>
           <div class="job_right" @click="User_Selectcrashsk">
               {{familymember.crash}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.contactphoneActive}">
             联系方式
           </div>
           <div class="job_right">
               <input type="number" placeholder="请在此处输入" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="familymember.contactphone"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.yilijobActive}">
             是否在伊利工作
           </div>
           <div class="job_right" @click="User_Selectyilisk">
               {{familymember.yilijob}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: familymember.StaffIDActive}">
             家庭成员员工ID
           </div>
           <div class="job_right">
               <input type="text" placeholder="请在此处输入" v-model="familymember.StaffID"/>
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
          <mt-button type="primary" size="normal" class="job_btn" @click="familymsg_keep">保存</mt-button>
          <mt-button type="danger" size="normal"  class="job_btn job_delete" @click="familymsg_remove">删除</mt-button>
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
import { MessageBox } from 'mint-ui'
import global_ from '@/pages/Global/global'
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
        relationActive: false,
        name: '张大牛',
        nameActive: false,
        sex: '男',
        sexActive: false,
        birthday: '1980-10-10',
        contactphone: '13701232834',
        contactphoneActive: false,
        unit: '伊利商学院',
        unitActive: false,
        office: '主管',
        officeActive: false,
        address: '北京市 直辖区 东城区',
        inaddress: '伊利商学院职工小区',
        inaddressActive: false,
        crash: '是',
        crashkActive: false,
        yilijob: '是',
        yilijobActive: false,
        StaffID: '140XXXXXXXXX',
        StaffIDActive: false,
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
    },
    familymsg_keep () {
      let message = true
      const familymember = this.familymember
      const usersexvalue = '男'
      const reg = global_.userPhone
      const addressreg = global_.AddressReg
      const tellreg = global_.usertellPhone
      const ID = this.$route.query.name
      if (familymember.name === '') {
        familymember.nameActive = true
        message = false
      } else {
        familymember.nameActive = false
      }
      if (familymember.relation === '配偶' && familymember.sex === usersexvalue) {
        familymember.relationActive = true
        familymember.sexActive = true
        message = false
      } else {
        familymember.relationActive = false
        familymember.sexActive = false
      }
      if (familymember.unit === '') {
        familymember.unitActive = true
        message = false
      } else {
        familymember.unitActive = false
      }
      if (familymember.office === '') {
        familymember.officeActive = true
        message = false
      } else {
        familymember.officeActive = false
      }
      if (!addressreg.test(familymember.inaddress)) {
        addressreg.lastIndex = 0
        familymember.inaddressActive = true
        message = false
      } else {
        addressreg.lastIndex = 0
        familymember.inaddressActive = false
      }
      if (familymember.crash === '是') {
        if (familymember.contactphone === '') {
          familymember.contactphoneActive = true
          message = false
        } else if (familymember.contactphone !== '') {
          let phoneone = familymember.contactphone.substring(0, 1)
          if (phoneone === '1') {
            if (!reg.test(familymember.contactphone)) {
              familymember.contactphoneActive = true
              message = false
            } else {
              familymember.contactphoneActive = false
            }
          } else if (phoneone !== '1') {
            if (!tellreg.test(familymember.contactphone)) {
              familymember.contactphoneActive = true
              message = false
            } else {
              familymember.contactphoneActive = false
            }
          }
        }
      }
      if (familymember.yilijob === '是' && familymember.StaffID === '') {
        familymember.StaffIDActive = true
        message = false
      } else if (familymember.yilijob === '是' && familymember.StaffID !== '') {
        familymember.StaffIDActive = false
      } else if (familymember.yilijob === '否') {
        familymember.StaffIDActive = false
      }
      if (message) {
        if (ID === undefined) {
          let listlength = this.$store.state.family.FamilyList.length + 1
          let addmsg = {
            id: listlength,
            relation: familymember.relation,
            name: familymember.name,
            sex: familymember.sex,
            BirthdayDate: familymember.birthday,
            ContactPhone: familymember.contactphone,
            unit: familymember.unit,
            Identity: familymember.office,
            address: familymember.address,
            inaddress: familymember.inaddress,
            urgent: familymember.crash,
            yilijob: familymember.yilijob,
            StaffID: familymember.StaffID,
            spousejob: familymember.matejob
          }
          this.$store.commit('FamilyAddMsg', addmsg)
          this.$router.push({
            path: `/member`
          })
        } else {
          let writemsg = {
            id: ID,
            relation: familymember.relation,
            name: familymember.name,
            sex: familymember.sex,
            BirthdayDate: familymember.birthday,
            ContactPhone: familymember.contactphone,
            unit: familymember.unit,
            Identity: familymember.office,
            address: familymember.address,
            inaddress: familymember.inaddress,
            urgent: familymember.crash,
            yilijob: familymember.yilijob,
            StaffID: familymember.StaffID,
            spousejob: familymember.matejob
          }
          this.$store.commit('FamilyWriteMsg', writemsg)
          this.$router.push({
            path: `/member`
          })
        }
        MessageBox('信息正确', '信息保存成功')
      } else {
        MessageBox('提交信息有误', '有误信息已经标红,请修改')
      }
    },
    familymsg_remove () {
      const ID = this.$route.query.name
      if (ID === undefined) {
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      } else {
        this.$store.commit('FamilyRemoveMsg', ID)
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      }
    }
  },
  activated () {
    const ID = this.$route.query.name
    if (ID === undefined) {
      console.log('新建模板')
      const familymember = this.familymember
      familymember.relation = '父'
      familymember.relationActive = false
      familymember.name = ''
      familymember.nameActive = false
      familymember.sex = '男'
      familymember.sexActive = false
      familymember.birthday = '1980-10-10'
      familymember.contactphone = ''
      familymember.contactphoneActive = false
      familymember.unit = ''
      familymember.unitActive = false
      familymember.office = ''
      familymember.officeActive = false
      familymember.address = '北京市 直辖区 东城区'
      familymember.inaddress = ''
      familymember.inaddressActive = false
      familymember.crash = '是'
      familymember.crashkActive = false
      familymember.yilijob = '是'
      familymember.yilijobActive = false
      familymember.StaffID = ''
      familymember.StaffIDActive = false
      familymember.matejob = '是'
      familymember.relation_set = '配偶'
      familymember.sex_set = '男'
      familymember.crash_set = '是'
      familymember.yilijob_set = '是'
      familymember.matejob_set = '是'
    } else {
      console.log('准备数据')
      const familymember = this.familymember
      let list = this.$store.state.family.FamilyList
      list.forEach(function (item) {
        if (item.id === ID) {
          familymember.relation = item.relation
          familymember.name = item.name
          familymember.sex = item.sex
          familymember.BirthdayDate = item.BirthdayDate
          familymember.contactphone = item.ContactPhone
          familymember.unit = item.unit
          familymember.office = item.Identity
          familymember.address = item.address
          familymember.inaddress = item.inaddress
          familymember.crash = item.urgent
          familymember.yilijob = item.yilijob
          familymember.StaffID = item.StaffID
          familymember.matejob = item.spousejob
        }
      })
      familymember.relationActive = false
      familymember.nameActive = false
      familymember.sexActive = false
      familymember.contactphoneActive = false
      familymember.unitActive = false
      familymember.officeActive = false
      familymember.inaddressActive = false
      familymember.crashkActive = false
      familymember.yilijobActive = false
      familymember.StaffIDActive = false
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
