Page({

  /**
   * 页面的初始数据
   */
  data: {
    choice_0: false,
    choice_1: false,
    choice_2: false,
    choice_3: false,
    choice_4: false,
    choice_5: false,
    choice_6: false,
    choice_7: false,
    minArea: '',
    maxArea: '',
    codeArea: '',
    areas1:'',
    areas2:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '面积选择' //页面标题为路由参数
    })
  },
  choice_0: function() {
    let that = this
    that.setData({
      choice_0: !that.data.choice_0,
      choice_1: false,
      choice_2: false,
      choice_3: false,
      choice_4: false,
      choice_5: false,
      choice_6: false,
      choice_7: false,
      areas1: '',
      areas2: ''
    })
  },
  choice_1: function() {
    let that = this
    that.setData({
      choice_1: !that.data.choice_1,
      choice_0: false,
      choice_2: false,
      choice_3: false,
      choice_4: false,
      choice_5: false,
      choice_6: false,
      choice_7: false,
      areas1: '',
      areas2: ''
    })
  },
  choice_2: function() {
    let that = this
    that.setData({
      choice_2: !that.data.choice_2,
      choice_1: false,
      choice_0: false,
      choice_3: false,
      choice_4: false,
      choice_5: false,
      choice_6: false,
      choice_7: false,
      areas1: '',
      areas2: ''
    })
  },
  choice_3: function() {
    let that = this
    that.setData({
      choice_3: !that.data.choice_3,
      choice_1: false,
      choice_2: false,
      choice_0: false,
      choice_4: false,
      choice_5: false,
      choice_6: false,
      choice_7: false,
      areas1: '',
      areas2: ''
    })
  },
  choice_4: function() {
    let that = this
    that.setData({
      choice_4: !that.data.choice_4,
      choice_1: false,
      choice_2: false,
      choice_3: false,
      choice_0: false,
      choice_5: false,
      choice_6: false,
      choice_7: false,
      areas1: '',
      areas2: ''
    })
  },
  choice_5: function() {
    let that = this
    that.setData({
      choice_5: !that.data.choice_5,
      choice_1: false,
      choice_2: false,
      choice_3: false,
      choice_4: false,
      choice_0: false,
      choice_6: false,
      choice_7: false,
      areas1: '',
      areas2: ''
    })
  },
  choice_6: function() {
    let that = this
    that.setData({
      choice_6: !that.data.choice_6,
      choice_1: false,
      choice_2: false,
      choice_3: false,
      choice_4: false,
      choice_5: false,
      choice_0: false
    })
  },
  choice_7: function () {
    let that = this
    that.setData({
      choice_7:!that.data.choice_7,
      choice_1: false,
      choice_2: false,
      choice_3: false,
      choice_4: false,
      choice_5: false,
      choice_0: false
    })
  },
  areas1:function(res){
    console.log(res.detail.value)
    this.setData({
      areas1: res.detail.value,
      minArea: res.detail.value,
      codeArea: ''
    })
  },
  areas2: function (res) {
    console.log(res.detail.value)
    this.setData({
      areas2: res.detail.value,
      maxArea: res.detail.value,
      codeArea: ''
    })
  },
  vehicle: function() {
    let that = this
    if (this.data.choice_0) {
      that.setData({
        minArea: '',
        maxArea: '',
        codeArea: '不限'
      })
    }
    if (this.data.choice_1) {
      that.setData({
        minArea: 0,
        maxArea: 100,
        codeArea: ''
      })
    }
    if (this.data.choice_2) {
      that.setData({
        minArea: 100,
        maxArea: 200,
        codeArea: ''
      })
    }
    if (this.data.choice_3) {
      that.setData({
        minArea: 200,
        maxArea: 300,
        codeArea: ''
      })
    }
    if (this.data.choice_4) {
      that.setData({
        minArea: 300,
        maxArea: 400,
        codeArea: ''
      })
    }
    if (this.data.choice_5) {
      that.setData({
        minArea: '',
        maxArea: 400,
        codeArea: ''
      })
    }
    if (this.data.choice_6) {
      that.setData({
        minArea: '',
        maxArea: '',
        codeArea: ''
      })
    }
    if (this.data.choice_7) {
      that.setData({
        minArea: '',
        maxArea: '',
        codeArea: ''
      })
    }
    
  },
  sure: function() {
    console.log(this.data.minArea)
    console.log(this.data.maxArea)
    console.log(this.data.codeArea)

    let that=this
    // 保存成功把值传递给前一级页面
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一级页面
    prevPage.setData({
      choice3: false,
      minArea: that.data.minArea,
      maxArea: that.data.maxArea,
      codeArea: that.data.codeArea
    })
    wx.navigateBack({

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
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
    console.log(10101)
    // 保存成功把值传递给前一级页面
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一级页面
    prevPage.setData({
      choice3: false
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