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
       <div class="job_left" :class="{ color_error: lgData.LanguageAcitve}">
         *语言
       </div>
       <div class="job_right" @click="User_lgSelectsk">
           {{lgData.Language}}
       </div>
     </li>
     <li class="job_li">
       <div class="job_left" :class="{ color_error: lgData.levelAcitve}">
         *等级证书
       </div>
       <div class="job_right" @click="User_lglevelSelectsk">
           {{lgData.level}}
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         获证日期
       </div>
       <div class="job_right"  @click="setDate">
          {{lgData.Time}}
          <span class="iconfont job_time">&#xe644;</span>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left" :class="{ color_error: lgData.GradeAcitve}">
         总成绩
       </div>
       <div class="job_right">
           <input type="number" placeholder="请在此处输入" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="lgData.Grade"/>
       </div>
     </li>
     <li class="job_li">
       <div class="job_left">
         熟练程度
       </div>
       <div class="job_right" @click="User_Selectsk">
           {{lgData.skilled}}
       </div>
     </li>
   </ul>
   <div class="job_keep" v-show="isOriginHei">
      <mt-button type="primary" size="normal" class="job_btn" @click="lgdata_keep">保存</mt-button>
      <mt-button type="danger" size="normal"  class="job_btn job_delete" @click="lgdata_remove">删除</mt-button>
   </div>
   <mt-popup
    v-model="popupVisible"
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
    v-model="lgVisible"
    position="bottom"
    popup-transition="popup-fade">
     <mt-picker :slots="lgslots" @change="lgValuesChange"  class="levelselect" showToolbar>
       <div class="picker-toolbar-title">
         <div class="usi-btn-cancel" @click="User_lgSelectsk">
            取消
         </div>
         <div>
         </div>
         <div class="usi-btn-sure" @click="User_lgSelectSure">
           确定
         </div>
        </div>
     </mt-picker>
   </mt-popup>
   <mt-popup
    v-model="lglevelVisible"
    position="bottom"
    popup-transition="popup-fade">
     <mt-picker :slots="datalevellist" @change="lglevelValuesChange"  class="levelselect" showToolbar>
       <div class="picker-toolbar-title">
         <div class="usi-btn-cancel" @click="User_lglevelSelectsk">
            取消
         </div>
         <div>
         </div>
         <div class="usi-btn-sure" @click="User_lglevelSelectSure">
           确定
         </div>
        </div>
     </mt-picker>
   </mt-popup>
 </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'lgleveldata',
  data () {
    return {
      popupVisible: false,
      showToolbar: true,
      lgVisible: false,
      lglevelVisible: false,
      slots: [
        {
          flex: 1,
          values: ['一般', '良好', '熟练', '精通'],
          textAlign: 'center'
        }
      ],
      lgslots: [
        {
          flex: 1,
          values: ['1-英语', '10-葡萄牙语', '11-越南', '12-拉丁语', '13-蒙语', '2-德语', '3-日语', '4-法语', '5-俄语', '6-韩语', '7-汉语', '8-西班牙语', '9-阿拉伯语'],
          textAlign: 'center'
        }
      ],
      MemberTitle: {
        back: '返回',
        title: '语言能力'
      },
      lgData: {
        Language: '',
        LanguageAcitve: false,
        language_set: '',
        level: '',
        level_set: '',
        levelAcitve: false,
        Time: '2010-01-09',
        Grade: '70',
        GradeAcitve: false,
        skilled: '一般',
        skilled_set: ''
      },
      slectleveldata: {
        '1': ['01-英语4级', '02-英语6级', '03-英语专业4级', '04-英语托业', '05-英语专业8级', '22-英语雅思', '23-英语托福', '40-其他'],
        '2': ['德语4级', '德语8级', '其他'],
        '3': ['日语1级', '日语2级', '日语3级', '日语4级', '其他'],
        '4': ['法语专业4级', '法语专业8级', '法语公共4级', '法语专业8级', '其他'],
        '5': ['俄语4级', '俄语8级', '俄语3级', '俄语6级', '其他'],
        '6': ['韩语1级', '韩语2级', '韩语3级', '韩语4级', '韩语5级', '韩语6级', '其他']
      },
      isOriginHei: true,
      screenHeight: document.documentElement.clientHeight,
      originHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.lgData.Time = date
        }
      })
    },
    onValuesChange (picker, values) {
      this.lgData.skilled_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_Selectsk () {
      this.popupVisible = !this.popupVisible
    },
    User_SelectSure () {
      this.popupVisible = !this.popupVisible
      this.lgData.skilled = this.lgData.skilled_set
    },
    lgValuesChange (picker, values) {
      this.lgData.language_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_lgSelectsk () {
      this.lgVisible = !this.lgVisible
    },
    User_lgSelectSure () {
      this.lgVisible = !this.lgVisible
      this.lgData.Language = this.lgData.language_set
    },
    lglevelValuesChange (picker, values) {
      this.lgData.level_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    User_lglevelSelectsk () {
      this.lglevelVisible = !this.lglevelVisible
    },
    User_lglevelSelectSure () {
      this.lglevelVisible = !this.lglevelVisible
      this.lgData.level = this.lgData.level_set
    },
    change_leveldata (item) {
      this.lgData.level = ''
      if (this.slectleveldata[item] === undefined) {
        this.datalevellist[0].values = ['其他']
      } else {
        this.datalevellist[0].values = this.slectleveldata[item]
      }
    },
    lgdata_keep () {
      let Messaged = true
      const lgData = this.lgData
      const ID = this.$route.query.name
      if (lgData.Language === '') {
        lgData.LanguageAcitve = true
        Messaged = false
      } else {
        lgData.LanguageAcitve = false
      }
      if (lgData.level === '') {
        lgData.levelAcitve = true
        Messaged = false
      } else {
        lgData.levelAcitve = false
      }
      if (lgData.Grade === '') {
        lgData.GradeAcitve = true
        Messaged = false
      } else {
        if (lgData.Grade <= 100 && lgData.Grade > 0) {
          lgData.GradeAcitve = false
        } else {
          lgData.GradeAcitve = true
          Messaged = false
        }
      }
      if (Messaged) {
        if (ID === undefined) {
          let listlength = this.$store.state.language.languagedatalist.length + 1
          let addmsg = {
            id: listlength,
            language: lgData.Language,
            level: lgData.level,
            date: lgData.Time,
            Grade: lgData.Grade,
            skilled: lgData.skilled
          }
          this.$store.commit('languageAddMsg', addmsg)
          this.$router.push({
            path: `/member`
          })
        } else {
          let writemsg = {
            id: ID,
            language: lgData.Language,
            level: lgData.level,
            date: lgData.Time,
            Grade: lgData.Grade,
            skilled: lgData.skilled
          }
          this.$store.commit('languageWriteMsg', writemsg)
          this.$router.push({
            path: `/member`
          })
        }
        MessageBox('信息正确', '信息保存成功')
      } else {
        MessageBox('提交信息有误', '有误信息已经标红,请修改')
      }
    },
    lgdata_remove () {
      const ID = this.$route.query.name
      if (ID === undefined) {
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      } else {
        this.$store.commit('languageRemoveMsg', ID)
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      }
    }
  },
  mounted () {
    let self = this
    window.onresize = function () {
      return (function () {
        self.screenHeight = document.documentElement.clientHeight
      })()
    }
  },
  watch: {
    'lgData.Language' (item) {
      let lgname = parseInt(item)
      this.change_leveldata(lgname)
    },
    screenHeight (val) {
      if (this.originHeight > val) {
        this.isOriginHei = false
      } else {
        this.isOriginHei = true
      }
    }
  },
  computed: {
    datalevellist () {
      let lglevelslots = [
        {
          flex: 1,
          values: ['英语4级', '英语6级', '英语专业4级', '英语托业', '英语专业8级', '英语雅思', '英语托福', '其他'],
          textAlign: 'center'
        }
      ]
      return lglevelslots
    }
  },
  activated () {
    const ID = this.$route.query.name
    if (ID === undefined) {
      console.log('初始化模板')
      this.lgData.Language = ''
      this.lgData.LanguageAcitve = false
      this.lgData.language_set = '1-英语'
      this.lgData.level = ''
      this.lgData.level_set = '英语4级'
      this.lgData.levelAcitve = false
      this.lgData.Time = '2010-01-01'
      this.lgData.Grade = ''
      this.lgData.GradeAcitve = false
      this.lgData.skilled = '一般'
      this.lgData.skilled_set = '一般'
    } else {
      console.log('准备数据')
      let data = this
      let list = this.$store.state.language.languagedatalist
      list.forEach(function (item) {
        if (item.id === ID) {
          data.lgData.level = item.level
          data.lgData.Language = item.language
          data.lgData.Time = item.date
          data.lgData.Grade = item.Grade
          data.lgData.skilled = item.skilled
        }
      })
      this.lgData.LanguageAcitve = false
      this.lgData.levelAcitve = false
      this.lgData.GradeAcitve = false
      this.lgData.language_set = '1-英语'
      this.lgData.level_set = '英语4级'
      this.lgData.skilled_set = '一般'
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
