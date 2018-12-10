<template>
 <div>
    <mt-cell-swipe
    v-for="item of list"
    :key="item"
    :title="item"
    @click.native="Get_UserRace(item)"
    ></mt-cell-swipe>
 </div>
</template>
<script>

export default {
  name: 'political',
  data () {
    return {
      list: [
        '中共党员',
        '中共预备党员',
        '共青团员',
        '群众',
        '无党派民主人士',
        '九三学社社员',
        '农工党党员',
        '台盟盟员',
        '民建会员',
        '民盟盟员',
        '民进会员',
        '民革会员',
        '致公党党员'
      ]
    }
  },
  methods: {
    Get_UserRace (item) {
      this.$router.push({
        path: `/member`
      })
      this.$store.commit('Get_UserPoliticalState', item)
    }
  }
}
</script>

<style>

</style>
