<template>
 <div>
   <mt-cell-swipe
    v-for="item of AccountTypeList"
    :key="item"
    :title="item"
    @click.native="Get_UserAccount(item)"
    ></mt-cell-swipe>
 </div>
</template>
<script>
export default {
  name: 'account',
  data () {
    return {
      AccountTypeList: ['农业', '非农业', '台湾籍']
    }
  },
  methods: {
    Get_UserAccount (item) {
      this.$router.push({
        path: `/member`
      })
      this.$store.commit('Get_UserAccount', item)
    }
  }
}
</script>

<style>

</style>
