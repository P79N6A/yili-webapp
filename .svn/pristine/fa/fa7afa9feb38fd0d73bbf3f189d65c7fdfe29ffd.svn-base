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
  name: 'SchooleType',
  props: {
    control: Object
  },
  data () {
    return {
      BloodTypeList: ['985高等学校', '211高等学校', '普通高等学校', '成人高等学校', '党校', '专业类院校', '科研机构', '网络教育', '自学考试', '其他']
    }
  },
  methods: {
    Get_UserBlood (item) {
      this.$emit('GetSchool', item)
    }
  }
}
</script>

<style>

</style>
