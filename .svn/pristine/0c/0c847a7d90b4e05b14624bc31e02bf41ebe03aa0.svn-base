<template>
  <div>
    <ul>
        <li class="family-li" v-for="item of FamilyList" :key="item.id">
            <div class="family-left">
              <ul>
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
                          姓名
                      </div>
                      <div class="familymenu-right">
                          {{item.name}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          性别
                      </div>
                      <div class="familymenu-right">
                          {{item.sex}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          出生日期
                      </div>
                      <div class="familymenu-right">
                          {{item.BirthdayDate}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          联系方式
                      </div>
                      <div class="familymenu-right">
                          {{item.ContactPhone}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          工作单位/学习院校
                      </div>
                      <div class="familymenu-right">
                          {{item.unit}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          职位/身份
                      </div>
                      <div class="familymenu-right">
                          {{item.Identity}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          住址信息
                      </div>
                      <div class="familymenu-right">
                          {{item.address}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          紧急联系人
                      </div>
                      <div class="familymenu-right">
                          {{item.urgent}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          是否在伊利工作
                      </div>
                      <div class="familymenu-right">
                          {{item.yilijob}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          家庭成员员工ID
                      </div>
                      <div class="familymenu-right">
                          {{item.StaffID}}
                      </div>
                  </li>
                  <li class="familymenu">
                      <div class="familymenu-left">
                          配偶是有工作
                      </div>
                      <div class="familymenu-right">
                          {{item.spousejob}}
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
  name: 'family',
  data () {
    return {
      FamilyList: [
        {
          id: '001',
          relation: '父',
          name: '李四',
          sex: '男',
          BirthdayDate: '1990-02-20',
          ContactPhone: '187123324243',
          unit: '伊利商学院',
          Identity: '主管',
          address: '伊利商学院职工宿舍',
          urgent: '是',
          yilijob: '否',
          StaffID: '140XXXXXXXXX',
          spousejob: '是'
        }, {
          id: '002',
          relation: '兄',
          name: '李刚',
          sex: '男',
          BirthdayDate: '1992-02-20',
          ContactPhone: '187123324243',
          unit: '伊利商学院',
          Identity: '经理',
          address: '伊利集团总部',
          urgent: '是',
          yilijob: '否',
          StaffID: '150XXXXXXXXX',
          spousejob: '是'
        }
      ]
    }
  },
  methods: {
    To_familyDetails () {
      this.$router.push({
        path: `/familydata`,
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
     flex:6
     text-align:right
     color:$darkTextColor
    .familymenu-right
     box-sizing:border-box
     padding-left:.2rem
     flex:6
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
