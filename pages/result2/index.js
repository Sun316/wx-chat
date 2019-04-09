// var postData = require('../../data/util.js');
var dataList = getApp().globalData.dataList1;
var answer;
Page({
  /**
  * 页面的初始数据
  */
  data: {
    // showView: false,
    dataList: [],
    title: [],
    // toView: 'inToView01',
    list: [
    ],
    animationData: {},
    animating: '',
    taName: '',
    shoufenqinName: '',
    animationShoufenqin: '',
    shoufenqinBloo: '',
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false),
      // console.log(dataList);
      // console.log(options.answer);
      // console.log(options.title);
      answer = options.answer;
    dataList = dataList,
      this.setData({//获取数据成功后的数据绑定 
        answer: options.answer,
        title: options.title,
      });
    wx.setNavigationBarTitle({
      title: options.title,//页面标题为路由参数
    })

    // console.log(answer);
  },
  alllist() {
    if (this.data.animating) {
      this.animationHua.translate(0, 0).step();
      this.setData({
        animationData: this.animationHua.export(),
        animating: ''
      });
    }
  },
  //手风琴    ---------------------------------------
  shoufenqin(e) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animationShou = animation;
    this.animationHua = animation;
    this.animationHua.translate(0, 0).step();
    this.setData({
      animationData: this.animationHua.export(),
      animating: ''
    });

    var listid = e.currentTarget.dataset.listid;
    if (this.data.shoufenqinBloo) {
      this.animationShou.height(0).step();
      this.setData({
        animationShoufenqin: this.animationShou.export(),
        shoufenqinBloo: '',
      })
    } else {
      this.animationShou.height('auto').step();
      this.setData({
        animationShoufenqin: this.animationShou.export(),
        shoufenqinBloo: listid,
        shoufenqinName: listid,
      })
    }
  },
  onShow: function () {
    dataList = getApp().globalData.dataList1[2];

    if (answer == 'a') {
      dataList = getApp().globalData.dataList1[0];
    }
    if (answer == 'b') {
      dataList = getApp().globalData.dataList1[1];
    } if (answer == 'c') {
      dataList = getApp().globalData.dataList1[2];
    }
    this.setData({//获取数据成功后的数据绑定 
      dataList: dataList,
      // answer: options.answer,
      // title: options.title,
      toView: 'inToView01'
    });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "我测完啦～妳酷爱来测测呀",
      path: '/pages/result2/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  // 折叠
  scrollToViewFn: function (e) {
    var _id = e.target.dataset.id;
    this.setData({
      key: e.target.dataset.index,
      toView: 'inToView' + _id
    })
    // console.log(this.data.toView)
  },

})