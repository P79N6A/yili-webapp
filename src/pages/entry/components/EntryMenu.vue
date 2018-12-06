<template>
 <div>
   <ul class="Entrymenu-ul">
       <li class="Entrymenu-li" v-for="item of EntryList" :key="item.id" >
         <div class="Entry-left">
             <div class="Entry-leftbg">
                 <span class="iconfont entry-book">&#xe62b;</span>
             </div>
         </div>
         <div class="Entry-container">
            <ul>
              <li class="Entry-first">{{item.title}}</li>
              <li class="Entry-Upload">{{item.desc}}</li>
              <li class="Entry-Upload">{{item.descsec}}</li>
            </ul>
          </div>
           <router-link to="/entry/upload">
             <div class="Entry-right">
                <span class="iconfont entry-go">&#xe601;</span>
              </div>
           </router-link>
       </li>
   </ul>
 </div>
</template>
<script>
export default {
  name: 'EntryMenu',
  data () {
    return {
      EntryList: [
        {
          id: '001',
          title: '离职证明',
          desc: '尚未上传',
          descsec: '请务必完善'
        }, {
          id: '002',
          title: '体检报告',
          desc: '尚未上传',
          descsec: '若有，请上传'
        }, {
          id: '003',
          title: '学历证书',
          desc: '尚未上传',
          descsec: '请务必完善'
        }, {
          id: '004',
          title: '身份证复印件',
          desc: '尚未上传',
          descsec: '请务必完善'
        }, {
          id: '005',
          title: '特殊工种证书',
          desc: '尚未上传',
          descsec: '若有，请上传'
        }, {
          id: '006',
          title: '个人照片',
          desc: '尚未上传',
          descsec: '请务必完善'
        }, {
          id: '007',
          title: '银行卡复印件',
          desc: '尚未上传',
          descsec: '请务必完善'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.Entrymenu-ul
 width:100%
 .Entrymenu-li
  width:99%
  float:right
  margin-top:.1rem
  height:$darkHeight
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137)
  padding-top:.1rem
  padding-bottom:.1rem
  .Entry-left
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    position:relative
    left:1%
    .Entry-leftbg
      width:.9rem
      height:.9rem
      margin: auto
      position:absolute
      top:0
      left:0
      right:0
      bottom:0
      background:#1caafe
      border-radius:50%
      display: flex;
      justify-content: center;
      align-items: center;
      .entry-book
        font-size:0.6rem
        color:#fff
        margin-left:.1rem
  .Entry-container
    width:60%
    height:$darkHeight
    overflow:hidden
    float:left
    .Entry-first
      font-size:.4rem
      color:#666666
      height:.45rem
      line-height:.45rem
    .Entry-Upload
      font-size:.26rem
      color:#CC3300
      height:.35rem
      line-height:.35rem
   .Entry-right
     width:17%
     float:left
     height:$darkHeight
     line-height:$darkHeight
     text-align:right
     .entry-go
       color: #999;
       font-size: 0.5rem;
</style>
