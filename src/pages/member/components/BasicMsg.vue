<template>
 <div>
    <ul class="Basic-ul">
        <li class="Basic-li">
            <div class="Basicmsg-left">姓氏</div>
            <div class="Basicmsg-container">
                <input type="text" value="张" />
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">名字</div>
            <div class="Basicmsg-container">
              <input type="text" value="三" />
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">国籍</div>
            <div class="Basicmsgicon-container">{{ContainerName}}</div>
            <div class="Basicmsgicon-right" @click="Get_userCountry">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">证件类型</div>
            <div class="Basicmsgicon-container">{{user_IdTypeValue}}</div>
            <div class="Basicmsgicon-right" @click="Get_IDtype">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">证件号码</div>
            <div class="Basicmsg-container">
                <input type="text" v-model="user.ID" maxlength="18" @blur="Get_UserIdTest" />
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">性别</div>
            <div class="Basicmsgicon-container">{{SexValue}}</div>
            <div class="Basicmsgicon-right" @click="Hand_sex">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">民族</div>
            <div class="Basicmsgicon-container">{{User_Race}}</div>
              <div class="Basicmsgicon-right" @click="Get_UserRace">
                  <span class="iconfont BasicIconbg" >&#xe603;</span>
              </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">籍贯</div>
            <div class="Basicmsg-container">
                <input type="text" value="北京东城区" />
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">出生日期</div>
            <div class="Basicmsg-container" @click="setDate">{{user.BornTime}}
             <span class="iconfont Basiciconfont-time">&#xe644;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">参加工作时间</div>
            <div class="Basicmsg-container" @click="setDate2">
             {{jobsTime}}
             <span class="iconfont Basiciconfont-time">&#xe644;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">部门</div>
            <div class="Basicmsg-container">
                <input type="text" value=""/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">职位</div>
            <div class="Basicmsg-container">
                <input type="text" value=""/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">政治面貌</div>
            <div class="Basicmsgicon-container">中国共产党党员</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">身高(CM)</div>
            <div class="Basicmsg-container">
                <input type="text" value="165"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">血型</div>
            <div class="Basicmsgicon-container">A型</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">宗教信仰</div>
            <div class="Basicmsgicon-container">无宗教信仰</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">兴趣爱好</div>
            <div class="Basicmsg-container">
                <input type="text" value="" placeholder="请在此处输入爱好"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">个人特长</div>
            <div class="Basicmsg-container">
                <input type="text" value="" placeholder="请在此处输入特长"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">婚姻状况</div>
            <div class="Basicmsgicon-container">未婚</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">户口性质</div>
            <div class="Basicmsgicon-container">农业</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">原参保地</div>
            <div class="Basicmsgicon-container">农业</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">单位发薪周期</div>
            <div class="Basicmsgicon-container">一月</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsgicon-left">是否独生子女</div>
            <div class="Basicmsgicon-container">是</div>
            <div class="Basicmsgicon-right">
                <span class="iconfont BasicIconbg" >&#xe603;</span>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">出生地点</div>
            <div class="Basicmsg-container">
                <input type="text" value="上海市普陀区中江路338弄1号"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">户籍住址</div>
            <div class="Basicmsg-container">
                <input type="text" value="上海市普陀区中江路338弄1号"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">家庭住址</div>
            <div class="Basicmsg-container">
                <input type="text" value="上海市普陀区中江路338弄1号"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">现在住址</div>
            <div class="Basicmsg-container">
                <input type="text" value="上海市普陀区中江路338弄1号"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">手机号码</div>
            <div class="Basicmsg-container">
                <input type="text" value="13813111311"/>
            </div>
        </li>
        <li class="Basic-li">
            <div class="Basicmsg-left">Email</div>
            <div class="Basicmsg-container">
                <input type="text" value="zhangshanshan@xincheng.com"/>
            </div>
        </li>
        <li class="Basic-li">
          <mt-button type="primary" size="large">保存</mt-button>
        </li>
    </ul>
    <div class="Basic_selectsex">
      <mt-radio
       v-show="radio_sex"
       :options="Sexoptions"
       v-model="SexValue"
       @change="user_GetSexVal"
      >
     </mt-radio>
    </div>
    <div class="Basic_selectsex">
      <mt-radio
       v-show="user_IdTypeshow"
       :options="user_IdTypeList"
       v-model="user_IdTypeValue"
      >
     </mt-radio>
    </div>
   <div class="overlayer" @touchmove.prevent v-show="Basic_opcatiybg">
   </div>
 </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MemberBasic',
  data () {
    return {
      user: {
        ID: '11010119800101103X',
        BornTime: '1970-01-01',
        testID: null
      },
      user_IdTypeValue: '身份证',
      SexValue: '女',
      msg: '../static/images/u236.png',
      Sexoptions: ['男', '女'],
      radio_sex: false,
      Basic_opcatiybg: false,
      jobsTime: '2018-01-01',
      country_value: '中国',
      user_IdTypeList: ['身份证', '台胞证', '港澳通行证'],
      user_IdTypeshow: false
    }
  },
  methods: {
    Hand_sex () {
      this.radio_sex = !this.radio_sex
      this.Basic_opcatiybg = !this.Basic_opcatiybg
    },
    user_GetSexVal () {
      this.radio_sex = !this.radio_sex
      this.Basic_opcatiybg = !this.Basic_opcatiybg
    },
    Get_IDtype () {
      this.user_IdTypeshow = !this.user_IdTypeshow
      this.Basic_opcatiybg = !this.Basic_opcatiybg
    },
    Get_userCountry () {
      this.$router.push({
        path: `/container`
      })
    },
    Get_UserRace () {
      this.$router.push({
        path: `/race`
      })
    },
    Get_UserIdTest (e) {
      if (this.user_IdTypeValue !== '身份证') {
        return
      }
      let thisValue = e.currentTarget.value
      let VueThis = this
      this.user.ID = thisValue
      this.user.testID = VueThis.$options.methods.ChinaIdChecker(thisValue)
      if (this.user.testID) {
        this.$options.methods.User_IdwrtData(VueThis)
      }
    },
    User_IdwrtData (data) {
      data.SexValue = this.USERsexName
      let USER_TIME = this.USERyearStr + '-' + this.USERmonthStr + '-' + this.USERdayStr
      data.user.BornTime = USER_TIME
      data.pickerValue = USER_TIME
    },
    formatDate (date) {
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
    ChinaIdChecker (id) {
      this.isOK = false
      this.error = ''
      if (!id || typeof (id) !== 'string' || id === '111111111111111') {
        this.error = '输入不是15位或者18位有效字符串'
        return false
      }
      if (id.length !== 15 && id.length !== 18) {
        this.error = '输入不是15位或者18位有效字符串'
        return false
      }
      if (!id.match(/^[0-9]{15}$/) && !id.match(/^[0-9]{17}[0-9xX]$/)) {
        this.error = '输入不是15位或者18位有效字符串'
        return false
      }
      let area = {
        '10': '北京',
        '11': '天津',
        '13': '河北',
        '14': '山西',
        '15': '内蒙古',
        '21': '辽宁',
        '22': '吉林',
        '23': '黑龙江',
        '31': '上海',
        '32': '江苏',
        '33': '浙江',
        '34': '安徽',
        '35': '福建',
        '36': '江西',
        '37': '山东',
        '41': '河南',
        '42': '湖北',
        '43': '湖南',
        '44': '广东',
        '45': '广西',
        '46': '海南',
        '50': '重庆',
        '51': '四川',
        '52': '贵州',
        '53': '云南',
        '54': '西藏',
        '61': '陕西',
        '62': '甘肃',
        '63': '青海',
        '64': '宁夏',
        '65': '新疆',
        '71': '台湾',
        '81': '香港',
        '82': '澳门',
        '91': '国外'
      }
      this.areaName = area[id.substr(0, 2)]
      if (!this.areaName) {
        this.error = '前2位不是有效的行政区划代码'
        return false
      }
      if (id.length === 15) {
        this.year = parseInt(id.substr(6, 2))
        this.month = parseInt(id.substr(8, 2))
        this.day = parseInt(id.substr(10, 2))
      } else {
        this.year = parseInt(id.substr(6, 4))
        this.month = parseInt(id.substr(10, 2))
        this.day = parseInt(id.substr(12, 2))
      }
      this.error = '出生日期不正确'
      if (this.month > 12) {
        return false
      }
      if (this.day > 31) {
        return false
      }
      // February can't be greater than 29 (leap year calculation comes later)
      if ((this.month === 2) && (this.day > 29)) {
        return false
      }
      // check for months with only 30 days
      if ((this.month === 4) || (this.month === 6) || (this.month === 9) || (this.month === 11)) {
        if (this.day > 30) {
          return false
        }
      }
      // if 2-digit year, use 50 as a pivot date
      if (this.year < 100) {
        this.year += 1900
      }
      if (this.year > 9999) {
        return false
      }
      // check for leap year if the month and day is Feb 29
      if ((this.month === 2) && (this.day === 29)) {
        var div4 = this.year % 4
        var div100 = this.year % 100
        var div400 = this.year % 400
        // if not divisible by 4, then not a leap year so Feb 29 is invalid
        if (div4 !== 0) {
          return false
        }
        // at this point, year is divisible by 4. So if year is divisible by
        // 100 and not 400, then it's not a leap year so Feb 29 is invalid
        if ((div100 === 0) && (div400 !== 0)) {
          return false
        }
      }
      this.USERyearStr = '' + this.year
      this.USERmonthStr = (this.month < 10 ? '0' : '') + this.month
      this.USERdayStr = (this.day < 10 ? '0' : '') + this.day
      // date is valid
      let birthDay = new Date(this.year, this.month - 1, this.day)
      if (birthDay - new Date() >= 0 || birthDay - new Date(1850, 1, 1) <= 0) {
        return false
      }
      this.error = ''
      let lastNum = id.length === 15 ? id.substr(14, 1) : id.substr(16, 1)
      this.sex = (lastNum === '1' || lastNum === '3' || lastNum === '5' || lastNum === '7' || lastNum === '9') ? '1' : '0'
      this.USERsexName = this.sex === '1' ? '男' : '女'
      if (id.length === 15) {
        this.isOK = true
        return true
      }
      let getLastValidationLetter = function (str) {
        let strArray = new Array(17)
        let Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
        let Y = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        let S = 0
        let jym = 0
        for (let i = 16; i >= 0; i -= 1) {
          strArray[i] = Number(str.charAt(i))
        }
        for (let j = 16; j >= 0; j -= 1) {
          S += strArray[j] * Wi[j]
        }
        jym = S % 11
        return Y[jym]
      }
      if (id.substr(17, 1) !== getLastValidationLetter(id.substr(0, 17))) {
        this.error = '18位身份证编码最后一位校验码不正确'
        return false
      }
      this.isOK = true
      return true
    },
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.user.BornTime = date
        }
      })
    },
    setDate2 () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (e) => {
          this.jobsTime = e
        }
      })
    }
  },
  watch: {
    user_IdTypeValue () {
      this.user_IdTypeshow = !this.user_IdTypeshow
      this.Basic_opcatiybg = !this.Basic_opcatiybg
    }
  },
  computed: mapState({
    ContainerName: state => state.ContainerName,
    User_Race: state => state.User_Race
  })
}
</script>
<style lang="stylus" scoped>
.Basic-top
  box-sizing: border-box
  display:flex
  width:100%
  padding-left:.15rem
  .Basic-topbg
   width:.2rem
   height:.5rem
   margin-top:.1rem
   background:rgba(28, 170, 254, 1)
  .Basic-title
    display:flex
    flex:1
    padding-left:.2rem
    height:.8rem
    line-height:.8rem
    text-align:left
    font-size:.35rem
    border-bottom:1px solid transparent
    -moz-border-image:url(../../../assets/img/u236.png) 30 30 round
    -webkit-border-image:url(../../../assets/img/u236.png) 30 30 round
    -o-border-image:url(../../../assets/img/u236.png) 30 30 round
    border-image:url(../../../assets/img/u236.png) 30 30 round
    .Basicmsg
     flex:.95
    .Basic-Up
      margin-top:-0.2rem
      .Basicfont
       font-size:.6rem
       color:rgba(28, 170, 254, 1)
.Basic-ul
  box-sizing:border-box
  width:100%
  padding:.2rem
  .Basic-li
   height:.7rem
   line-height:.7rem
   font-size:.27rem
   display:flex
   .Basicmsg-left
     flex:3
     text-align:right
     color:#797979
   .Basicmsg-container
     box-sizing:border-box
     padding-left:.3rem
     flex:9
     color:#000000
     .Basiciconfont-time
       margin-left:.1rem
   .Basicmsgicon-left
     flex:3
     text-align:right
     color:#797979
   .Basicmsgicon-container
     flex:7
     padding-left:.3rem
     color:#000000
   .Basicmsgicon-right
     flex:2
     .BasicIconbg
      font-size:.5rem
      color:pink
.overlayer
    position: fixed
    left: 0
    top: 0
    z-index:10
    width: 100%
    height: 100%
    opacity: 0.5
    background: #000
.Basic_selectsex
    position: fixed
    left: 0
    top: 5rem
    width:100%
    z-index:11
</style>
