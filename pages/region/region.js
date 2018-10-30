// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tostnum:'',
    tost_hide: false,
    tost: '提示信息',
    title: true,
    info: '',
    lists: [],
    num: 0,
    search_value: [],
    company: "",
    mark: true,
    historys: [],
    historyName: [],
    hotName:[],
    history: [
      // {
      //   name: '北京',
      //   mark: false
      // },
      // {
      //   name: '上海',
      //   mark: false
      // },
      // {
      //   name: '广州',
      //   mark: false
      // },
      // {
      //   name: '深圳',
      //   mark: false
      // },
      // {
      //   name: '天津',
      //   mark: false
      // },
      // {
      //   name: '成都',
      //   mark: false
      // }
    ],
    hot: [{
        name: '北京',
        mark: false
      },
      {
        name: '上海',
        mark: false
      },
      {
        name: '广州',
        mark: false
      },
      {
        name: '深圳',
        mark: false
      },
      {
        name: '天津',
        mark: false
      },
      {
        name: '成都',
        mark: false
      }
    ],
    list: [{
        key: 'A',
        num: 0,
        data: [{
            name: '阿城',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '阿尔山',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '阿克苏',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '阿勒泰',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '阿图什',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '安达',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '安国',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '安康',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '安陆',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '安宁',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '安庆',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '安丘',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '安顺',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '安阳',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '鞍山',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '澳门',
            mark: false,
            hide: true,
            index: 15
          }
        ]
      },
      {
        key: 'B',
        num: 1,
        data: [{
            name: '巴中',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '霸州',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '白城',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '白山',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '白银',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '百色',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '蚌埠',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '包头',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '宝鸡',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '保定',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '保山',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '北安',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '北海',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '北京',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '北流',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '北宁',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '北票',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '本溪',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '毕节',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '滨州',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '泊头',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '亳州',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '博乐',
            mark: false,
            hide: true,
            index: 19
          }
        ]
      },
      {
        key: 'C',
        num: 2,
        data: [{
            name: '沧州',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '岑溪',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '昌吉',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '昌邑',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '长春',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '长葛',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '长乐',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '长沙',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '长治',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '常德',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '常宁',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '常熟',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '常州',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '巢湖',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '朝阳',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '潮州',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '郴州',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '成都',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '承德',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '赤壁',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '赤峰',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '赤水',
            mark: false,
            hide: true,
            index: 21
          },
          {
            name: '崇州',
            mark: false,
            hide: true,
            index: 22
          },
          {
            name: '滁州',
            mark: false,
            hide: true,
            index: 23
          },
          {
            name: '楚雄',
            mark: false,
            hide: true,
            index: 24
          },
          {
            name: '慈溪',
            mark: false,
            hide: true,
            index: 25
          },
          {
            name: '从化',
            mark: false,
            hide: true,
            index: 26
          }
        ]
      },
      {
        key: 'D',
        num: 3,
        data: [{
            name: '达川',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '大安',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '大丰',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '大理',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '大连',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '大庆',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '大石桥',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '大同',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '大冶',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '丹东',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '丹江口',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '丹阳',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '儋州',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '当阳',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '德惠',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '德令哈',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '德兴',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '德阳',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '德州',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '灯塔',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '登封',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '邓州',
            mark: false,
            hide: true,
            index: 21
          },
          {
            name: '定州',
            mark: false,
            hide: true,
            index: 22
          },
          {
            name: '东方',
            mark: false,
            hide: true,
            index: 23
          },
          {
            name: '东港',
            mark: false,
            hide: true,
            index: 24
          },
          {
            name: '东胜',
            mark: false,
            hide: true,
            index: 25
          },
          {
            name: '东台',
            mark: false,
            hide: true,
            index: 26
          },
          {
            name: '东莞',
            mark: false,
            hide: true,
            index: 27
          },
          {
            name: '东兴',
            mark: false,
            hide: true,
            index: 28
          },
          {
            name: '东阳',
            mark: false,
            hide: true,
            index: 29
          },
          {
            name: '东营',
            mark: false,
            hide: true,
            index: 30
          },
          {
            name: '都江堰',
            mark: false,
            hide: true,
            index: 31
          },
          {
            name: '都匀',
            mark: false,
            hide: true,
            index: 32
          },
          {
            name: '敦化',
            mark: false,
            hide: true,
            index: 33
          },
          {
            name: '敦煌',
            mark: false,
            hide: true,
            index: 34
          }
        ]
      },
      {
        key: 'E',
        num: 4,
        data: [{
            name: '峨眉山',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '额尔古纳',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '鄂州',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '恩平',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '恩施',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '二连浩特',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '鄂尔多斯',
            mark: false,
            hide: true,
            index: 6
          }
        ]
      },
      {
        key: 'F',
        num: 5,
        data: [{
            name: '防城港',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '肥城',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '汾阳',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '丰城',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '丰南',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '丰镇',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '凤城',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '奉化',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '佛山',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '福安',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '福鼎',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '福清',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '福泉',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '福州',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '抚顺',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '阜康',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '阜新',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '阜阳',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '富锦',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '富阳',
            mark: false,
            hide: true,
            index: 19
          }
        ]
      },
      {
        key: 'G',
        num: 6,
        data: [{
            name: '盖州',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '赣州',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '高安',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '高啤店',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '高密',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '高平',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '高要',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '高邮',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '高州',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '藁城',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '格尔木',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '个旧',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '根河',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '公主岭',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '巩义',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '古交',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '广安',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '广汉',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '广水',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '广元',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '广州',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '贵池',
            mark: false,
            hide: true,
            index: 21
          },
          {
            name: '贵港',
            mark: false,
            hide: true,
            index: 22
          },
          {
            name: '贵溪',
            mark: false,
            hide: true,
            index: 23
          },
          {
            name: '贵阳',
            mark: false,
            hide: true,
            index: 24
          },
          {
            name: '桂林',
            mark: false,
            hide: true,
            index: 25
          },
          {
            name: '桂平',
            mark: false,
            hide: true,
            index: 26
          }
        ]
      },
      {
        key: 'H',
        num: 7,
        data: [{
            name: '哈尔滨',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '哈密',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '海城',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '海口',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '海拉尔',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '海林',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '海伦',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '海门',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '海宁',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '海阳',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '邯郸',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '韩城',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '汉川',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '汉中',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '杭州',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '合川',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '合肥',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '合山',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '合作',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '和龙',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '和田',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '河池',
            mark: false,
            hide: true,
            index: 21
          },
          {
            name: '河间',
            mark: false,
            hide: true,
            index: 22
          },
          {
            name: '河津',
            mark: false,
            hide: true,
            index: 23
          },
          {
            name: '河源',
            mark: false,
            hide: true,
            index: 24
          },
          {
            name: '菏泽',
            mark: false,
            hide: true,
            index: 25
          },
          {
            name: '贺州',
            mark: false,
            hide: true,
            index: 26
          },
          {
            name: '鹤壁',
            mark: false,
            hide: true,
            index: 27
          },
          {
            name: '鹤岗',
            mark: false,
            hide: true,
            index: 28
          },
          {
            name: '鹤山',
            mark: false,
            hide: true,
            index: 29
          },
          {
            name: '黑河',
            mark: false,
            hide: true,
            index: 30
          },
          {
            name: '衡水',
            mark: false,
            hide: true,
            index: 31
          },
          {
            name: '衡阳',
            mark: false,
            hide: true,
            index: 32
          },
          {
            name: '洪湖',
            mark: false,
            hide: true,
            index: 33
          },
          {
            name: '洪江',
            mark: false,
            hide: true,
            index: 34
          },
          {
            name: '侯马',
            mark: false,
            hide: true,
            index: 35
          },
          {
            name: '呼和浩特',
            mark: false,
            hide: true,
            index: 36
          },
          {
            name: '湖州',
            mark: false,
            hide: true,
            index: 37
          },
          {
            name: '葫芦岛',
            mark: false,
            hide: true,
            index: 38
          },
          {
            name: '虎林',
            mark: false,
            hide: true,
            index: 39
          },
          {
            name: '华阴',
            mark: false,
            hide: true,
            index: 40
          },
          {
            name: '化州',
            mark: false,
            hide: true,
            index: 41
          },
          {
            name: '怀化',
            mark: false,
            hide: true,
            index: 42
          },
          {
            name: '淮安',
            mark: false,
            hide: true,
            index: 43
          },
          {
            name: '淮北',
            mark: false,
            hide: true,
            index: 44
          },
          {
            name: '淮南',
            mark: false,
            hide: true,
            index: 45
          },
          {
            name: '淮阴',
            mark: false,
            hide: true,
            index: 46
          },
          {
            name: '黄冈',
            mark: false,
            hide: true,
            index: 47
          },
          {
            name: '黄骅',
            mark: false,
            hide: true,
            index: 48
          },
          {
            name: '黄山',
            mark: false,
            hide: true,
            index: 49
          },
          {
            name: '黄石',
            mark: false,
            hide: true,
            index: 50
          },
          {
            name: '珲春',
            mark: false,
            hide: true,
            index: 51
          },
          {
            name: '辉县',
            mark: false,
            hide: true,
            index: 52
          },
          {
            name: '惠州',
            mark: false,
            hide: true,
            index: 53
          },
          {
            name: '霍林格勒',
            mark: false,
            hide: true,
            index: 54
          },
          {
            name: '霍州',
            mark: false,
            hide: true,
            index: 55
          }
        ]
      },
      {
        key: 'J',
        num: 8,
        data: [{
            name: '鸡西',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '吉安',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '吉林',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '吉首',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '即墨',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '集安',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '集宁',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '济南',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '济宁',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '济源',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '冀州',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '佳木斯',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '嘉兴',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '嘉峪关',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '简阳',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '建德',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '建瓯',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '建阳',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '江都',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '江津',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '江门',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '江山',
            mark: false,
            hide: true,
            index: 21
          },
          {
            name: '江阴',
            mark: false,
            hide: true,
            index: 22
          },
          {
            name: '江油',
            mark: false,
            hide: true,
            index: 23
          },
          {
            name: '姜堰',
            mark: false,
            hide: true,
            index: 24
          },
          {
            name: '胶南',
            mark: false,
            hide: true,
            index: 25
          },
          {
            name: '胶州',
            mark: false,
            hide: true,
            index: 26
          },
          {
            name: '焦作',
            mark: false,
            hide: true,
            index: 27
          },
          {
            name: '蛟河',
            mark: false,
            hide: true,
            index: 28
          },
          {
            name: '揭阳',
            mark: false,
            hide: true,
            index: 29
          },
          {
            name: '介休',
            mark: false,
            hide: true,
            index: 30
          },
          {
            name: '界首',
            mark: false,
            hide: true,
            index: 31
          },
          {
            name: '金昌',
            mark: false,
            hide: true,
            index: 32
          },
          {
            name: '金华',
            mark: false,
            hide: true,
            index: 33
          },
          {
            name: '金坛',
            mark: false,
            hide: true,
            index: 34
          },
          {
            name: '津市',
            mark: false,
            hide: true,
            index: 35
          },
          {
            name: '锦州',
            mark: false,
            hide: true,
            index: 36
          },
          {
            name: '晋城',
            mark: false,
            hide: true,
            index: 37
          },
          {
            name: '晋江',
            mark: false,
            hide: true,
            index: 38
          },
          {
            name: '晋州',
            mark: false,
            hide: true,
            index: 39
          },
          {
            name: '荆门',
            mark: false,
            hide: true,
            index: 40
          },
          {
            name: '荆州',
            mark: false,
            hide: true,
            index: 41
          },
          {
            name: '井冈山',
            mark: false,
            hide: true,
            index: 42
          },
          {
            name: '景德镇',
            mark: false,
            hide: true,
            index: 43
          },
          {
            name: '景洪',
            mark: false,
            hide: true,
            index: 44
          },
          {
            name: '靖江',
            mark: false,
            hide: true,
            index: 45
          },
          {
            name: '九江',
            mark: false,
            hide: true,
            index: 46
          },
          {
            name: '九台',
            mark: false,
            hide: true,
            index: 47
          },
          {
            name: '酒泉',
            mark: false,
            hide: true,
            index: 48
          },
          {
            name: '句容',
            mark: false,
            hide: true,
            index: 49
          }
        ]
      },
      {
        key: 'K',
        num: 9,
        data: [{
            name: '喀什',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '开封',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '开平',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '开原',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '开远',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '凯里',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '克拉玛依',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '库尔勒',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '奎屯',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '昆明',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '昆山',
            mark: false,
            hide: true,
            index: 10
          }
        ]
      },
      {
        key: 'L',
        num: 10,
        data: [{
            name: '拉萨',
            mark: false,
            hide: true,
            index: 0
          },
          {
            name: '莱芜',
            mark: false,
            hide: true,
            index: 1
          },
          {
            name: '莱西',
            mark: false,
            hide: true,
            index: 2
          },
          {
            name: '莱阳',
            mark: false,
            hide: true,
            index: 3
          },
          {
            name: '莱州',
            mark: false,
            hide: true,
            index: 4
          },
          {
            name: '兰溪',
            mark: false,
            hide: true,
            index: 5
          },
          {
            name: '兰州',
            mark: false,
            hide: true,
            index: 6
          },
          {
            name: '廊坊',
            mark: false,
            hide: true,
            index: 7
          },
          {
            name: '阆中',
            mark: false,
            hide: true,
            index: 8
          },
          {
            name: '老河口',
            mark: false,
            hide: true,
            index: 9
          },
          {
            name: '乐昌',
            mark: false,
            hide: true,
            index: 10
          },
          {
            name: '乐陵',
            mark: false,
            hide: true,
            index: 11
          },
          {
            name: '乐平',
            mark: false,
            hide: true,
            index: 12
          },
          {
            name: '乐清',
            mark: false,
            hide: true,
            index: 13
          },
          {
            name: '乐山',
            mark: false,
            hide: true,
            index: 14
          },
          {
            name: '雷州',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '耒阳',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '冷水江',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '离石',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '醴陵',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '丽水',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '利川',
            mark: false,
            hide: true,
            index: 21
          },
          {
            name: '溧阳',
            mark: false,
            hide: true,
            index: 22
          },
          {
            name: '连云港',
            mark: false,
            hide: true,
            index: 23
          },
          {
            name: '连州',
            mark: false,
            hide: true,
            index: 24
          },
          {
            name: '涟源',
            mark: false,
            hide: true,
            index: 25
          },
          {
            name: '廉江',
            mark: false,
            hide: true,
            index: 26
          },
          {
            name: '辽阳',
            mark: false,
            hide: true,
            index: 27
          },
          {
            name: '辽源',
            mark: false,
            hide: true,
            index: 28
          },
          {
            name: '聊城',
            mark: false,
            hide: true,
            index: 29
          },
          {
            name: '林州',
            mark: false,
            hide: true,
            index: 30
          },
          {
            name: '临安',
            mark: false,
            hide: true,
            index: 31
          },
          {
            name: '临川',
            mark: false,
            hide: true,
            index: 32
          },
          {
            name: '临汾',
            mark: false,
            hide: true,
            index: 33
          },
          {
            name: '临海',
            mark: false,
            hide: true,
            index: 34
          },
          {
            name: '临河',
            mark: false,
            hide: true,
            index: 35
          },
          {
            name: '临江',
            mark: false,
            hide: true,
            index: 36
          },
          {
            name: '临清',
            mark: false,
            hide: true,
            index: 37
          },
          {
            name: '临夏',
            mark: false,
            hide: true,
            index: 38
          },
          {
            name: '临湘',
            mark: false,
            hide: true,
            index: 39
          },
          {
            name: '临沂',
            mark: false,
            hide: true,
            index: 40
          },
          {
            name: '灵宝',
            mark: false,
            hide: true,
            index: 41
          },
          {
            name: '灵武',
            mark: false,
            hide: true,
            index: 42
          },
          {
            name: '凌海',
            mark: false,
            hide: true,
            index: 43
          },
          {
            name: '凌源',
            mark: false,
            hide: true,
            index: 44
          },
          {
            name: '浏阳',
            mark: false,
            hide: true,
            index: 45
          },
          {
            name: '柳州',
            mark: false,
            hide: true,
            index: 46
          },
          {
            name: '六安',
            mark: false,
            hide: true,
            index: 47
          },
          {
            name: '六盘水',
            mark: false,
            hide: true,
            index: 48
          },
          {
            name: '龙海',
            mark: false,
            hide: true,
            index: 49
          }, {
            name: '龙井',
            mark: false,
            hide: true,
            index: 50
          }, {
            name: '龙口',
            mark: false,
            hide: true,
            index: 51
          }, {
            name: '龙泉',
            mark: false,
            hide: true,
            index: 52
          }, {
            name: '龙岩',
            mark: false,
            hide: true,
            index: 53
          }, {
            name: '娄底',
            mark: false,
            hide: true,
            index: 54
          }, {
            name: '泸州',
            mark: false,
            hide: true,
            index: 55
          }, {
            name: '陆丰',
            mark: false,
            hide: true,
            index: 56
          }, {
            name: '鹿泉',
            mark: false,
            hide: true,
            index: 57
          }, {
            name: '潞城',
            mark: false,
            hide: true,
            index: 58
          }, {
            name: '潞西',
            mark: false,
            hide: true,
            index: 59
          }, {
            name: '罗定',
            mark: false,
            hide: true,
            index: 60
          }, {
            name: '洛阳',
            mark: false,
            hide: true,
            index: 61
          }, {
            name: '漯河',
            mark: false,
            hide: true,
            index: 62
          }
        ]
      },
      {
        key: 'M',
        num: 11,
        data: [{
          name: '麻城',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '马鞍山',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '满洲里',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '茂名',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '梅河口',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '梅州',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '孟州',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '米泉',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '汨罗',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '密山',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '绵阳',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '绵竹',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '明光',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '牡丹江',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '穆棱',
          mark: false,
          hide: true,
          index: 14
        }
        ]
      },
      {
        key: 'N',
        num: 12,
        data: [{
          name: '内江',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '南安',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '南昌',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '南充',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '南川',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '南宫',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '南京',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '南康',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '南宁',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '南平',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '南通',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '南雄',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '南阳',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '讷河',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '宁安',
          mark: false,
          hide: true,
          index: 14
          },
          {
            name: '宁波',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '宁德',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '宁国',
            mark: false,
            hide: true,
            index: 17
          }
        ]
      },
      {
        key: 'P',
        num: 13,
        data: [{
          name: '攀枝花',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '盘锦',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '磐石',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '彭州',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '蓬莱',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '邳州',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '平顶山',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '平度',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '平凉',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '凭祥',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '萍乡',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '莆田',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '濮阳',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '普兰店',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '普宁',
          mark: false,
          hide: true,
          index: 14
        }
        ]
      },
      {
        key: 'Q',
        num: 14,
        data: [{
          name: '七台河',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '栖霞',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '齐齐哈尔',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '启东',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '迁安',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '潜江',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '钦州',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '秦皇岛',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '沁阳',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '青岛',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '青铜峡',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '青州',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '清远',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '清镇',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '庆阳',
          mark: false,
          hide: true,
          index: 14
          },
          {
            name: '邛崃',
            mark: false,
            hide: true,
            index: 15
          },
          {
            name: '琼海',
            mark: false,
            hide: true,
            index: 16
          },
          {
            name: '琼山',
            mark: false,
            hide: true,
            index: 17
          },
          {
            name: '曲阜',
            mark: false,
            hide: true,
            index: 18
          },
          {
            name: '曲靖',
            mark: false,
            hide: true,
            index: 19
          },
          {
            name: '衢州',
            mark: false,
            hide: true,
            index: 20
          },
          {
            name: '泉州',
            mark: false,
            hide: true,
            index: 21
          }
        ]
      },
      {
        key: 'R',
        num: 15,
        data: [{
          name: '仁怀',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '任丘',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '日喀则',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '日照',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '荣成',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '如皋',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '汝州',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '乳山',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '瑞安',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '瑞昌',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '瑞金',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '瑞丽',
          mark: false,
          hide: true,
          index: 11
        }
        ]
      },
      {
        key: 'S',
        num: 16,
        data: [{
          name: '三河',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '三门峡',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '三明',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '三亚',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '沙河',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '汕头',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '汕尾',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '商丘',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '商州',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '上海',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '上饶',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '上虞',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '尚志',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '韶关',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '韶山',
          mark: false,
          hide: true,
          index: 14
        },
        {
          name: '邵武',
          mark: false,
          hide: true,
          index: 15
        },
        {
          name: '邵阳',
          mark: false,
          hide: true,
          index: 16
        },
        {
          name: '绍兴',
          mark: false,
          hide: true,
          index: 17
        },
        {
          name: '深圳',
          mark: false,
          hide: true,
          index: 18
        },
        {
          name: '深州',
          mark: false,
          hide: true,
          index: 19
        },
        {
          name: '沈阳',
          mark: false,
          hide: true,
          index: 20
        },
        {
          name: '嵊州',
          mark: false,
          hide: true,
          index: 21
        },
        {
          name: '十堰',
          mark: false,
          hide: true,
          index: 22
        },
        {
          name: '什邡',
          mark: false,
          hide: true,
          index: 23
        },
        {
          name: '石河子',
          mark: false,
          hide: true,
          index: 24
        },
        {
          name: '石家庄',
          mark: false,
          hide: true,
          index: 25
        },
        {
          name: '石狮',
          mark: false,
          hide: true,
          index: 26
        },
        {
          name: '石首',
          mark: false,
          hide: true,
          index: 27
        },
        {
          name: '石嘴山',
          mark: false,
          hide: true,
          index: 28
        },
        {
          name: '寿光',
          mark: false,
          hide: true,
          index: 29
        },
        {
          name: '舒兰',
          mark: false,
          hide: true,
          index: 30
        },
        {
          name: '双城',
          mark: false,
          hide: true,
          index: 31
        },
        {
          name: '双辽',
          mark: false,
          hide: true,
          index: 32
        },
        {
          name: '双鸭山',
          mark: false,
          hide: true,
          index: 33
        },
        {
          name: '朔州',
          mark: false,
          hide: true,
          index: 34
        },
        {
          name: '思茅',
          mark: false,
          hide: true,
          index: 35
        },
        {
          name: '四会',
          mark: false,
          hide: true,
          index: 36
        },
        {
          name: '四平',
          mark: false,
          hide: true,
          index: 37
        },
        {
          name: '松原',
          mark: false,
          hide: true,
          index: 38
        },
        {
          name: '松滋',
          mark: false,
          hide: true,
          index: 39
        },
        {
          name: '苏州',
          mark: false,
          hide: true,
          index: 40
        },
        {
          name: '宿迁',
          mark: false,
          hide: true,
          index: 41
        },
        {
          name: '宿州',
          mark: false,
          hide: true,
          index: 42
        },
        {
          name: '绥芬河',
          mark: false,
          hide: true,
          index: 43
        },
        {
          name: '绥化',
          mark: false,
          hide: true,
          index: 44
        },
        {
          name: '随州',
          mark: false,
          hide: true,
          index: 45
        },
        {
          name: '遂宁',
          mark: false,
          hide: true,
          index: 46
        }
        ]
      },
      {
        key: 'T',
        num: 17,
        data: [{
          name: '塔城',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '台山',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '台州',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '太仓',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '太原',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '泰安',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '泰兴',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '泰州',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '唐山',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '洮南',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '滕州',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '天长',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '天津',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '天门',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '天水',
          mark: false,
          hide: true,
          index: 14
        },
        {
          name: '铁法',
          mark: false,
          hide: true,
          index: 15
        },
        {
          name: '铁力',
          mark: false,
          hide: true,
          index: 16
        },
        {
          name: '铁岭',
          mark: false,
          hide: true,
          index: 17
        },
        {
          name: '通化',
          mark: false,
          hide: true,
          index: 18
        },
        {
          name: '通辽',
          mark: false,
          hide: true,
          index: 19
        },
        {
          name: '通什',
          mark: false,
          hide: true,
          index: 20
        },
        {
          name: '通州',
          mark: false,
          hide: true,
          index: 21
        },
        {
          name: '同江',
          mark: false,
          hide: true,
          index: 22
        },
        {
          name: '桐城',
          mark: false,
          hide: true,
          index: 23
        },
        {
          name: '桐乡',
          mark: false,
          hide: true,
          index: 24
        },
        {
          name: '铜川',
          mark: false,
          hide: true,
          index: 25
        },
        {
          name: '铜陵',
          mark: false,
          hide: true,
          index: 26
        },
        {
          name: '铜仁',
          mark: false,
          hide: true,
          index: 27
        },
        {
          name: '图们',
          mark: false,
          hide: true,
          index: 28
        },
        {
          name: '吐鲁番',
          mark: false,
          hide: true,
          index: 29
        }
        ]
      },
      {
        key: 'W',
        num: 18,
        data: [{
          name: '瓦房店',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '畹町',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '万宁',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '万源',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '威海',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '潍坊',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '卫辉',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '渭南',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '温岭',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '温州',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '文昌',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '文登',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '文水',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '乌海',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '乌兰浩特',
          mark: false,
          hide: true,
          index: 14
        },
        {
          name: '乌鲁木齐',
          mark: false,
          hide: true,
          index: 15
        },
        {
          name: '乌苏',
          mark: false,
          hide: true,
          index: 16
        },
        {
          name: '无锡',
          mark: false,
          hide: true,
          index: 17
        },
        {
          name: '吴川',
          mark: false,
          hide: true,
          index: 18
        },
        {
          name: '吴江',
          mark: false,
          hide: true,
          index: 19
        },
        {
          name: '吴县',
          mark: false,
          hide: true,
          index: 20
        },
        {
          name: '吴忠',
          mark: false,
          hide: true,
          index: 21
        },
        {
          name: '芜湖',
          mark: false,
          hide: true,
          index: 22
        },
        {
          name: '梧州',
          mark: false,
          hide: true,
          index: 23
        },
        {
          name: '五常',
          mark: false,
          hide: true,
          index: 24
        },
        {
          name: '五大连池',
          mark: false,
          hide: true,
          index: 25
        },
        {
          name: '武安',
          mark: false,
          hide: true,
          index: 26
        },
        {
          name: '武冈',
          mark: false,
          hide: true,
          index: 27
        },
        {
          name: '武汉',
          mark: false,
          hide: true,
          index: 28
        },
        {
          name: '武进',
          mark: false,
          hide: true,
          index: 29
          },
          {
            name: '武威',
            mark: false,
            hide: true,
            index: 30
          },
          {
            name: '武穴',
            mark: false,
            hide: true,
            index: 31
          },
          {
            name: '武夷山',
            mark: false,
            hide: true,
            index: 32
          },
          {
            name: '舞钢',
            mark: false,
            hide: true,
            index: 33
          }
        ]
      },
      {
        key: 'X',
        num: 19,
        data: [{
          name: '西安',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '西昌',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '西峰',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '西宁',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '锡林浩特',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '锡山',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '厦门',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '仙桃',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '咸宁',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '咸阳',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '湘潭',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '湘乡',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '襄樊',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '项城',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '萧山',
          mark: false,
          hide: true,
          index: 14
        },
        {
          name: '孝感',
          mark: false,
          hide: true,
          index: 15
        },
        {
          name: '孝义',
          mark: false,
          hide: true,
          index: 16
        },
        {
          name: '忻州',
          mark: false,
          hide: true,
          index: 17
        },
        {
          name: '辛集',
          mark: false,
          hide: true,
          index: 18
        },
        {
          name: '新乐',
          mark: false,
          hide: true,
          index: 19
        },
        {
          name: '新密',
          mark: false,
          hide: true,
          index: 20
        },
        {
          name: '新民',
          mark: false,
          hide: true,
          index: 21
        },
        {
          name: '新泰',
          mark: false,
          hide: true,
          index: 22
        },
        {
          name: '新乡',
          mark: false,
          hide: true,
          index: 23
        },
        {
          name: '新沂',
          mark: false,
          hide: true,
          index: 24
        },
        {
          name: '新余',
          mark: false,
          hide: true,
          index: 25
        },
        {
          name: '新郑',
          mark: false,
          hide: true,
          index: 26
        },
        {
          name: '信阳',
          mark: false,
          hide: true,
          index: 27
        },
        {
          name: '信宜',
          mark: false,
          hide: true,
          index: 28
        },
        {
          name: '兴城',
          mark: false,
          hide: true,
          index: 29
        },
        {
          name: '兴化',
          mark: false,
          hide: true,
          index: 30
        },
        {
          name: '兴宁',
          mark: false,
          hide: true,
          index: 31
        },
        {
          name: '兴平',
          mark: false,
          hide: true,
          index: 32
        },
        {
          name: '兴义',
          mark: false,
          hide: true,
          index: 33
          },
          {
            name: '邢台',
            mark: false,
            hide: true,
            index: 34
          },
          {
            name: '徐州',
            mark: false,
            hide: true,
            index: 35
          },
          {
            name: '许昌',
            mark: false,
            hide: true,
            index: 36
          },
          {
            name: '宣威',
            mark: false,
            hide: true,
            index: 37
          },
          {
            name: '宣州',
            mark: false,
            hide: true,
            index: 38
          },
          {
            name: '香港',
            mark: false,
            hide: true,
            index: 39
          }
        ]
      },
      {
        key: 'Y',
        num: 20,
        data: [{
          name: '牙克石',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '雅安',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '烟台',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '延安',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '延吉',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '盐城',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '兖州',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '偃师',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '扬中',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '扬州',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '阳春',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '阳江',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '阳泉',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '伊春',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '伊宁',
          mark: false,
          hide: true,
          index: 14
        },
        {
          name: '仪征',
          mark: false,
          hide: true,
          index: 15
        },
        {
          name: '宜宾',
          mark: false,
          hide: true,
          index: 16
        },
        {
          name: '宜昌',
          mark: false,
          hide: true,
          index: 17
        },
        {
          name: '宜城',
          mark: false,
          hide: true,
          index: 18
        },
        {
          name: '宜春',
          mark: false,
          hide: true,
          index: 19
        },
        {
          name: '宜都',
          mark: false,
          hide: true,
          index: 20
        },
        {
          name: '宜兴',
          mark: false,
          hide: true,
          index: 21
        },
        {
          name: '宜州',
          mark: false,
          hide: true,
          index: 22
        },
        {
          name: '义马',
          mark: false,
          hide: true,
          index: 23
        },
        {
          name: '义乌',
          mark: false,
          hide: true,
          index: 24
        },
        {
          name: '益阳',
          mark: false,
          hide: true,
          index: 25
        },
        {
          name: '银川',
          mark: false,
          hide: true,
          index: 26
        },
        {
          name: '应城',
          mark: false,
          hide: true,
          index: 27
        },
        {
          name: '英德',
          mark: false,
          hide: true,
          index: 28
        },
        {
          name: '鹰潭',
          mark: false,
          hide: true,
          index: 29
        },
        {
          name: '荥阳',
          mark: false,
          hide: true,
          index: 30
        },
        {
          name: '营口',
          mark: false,
          hide: true,
          index: 31
        },
        {
          name: '永安',
          mark: false,
          hide: true,
          index: 32
        },
        {
          name: '永城',
          mark: false,
          hide: true,
          index: 33
        },
        {
          name: '永川',
          mark: false,
          hide: true,
          index: 34
        },
        {
          name: '永济',
          mark: false,
          hide: true,
          index: 35
        },
        {
          name: '永康',
          mark: false,
          hide: true,
          index: 36
        },
        {
          name: '永州',
          mark: false,
          hide: true,
          index: 37
        },
        {
          name: '余杭',
          mark: false,
          hide: true,
          index: 38
        },
        {
          name: '余姚',
          mark: false,
          hide: true,
          index: 39
          },
          {
            name: '榆次',
            mark: false,
            hide: true,
            index: 40
          },
          {
            name: '榆林',
            mark: false,
            hide: true,
            index: 41
          },
          {
            name: '榆树',
            mark: false,
            hide: true,
            index: 42
          },
          {
            name: '禹城',
            mark: false,
            hide: true,
            index: 43
          },
          {
            name: '禹州',
            mark: false,
            hide: true,
            index: 44
          },
          {
            name: '玉林',
            mark: false,
            hide: true,
            index: 45
          },
          {
            name: '玉门',
            mark: false,
            hide: true,
            index: 46
          },
          {
            name: '玉溪',
            mark: false,
            hide: true,
            index: 47
          },
          {
            name: '沅江',
            mark: false,
            hide: true,
            index: 48
          },
          {
            name: '原平',
            mark: false,
            hide: true,
            index: 49
          },
          {
            name: '岳阳',
            mark: false,
            hide: true,
            index: 50
          },
          {
            name: '云浮',
            mark: false,
            hide: true,
            index: 51
          },
          {
            name: '运城',
            mark: false,
            hide: true,
            index: 52
          }
        ]
      },
      {
        key: 'Z',
        num: 21,
        data: [{
          name: '枣阳',
          mark: false,
          hide: true,
          index: 0
        },
        {
          name: '枣庄',
          mark: false,
          hide: true,
          index: 1
        },
        {
          name: '增城',
          mark: false,
          hide: true,
          index: 2
        },
        {
          name: '扎兰屯',
          mark: false,
          hide: true,
          index: 3
        },
        {
          name: '湛江',
          mark: false,
          hide: true,
          index: 4
        },
        {
          name: '张家港',
          mark: false,
          hide: true,
          index: 5
        },
        {
          name: '张家界',
          mark: false,
          hide: true,
          index: 6
        },
        {
          name: '张家口',
          mark: false,
          hide: true,
          index: 7
        },
        {
          name: '张掖',
          mark: false,
          hide: true,
          index: 8
        },
        {
          name: '章丘',
          mark: false,
          hide: true,
          index: 9
        },
        {
          name: '漳平',
          mark: false,
          hide: true,
          index: 10
        },
        {
          name: '漳州',
          mark: false,
          hide: true,
          index: 11
        },
        {
          name: '樟树',
          mark: false,
          hide: true,
          index: 12
        },
        {
          name: '招远',
          mark: false,
          hide: true,
          index: 13
        },
        {
          name: '昭通',
          mark: false,
          hide: true,
          index: 14
        },
        {
          name: '肇东',
          mark: false,
          hide: true,
          index: 15
        },
        {
          name: '肇庆',
          mark: false,
          hide: true,
          index: 16
        },
        {
          name: '镇江',
          mark: false,
          hide: true,
          index: 17
        },
        {
          name: '郑州',
          mark: false,
          hide: true,
          index: 18
        },
        {
          name: '枝江',
          mark: false,
          hide: true,
          index: 19
        },
        {
          name: '中山',
          mark: false,
          hide: true,
          index: 20
        },
        {
          name: '重庆',
          mark: false,
          hide: true,
          index: 21
        },
        {
          name: '舟山',
          mark: false,
          hide: true,
          index: 22
        },
        {
          name: '周口',
          mark: false,
          hide: true,
          index: 23
        },
        {
          name: '株洲',
          mark: false,
          hide: true,
          index: 24
        },
        {
          name: '珠海',
          mark: false,
          hide: true,
          index: 25
        },
        {
          name: '诸城',
          mark: false,
          hide: true,
          index: 26
        },
        {
          name: '诸暨',
          mark: false,
          hide: true,
          index: 27
        },
        {
          name: '驻马店',
          mark: false,
          hide: true,
          index: 28
        },
        {
          name: '庄河',
          mark: false,
          hide: true,
          index: 29
        },
        {
          name: '涿州',
          mark: false,
          hide: true,
          index: 30
        },
        {
          name: '资兴',
          mark: false,
          hide: true,
          index: 31
        },
        {
          name: '资阳',
          mark: false,
          hide: true,
          index: 32
        },
        {
          name: '淄博',
          mark: false,
          hide: true,
          index: 33
        },
        {
          name: '自贡',
          mark: false,
          hide: true,
          index: 34
        },
        {
          name: '邹城',
          mark: false,
          hide: true,
          index: 35
        },
        {
          name: '遵化',
          mark: false,
          hide: true,
          index: 36
        },
        {
          name: '遵义',
          mark: false,
          hide: true,
          index: 37
        }
        ]
      }


    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log(options.info)
    let info = options.info
    this.setData({
      info: info
    })
    if (info == 1) {
      wx.setNavigationBarTitle({
        title: '出发地选择'
      })
    }
    if (info == 2) {
      wx.setNavigationBarTitle({
        title: '目的地选择'
      })
    }
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一级页面
    prevPage.setData({

      info: '456'
    })

  },
  // 获取本地缓存的历史记录
  cache: function() {
    let that = this
    wx.getStorage({
      key: 'history',
      success: function(res) {
        console.log(res.data)
        let history = []
        let length = res.data.length
        for (let i = 0; i < length; i++) {
          let a = {
            name: res.data[i],
            mark: false
          }
          history.push(a)
        }
        that.setData({
          history: history,
          historys: res.data
        })
      }
    })
  },
  input: function(res) {
    // console.log(res.detail.value)
    this.setData({
      company: res.detail.value
    })
  },
  // 支持模糊搜索城市
  search: function() {
    console.log(this.data.company)
    console.log(this.data.list)

    // this.setData({
    //   mark: !this.data.mark
    // })
    let search = this.data.company
    let length = this.data.list.length
    let list = this.data.list
    let that = this
    let lists = []
    let tostnum=0
    if (search == '') {
      this.setData({
        tost_hide: true,
        tost: '输入查询条件'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    for (let i = 0; i < length; i++) {
      let lengths = list[i].data.length
      for (let j = 0; j < lengths; j++) {

        let judge = list[i].data[j].name.indexOf(search)
        if (judge !== -1) {
          list[i].data[j].hide = true
          tostnum++
        } else {
          list[i].data[j].hide = false
        }
      }
    }
    console.log(tostnum)
    if (tostnum == 0) {
      this.setData({
        tost_hide: true,
        tost: '没有这个城市'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    that.setData({
      list: list,
      title: false
    })
  },
  history: function(res) {
    let index = res.currentTarget.dataset.info
    let history = this.data.history
    let historyName = this.data.historyName
    history[index].mark = !history[index].mark
    let search_value = this.data.search_value
    console.log(index)
    console.log(history[index].mark)
    if (history[index].mark) {
      search_value.push(history[index].name)
      this.setData({
        // search_value: search_value,
        history: history,
        historyName: search_value
      })
    } else {
      console.log(search_value.indexOf(history[index].name))
      search_value.splice(search_value.indexOf(history[index].name), 1)
      this.setData({
        // search_value: search_value,
        history: history,
        historyName: search_value
      })
    }
    console.log(historyName)
  },
  hot: function(res) {
    let index = res.currentTarget.dataset.info
    let hot = this.data.hot
    hot[index].mark = !hot[index].mark
    let search_value = this.data.search_value
    console.log(index)
    console.log(hot[index].mark)
    if (hot[index].mark) {
      search_value.push(hot[index].name)
      this.setData({
        // search_value: search_value,
        hot: hot,
        hotName: search_value
      })
    } else {
      console.log(search_value.indexOf(hot[index].name))
      search_value.splice(search_value.indexOf(hot[index].name), 1)
      this.setData({
        // search_value: search_value,
        hot: hot,
        hotName: search_value
      })
    }
    console.log(this.data.hot)
  },
  checked: function(res) {
    console.log(res.currentTarget.dataset.infos)
    console.log(res.currentTarget.dataset.index)
    let num = res.currentTarget.dataset.infos
    let index = res.currentTarget.dataset.index
    let list = this.data.list
    
    let lists = []
    let length = this.data.list.length
    console.log(this.data.list[num].data[index].name)
    list[num].data[index].mark = !list[num].data[index].mark

    for (let i = 0; i < length; i++) {
      let lengths = list[i].data.length
      for (let j = 0; j < lengths; j++) {
        if (list[i].data[j].mark) {
          lists.push(list[i].data[j].name)
        }
      }
    }
    this.setData({
      list: list,
      lists: lists
    })
    console.log(lists)

  },
  // 保存功能
  save: function() {
    
    let that = this
    let lists = this.data.lists
    let historyName = this.data.historyName
    let hotName = this.data.hotName
    lists = (lists.concat(historyName)).concat(hotName)
    let info = this.data.info
    // 保存成功把值传递给前一级页面
   
    let list=[]
    for (let i = 0; i < lists.length;i++){
      if(list.indexOf(lists[i])==-1){
        list.push(lists[i])
      }
    }
    console.log(list)
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一级页面
    if (info == 1) {
      prevPage.setData({
        start: list,
        choice1: false,
        choice2: false
      })
    }
    if (info == 2) {
      prevPage.setData({
        end: list,
        choice1: false,
        choice2: false
      })
    }

    wx.navigateBack({

    })
    this.setstorag()
  },
  // 存储历史记录到缓存
  setstorag: function() {
    console.log(this.data.lists)

    let lists = this.data.lists
    let historys = this.data.historys
    let lists_length = this.data.lists.length
    for (let i = 0; i < lists_length; i++) {
      historys.unshift(lists[i])
    }
    console.log(historys)
    let historys_length = historys.length
    let test = []
    for (let j = 0; j < historys_length; j++) {
      console.log((test.indexOf(historys[j]) == -1))
      if ((test.indexOf(historys[j]) == -1)) {
        test.push(historys[j])
      }
    }

    wx.setStorage({
      key: 'history',
      data: test.splice(0, 6)
    })
  },
  // 存储历史记录到缓存
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.cache()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一级页面
    prevPage.setData({
      choice1: false,
      choice2: false
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})