<template>
 <div class="staff-menu">
   <ul class="staff-ul">
     <li class="staff-li" @click="ToMember">
        <div class="staff-left">
          <div class="staff-imgcontent">
           <span class="iconfont staff-label">&#xe625;</span>
          </div>
        </div>
        <div class="staff-title">员工信息采集</div>
     </li>
     <li class="staff-li" @click="ToEntry">
        <div class="staff-left">
          <div class="staff-imgcontent">
           <span class="iconfont staff-label">&#xe604;</span>
          </div>
        </div>
        <div class="staff-title">入职材料补充</div>
     </li>
   </ul>
 </div>
</template>
<script>
export default {
  name: 'HomeStaff',
  data () {
    return {
      list: ''
    }
  },
  methods: {
    ToMember () {
      this.$router.push({
        path: `/member`
      })
    },
    ToEntry () {
      this.$router.push({
        path: `/entry`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.staff-menu
  margin-top:.1rem
  .staff-li
   width:99%
   float:right
   height: $darkHeight
   padding-top:.2rem
   padding-bottom:.2rem
   border-bottom:2px solid #A6A6A6
   box-shadow:0 2px 3px -1px #A6A6A60
   .staff-left
     float:left
     width:20%
     height: $darkHeight
     line-height: $darkHeight
     .staff-imgcontent
      width:.9rem
      height:.9rem
      line-height:.9rem
      background:rgb(28,170,254)
      border-radius:50%
      margin-top:.1rem
      margin-left:auto
      margin-right:auto
      .staff-label
       padding-left:.15rem
       color:#fff
       font-size:.6rem
    .staff-title
      width:60%
      height: $darkHeight
      line-height: $darkHeight
      text-align:center
      float:left
      color:#000000
      font-size:.35rem
    .staff-right
      width:18%
      height: $darkHeight
      line-height: $darkHeight
      float:right
      .staff-collection
       float:right
       margin-right:.3rem
       color:#999999
       font-size:.5rem
</style>
