<template>
<div class="Member-box">
  <div class="Member-nav">
    <router-link to="/">
      <div class="Member-back">
        <span class="iconfont ">&#xe602;</span>
      </div>
    </router-link>
    <div class="Member-collection">
      <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
    </div>
    <div class="Member-refer" @click="submitSuc">
      <h4 class="Member-submit">{{MemberTitle.refer}}</h4>
    </div>
  </div>
  <div class="entry-progress">
    <span class="enrty-progresstext">{{MemberTitle.progress}}</span>
    <div class="entry-progressright">
      <el-progress :text-inside="true" :stroke-width="17" :percentage="percentdata" status="success"></el-progress>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'EntryHeader',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '入职材料补充',
        refer: '提交',
        progress: '进度情况'
      },
      percentdata: 0
    }
  },
  activated () {
  	if(this.$route.params.isSuc){
  		var hash = this.$route.params.isSuc
  		var ret= []
	    hash.forEach(function(e, i, ar) {
	        if (hash.indexOf(e) === i) {
	            ret.push(e)
	        }
	    })
  		this.percentdata = Number(((ret.length)/7*100).toPrecision(2));
  	}
  },
  methods:{
  	submitSuc(){
        this.$confirm('入职材料补充完毕，是否提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
					center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })          
        })
  	}
  }
}
</script>

<style lang="stylus" scoped>
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
    font-size:16px
    color:#333
  .Member-collection
    box-sizing: border-box
    float:left
    width:60%
    height:$darkHeight
    line-height:$darkHeight
    .Member-msgtitle
      font-weight:bold
      font-size:20px
      color:#666
      text-align:center
   .Member-refer
    box-sizing: border-box
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    .Member-submit
      font-weight:400
      font-size:18px
      color:#CC3300
      text-align:center
.entry-progress
  width:99%
  float:right
  height:.4rem
  padding-bottom:.2rem
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137)
  .enrty-progresstext
    float:left
    box-sizing:border-box
    width:25%
    padding-left:.3rem
    padding-right:.1rem
    padding-top:.03rem
   .entry-progressright
    float:left
    width:69%
</style>
<style>
	.Member-nav{				
		padding-left: constant(safe-area-inset-left);
		padding-right: constant(safe-area-inset-right);
		padding-top: constant(safe-area-inset-top);						
	}
	.el-message-box{
		width: 80%;
	}
	.el-progress-bar__inner{
		text-align: center;
	}
	.el-progress-bar__innerText{
		display: none;
	}
	.el-progress-bar__outer{
		border: 1px solid #797979;
		background: -webkit-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, #f0f0f0 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
   		background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
		background: -o-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
		background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
	}
	@media screen and (max-width:321px){
		 .Member-box .Member-nav .Member-collection .Member-msgtitle{font-size:18px;}
		 .Member-box .Member-nav .Member-refer .Member-submit{font-size: 16px}
		 .Member-box .entry-progress .enrty-progresstext {font-size: 14px;}
	}
	
/* 	@media screen and (min-width:321px) and (max-width:400px){
		.Member-box .Member-nav .Member-collection .Member-msgtitle{font-size:18px;}
		.Member-box .Member-nav .Member-refer .Member-submit{font-size: 16px}
		.Member-box .entry-progress .enrty-progresstext {font-size: 14px;}
	} */
	
	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		header {
			background-color: #FFFFFF;
		}
	}
	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		header {
			background-color: #FFFFFF;
		}
	}
</style>