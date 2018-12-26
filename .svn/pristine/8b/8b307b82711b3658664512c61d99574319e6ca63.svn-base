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
  }
}
</script>

<style>

</style>
