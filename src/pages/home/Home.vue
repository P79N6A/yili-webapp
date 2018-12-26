<template>
 <div>
   <home-header></home-header>
   <home-icon></home-icon>
   <home-staff  v-show="Incumbent"></home-staff>
   <home-entry  v-show="!Incumbent"></home-entry>
 </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeIcon from './components/Imgicon'
import HomeStaff from './components/Staff'
import HomeEntry from './components/Entry'
import { MessageBox } from 'mint-ui'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcon,
    HomeStaff,
    HomeEntry
  },
  data () {
    return {
      Incumbent: true
    }
  },
  mounted () {
    MessageBox('欢迎您进入《人员信息登记表》的填写阶段', '请您认真阅读后如实填写,如您对信息填写存在疑问,请查看"填写说明"(后期补充填写说明在页面上的位置),我们会对您的信息进行严格保密，感谢您的理解与配合')
  }
}
</script>

<style>

</style>
