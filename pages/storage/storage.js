// pages/storage/storage.js
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: '../../image/huowu.png',
    satrtchoiceTime: [],
    satrtchoiceTimes: [],
    endchoiceTime: [],
    endchoiceTimes: [],
    startTime:'',
    endTime:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  /**
   * 下载文件并预览
   */
  //touch start
  handleTouchStart:  function (e)  {
        console.log(e)
    this.setData({
      startTime:e.timeStamp
    })
        //console.log(" startTime = " + e.timeStamp);  
  },

  //touch end
  handleTouchEnd:  function (e)  {
    //     this.endTime  =  e.timeStamp;
    this.setData({
      endTime: e.timeStamp
    })
    console.log(this.data.endTime, this.data.startTime)  
    if (this.data.endTime - this.data.startTime >  4000) {
      console.log("点击");
    }
        //console.log(" endTime = " + e.timeStamp);  
  },

  handleClick:  function (e)  {
        //console.log("endTime - startTime = " + (this.endTime - this.startTime));  
    
        
  },

  handleLongPress:  function (e)  {
    //console.log("endTime - startTime = " + (this.endTime - this.startTime));
    console.log("长按");
  },

  downloadFile: function(e) {
    console.log(e);
    let type = e.currentTarget.dataset.type;
    // let url = e.currentTarget.dataset.url;
    let url ='https://www.123gps.com.cn/rest/vehiclestatisticmileinfo/exportMileHuiZongExcel?time=1540370713903&beginDate=2018-10-23&endDate=2018-10-23&vehicleId=21747,21736,14287,18441,16191,18156,9751,16604,16605,15552,15356,17082,21670,16968,12465,15085,17652,17138,16968,13109,15864,15869,15866,15689,15690,9884,6780,9733,15520,22923,14591,15328,18375,15808,15546,21737,2235,18380,18383,21657,5615,22359,18382,22959,17999,21320,13570,12401,12402,9750,9734,19536,15867,15868,15865,328226,328227,14927,326880,17943,17908,17911,17899,17922,327153,18126,13584,13823,14833,13724,17598,12588,18803,8474,11569,21732,9687,7194,6098,6100,2132,5958,12025,12010,18644,18310,12604,8809,7138,9604,12545,13391,15352,20788,20784,6730,7065,13337,16905,18162,17543,12254,13136,14335,19706,13452,17856,18389&isNeedHoliday=0'
    // console.log(type)
    switch (type) {
      case "pdf":
        url += 'pdf';
        break;
      case "word":
        url += 'docx';
        break;
      case "excel":
        url += '.xlsx';
        break;
      default:
        url += 'pptx';
        break;
    }
    console.log(url)
    wx.downloadFile({
      url: url,
      header: {},
      success: function(res) {
        var filePath = res.tempFilePath;
        console.log(res);
        wx.openDocument({
          filePath: filePath,
          success: function(res) {
            console.log('打开文档成功')
          },
          fail: function(res) {
            console.log(res);
          },
          complete: function(res) {
            console.log(res);
          }
        })
      },
      fail: function(res) {
        console.log('文件下载失败');
      },
      complete: function(res) {},
    })
  },
  saveImgToPhotosAlbumTap: function() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log("choose image")
        console.log(res)
        var tempFilePath = res.tempFilePaths[0]
        wx.getImageInfo({
          src: tempFilePath,
          success: function(res) {
            console.log("get image info")
            console.log(res)
            wx.saveImageToPhotosAlbum({
              filePath: res.path,
              success(res) {
                console.log("保存图片成功")
                console.log(res)
                wx.showToast({
                  title: '保存成功',
                  icon: 'success',
                  duration: 2000
                })
              },
              fail(err) {
                console.log('失败')
                console.log(err)

                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  wx.openSetting({
                    success(settingdata) {
                      console.log(settingdata)
                      if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                        console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                      } else {
                        console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                      }
                    }
                  })
                }
              }
            })
          }
        })
      }
    })

  },
  onLoad: function(options) {
    let str = '\u4e00\u4e8c\u4e09'
    str = str.replace(/\\/g, "%");

    //转换中文
    str = unescape(str);

    //将其他受影响的转换回原来
    str = str.replace(/%/g, "\\");
    console.log(str)
    //对网址的链接进行处理
    str = str.replace(/\\/g, "");



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
  butmit() {
    console.log(!this.data.satrtchoiceTimes[1])
  },
  // changeDateTimeColumn(e) {
  //   var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

  //   arr[e.detail.column] = e.detail.value;
  //   dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

  //   this.setData({
  //     dateTimeArray: dateArr,
  //     dateTime: arr
  //   });
  // },

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