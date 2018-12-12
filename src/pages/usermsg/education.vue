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
  name: 'education',
  data () {
    return {
      BloodTypeList: ['初中', '高中', '中技', '中专', '大专', '大学', '硕士研究生', '博士研究生', '博士后']
    }
  },
  methods: {
    Get_UserBlood (item) {
      this.$emit('GetEducation', item)
    }
  }
}
</script>

<style>

</style>
