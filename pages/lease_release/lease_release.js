// pages/homepage_release/homepage_release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    tost_hide: false,
    tost: '提示信息',
    address:'',
    areas:'',
    rent:'',
    place:'',
    companyNames: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    newcompanyName:[],
    dropcheck: false,
    companyName: '',
    contacts: '',
    phone: '',
    num: 0,
    car: [],
    add: 1,
    adds: [
      {
        place1: [],
        place2: [],
        car: []
      }
    ],
    index: 0,
    value: '1',
    start: false,
    starts: [true],
    open: [true],
    indexs: 0,
    region: ['广东省', '广州市', '海珠区']
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
      title: '出租发布',
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
          let companyNames=[]
          for(let i=0;i<length;i++){
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
  address(res){
    console.log(res.detail.value)
    this.setData({
      address: res.detail.value
    })
  },
  areas(res) {
    console.log(res.detail.value)
    this.setData({
      areas: res.detail.value
    })
  },
  rent(res) {
    console.log(res.detail.value)
    this.setData({
      rent: res.detail.value
    })
  },
  company: function (res) {
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
  bindRegionChanges: function (e) {
    console.log(e.detail.value)
    this.setData({
      start: true,
      place: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  open: function (res) {
    let index = res.currentTarget.dataset.index
    let open = this.data.open
    open[index] = !open[index]
    this.setData({
      open: open
    })
    console.log(res)
  },
  add: function () {
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
      car: ''
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
  delet: function (res) {
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

  input: function (res) {
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
  adds: function (res) {
    // console.log(res.currentTarget.dataset.index)
    this.setData({
      index: res.currentTarget.dataset.index
    })
  },
  text() {
    let that = this
    if (this.data.companyName == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入公司名'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.place == '') {
      this.setData({
        tost_hide: true,
        tost: '请选择地区'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.address == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入详细地址'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.areas == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入面积'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.rent == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入租金'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
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
  },
  save: function () {
    // this.text()
    let that = this
    if (this.data.companyName == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入公司名'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.place == '') {
      this.setData({
        tost_hide: true,
        tost: '请选择地区'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.address == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入详细地址'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.areas == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入面积'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.rent == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入租金'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
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
    let adds = this.data.adds
    let beginCity = []
    let beginDistrict = []
    let beginProvince = []
    let endCity = []
    let endDistrict = []
    let endProvince = []
    let vehicleModel = []
    let length = adds.length
    for (let i = 0; i < length; i++) {
      beginProvince.push(adds[i].place1[0])
      beginCity.push(adds[i].place1[1])
      beginDistrict.push(adds[i].place1[2])
      endProvince.push(adds[i].place2[0])
      endCity.push(adds[i].place2[1])
      endDistrict.push(adds[i].place2[2])
      vehicleModel.push(adds[i].place2[2])
    }
    console.log(adds)
    console.log(this.data.companyName)
    console.log(this.data.place[0])
    console.log(this.data.contacts)
    console.log(this.data.phone)
    console.log(this.data.address)
    console.log(this.data.areas)
    console.log(this.data.rent)
    // let that = this
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
    console.log(this.data.start)
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/ColdRentController/save',
      data: {
        'companyName': this.data.companyName,
        'province': this.data.place[0],
        'city': this.data.place[1],
        'district': this.data.place[2],
        'detailedAddress': this.data.address,
        'coldArea': this.data.areas,
        'charterMoney': this.data.rent,
        'contacts': this.data.contacts,
        'phone': this.data.phone,
        'createTime': currentdate,
        'type': '1',
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
        }else{
          wx.hideLoading()
          that.setData({
            tost_hide: true,
            tost: '发布失败'
          })
          setTimeout(function () {
            that.setData({
              tost_hide: false
            })
            return
          }, 1000)
          return
        }
      },
      fail() {
        wx.hideLoading()
        that.setData({
          tost_hide: true,
          tost: '发布失败'
        })
        setTimeout(function () {
          that.setData({
            tost_hide: false
          })
          return
        }, 1000)
        return
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
      adds: adds
    })
    console.log(this.data.adds)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  car_length: function (res) {
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