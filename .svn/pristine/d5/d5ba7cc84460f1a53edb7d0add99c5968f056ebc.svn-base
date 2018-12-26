<template>
  <div>
    <ul>
        <li class="family-li" v-for="item of HealthList" :key="item.id">
            <div class="family-left">
              <ul>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          发证日期
                      </div>
                      <div class="familymenu-right">
                          {{item.starttime}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          过期日期
                      </div>
                      <div class="familymenu-right">
                          {{item.endtime}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          发证单位
                      </div>
                      <div class="familymenu-right">
                          {{item.unit}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          备注
                      </div>
                      <div class="familymenu-right">
                          {{item.marker}}
                      </div>
                  </li>
              </ul>
            </div>
             <div class="family-right" @click="To_familyDetails">
                 <span class="iconfont family-img">&#xe601;</span>
             </div>
        </li>
    </ul>
    <p class="job_add" >
      <span class="iconfont job_addimg">&#xe608;</span>
    </p>
    <div class="job_footer">
      <mt-button type="primary" size="large">保存</mt-button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'health',
  data () {
    return {
      HealthList: [
        {
          id: '001',
          starttime: '2018-01-10',
          endtime: '2020-10-10',
          unit: '呼和浩特人民医院',
          marker: '这是一个健康证的备注这是一个健康证的备注这是一个健康证的备注这是一个健康证的备注'
        }
      ]
    }
  },
  methods: {
    To_familyDetails () {
      this.$router.push({
        path: `/healthdata`,
        query: {
          name: '哒哒哒'
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/minxs.styl'
.family-li
  display:flex
  padding:.2rem
  font-size:.3rem
  .family-left
   flex:10
   border-bottom:1px solid pink
   .familymenu
    display:flex
    height: .7rem
    line-height: .7rem
    .familymenu-left
     flex:3
     text-align:right
     color:$darkTextColor
    .familymenu-right
     box-sizing:border-box
     padding-left:.2rem
     width:0
     flex:9
     ellipsis()
  .family-right
   display:flex
   flex:2
   align-items: center
   justify-content: center
   .family-img
    font-size: 0.5rem
    color: $darkTextColor
.job_add
 box-sizing:border-box
 padding:0.1rem 0.4rem
 text-align:right
 .job_addimg
  font-size:.5rem
  color:#26a2ff
.job_footer
 padding:.2rem
</style>
