// pages/login/login.js
var utilMd5 = require('../../utils/md.js');
var test = require('../../utils/test.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tost_hide: false,
    tost: '提示信息',
    user: '',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a=1
    console.log(test.test(a))
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  user: function (res) {
    console.log(res.detail.value)
    this.setData({
      user: res.detail.value
    })
  },
  password:function(res){
    console.log(res.detail.value)
    this.setData({
      password: res.detail.value
    })
  },
  // 登录
  login:function(){
    let that=this
    if (this.data.user == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入账号'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.password == '') {
      this.setData({
        tost_hide: true,
        tost: '请输入密码'
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
    var userPass = utilMd5.hexMD5(this.data.password);
    console.log(userPass)
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/ColdUserController/login',
      data: {
        'user_name': that.data.user,
        'password': userPass
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"/*POST请求*/
      },

      success(res) {
        wx.hideLoading()
        console.log(res.data.t.token)
        if(res.data.code==1){
          wx.setStorage({
            key: "login",
            data: that.data.user
          })
          wx.setStorage({
            key: "token",
            data: res.data.t.token
          })
          wx.navigateBack({
            delta: 1,
          })
          wx.showToast({
            title: '登录成功'
          })
        }else{
          that.setData({
            tost_hide: true,
            tost: res.data.msg
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
    })
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