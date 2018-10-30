//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tost_hide:false,
    tost:'提示信息',
    login: '',
    sign: true,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  login: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
  },
  // 获取缓存
  set: function() {
    let that=this
    wx.getStorage({
      key: 'login',
      success: function(res) {
        console.log(res.data)
        that.setData({
          login:res.data
        })
      }
    })
  },
  // 退出登录
  quit:function(){
    let that=this
    wx.showModal({
      title: '退出登录',
      // content: '模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.setStorage({
            key: "login",
            data: ''
          })
          that.setData({
            login: ''
          })
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },
  homepage: function() {
    wx.switchTab({
      url: '../homepage/homepage',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  lease: function() {
    // 登录成功后才可以跳转，用一个字段判断
    let that=this
    if(this.data.login==''){
      this.setData({
        tost_hide:true,
        tost:'请登录'
      })
        setTimeout(function () {
          that.setData({
            tost_hide: false
          })
          return
        }, 1000)
      return
    }
    if (this.data.sign) {
      wx.navigateTo({
        url: '../lease_release/lease_release',
      })
    }
  },
  renting: function() {
    // 登录成功后才可以跳转，用一个字段判断
    let that = this
    if (this.data.login == '') {
      this.setData({
        tost_hide: true,
        tost: '请登录'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.sign) {
      wx.navigateTo({
        url: '../renting_release/renting_release',
      })
    }
  },
  source: function() {
    // 登录成功后才可以跳转，用一个字段判断
    let that = this
    if (this.data.login == '') {
      this.setData({
        tost_hide: true,
        tost: '请登录'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.sign) {
      wx.navigateTo({
        url: '../source_release/source_release',
      })
    }
  },
  transport: function() {
    // 登录成功后才可以跳转，用一个字段判断
    let that = this
    if (this.data.login == '') {
      this.setData({
        tost_hide: true,
        tost: '请登录'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    if (this.data.sign) {
      wx.navigateTo({
        url: '../homepage_release/homepage_release',
      })
    }
  },
  onShow: function () {
    console.log(1)
    this.set()

  },
  onReady:function(){
    
  }
})