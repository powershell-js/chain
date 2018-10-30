// pages/homepage_release/homepage_release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    tost_hide: false,
    tost: '提示信息',
    companyNames: [],
    newcompanyName:[],
    dropcheck: false,
    companyName:'',
    contacts:'',
    phone:'',
    num:0,
    car:[],
    add:1,
    adds:[
      {
        place1: [],
        place2: [],
        car:[]
      }
    ],
    index:0,
    value:'1',
    start: [true],
    starts: [true],
    open:[true],
    indexs: 0,
    region: ['上海市', '上海市', '嘉定区']
    // customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
     title: '运力发布',
   })
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
  company:function(res){
    console.log(res.detail.value)
    this.setData({
      companyName: res.detail.value
    })
    if (this.data.companyName) {
      this.setData({
        dropcheck: true
      })
    } else {
      this.setData({
        dropcheck: false
      })
    }
    let companyNames = this.data.companyNames
    let length = companyNames.length
    let newcompanyNames = []
    for (let i = 0; i < length; i++) {
      if (companyNames[i].indexOf(res.detail.value) != -1) {
        newcompanyNames.push(companyNames[i])
      }
    }
    console.log(newcompanyNames)
    this.setData({
      newcompanyName: newcompanyNames
    })
  },
  drop(res) {
    console.log(res.currentTarget.dataset.company)
    this.setData({
      dropcheck: false,
      companyName: res.currentTarget.dataset.company
    })
  },
  contacts: function (res) {
    console.log(res.detail.value)
    this.setData({
      contacts: res.detail.value
    })
  },
  phone: function (res) {
    console.log(res.detail.value)
    this.setData({
      phone: res.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log(e)
    let index=e.currentTarget.dataset.index
    let adds = this.data.adds
    let start = this.data.start
    start[index] = !start[index]
    adds[index].place1=e.detail.value
    this.setData({
      adds: adds,
      start: start
    })
  },
  bindRegionChanges: function (e) {
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
  onReady: function () {

  },
  open:function(res){
    let index = res.currentTarget.dataset.index
    let open = this.data.open
    open[index]=!open[index]
    this.setData({
      open:open
    })
    console.log(res)
  },
  add:function(){
    let that = this
    if (this.data.adds.length == 4) {
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
    let adds=this.data.adds
    let start = this.data.start
    let starts = this.data.starts
    let open = this.data.open
    console.log(start)
    // adds.push(add)
    start.push('true')
    starts.push('true')
    open.push(true)
    let add={
      place1: [],
      place2:[],
      car:''
    }
    adds.push(add)
    this.setData({
      adds:adds,
      add:adds.length,
      start:start,
      starts:starts,
      open:open
    })
  },
  delet: function (res) {
    console.log(res)
    let index = res.currentTarget.dataset.index
    let adds=this.data.adds
    adds.splice(index,1)
    if (this.data.add>1){
      this.setData({
        adds:adds,
        add:adds.length
      })
    }
    console.log(this.data.adds)
  },

  input:function(res){
    console.log(res.detail.value)
    let adds=this.data.adds
    let index=this.data.index
    adds[index] = {
      name: res.detail.value
    }
    this.setData({
        adds:adds
    })
  },
  adds:function(res){
    // console.log(res.currentTarget.dataset.index)
    this.setData({
      index: res.currentTarget.dataset.index
    })
  },
  save:function(){
    let that=this
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
    let adds=this.data.adds
    let beginCity = []
    let beginDistrict = []
    let beginProvince=[]
    let endCity = []
    let endDistrict = []
    let endProvince = []
    let vehicleModel = []
    let length=adds.length
    console.log(adds)
    for(let i=0;i<length;i++){
      beginProvince.push(adds[i].place1[0])
      beginCity.push(adds[i].place1[1])
      beginDistrict.push(adds[i].place1[2])
      endProvince.push(adds[i].place2[0])
      endCity.push(adds[i].place2[1])
      endDistrict.push(adds[i].place2[2])
      vehicleModel.push(adds[i].car.join('-'))
      console.log(adds[i].place1=='')
      if (adds[i].place1 == ''){
        that.setData({
          tost_hide: true,
          tost: '选择第'+(i+1)+'个出发地'
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
      console.log(adds[i].car=='')
      if (adds[i].car=='') {
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
    console.log(vehicleModel)
    console.log(this.data.companyName)
    // console.log(this.data.contacts)
    // console.log(this.data.phone)
    


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
    // 信息提示
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
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/ColdTransportCapacityPublishController/save',
      data: {
        'companyName': this.data.companyName,
        'beginProvince': beginProvince.join(),
        'beginCity': beginCity.join(),
        'beginDistrict': beginDistrict.join(),
        'endProvince': endProvince.join(),
        'endCity': endCity.join(),
        'endDistrict': endDistrict.join(),
        'vehicleModel': vehicleModel.join(),
        'contacts': this.data.contacts,
        'phone': this.data.phone,
        'create_time': currentdate,
        'token':this.data.token
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
  onShow: function () {
    let index = this.data.num
    let adds = this.data.adds
    adds[index].car = this.data.car
    this.setData({
      adds:adds
    })
    console.log(this.data.adds)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  car_length:function(res){
    this.setData({
      num: res.currentTarget.dataset.index
    })
    console.log(999)
    wx.navigateTo({
      url: '../car/car'
    })
  },
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})