<template>
 <div>
  <mt-index-list>
    <mt-index-section   v-for="item of ConTainerList" :key="item.name" :index="item.name">
      <mt-cell :title="itemlist.conname"  v-for="itemlist of item.area" :key="itemlist.id" @click.native="Get_Container(itemlist)"></mt-cell>
    </mt-index-section>
  </mt-index-list>
 </div>
</template>
<script>
export default {
  name: 'ConTainer',
  data () {
    return {
      ConTainerList: [
        {
          'name': 'A',
          'area': [
            {
              id: '0244',
              conname: 'Angola-安哥拉'
            }, {
              id: '93',
              conname: 'Afghanistan-阿富汗'
            }, {
              id: '335',
              conname: 'Albania-阿尔巴尼亚'
            }, {
              id: '213',
              conname: 'Algeria-阿尔及利亚'
            }, {
              id: '1254',
              conname: 'Anguilla-安圭拉岛'
            }, {
              id: '1268',
              conname: 'Antigua and Barbuda-安提瓜和巴布达'
            }, {
              id: '54',
              conname: 'Argentina-阿根廷'
            }, {
              id: '374',
              conname: 'Armenia-亚美尼亚'
            }, {
              id: '247',
              conname: 'Ascension-阿森松'
            }, {
              id: '61',
              conname: 'Australia-澳大利亚'
            }, {
              id: '43',
              conname: 'Austria-奥地利'
            }, {
              id: '994',
              conname: 'Azerbaijan-阿塞拜疆'
            }
          ]
        }, {
          'name': 'B',
          'area': [
            {
              id: '1242',
              conname: 'Bahamas-巴哈马'
            }, {
              id: '973',
              conname: 'Bahrain-巴林'
            }, {
              id: '880',
              conname: 'Bangladesh-孟加拉国'
            }, {
              id: '1246',
              conname: 'Barbados-巴巴多斯'
            }, {
              id: '375',
              conname: 'Belarus-白俄罗斯'
            }, {
              id: '32',
              conname: 'Belgium-比利时'
            }, {
              id: '501',
              conname: 'Belize-伯利兹'
            }, {
              id: '1441',
              conname: 'Bermuda Is-百慕大群岛'
            }, {
              id: '591',
              conname: 'Bolivia-玻利维亚'
            }, {
              id: '267',
              conname: 'Botswana-博茨瓦纳'
            }, {
              id: '55',
              conname: 'Brazil-巴西'
            }, {
              id: '673',
              conname: 'Brunei-文莱'
            }, {
              id: '359',
              conname: 'Bulgaria-保加利亚'
            }, {
              id: '226',
              conname: 'Burkina Faso-布基纳法索'
            }, {
              id: '95',
              conname: 'Burma-缅甸'
            }, {
              id: '257',
              conname: 'Burundi-布隆迪'
            }
          ]
        }, {
          'name': 'C',
          'area': [
            {
              id: '237',
              conname: 'Cameroon-喀麦隆'
            }, {
              id: '1',
              conname: 'Canada-加拿大'
            }, {
              id: '1345',
              conname: 'Cayman Is-开曼群岛'
            }, {
              id: '236',
              conname: 'Central African Republic-中非共和国'
            }, {
              id: '235',
              conname: 'Chad-乍得'
            }, {
              id: '56',
              conname: 'Chile-智利'
            }, {
              id: '86',
              conname: 'China-中国'
            }, {
              id: '57',
              conname: 'Colombia-哥伦比亚'
            }, {
              id: '242',
              conname: 'Congo-刚果'
            }, {
              id: '682',
              conname: 'Cook Is-库克群岛'
            }, {
              id: '506',
              conname: 'Costa Rica-哥斯达黎加'
            }, {
              id: '53',
              conname: 'Cuba-古巴'
            }, {
              id: '357',
              conname: 'Cyprus-塞浦路斯'
            }, {
              id: '420',
              conname: 'Czech Republic-捷克'
            }
          ]
        }, {
          'name': 'D',
          'area': [
            {
              id: '45',
              conname: 'Denmark-丹麦'
            }, {
              id: '253',
              conname: 'Djibouti-吉布提'
            }, {
              id: '1890',
              conname: 'Dominica Rep-多米尼加共和国'
            }
          ]
        }, {
          'name': 'E',
          'area': [
            {
              id: '593',
              conname: 'Ecuador-厄瓜多尔'
            }, {
              id: '20',
              conname: 'Egypt-埃及'
            }, {
              id: '503',
              conname: 'EI Salvador-萨尔瓦多'
            }, {
              id: '372',
              conname: 'Estonia-爱沙尼亚'
            }, {
              id: '251',
              conname: 'Ethiopia-埃塞俄比亚'
            }
          ]
        }, {
          'name': 'F',
          'area': [
            {
              id: '679',
              conname: 'Fiji-斐济'
            }, {
              id: '358',
              conname: 'Finland-芬兰'
            }, {
              id: '33',
              conname: 'France-法国'
            }, {
              id: '594',
              conname: 'French Guiana-法属圭亚那'
            }, {
              id: '689',
              conname: 'French Polynesia-法属玻利尼西亚'
            }
          ]
        }, {
          'name': 'G',
          'area': [
            {
              id: '241',
              conname: 'Gabon-加蓬'
            }, {
              id: '220',
              conname: 'Gambia-冈比亚'
            }, {
              id: '995',
              conname: 'Georgia-格鲁吉亚'
            }, {
              id: '49',
              conname: 'Germany-德国'
            }, {
              id: '233',
              conname: 'Ghana-加纳'
            }, {
              id: '350',
              conname: 'Gibraltar-直布罗陀'
            }, {
              id: '30',
              conname: 'Greece-希腊'
            }, {
              id: '1809',
              conname: 'Grenada-格林纳达'
            }, {
              id: '1671',
              conname: 'Guam-关岛'
            }, {
              id: '502',
              conname: 'Guatemala-危地马拉'
            }, {
              id: '224',
              conname: 'Guinea-几内亚'
            }, {
              id: '592',
              conname: 'Guyana-圭亚那'
            }
          ]
        }, {
          'name': 'H',
          'area': [
            {
              id: '509',
              conname: 'Haiti-海地'
            }, {
              id: '504',
              conname: 'Honduras-洪都拉斯'
            }, {
              id: '852',
              conname: 'Hongkong-香港'
            }, {
              id: '36',
              conname: 'Hungary-匈牙利'
            }
          ]
        }, {
          'name': 'I',
          'area': [
            {
              id: '354',
              conname: 'Iceland-冰岛'
            }, {
              id: '91',
              conname: 'India-印度'
            }, {
              id: '62',
              conname: 'Indonesia-印度尼西亚'
            }, {
              id: '98',
              conname: 'Iran-伊朗'
            }, {
              id: '964',
              conname: 'Iraq-伊拉克'
            }, {
              id: '353',
              conname: 'Ireland-爱尔兰'
            }, {
              id: '972',
              conname: 'Israel-以色列'
            }, {
              id: '39',
              conname: 'Italy-意大利'
            }, {
              id: '225',
              conname: 'Ivory Coast-科特迪瓦'
            }
          ]
        }, {
          'name': 'J',
          'area': [
            {
              id: '1876',
              conname: 'Jamaica-牙买加'
            }, {
              id: '81',
              conname: 'Japan-日本'
            }, {
              id: '962',
              conname: 'Jordan-约旦'
            }
          ]
        }, {
          'name': 'K',
          'area': [
            {
              id: '855',
              conname: 'Kampuchea (Cambodia )-柬埔寨'
            }, {
              id: '327',
              conname: 'Kazakstan-哈萨克斯坦'
            }, {
              id: '254',
              conname: 'Kenya-肯尼亚'
            }, {
              id: '82',
              conname: 'Korea-韩国'
            }, {
              id: '965',
              conname: 'Kuwait-科威特'
            }, {
              id: '331',
              conname: 'Kyrgyzstan-吉尔吉斯坦'
            }
          ]
        }, {
          'name': 'L',
          'area': [
            {
              id: '856',
              conname: 'Laos-老挝'
            }, {
              id: '371',
              conname: 'Latvia-拉脱维亚'
            }, {
              id: '961',
              conname: 'Lebanon-黎巴嫩'
            }, {
              id: '266',
              conname: 'Lesotho-莱索托'
            }, {
              id: '231',
              conname: 'Liberia-利比里亚'
            }, {
              id: '218',
              conname: 'Libya-利比亚'
            }, {
              id: '423',
              conname: 'Liechtenstein-列支敦士登'
            }, {
              id: '370',
              conname: 'Lithuania-立陶宛'
            }, {
              id: '352',
              conname: 'Luxembourg-卢森堡'
            }
          ]
        }, {
          'name': 'M',
          'area': [
            {
              id: '261',
              conname: 'Madagascar-马达加斯加'
            }, {
              id: '265',
              conname: 'Malawi-马拉维'
            }, {
              id: '60',
              conname: 'Malaysia-马来西亚'
            }, {
              id: '960',
              conname: 'Maldives-马尔代夫'
            }, {
              id: '223',
              conname: 'Mali-马里'
            }, {
              id: '356',
              conname: 'Malta-马耳他'
            }, {
              id: '1670',
              conname: 'Mariana Is-马里亚那群岛'
            }, {
              id: '596',
              conname: 'Martinique-马提尼克'
            }, {
              id: '230',
              conname: 'Mauritius-毛里求斯'
            }, {
              id: '52',
              conname: 'Mexico-墨西哥'
            }, {
              id: '373',
              conname: 'Moldova-摩尔多瓦'
            }, {
              id: '377',
              conname: '"Monaco-摩纳哥'
            }, {
              id: '976',
              conname: 'Mongolia-蒙古'
            }, {
              id: '1664',
              conname: 'Montserrat Is-蒙特塞拉特岛'
            }, {
              id: '212',
              conname: 'Morocco-摩洛哥'
            }, {
              id: '258',
              conname: 'Mozambique-莫桑比克'
            }
          ]
        }, {
          'name': 'N',
          'area': [
            {
              id: '264',
              conname: 'Namibia-纳米比亚'
            }, {
              id: '674',
              conname: 'Nauru-瑙鲁'
            }, {
              id: '977',
              conname: 'Nepal-尼泊尔'
            }, {
              id: '599',
              conname: 'Netheriands Antilles-荷属安的列斯'
            }, {
              id: '31',
              conname: 'Netherlands-荷兰'
            }, {
              id: '64',
              conname: 'New Zealand-新西兰'
            }, {
              id: '505',
              conname: 'Nicaragua-尼加拉瓜'
            }, {
              id: '227',
              conname: 'Niger-尼日尔'
            }, {
              id: '234',
              conname: 'Nigeria-尼日利亚'
            }, {
              id: '850',
              conname: 'North Korea-朝鲜'
            }, {
              id: '47',
              conname: 'Norway-挪威'
            }
          ]
        }, {
          'name': 'O',
          'area': [
            {
              id: '968',
              conname: 'Oman-阿曼'
            }
          ]
        }, {
          'name': 'P',
          'area': [
            {
              id: '92',
              conname: 'Pakistan-巴基斯坦'
            }, {
              id: '507',
              conname: 'Panama-巴拿马'
            }, {
              id: '675',
              conname: 'Papua New Cuinea-巴布亚新几内亚'
            }, {
              id: '595',
              conname: 'Paraguay-巴拉圭'
            }, {
              id: '51',
              conname: 'Peru-秘鲁'
            }, {
              id: '63',
              conname: 'Philippines-菲律宾'
            }, {
              id: '48',
              conname: 'Poland-波兰'
            }, {
              id: '351',
              conname: 'Portugal-葡萄牙'
            }, {
              id: '1787',
              conname: 'Puerto Rico-波多黎各'
            }
          ]
        }, {
          'name': 'Q',
          'area': [
            {
              id: '974',
              conname: 'Qatar-卡塔尔'
            }
          ]
        }, {
          'name': 'R',
          'area': [
            {
              id: '262',
              conname: 'Reunion-留尼旺'
            }, {
              id: '40',
              conname: 'Romania-罗马尼亚'
            }, {
              id: '7',
              conname: 'Russia-俄罗斯'
            }
          ]
        }, {
          'name': 'S',
          'area': [
            {
              id: '1758',
              conname: 'Saint Lueia-圣卢西亚'
            }, {
              id: '1784',
              conname: 'Saint Vincent-圣文森特岛'
            }, {
              id: '684',
              conname: 'Samoa Eastern-东萨摩亚(美)'
            }, {
              id: '685',
              conname: 'Samoa Western-西萨摩亚'
            }, {
              id: '378',
              conname: 'San Marino-圣马力诺'
            }, {
              id: '239',
              conname: 'Sao Tome and Principe-圣多美和普林西比'
            }, {
              id: '966',
              conname: '"Saudi Arabia-沙特阿拉伯'
            }, {
              id: '221',
              conname: 'Senegal-塞内加尔'
            }, {
              id: '248',
              conname: 'Seychelles-塞舌尔'
            }, {
              id: '232',
              conname: 'Sierra Leone-塞拉利昂'
            }, {
              id: '65',
              conname: 'Singapore-新加坡'
            }, {
              id: '421',
              conname: 'Slovakia-斯洛伐克'
            }, {
              id: '386',
              conname: 'Slovenia-斯洛文尼亚'
            }, {
              id: '677',
              conname: 'Solomon Is-所罗门群岛'
            }, {
              id: '252',
              conname: 'Somali-索马里'
            }, {
              id: '27',
              conname: 'South Africa-南非'
            }, {
              id: '34',
              conname: 'Spain-西班牙'
            }, {
              id: '94',
              conname: 'SriLanka-斯里兰卡'
            }, {
              id: '249',
              conname: 'Sudan-苏丹'
            }, {
              id: '597',
              conname: 'Suriname-苏里南'
            }, {
              id: '268',
              conname: 'Swaziland-斯威士兰'
            }, {
              id: '46',
              conname: 'Sweden-瑞典'
            }, {
              id: '41',
              conname: 'Switzerland-瑞士'
            }, {
              id: '963',
              conname: 'Syria-叙利亚'
            }
          ]
        }, {
          'name': 'T',
          'area': [
            {
              id: '992',
              conname: 'Tajikstan-塔吉克斯坦'
            }, {
              id: '255',
              conname: 'Tanzania-坦桑尼亚'
            }, {
              id: '66',
              conname: 'Thailand-泰国'
            }, {
              id: '228',
              conname: 'Togo-多哥'
            }, {
              id: '676',
              conname: 'Tonga-汤加'
            }, {
              id: '1809',
              conname: 'Trinidad and Tobago-特立尼达和多巴哥'
            }, {
              id: '216',
              conname: 'Tunisia-突尼斯'
            }, {
              id: '90',
              conname: 'Turkey-土耳其'
            }, {
              id: '993',
              conname: 'Turkmenistan-土库曼斯坦'
            }
          ]
        }, {
          'name': 'U',
          'area': [
            {
              id: '256',
              conname: 'Uganda-乌干达'
            }, {
              id: '380',
              conname: 'Ukraine-乌克兰'
            }, {
              id: '971',
              conname: 'United Arab Emirates-阿拉伯联合酋长国'
            }, {
              id: '44',
              conname: 'United Kiongdom-英国'
            }, {
              id: '1',
              conname: 'United States of America-美国'
            }, {
              id: '598',
              conname: 'Uruguay-乌拉圭'
            }, {
              id: '233',
              conname: 'Uzbekistan-乌兹别克斯坦'
            }
          ]
        }, {
          'name': 'V',
          'area': [
            {
              id: '58',
              conname: 'Venezuela-委内瑞拉'
            }, {
              id: '84',
              conname: 'Vietnam-越南'
            }, {
              id: '967',
              conname: 'Yemen-也门'
            }
          ]
        }, {
          'name': 'Y',
          'area': [
            {
              id: '967',
              conname: 'Yemen-也门'
            }, {
              id: '381',
              conname: 'Yugoslavia-南斯拉夫'
            }
          ]
        }, {
          'name': 'Z',
          'area': [
            {
              id: '263',
              conname: 'Zimbabwe-津巴布韦'
            }, {
              id: '243',
              conname: 'Zaire-扎伊尔'
            }, {
              id: '260',
              conname: 'Zambia-赞比亚'
            }
          ]
        }
      ]
    }
  },
  methods: {
    Get_Container (list) {
      let name = list.conname
      let NAME = name.substr(name.indexOf('-') + 1)
      this.$store.commit('increment', NAME)
      this.$router.push({
        path: `/member`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
