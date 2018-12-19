<template>
    <div>
        <div class="Member-nav">
         <router-link to="/member">
           <div class="Member-back">
              <span class="iconfont ">&#xe602;</span>
              {{MemberTitle.back}}
           </div>
         </router-link>
         <div class="Member-collection">
             <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
         </div>
       </div>
       <ul class="job_ul">
         <li class="job_li">
           <div class="job_left">
             姓名
           </div>
           <div class="job_right">
              <input type="text"  :value="yiliman.name" />
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             与本人关系
           </div>
           <div class="job_right" @click="User_Selectsk">
               {{yiliman.relation}}
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             联系方式
           </div>
           <div class="job_right">
               <input type="text" :value="yiliman.phone" placeholder="请在此输入" />
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             所在单位
           </div>
           <div class="job_right">
               <input type="text" :value="yiliman.unit"  placeholder="请在此输入"/>
           </div>
         </li>
         <li class="job_li">
           <div class="job_left">
             职位
           </div>
           <div class="job_right">
               <input type="text" :value="yiliman.office"  placeholder="请在此输入"/>
           </div>
         </li>
       </ul>
       <div class="job_keep">
          <mt-button type="primary" size="normal" class="job_btn">保存</mt-button>
          <mt-button type="danger" size="normal"  class="job_btn job_delete">删除</mt-button>
       </div>
    <mt-popup
        v-model="parentVisible"
        position="bottom"
        popup-transition="popup-fade">
      <mt-picker :slots="slots" @change="onValuesChange"  class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_Selectsk">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="User_SelectSure">
                 确定
               </div>
            </div>
     </mt-picker>
   </mt-popup>
</div>
</template>

<script type="text/javascript">

export default {
  name: 'yilimandata',
  data () {
    return {
      parentVisible: false,
      MemberTitle: {
        back: '返回',
        title: '伊利亲属'
      },
      yiliman: {
        name: '李大牛',
        relation: '父',
        phone: '18712307349',
        unit: '伊利商学院',
        office: '培训主管',
        relation_set: '父'
      },
      slots: [
        {
          flex: 1,
          values: ['配偶', '子', '女', '父/母', '兄/嫂', '弟/弟媳', '姐/姐夫', '妹/妹夫', '其他'],
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    User_Selectsk () {
      this.parentVisible = !this.parentVisible
    },
    User_SelectSure () {
      this.yiliman.relation = this.yiliman.relation_set
      this.parentVisible = !this.parentVisible
    },
    onValuesChange (picker, values) {
      this.yiliman.relation_set = values[0]
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    }
  },
  computed: {
    parentlist () {
      let parentslots = [
        {
          flex: 1,
          values: [{
            'code': '10',
            'name': '子女'
          }, {
            'code': '12',
            'name': '配偶'
          }, {
            'code': '15',
            'name': '父/母'
          }],
          textAlign: 'center'
        }
      ]
      return parentslots
    }
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.Member-nav
  width:100%
  height:$darkHeight
  tex-align:center
  .Member-back
    box-sizing: border-box
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    padding-left:.4rem
    font-size:.3rem
    color:#333
    overflow:hidden
  .Member-collection
    box-sizing: border-box
    float:left
    width:60%
    height:$darkHeight
    line-height:$darkHeight
    .Member-msgtitle
      font-weight:bold
      font-size:.4rem
      color:#666
      text-align:center
.job_ul
  margin-top:.1rem
  box-sizing: border-box
  width: 100%
  padding-left: 0.2rem
  .job_li
    height: 0.9rem
    line-height: 0.9rem
    font-size: 0.27rem
    display: flex
    border-bottom:1px solid pink
    .job_left
     flex:5
     font-size:.3rem
    .job_right
     flex:7
     font-size:.3rem
     .job_time
      margin-left:.1rem
      font-size:.4rem
.job_keep
 height:1rem
 display:flex
 justify-content:space-around
 align-items:center
 position:fixed
 left:0
 right:0
 bottom:0
 background:#fff
 .job_btn
   padding: 0 0.8rem
   text-align:center
.levelselect
  width:$selectWidth
  .picker-toolbar-title
    display:flex
    flex-direction: row
    justify-content: space-around
    height: 40px
    line-height: 40px
    font-size: 16px
</style>
