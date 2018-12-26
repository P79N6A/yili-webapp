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
  name: 'TeachModus',
  props: {
    control: Object
  },
  data () {
    return {
      BloodTypeList: ['普通全日制', '在职全脱产', '在职半脱产', '在职不脱产', '远程教育']
    }
  },
  methods: {
    Get_UserBlood (item) {
      this.$emit('ChangeUserModus', item)
    }
  }
}
</script>

<style>

</style>
