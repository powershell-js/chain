// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tost_hide: false,
    tost: '提示信息',
    num:0,
    search_value:[],
    company: "",
    mark: true,
    companyHistorys:[],
    companyHistory: [
      // {
      //   name: '上海',
      //   mark: false
      // },
      // {
      //   name: '上海',
      //   mark: false
      // },
      // {
      //   name: '上海',
      //   mark: false
      // },
      // {
      //   name: '上海',
      //   mark: false
      // },
      // {
      //   name: '上海',
      //   mark: false
      // },
      // {
      //   name: '上海',
      //   mark: false
      // }
    ],
    listss:[],
    lists:[],
    list:[
      { name: '1', checked: false },
      { name: '2', checked: false },
      { name: '3', checked: false },
      { name: '4', checked: false },
      { name: '5', checked: false },
      { name: '6', checked: false },
      { name: '7', checked: false },
      { name: '8', checked: false },
      { name: '9', checked: false },
      { name: '10', checked: false },
      { name: '11', checked: false },
      { name: '12', checked: false },
      { name: '13', checked: false },
      { name: '14', checked: false },
      { name: '15', checked: false },
      {name:'16',checked:false}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '公司选择'
    })
    // var pages = getCurrentPages();
    // var currPage = pages[pages.length - 1]; //当前页面
    // var prevPage = pages[pages.length - 2]; //上一级页面
    // prevPage.setData({
    //   choice4: false,
    //   info: '456'
    // })
    this.request()
    // this.setData({
    //   listss:this.data.list
    // })
    this.cache()
  },
  // 获取本地缓存的历史记录
  cache: function () {
    let that = this
    wx.getStorage({
      key: 'companyHistory',
      success: function (res) {
        console.log(res.data)
        let companyHistory = []
        let length = res.data.length
        for (let i = 0; i < length; i++) {
          let a = {
            name: res.data[i],
            mark: false
          }
          companyHistory.push(a)
        }
        that.setData({
          companyHistory: companyHistory,
          companyHistorys: res.data
        })
      }
    })
  },
  // 数据请求
  request: function () {
    let that = this
    wx.showLoading({
      title: '玩命加载中'
    })
    wx.request({
      url: 'https://llr.dangdanggps.com/jycoldchain/ColdCompanyController/list',
      data: {
        'companyName': '',
        'createTime': ''
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"/*POST请求*/
      },

      success(res) {
        wx.hideLoading()
        
        if (res.data.code == 1) {
          
          let length = res.data.msg.length
          let list=[]
          for(let i=0;i<length;i++){
            list[i]={
              name: res.data.msg[i].companyName,
              checked: false
            }
          }
          console.log(list)
          that.setData({
            listss: list,
            list:list,
          })
        }
      }
    })
  },
  // 数据请求
  input: function(res) {
    
    this.setData({
      company: res.detail.value
    })
    
  },
  search: function() {
    let that=this
    let list = this.data.list
    let lists = []
    let length = list.length
    for (let i = 0; i < length; i++) {
      if (list[i].name.indexOf(that.data.company) != -1) {
        lists.push(list[i])
      }
    }
    this.setData({
      listss:lists
    })
    if (this.data.lists == '') {
      this.setData({
        tost_hide: true,
        tost: '公司不存在'
      })
      setTimeout(function () {
        that.setData({
          tost_hide: false
        })
        return
      }, 1000)
      return
    }
    console.log(lists)
    // this.setData({
    //   mark: !this.data.mark
    // })
  },
  history:function(res){
    let index = res.currentTarget.dataset.info
    let companyHistory=this.data.companyHistory
    companyHistory[index].mark = !companyHistory[index].mark
    let search_value = this.data.search_value
    console.log(index)
    console.log(companyHistory[index].mark)
    if (companyHistory[index].mark){
      search_value.push(companyHistory[index].name)
      this.setData({
        search_value: search_value,
        companyHistory: companyHistory,
        companyHistorys: search_value
      })
    }else{
      console.log(search_value.indexOf(companyHistory[index].name))
      search_value.splice(search_value.indexOf(companyHistory[index].name),1)
      this.setData({
        search_value: search_value,
        companyHistory: companyHistory,
        companyHistorys: search_value
      })
    }
  },
  checked:function(res){
    
    let index = res.currentTarget.dataset.infos
    let list = this.data.listss
    let lists=[]
    let length = this.data.listss.length
    list[index].checked = !list[index].checked
    
    this.setData({
      listss:list,
      num:this.data.num+1
    })
    console.log(list)
    for(let i=0;i<length;i++){
      if (list[i].checked){
        lists.push(list[i].name)
      }
    }
    
    this.setData({
      lists:lists
    })
    console.log(lists)
  },
  save:function(){
    
    console.log(this.data.search_value)
    let lists = this.data.lists
    lists = lists.concat(this.data.search_value)
    let list=[]
    for(let i=0;i<lists.length;i++){
      console.log(list.indexOf(lists[i]))
      if (list.indexOf(lists[i]) == -1){
        list.push(lists[i])
      }
    }
    console.log(list)
    // 保存成功把值传递给前一级页面
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一级页面
      prevPage.setData({
        choice4: false,
        company: list
      })
    wx.navigateBack({

    })
    this.setstorag()
  },
  // 存储历史记录到缓存
  setstorag: function () {
    console.log(this.data.lists)

    let lists = this.data.lists
    let companyHistorys = this.data.companyHistorys
    let lists_length = this.data.lists.length
    for (let i = 0; i < lists_length; i++) {
      companyHistorys.unshift(lists[i])
    }
    console.log(companyHistorys)
    let companyHistorys_length = companyHistorys.length
    let test = []
    for (let j = 0; j < companyHistorys_length; j++) {
      console.log((test.indexOf(companyHistorys[j]) == -1))
      if ((test.indexOf(companyHistorys[j]) == -1)) {
        test.push(companyHistorys[j])
      }
    }

    wx.setStorage({
      key: 'companyHistory',
      data: test.splice(0, 6)
    })
  },
  // 存储历史记录到缓存
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