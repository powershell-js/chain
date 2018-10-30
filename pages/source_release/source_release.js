// pages/homepage_release/homepage_release.js
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    tost_hide: false,
    tost: '提示信息',
    // 时间选择
    satrtchoiceTime: [],
    satrtchoiceTimes: [],
    endchoiceTime: [],
    endchoiceTimes: [],
    // 时间选择
    companyNames:[],
    newcompanyName:[],
    dropcheck:false,
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    startTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    
    date1: '2018-10-01',
    time1: '12:00',
    dateTimeArrays: null,
    dateTime1: null,
    endTime: null,
    dateTimeArrays1: null,
    dateTime11: null,
    startYear1: 2000,
    endYear1: 2050,


    companyName: '',
    contacts: '',
    phone: '',
    num: 0,
    car: [],
    add: 1,
    adds: [{
      place1: [],
      place2: [],
      car: [],
      startTime: [
        {
          date: '2018-10-01',
          time: '12:00',
          dateTimeArray: null,
          dateTime: null,
          startTime: null,
          dateTimeArray1: null,
          dateTime1: null,
          startYear: 2000,
          endYear: 2050
        }
      ],
      endTime:[
        {
          date1: '2018-10-01',
          time1: '12:00',
          dateTimeArrays: null,
          dateTime1: null,
          endTime: null,
          dateTimeArrays1: null,
          dateTime11: null,
          startYear1: 2000,
          endYear1: 2050,
        }
      ]
    }],
    index: 0,
    value: '1',
    start: [true],
    starts: [true],
    open: [true],
    indexs: 0,
    region: ['上海市', '上海市', '嘉定区']
    // customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log(res.data)
        that.setData({
          token: res.data
        })
      }
    })
    wx.setNavigationBarTitle({
      title: '货源发布',
    })
    this.choicedate()
    this.choicedate1()
    this.choiceTimeDate()
    this.requestCompany()
  },
  // 数据请求
  requestCompany: function () {
    let that = this
    wx.showLoading({
      title: '玩命加载中'
    })
    console.log(this.data.company)
    console.log(this.data.start)
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/ColdCompanyController/list',
      data: {

      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"/*POST请求*/
      },

      success(res) {
        wx.hideLoading()
        if (res.data.code == 1) {
          let length = res.data.msg.length
          let companyNames = []
          for (let i = 0; i < length; i++) {
            companyNames.push(res.data.msg[i].companyName)
          }
          that.setData({
            companyNames: companyNames
          })
          console.log(companyNames)
        }
      }
    })
  },
  // 数据请求
  // 时间选择
  choiceTimeDate(){
    let length = 100
    let satrtchoiceTime = this.data.satrtchoiceTime
    let satrtchoiceTimes = this.data.satrtchoiceTimes
    let endchoiceTime = this.data.endchoiceTime
    let endchoiceTimes = this.data.endchoiceTimes
    console.log(satrtchoiceTime)
    for (let i = 0; i < length; i++) {
      satrtchoiceTime[i] = {
        dateTimeArray: null,
        dateTime: null,
        startYear: 2000,
        endYear: 2060
      }
      satrtchoiceTimes[i] = ''
      var obj = dateTimePicker.dateTimePicker(satrtchoiceTime[i].startYear, satrtchoiceTime[i].endYear);
      satrtchoiceTime[i] = {
        dateTimeArray: obj.dateTimeArray,
        dateTime: obj.dateTime
      }

      endchoiceTime[i] = {
        dateTimeArray: null,
        dateTime: null,
        startYear: 2000,
        endYear: 2060
      }
      endchoiceTimes[i] = ''
      var obj = dateTimePicker.dateTimePicker(endchoiceTime[i].startYear, endchoiceTime[i].endYear);
      endchoiceTime[i] = {
        dateTimeArray: obj.dateTimeArray,
        dateTime: obj.dateTime
      }
    }
    this.setData({
      satrtchoiceTime: satrtchoiceTime,
      endchoiceTime: endchoiceTime
    })
  },
  changeTime(e) {
    let index = e.currentTarget.dataset.index
    let satrtchoiceTime = this.data.satrtchoiceTime
    let satrtchoiceTimes = this.data.satrtchoiceTimes
    satrtchoiceTime[index].dateTime = e.detail.value
    let year = '20' + e.detail.value[0]
    let mont = parseInt(e.detail.value[1]) + 1
    let date = parseInt(e.detail.value[2]) + 1
    let hourse = parseInt(e.detail.value[3])
    let monite = parseInt(e.detail.value[4])
    let seconds = parseInt(e.detail.value[5])
    if (mont < 10) {
      mont = '0' + mont
    }
    if (date < 10) {
      date = '0' + date
    }
    if (hourse < 10) {
      hourse = '0' + hourse
    }
    if (monite < 10) {
      monite = '0' + monite
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    let time = year + '-' + mont + '-' + date + ' ' + hourse + ':' + monite + ':' + seconds
    satrtchoiceTimes[index] = time
    console.log(time)
    this.setData({
      satrtchoiceTime: satrtchoiceTime,
      satrtchoiceTimes: satrtchoiceTimes
    })
  },
  changeTimes(e) {
    let index = e.currentTarget.dataset.index
    let endchoiceTime = this.data.endchoiceTime
    let endchoiceTimes = this.data.endchoiceTimes
    endchoiceTime[index].dateTime = e.detail.value
    let year = '20' + e.detail.value[0]
    let mont = parseInt(e.detail.value[1]) + 1
    let date = parseInt(e.detail.value[2]) + 1
    let hourse = parseInt(e.detail.value[3])
    let monite = parseInt(e.detail.value[4])
    let seconds = parseInt(e.detail.value[5])
    if (mont < 10) {
      mont = '0' + mont
    }
    if (date < 10) {
      date = '0' + date
    }
    if (hourse < 10) {
      hourse = '0' + hourse
    }
    if (monite < 10) {
      monite = '0' + monite
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    let time = year + '-' + mont + '-' + date + ' ' + hourse + ':' + monite + ':' + seconds
    endchoiceTimes[index] = time
    console.log(time)
    this.setData({
      endchoiceTime: endchoiceTime,
      endchoiceTimes: endchoiceTimes
    })
  },
  // 时间选择
  choicedate1() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    let adds=this.data.adds
    console.log(this.data.adds[0].endTime)
    let startYear1 = this.data.adds[0].startTime[0].startYear1
    let endYear1 = this.data.adds[0].endTime[0].endYear1
    var obj = dateTimePicker.dateTimePicker(startYear1, endYear1);
    var obj1 = dateTimePicker.dateTimePicker(startYear1, endYear1);
    // 精确到分的处理，将数组的秒去掉
    console.log(obj)
    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    adds[0].endTime[0]={
      dateTime1: obj.dateTime,
      endTime: obj.dateTime,
      dateTimeArrays: obj.dateTimeArray,
      dateTimeArray11: obj1.dateTimeArray,
      dateTime11: obj1.dateTime
    }
    this.setData({
      dateTime1: obj.dateTime,
      endTime: obj.dateTime,
      dateTimeArrays: obj.dateTimeArray,
      dateTimeArray11: obj1.dateTimeArray,
      dateTime11: obj1.dateTime
    });
    console.log(adds[0].endTime[0].endTime)
    console.log(this.data.startTime)
  },
  choicedate() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    // let adds = this.data.adds
    // console.log(this.data.adds[0].startTime)
    // let startYear = this.data.adds[0].startTime[0].startYear
    // let endYear = this.data.adds[0].startTime[0].endYear
    // var obj = dateTimePicker.dateTimePicker(startYear, endYear);
    // var obj1 = dateTimePicker.dateTimePicker(startYear, endYear);
    // // 精确到分的处理，将数组的秒去掉
    // console.log(obj)
    // var lastArray = obj1.dateTimeArray.pop();
    // var lastTime = obj1.dateTime.pop();
    // adds[0].startTime[0] = {
    //   dateTime: obj.dateTime,
    //   startTime: obj.dateTime,
    //   dateTimeArray: obj.dateTimeArray,
    //   dateTimeArray1: obj1.dateTimeArray,
    //   dateTime1: obj1.dateTime
    // }
    // this.setData({
    //   adds: adds
    // });

    let startYear = this.data.adds[0].startTime[0].startYear
    let endYear = this.data.adds[0].startTime[0].endYear
    var obj = dateTimePicker.dateTimePicker(startYear, endYear);
    var obj1 = dateTimePicker.dateTimePicker(startYear, endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    this.setData({
      dateTime: obj.dateTime,
      startTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime
    });
  },
  changeDateTime(e) {
    let index = e.currentTarget.dataset.index
    let adds=this.data.adds
    this.setData({
      dateTime: e.detail.value,
      startTime: e.detail.value
    });
    console.log(e)
  },
  changeEndTime(e){
    this.setData({
      dateTime1: e.detail.value,
      endTime1: e.detail.value
    });
    console.log(e.detail.value)
  },
  changeDateTimeColumn(e) {
    // this.setData({ dateTime: e.detail.value });
    // 选择滚动事件
    // console.log(e)
  },
  company: function(res) {
    console.log(res.detail.value)
    this.setData({
      companyName: res.detail.value
    })
    console.log()
    if (this.data.companyName){
      this.setData({
        dropcheck:true
      })
    }else{
      this.setData({
        dropcheck: false
      })
    }
    let companyNames = this.data.companyNames
    let length = companyNames.length
    let newcompanyNames=[]
    for(let i=0;i<length;i++){
      if (companyNames[i].indexOf(res.detail.value)!=-1){
        newcompanyNames.push(companyNames[i])
      }
    }
    console.log(newcompanyNames)
    this.setData({
      newcompanyName: newcompanyNames
    })
  },
  drop(res){
    console.log(res.currentTarget.dataset.company)
   this.setData({
     dropcheck: false,
     companyName: res.currentTarget.dataset.company
   })
  },
  contacts: function(res) {
    console.log(res.detail.value)
    this.setData({
      contacts: res.detail.value
    })
  },
  phone: function(res) {
    console.log(res.detail.value)
    this.setData({
      phone: res.detail.value
    })
  },
  bindRegionChange: function(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    let adds = this.data.adds
    let start = this.data.start
    start[index] = !start[index]
    adds[index].place1 = e.detail.value
    this.setData({
      adds: adds,
      start: start
    })
  },
  bindRegionChanges: function(e) {
    let index = e.currentTarget.dataset.index
    let adds = this.data.adds
    let starts = this.data.starts
    starts[index] = !starts[index]
    adds[index].place2 = e.detail.value
    this.setData({
      adds: adds,
      starts: starts
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  open: function(res) {
    let index = res.currentTarget.dataset.index
    let open = this.data.open
    open[index] = !open[index]
    this.setData({
      open: open
    })
    console.log(res)
  },
  add: function() {
    console.log(this.data.adds.length)
    let that=this
    if (this.data.adds.length==4){
      this.setData({
        tost_hide: true,
        tost: '最多添加4个'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    let adds = this.data.adds
    let start = this.data.start
    let starts = this.data.starts
    let open = this.data.open
    console.log(start)
    // adds.push(add)
    start.push('true')
    starts.push('true')
    open.push(true)
    let add = {
      place1: [],
      place2: [],
      car: '',
      endTime:[]
    }
    adds.push(add)
    this.setData({
      adds: adds,
      add: adds.length,
      start: start,
      starts: starts,
      open: open
    })
  },
  delet: function(res) {
    console.log(res)
    let index = res.currentTarget.dataset.index
    let adds = this.data.adds
    adds.splice(index, 1)
    if (this.data.add > 1) {
      this.setData({
        adds: adds,
        add: adds.length
      })
    }
    console.log(this.data.adds)
  },

  input: function(res) {
    console.log(res.detail.value)
    let adds = this.data.adds
    let index = this.data.index
    adds[index] = {
      name: res.detail.value
    }
    this.setData({
      adds: adds
    })
  },
  adds: function(res) {
    // console.log(res.currentTarget.dataset.index)
    this.setData({
      index: res.currentTarget.dataset.index
    })
  },
  // 格式化时间
  formaTime(){
    let startTime = this.data.startTime
    let endTime = this.data.endTime
    let startyear = startTime[0]
    let startmont = startTime[1]+1
    let startdate = startTime[2] + 1
    let starthourse = startTime[3]
    let startminute = startTime[4]
    let startsecond = startTime[5]

    let endyear = endTime[0]
    let endmont = endTime[1] + 1
    let enddate = endTime[2] + 1
    let endhourse = endTime[3]
    let endminute = endTime[4]
    let endsecond = endTime[5]
    startyear = '20' + startTime[0]
    if (startmont<10){
      startmont = '0' + startmont
    }
    if (startTime[2]<10) {
      startdate = '0' + startdate
    }
    if (startTime[3] < 10) {
      starthourse = '0' + starthourse
    }
    if (startTime[4] < 10) {
      startminute = '0' + startminute
    }
    if (startTime[5] < 10) {
      startsecond = '0' + startsecond
    }
    
    endyear = '20' + endTime[0]
    if (endmont < 10) {
      endmont = '0' + endmont
    }
    if (endTime[2] < 10) {
      enddate = '0' + enddate
    }
    if (endTime[3] < 10) {
      endhourse = '0' + endhourse
    }
    if (endTime[4] < 10) {
      endminute = '0' + endminute
    }
    if (endTime[5] < 10) {
      endsecond = '0' + endsecond
    }
    console.log(startyear + '-' + startmont + '-' + startdate + ' ' + starthourse + ':' + startminute + ':' + startsecond)
    console.log(endyear + '-' + endmont + '-' + enddate + ' ' + endhourse + ':' + endminute + ':' + endsecond)
    // 格式化时间
  },
  save: function() {
    let that = this
    // 信息提示
    if (this.data.companyName == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入公司名称'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    let adds = this.data.adds
    let beginCity = []
    let beginDistrict = []
    let beginProvince = []
    let endCity = []
    let endDistrict = []
    let endProvince = []
    let vehicleModel = []
    let length = adds.length
    let satrtchoiceTimes = this.data.satrtchoiceTimes
    for (let i = 0; i < length; i++) {
      beginProvince.push(adds[i].place1[0])
      beginCity.push(adds[i].place1[1])
      beginDistrict.push(adds[i].place1[2])
      endProvince.push(adds[i].place2[0])
      endCity.push(adds[i].place2[1])
      endDistrict.push(adds[i].place2[2])
      vehicleModel.push(adds[i].car.join('-'))
      console.log(this.data.satrtchoiceTimes[i])
      if (adds[i].place1 == '') {
        that.setData({
          tost_hide: true,
          tost: '选择第' + (i + 1) + '个出发地'
        })
        setTimeout(function () {
          that.setData({
            tost_hide: false
          })
          return
        }, 1000)
        return
      }
      if (adds[i].place2 == '') {
        that.setData({
          tost_hide: true,
          tost: '选择第' + (i + 1) + '个目的地'
        })
        setTimeout(function () {
          that.setData({
            tost_hide: false
          })
          return
        }, 1000)
        return
      }
      console.log(adds[i].car == '')
      if (adds[i].car == '') {
        that.setData({
          tost_hide: true,
          tost: '选择第' + (i + 1) + '个车长'
        })
        setTimeout(function () {
          that.setData({
            tost_hide: false
          })
          return
        }, 1000)
        return
      }

    }
    
    if (this.data.contacts == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入联系人'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.phone == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入电话号码'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      this.setData({
        tost_hide: true,
        tost: '电话号码错误'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    wx.showLoading({
      title: '玩命加载中'
    })
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var Seconds = date.getMonth() + 1;
    var strDate = date.getDate();


    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
    console.log(currentdate)
    console.log(vehicleModel)
    console.log(this.data.satrtchoiceTimes)
    console.log(this.data.endchoiceTimes)
    console.log(this.data.companyName)
    console.log(this.data.contacts)
    console.log(this.data.phone)
    console.log(this.data.start)
    console.log(this.data.satrtchoiceTimes.slice(0,length))
    // satrtchoiceTime: [],
    //   satrtchoiceTimes: [],
    //     endchoiceTime: [],
    //       endchoiceTimes: [],
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/coldCargoPublishController/save',
      data: {
        'truckLoadingTime': (this.data.satrtchoiceTimes.slice(0, length)).join(),
        'arrivalTime': (this.data.endchoiceTimes.slice(0, length)).join(),
        'companyName': this.data.companyName,
        'beginProvince': beginProvince.join(),
        'beginCity': beginCity.join(),
        'beginDistrict': beginDistrict.join(),
        'endProvince': endProvince.join(),
        'endCity': endCity.join(),
        'endDistrict': endDistrict.join(),
        'vehicleLen': vehicleModel.join(),
        'contacts': this.data.contacts,
        'phone': this.data.phone,
        'create_time': currentdate,
        'token':this.data.token
        
// 'contacts': '自行车',
// 'phone': '234567891',
// 'create_time': '2018-10-22 09:54:00',
// 'vehicleModel': '4.2-3.2,5.5-2.3',
// 'companyName': '上海捷依通信',
// 'beginCity': '上海,北京',
// 'beginDistrict': '嘉定区,朝阳区',
// 'beginProvince': '上海,北京',
// 'endCity': '上海,北京',
// 'endDistrict': '普陀区,东三省',
// 'endProvince': '上海,北京'
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"/*POST请求*/
      },

      success(res) {
        wx.hideLoading()
        if (res.data.code == 1) {
          wx.showToast({
            title: '发布成功'
          },
            wx.navigateBack({

            })
          )
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let index = this.data.num
    let adds = this.data.adds
    adds[index].car = this.data.car
    this.setData({
      adds: adds
    })
    console.log(this.data.adds)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  car_length: function(res) {
    this.setData({
      num: res.currentTarget.dataset.index
    })
    console.log(999)
    wx.navigateTo({
      url: '../car/car'
    })
  },
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

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