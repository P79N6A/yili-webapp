<template>
 <div>
     <div class="img-container">
       <img :src="imgUrl" class="img-content" alt="" />
     </div>
 </div>
</template>
<script>

export default {
  name: 'HomeIcon',
  data () {
    return {
      imgUrl: '../static/images/u17.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.img-container
  margin-top:.05rem
  overflow:hidden
  height:0
  padding-bottom:58%
  .img-content
    margin-top:.01rem
    display:block
    width:100%
</style>
