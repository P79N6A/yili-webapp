<template>
 <div class="jobskill-top">
    <ul>
      <li class="job-li" v-for="item of jobdataList" :key="item.id" >
        <div class="job-left">
          <p class="job-lefttime">
            <span class="iconfont job-lefticon">&#xe605;</span>
             {{item.StartTime}} - {{item.EndTime}}
           </p>
           <div class="job-menu">
             <p class="job-unit">{{item.unit}}</p>
             <p class="job-office">{{item.office}}</p>
             <p class="job-witness">{{item.witness}}</p>
             <p class="job-witness">{{item.witness_phone}}</p>
             <textarea name="" class="job-Remarks" placeholder="暂无备注" disabled="true" v-model="item.Remarks"></textarea>
           </div>
        </div>
        <div class="job-right" @click="To_WriteJob(item.id)">
          <span class="iconfont job-toDetails">&#xe601;</span>
        </div>
      </li>
<!--       <li class="job-li">
        <div class="job-left">
          <p class="job-lefttime">
            <span class="iconfont job-lefticon" :class="[2%2 != 1 ? activeClass : '', iconfont]">&#xe605;</span>
             {{JobstartTime}} - {{JobEndTime}}
           </p>
           <div class="job-menu">
             <p class="job-unit">伊利集团商学院</p>
             <p class="job-office">销售经理</p>
             <p class="job-witness">李达康:13067349327</p>
             <textarea name="" class="job-Remarks" placeholder="暂无备注" disabled="true"></textarea>
           </div>
        </div>
        <div class="job-right">
          <span class="iconfont job-toDetails">&#xe601;</span>
        </div>
      </li> -->
    </ul>
    <p class="job_add" @click="To_WriteJob()">
      <span class="iconfont job_addimg">&#xe608;</span>
    </p>
 </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'MemberSkill',
  data () {
    return {
      jobList: [
        {
          StartTime: '2016-10-29',
          EndTime: '2018-10-19',
          unit: '伊利集团商学院',
          office: '销售经理',
          witness: '李达康',
          witness_phone: '13067349327',
          Remarks: '12321'
        }, {
          StartTime: '2016-10-29',
          EndTime: '2018-10-19',
          unit: '伊利集团商学院',
          office: '销售经理',
          witness: '李达康',
          witness_phone: '13067349327',
          Remarks: ''
        }, {
          StartTime: '2016-10-29',
          EndTime: '2018-10-19',
          unit: '伊利集团商学院',
          office: '销售经理',
          witness: '李达康',
          witness_phone: '13067349327',
          Remarks: ''
        }
      ],
      JobstartTime: '2016-10-29',
      JobEndTime: '2018-10-19',
      isActive: true,
      activeClass: 'jobiconbgcolor',
      iconfont: 'iconfont'
    }
  },
  methods: {
    To_WriteJob (itemid) {
      this.$router.push({
        path: `/jobdata`,
        query: {
          name: itemid
        }
      })
    }
  },
  computed: {
    ...mapState({
      jobdataList: state => state.jobskill.jobdataList
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/minxs.styl'
.job-li
 padding-left:.12rem
 margin-top:.3rem
 display:flex
 .job-left
  flex:10
  width: 0
  .job-lefttime
    color:$darkTextColor
    .job-lefticon
      color:#26a2ff
      font-size:.2rem
    .jobiconbgcolor
      color:red
      font-size:.2rem
  .job-menu
   margin-left:.1rem
   border-left:1px solid pink
   .job-unit
    height: .7rem
    line-height: 0.7rem
    margin-left: .2rem
    ellipsis()
   .job-office
   .job-witness
    height:.5rem
    line-height:.5rem
    margin-left: .2rem
    color:$darkTextColor
    ellipsis()
   .job-Remarks
    box-sizing:border-box
    padding-left:.2rem
    width:100%
    height:.5rem
    color:$darkTextColor
    background:#fff
 .job-right
  display:flex
  flex:2
  justify-content:center
  align-items:center
  .job-toDetails
   font-size:.5rem
   color:$darkTextColor
.job_add
 box-sizing:border-box
 padding:0.1rem 0.4rem
 text-align:right
 .job_addimg
  font-size:.5rem
  color:#26a2ff
.job_footer
  padding:0.2rem
</style>
