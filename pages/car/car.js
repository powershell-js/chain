// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    car: ['','','','','','',''],
    choice:'不限车长',
    choice_0: false,
    choice_1: false,
    choice_2: false,
    choice_3: false,
    choice_4: false,
    choice_5:false,
    input:false,
    inputinfo: "",
    inputinfos: "请输入其它车长",
    inputinfoss:"请输入其它车长"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '车型选择' //页面标题为路由参数
    })
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2];//上一级页面
    prevPage.setData({
      choice3: false,
      car: []
    })
  },
  choice_0:function(res){
    let that=this
    let car = that.data.car
    if (!that.data.choice_0){
      car[0]='不限车长'
    }else{
      console.log(car.indexOf('不限车长'))
      car[0] = ''
    }
    
    this.setData({
      choice_0: !that.data.choice_0,
      car:car
    })
    console.log(that.data.car)
  },
  choice_1: function (res) {
    let that = this
    let car = that.data.car
    if (!that.data.choice_1) {
      car[1]='4.2'
    } else {
      console.log(car.indexOf('4.2米'))
      car[1]=''
    }
    console.log(that.data.choice_1)
    this.setData({
      choice_1: !that.data.choice_1,
      car: car
    })
  },
  choice_2: function (res) {
    let that = this
    let car = that.data.car
    if (!that.data.choice_2) {
      car[2] ='5.6'
    } else {
      console.log(car.indexOf('5.6米'))
      car[2] =''
    }
    console.log(that.data.choice_2)
    this.setData({
      choice_2: !that.data.choice_2,
      car: car
    })
  },
  choice_3: function (res) {
    let that = this
    let car = that.data.car
    if (!that.data.choice_3) {
      car[3] ='7.6'
    } else {
      console.log(car.indexOf('7.6米'))
      car[3] =''
    }
    console.log(that.data.choice_3)
    this.setData({
      choice_3: !that.data.choice_3,
      car: car
    })
  },
  choice_4: function (res) {
    let that = this
    let car = that.data.car
    if (!that.data.choice_4) {
      car[4] ='9.6'
    } else {
      console.log(car.indexOf('9.6米'))
      car[4] =''
    }
    console.log(that.data.choice_4)
    this.setData({
      choice_4: !that.data.choice_4,
      car: car
    })
  },
  choice_5: function (res) {
    let that = this
    let car = that.data.car
    if (!that.data.choice_5) {
      car[5] ='15米半挂'
    } else {
      console.log(car.indexOf('15米半挂'))
      car[5] =''
    }
    console.log(that.data.choice_5)
    this.setData({
      choice_5: !that.data.choice_5,
      car: car
    })
  },
  choice_6: function (res) {
    let that = this
    let car = that.data.car
    if (!that.data.choice_6) {
      car[6] ='依维柯'
    } else {
      console.log(car.indexOf('依维柯'))
      car[6] =''
    }
    console.log(that.data.choice_6)
    this.setData({
      choice_6: !that.data.choice_6,
      car: car
    })
  },
  choice_7: function (res) {
    let that = this
    this.setData({
      choice_7: true
    })
    that.setData({
      input:true,
      inputinfo:''
    })
  },
  cancel:function(){
    let car = this.data.car
    car[7] = ''
    this.setData({
      input: false,
      choice_7: !this.data.choice_7,
      inputinfos:"请输入其它车长",
      car:car
    })
  },
  confirm: function () {
    if (this.data.inputinfo == '') {
      wx.showToast({
        title: '请输入车长',
        icon:'loading'
      })
      return
    }
    let car = this.data.car
    car[7] = this.data.inputinfo 
    this.setData({
      input: false,
      inputinfos: this.data.inputinfo,
      inputinfoss: this.data.inputinfo+'米',
      car:car
    })
    this.vehicle()
    console.log(this.data.car)
  },
  number:function(res){
    console.log(res.detail.value)
    this.setData({
      inputinfo: res.detail.value    
    })
  },
  vehicle:function(){
    // let that=this
    // var pages = getCurrentPages();
    // var currPage = pages[pages.length - 1]; //当前页面
    // var prevPage = pages[pages.length - 2];//上一级页面
    // prevPage.setData({
    //   car: that.data.car
    // })
  },
  sure:function(){
    let that = this
    let length = that.data.car.length
    let car = that.data.car
    let cars = []
    for(let i=0;i<length;i++){
      if(car[i]!==''){
        cars.push(car[i])
      }
    }
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2];//上一级页面
    prevPage.setData({
      car: cars
    })
    console.log(cars)
    wx.navigateBack({
      
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
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