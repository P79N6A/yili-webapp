<template>
<div class="upload-bankCard">
  <div class="Member-nav">
    <router-link to="/entry">
      <div class="Member-back">
         <span class="iconfont ">&#xe602;</span>
      </div>
    </router-link>
    <div class="Member-collection">
        <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
    </div>
    <div class="Member-refer" @click="keepPostdata">
       <h4 class="Member-submit">{{MemberTitle.refer}}</h4>
    </div>
  </div>
  <div class="Stuff-Id">
   <p class="stuff-idht">{{MemberTitle.idtitle}}</p>
   <div class="upload-img" style="width:100%;">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-exceed="handleExceed"
          :auto-upload="false"
          :limit="2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
  </div>
 </div>
</div>
</template>
<script>
export default {
  name: 'bankCard',
  data () {
    return {
      MemberTitle: {
        back: '',
        title: '银行卡复印件上传',
        refer: '保存',
        idtitle: '请上传银行卡复印件照片，注意反光，保证内容清晰可见'
      },
      imageUrl: '',
      fileList2: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    //图片上传超过数量限制
    handleExceed (file, fileList) {
      this.$message.error('上传数量不能超过2张!')
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.imageUrl)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },    	
    keepPostdata () {
			const loadingInstance1 = this.$loading({ body: true,text:"正在上传中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)" })
    	const that=this				
			setTimeout(function(){
					that.$message({
						message:"上传成功",
						type: 'success',
						center:true
					})
					loadingInstance1.close()
					if(that.$route.query.isSuc){     		
						that.$route.query.isSuc.push('007');
						that.$router.push({name:'Entry',params:{isSuc:that.$route.query.isSuc}})
					}	
			},2000)
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
    font-size:.3rem
    color:#333
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
   .Member-refer
    box-sizing: border-box
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    .Member-submit
      font-weight:400
      font-size:.4rem
      color:#CC3300
      text-align:center
.Stuff-Id
  box-sizing:box-sizing
  padding-left:.4rem
  padding-right:.4rem
  font-size:14px
  .stuff-idht
    line-height:.5rem 
    padding-bottom:.3rem
    text-align:center
</style>
<style type="text/css">
	.upload-bankCard	.Member-nav{
			position: fixed;
			top: 0px;
			left: 0px;
			right: 0px;
			z-index: 999;
			background-color: #FFFFFF;
		}
		
		.Stuff-Id {
			position: relative;
			top: 1.2rem;
		}
		
		.el-upload--picture-card {
			width: 5rem;
			height: auto;
		}
		
		.el-upload-list--picture-card .el-upload-list__item {
			width: 5rem;
			height: auto;
		}
		
		.el-upload-list__item.is-success .el-upload-list__item-status-label {
			display: none;
		}
		
		.el-upload-list__item .el-icon-close {
			display: block;
			color:#FF0000;
		}
		
		.el-button--mini,
		.el-button--small {
			font-size: 0.3rem;
		}
		
		.el-upload__tip {
			font-size: 0.25rem;
		} 
</style>