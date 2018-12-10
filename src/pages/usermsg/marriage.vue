<template>
 <div>
   <mt-cell-swipe
    v-for="item of MarriageTypeList"
    :key="item"
    :title="item"
    @click.native="Get_UserMarriage(item)"
    ></mt-cell-swipe>
 </div>
</template>
<script>
export default {
  name: 'marriage',
  data () {
    return {
      MarriageTypeList: ['未婚', '已婚', '离婚', '丧偶']
    }
  },
  methods: {
    Get_UserMarriage (item) {
      this.$router.push({
        path: `/member`
      })
      this.$store.commit('Get_UserMarriage', item)
    }
  }
}
</script>

<style>

</style>
