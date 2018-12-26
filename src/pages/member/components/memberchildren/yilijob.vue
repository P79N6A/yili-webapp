<template>
  <div>
    <ul>
        <li class="family-li" v-for="item of yilijobdatalist" :key="item.id">
            <div class="family-left">
              <ul>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          姓名
                      </div>
                      <div class="familymenu-right">
                          {{item.name}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          与本人关系
                      </div>
                      <div class="familymenu-right">
                          {{item.relation}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          联系方式
                      </div>
                      <div class="familymenu-right">
                          {{item.phone}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          所在单位
                      </div>
                      <div class="familymenu-right">
                          {{item.unit}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          职位
                      </div>
                      <div class="familymenu-right">
                          {{item.office}}
                      </div>
                  </li>
              </ul>
            </div>
             <div class="family-right" @click="To_familyDetails(item.id)">
                 <span class="iconfont family-img">&#xe601;</span>
             </div>
        </li>
    </ul>
    <p class="job_add" @click="To_familyDetails()">
      <span class="iconfont job_addimg">&#xe608;</span>
    </p>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  name: 'yilijob',
  data () {
    return {
      yiliList: [
        {
          id: '001',
          name: '长二牛',
          relation: '兄',
          phone: '18721342345',
          unit: '伊利集团商学院',
          office: '培训主管'
        }
      ]
    }
  },
  methods: {
    To_familyDetails (itemid) {
      this.$router.push({
        path: `/yilimandata`,
        query: {
          name: itemid
        }
      })
    }
  },
  computed: {
    ...mapState({
      yilijobdatalist: state => state.yilijobdatalist.yilijobdatalist
    })
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
     flex:4
     text-align:right
     color:$darkTextColor
    .familymenu-right
     box-sizing:border-box
     padding-left:.2rem
     width:0
     flex:8
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
