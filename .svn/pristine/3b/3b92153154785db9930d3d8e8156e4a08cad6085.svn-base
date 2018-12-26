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
  name: 'ProfessionType',
  props: {
    control: Object
  },
  data () {
    return {
      BloodTypeList: ['哲学', '经济学', '法学', '教育学', '文学', '艺术学', '历史学', '理学', '工学', '农学', '医学', '管理学', '军事学', '无']
    }
  },
  methods: {
    Get_UserBlood (item) {
      this.$emit('GetProfession', item)
    }
  }
}
</script>

<style>

</style>
