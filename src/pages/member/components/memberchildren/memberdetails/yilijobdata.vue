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
             姓名
           </div>
           <div class="job_right" :class="{ color_error: yiliman.nameActive}">
              <input type="text"  v-model="yiliman.name" />
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             与本人关系
           </div>
           <div class="job_right" @click="User_Selectsk">
               {{yiliman.relation}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left" :class="{ color_error: yiliman.phoneActive}">
             联系方式
           </div>
           <div class="job_right">
               <input type="number" v-model="yiliman.phone" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' placeholder="请在此输入" />
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             所在单位
           </div>
           <div class="job_right">
               <input type="text" v-model="yiliman.unit"  placeholder="请在此输入"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             职位
           </div>
           <div class="job_right">
               <input type="text" v-model="yiliman.office"  placeholder="请在此输入"/>
           </div>
         </li>
       </ul>
       <div class="job_keep" v-show="isOriginHei">
          <mt-button type="primary" size="normal" class="job_btn" @click="yilijob_keep">保存</mt-button>
          <mt-button type="danger" size="normal"  class="job_btn job_delete" @click="yilijob_remove">删除</mt-button>
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
</div>
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui'
import global_ from '@/pages/Global/global'

export default {
  name: 'yilimandata',
  data () {
    return {
      parentVisible: false,
      MemberTitle: {
        back: '返回',
        title: '伊利亲属'
      },
      yiliman: {
        name: '李大牛',
        nameActive: false,
        relation: '父',
        phone: '18712307349',
        phoneActive: false,
        unit: '伊利商学院',
        office: '培训主管',
        relation_set: '父'
      },
      slots: [
        {
          flex: 1,
          values: ['配偶', '子', '女', '父/母', '兄/嫂', '弟/弟媳', '姐/姐夫', '妹/妹夫', '其他'],
          textAlign: 'center'
        }
      ],
      isOriginHei: true,
      screenHeight: document.documentElement.clientHeight,
      originHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    User_Selectsk () {
      this.parentVisible = !this.parentVisible
    },
    User_SelectSure () {
      this.yiliman.relation = this.yiliman.relation_set
      this.parentVisible = !this.parentVisible
    },
    onValuesChange (picker, values) {
      this.yiliman.relation_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    yilijob_keep () {
      let msgboolean = true
      const yiliman = this.yiliman
      const reg = global_.userPhone
      const tellreg = global_.usertellPhone
      const ID = this.$route.query.name
      if (yiliman.name === '') {
        yiliman.nameActive = true
        msgboolean = false
      } else {
        yiliman.nameActive = false
      }
      if (yiliman.phone === '') {
        yiliman.phoneActive = true
        msgboolean = false
      } else if (yiliman.phone !== '') {
        let phoneone = yiliman.phone.substring(0, 1)
        if (phoneone === '1') {
          if (!reg.test(yiliman.phone)) {
            yiliman.phoneActive = true
            msgboolean = false
          } else {
            yiliman.phoneActive = false
          }
        } else if (phoneone !== '1') {
          if (!tellreg.test(yiliman.phone)) {
            yiliman.phoneActive = true
            msgboolean = false
          } else {
            yiliman.phoneActive = false
          }
        }
      }
      if (msgboolean) {
        if (ID === undefined) {
          let listlength = this.$store.state.yilijobdatalist.yilijobdatalist.length + 1
          let addmsg = {
            id: listlength,
            name: yiliman.name,
            relation: yiliman.relation,
            phone: yiliman.phone,
            unit: yiliman.unit,
            office: yiliman.office
          }
          this.$store.commit('yiliAddMsg', addmsg)
          this.$router.push({
            path: `/member`
          })
        } else {
          let writemsg = {
            id: ID,
            name: yiliman.name,
            relation: yiliman.relation,
            phone: yiliman.phone,
            unit: yiliman.unit,
            office: yiliman.office
          }
          this.$store.commit('yiliWriteMsg', writemsg)
          this.$router.push({
            path: `/member`
          })
        }
        MessageBox('信息正确', '信息保存成功')
      } else {
        MessageBox('提交信息有误', '有误信息已经标红,请修改')
      }
    },
    yilijob_remove () {
      const ID = this.$route.query.name
      if (ID === undefined) {
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      } else {
        this.$store.commit('yilihRemoveMsg', ID)
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
    screenHeight (val) {
      if (this.originHeight > val) {
        this.isOriginHei = false
      } else {
        this.isOriginHei = true
      }
    }
  },
  computed: {
    parentlist () {
      let parentslots = [
        {
          flex: 1,
          values: [{
            'code': '10',
            'name': '子女'
          }, {
            'code': '12',
            'name': '配偶'
          }, {
            'code': '15',
            'name': '父/母'
          }],
          textAlign: 'center'
        }
      ]
      return parentslots
    }
  },
  activated () {
    const ID = this.$route.query.name
    const yiliman = this.yiliman
    yiliman.nameActive = false
    yiliman.phoneActive = false
    if (ID === undefined) {
      console.log('创建新模板')
      yiliman.name = ''
      yiliman.relation = '父'
      yiliman.phone = ''
      yiliman.unit = ''
      yiliman.office = ''
    } else {
      console.log('准备数据')
      let list = this.$store.state.yilijobdatalist.yilijobdatalist
      list.forEach(function (item) {
        if (item.id === ID) {
          yiliman.name = item.name
          yiliman.relation = item.relation
          yiliman.phone = item.phone
          yiliman.unit = item.unit
          yiliman.office = item.office
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
</style>
