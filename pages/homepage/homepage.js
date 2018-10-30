// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tost_hide: false,
    tost: '提示信息',
    time:'2018-10-18 09:16:30',
    message:[],
    choice1: false,
    choice2: false,
    choice3: false,
    choice4: false,
    height: 100,
    top: -100,
    info: "123",
    car: ['', '', '', '', '', '', ''],
    cars: [],
    start: [],
    /*出发地*/
    end: [],
    /*目的地*/
    vehicle: [],
    /*车型*/
    company: [] /*公司*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '搜运力' //页面标题为路由参数
    })
    let that = this
    // setInterval(function(){
    //   that.setData({
    //     height: that.data.height+1
    //   })
    // })
    // let interver=setInterval(function(){
    //   that.setData({
    //     top:that.data.top+1
    //   })
    //   if (that.data.top == 0) {
    //     clearInterval(interver)
    //   }
    // },1)
  },
  // 数据请求
  request: function() {
    let that=this
    wx.showLoading({
      title: '玩命加载中'
    })
    console.log(this.data.company)
    console.log(this.data.start)
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/ColdTransportCapacityLineController/list',
      data: {
        'beginCity': this.data.start.join(),
        'endCity': this.data.end.join(),
        'vehicleModel': this.data.cars.join(),
        'companyName': this.data.company.join()
      },
      method: 'POST',
      header: {              
        "Content-Type": "application/x-www-form-urlencoded"/*POST请求*/
      },

      success(res) {
        wx.hideLoading()
        if(res.data.code==1){
          that.setData({
            message:res.data.msg
          })
          console.log(res.data.msg.length==0)
          if(res.data.msg.length==0){
            
              that.setData({
                tost_hide: true,
                tost: '暂无数据'
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
      }
    })
  },
  // 数据请求
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  // 各种选择
  choice: function(res) {
    console.log(this.data.choice1)
    let choice = res.currentTarget.dataset.choice
    if (choice == 1) {
      this.setData({
          choice1: !this.data.choice1
        },
        wx.navigateTo({
          url: '../region/region?info=' + res.currentTarget.dataset.choice,
        })
      )

    }
    if (choice == 2) {
      this.setData({
          choice2: !this.data.choice2
        },
        wx.navigateTo({
          url: '../region/region?info=' + res.currentTarget.dataset.choice,
        })
      )

    }
    if (choice == 3) {
      this.setData({
          choice3: !this.data.choice3
        },
        wx.navigateTo({
          url: '../car/car'
        })
      )

    }
    if (choice == 4) {
      this.setData({
          choice4: !this.data.choice4
        },
        wx.navigateTo({
          url: '../company/company'
        })
      )

    }
  },
  // 打电话
  telephone: function(res) {
    console.log(res.currentTarget.dataset.info)
    let phoneNumber = (res.currentTarget.dataset.info).toString()
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let length = this.data.car.length
    let car = this.data.car
    let cars = []
    for (var i = 0; i < length; i++) {
      if (car[i] !== '') {
        cars.push(car[i])
      }
    }
    this.setData({
      cars: cars
    })
    console.log(this.data.time.slice(0, 5))
    console.log(this.data.start)
    console.log(this.data.end)
    console.log(this.data.cars)
    console.log(this.data.company)
    this.request()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
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