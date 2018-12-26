<template>
 <div>
   <mt-cell-swipe
    v-for="item of ReligionTypeList"
    :key="item"
    :title="item"
    @click.native="Get_Userreligion(item)"
    ></mt-cell-swipe>
 </div>
</template>
<script>
export default {
  name: 'Blood',
  data () {
    return {
      ReligionTypeList: ['无宗教信仰', '伊斯兰教', '佛教', '天主教', '基督教', '道教']
    }
  },
  methods: {
    Get_Userreligion (item) {
      this.$router.push({
        path: `/member`
      })
      this.$store.commit('Get_UserReligion', item)
    }
  }
}
</script>

<style>

</style>
