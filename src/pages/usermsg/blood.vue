<template>
 <div>
 <mt-cell-swipe
    v-for="item of BloodTypeList"
    :key="item"
    :title="item"
    @click.native="Get_UserBlood(item)"
    ></mt-cell-swipe>
 </div>
</template>
<script>
export default {
  name: 'Blood',
  data () {
    return {
      BloodTypeList: ['A型', 'B型', 'AB型', 'O型', '其他', '不详']
    }
  },
  methods: {
    Get_UserBlood (item) {
      this.$router.push({
        path: `/member`
      })
      this.$store.commit('Get_UserBlood', item)
    }
  }
}
</script>

<style>

</style>
