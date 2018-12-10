<template>
 <div>
   <mt-cell-swipe
    v-for="item of WageList"
    :key="item"
    :title="item"
    @click.native="Get_UserWage(item)"
    ></mt-cell-swipe>
 </div>
</template>
<script>
export default {
  name: 'wage',
  data () {
    return {
      WageList: ['当月发当月', '次月发上月', '无']
    }
  },
  methods: {
    Get_UserWage (item) {
      this.$router.push({
        path: `/member`
      })
      this.$store.commit('Get_UserWage', item)
    }
  }
}
</script>

<style>

</style>
