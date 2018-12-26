import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 这里定义初始值
let state = {
  count: 0,
  ContainerName: '中国'
}

const mutations = {
  add (context) {
    context.count++
  },
  decrease (context) {
    context.count--
  },
  increment (context, name) {
    context.ContainerName = name
  }
}

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  add (add) {
    add.commit('add')
  },
  decrease (decrease) {
    decrease.commit('decrease')
  },
  oddAdd ({commit, state}) {
    if (state.count % 2 === 0) {
      commit('add')
    }
  }
}

// 返回改变后的数值
const getters = {
  count (context) {
    return context.count
  },
  getOdd (context) {
    return context.count % 2 === 0 ? '偶数' : '奇数'
  }
}

const moduleA = {
  state: {
    HealthList: [
      {
        id: '001',
        starttime: '2018-01-10',
        endtime: '2020-10-10',
        unit: '我是管理数据',
        marker: '这是一个健康证的备注这是一个健康证的备注这是一个健康证的备注这是一个健康证的备注'
      }
    ]
  },
  mutations: {
    HealthAddMsg (context, msg) {
      context.HealthList.push(msg)
    },
    HealthRemoveMsg (context, id) {
      for (let i = 0; i < context.HealthList.length; i++) {
        if (id === context.HealthList[i].id) {
          context.HealthList.splice(i, 1)
        }
      }
    },
    HealthWriteMsg (context, msg) {
      context.HealthList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.starttime = msg.starttime
          item.endtime = msg.endtime
          item.unit = msg.unit
          item.marker = msg.marker
        }
      })
    }
  }
}

const moduleB = {
  state: {
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
        address: '北京市 直辖区 东城区',
        inaddress: '伊利商学院职工宿舍',
        urgent: '是',
        yilijob: '否',
        StaffID: '140XXXXXXXXX',
        spousejob: '是'
      }
    ]
  },
  mutations: {
    FamilyAddMsg (context, msg) {
      context.FamilyList.push(msg)
    },
    FamilyRemoveMsg (context, id) {
      for (let i = 0; i < context.FamilyList.length; i++) {
        if (id === context.FamilyList[i].id) {
          context.FamilyList.splice(i, 1)
        }
      }
    },
    FamilyWriteMsg (context, msg) {
      context.FamilyList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.relation = msg.relation
          item.name = msg.name
          item.sex = msg.sex
          item.BirthdayDate = msg.BirthdayDate
          item.ContactPhone = msg.ContactPhone
          item.unit = msg.unit
          item.Identity = msg.Identity
          item.address = msg.address
          item.urgent = msg.urgent
          item.yilijob = msg.yilijob
          item.StaffID = msg.StaffID
          item.spousejob = msg.spousejob
        }
      })
    }
  }
}

const moduleC = {
  state: {
    languagedatalist: [
      {
        id: '001',
        language: '1-英语',
        level: '01-英语4级',
        date: '2018-09-09',
        Grade: 80,
        skilled: '非常熟练'
      }
    ]
  },
  mutations: {
    languageAddMsg (context, msg) {
      context.languagedatalist.push(msg)
    },
    languageRemoveMsg (context, id) {
      for (let i = 0; i < context.languagedatalist.length; i++) {
        if (id === context.languagedatalist[i].id) {
          context.languagedatalist.splice(i, 1)
        }
      }
    },
    languageWriteMsg (context, msg) {
      context.languagedatalist.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.language = msg.language
          item.level = msg.level
          item.date = msg.date
          item.Grade = msg.Grade
          item.skilled = msg.skilled
        }
      })
    }
  }
}

const moduleD = {
  state: {
    TeachbgdataList: [
      {
        id: '001',
        StartTime: '2016-10-29',
        EndTime: '2018-10-19',
        unit: '北京大学',
        unitType: '211高等学校',
        education: '本科',
        ProfessionType: '管理学',
        Profession: '人力资源管理',
        TeachModus: '全日制',
        CertificateNumber: '104765201605701784',
        DegreeNumber: '104765201605701784',
        Remarks: '数据备注'
      }
    ]
  },
  mutations: {
    TeachbgAddMsg (context, msg) {
      context.TeachbgdataList.push(msg)
    },
    TeachbgRemoveMsg (context, id) {
      for (let i = 0; i < context.TeachbgdataList.length; i++) {
        if (id === context.TeachbgdataList[i].id) {
          context.TeachbgdataList.splice(i, 1)
        }
      }
    },
    TeachbgWriteMsg (context, msg) {
      context.TeachbgdataList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.starttime = msg.starttime
          item.endtime = msg.endtime
          item.unit = msg.unit
          item.unitType = msg.unitType
          item.education = msg.education
          item.ProfessionType = msg.ProfessionType
          item.Profession = msg.Profession
          item.TeachModus = msg.TeachModus
          item.CertificateNumber = msg.CertificateNumber
          item.DegreeNumber = msg.DegreeNumber
          item.Remarks = msg.Remarks
        }
      })
    }
  }
}

const moduleE = {
  state: {
    jobdataList: [
      {
        id: '001',
        StartTime: '2016-10-29',
        EndTime: '2018-10-19',
        unit: '伊利集团商学院',
        office: '销售经理',
        witness: '李二明',
        witness_phone: '13067349327',
        Remarks: '12321'
      }
    ]
  },
  mutations: {
    jobAddMsg (context, msg) {
      context.jobdataList.push(msg)
    },
    jobRemoveMsg (context, id) {
      for (let i = 0; i < context.jobdataList.length; i++) {
        if (id === context.jobdataList[i].id) {
          context.jobdataList.splice(i, 1)
        }
      }
    },
    jobWriteMsg (context, msg) {
      context.jobdataList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.StartTime = msg.StartTime
          item.EndTime = msg.EndTime
          item.unit = msg.unit
          item.office = msg.office
          item.witness = msg.witness
          item.witness_phone = msg.witness_phone
          item.Remarks = msg.Remarks
        }
      })
    }
  }
}

const moduleF = {
  state: {
    yilijobdatalist: [
      {
        id: '001',
        name: '长二牛',
        relation: '兄',
        phone: '18721342345',
        unit: '伊利集团商学院',
        office: '培训主23管'
      }
    ]
  },
  mutations: {
    yiliAddMsg (context, msg) {
      context.yilijobdatalist.push(msg)
    },
    yilihRemoveMsg (context, id) {
      for (let i = 0; i < context.yilijobdatalist.length; i++) {
        if (id === context.yilijobdatalist[i].id) {
          context.yilijobdatalist.splice(i, 1)
        }
      }
    },
    yiliWriteMsg (context, msg) {
      context.yilijobdatalist.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.name = msg.name
          item.relation = msg.relation
          item.phone = msg.phone
          item.unit = msg.unit
          item.office = msg.office
        }
      })
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    health: moduleA,
    family: moduleB,
    language: moduleC,
    Teachbg: moduleD,
    jobskill: moduleE,
    yilijobdatalist: moduleF
  }
})
