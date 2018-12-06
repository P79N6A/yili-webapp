<template>
 <div>
 <member-header></member-header>
 <!-- <member-basic></member-basic> -->
 <member-menu></member-menu>
 </div>
</template>
<script>
import MemberHeader from './components/Header'
import MemberBasic from './components/BasicMsg'
import MemberMenu from './components/BasicMenu'

export default {
  name: 'Member',
  components: {
    MemberHeader,
    MemberBasic,
    MemberMenu
  }
}
</script>

<style>

</style>
