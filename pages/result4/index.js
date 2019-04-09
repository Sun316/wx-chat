// var postData = require('../../data/util.js');
var dataList = getApp().globalData.dataList3;
var answer;
var b;
var words;
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
        // title: options.title,
      });
    wx.setNavigationBarTitle({
      // title: options.title,//页面标题为路由参数
    })
    console.log(answer);
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
    var str = answer.replace(/,/g, '');;
    var map = {};
    for (var i = 0; i < str.length; i++) {
      var s = str[i];
      var r = map[s];
      if (r) {
        map[s] += 1;
      } else {
        map[s] = 1;
      }
    }

    console.log(JSON.stringify(map));
    var b=map.b;
    console.log('b');
    console.log(b);
 if(b=undefined){
   b=0;
 }

    // 页面渲染完成
    var cxt_arc = wx.createCanvasContext('canvasArc');//创建并返回绘图上下文context对象。
    cxt_arc.setLineWidth(8);
    cxt_arc.setStrokeStyle('#d2d2d2');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径
    cxt_arc.arc(90, 90, 85, 0, 2 * Math.PI, false);//设置一个原点(106,106)，半径为100的圆的路径到当前路径
    cxt_arc.stroke();//对当前路径进行描边

    cxt_arc.setLineWidth(8);
    cxt_arc.setStrokeStyle('#66cccc');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径
    if(map.b==1){
    // 10%
      b = 1;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI*1.2, false);
    words ='新生小达人';
    }
    if (map.b == 2) {
    // 20%
      b = 2;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 1.4, false);
    words = '新生小达人';
    }
    if (map.b == 3) {
    // 30%
      b = 3;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 1.6, false);
    words = '新生小达人';
    }
    if (map.b == 4) {
    //  40%
      b = 4;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 1.8, false);
    words = '新生小达人';
    }
    if (map.b == 5) {
    // 50%
      b = 5;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 2, false);
    words = '努力小达人';
    }
    if (map.b == 6) {
    // 60%
      b = 6;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 2.2, false);
    words = '努力小达人';
    }
    if (map.b == 7) {
    // 70%
      b = 7;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 2.4, false);
    words = '努力小达人';
    }
    if (map.b == 8) {
    // 80%
      b = 8;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 2.6, false);
    words = '加油小达人';
    }
    if (map.b == 9) {
    // 90%
      b = 9;
    cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 2.8, false);
    words = '加油小达人';
    }
    if (map.b == 10) {
      // 100%
      cxt_arc.arc(90, 90, 85, Math.PI * 1, Math.PI * 3, false);
      b=10;
      words = '防晒小达人';
    } 
    if (map.b == undefined) {
      // 100%
      // cxt_arc.arc(90, 90, 85,0, 0, false);
      b=0;
      words = '新生小达人';
    }
    cxt_arc.stroke();//对当前路径进行描边

    cxt_arc.draw();

    console.log(answer);

    console.log(dataList);

    var answer1 = answer.split(",")
    console.log('answer1');
    console.log(answer1);
    console.log(typeof (answer1));
    // dataList = getApp().globalData.dataList3[2];
    dataList = [];
    for (var i = 0; i < 10; i++) {
      if (answer1[i] !== 'b') {
        dataList[i]= getApp().globalData.dataList3[i];
      }
    }
    console.log(dataList);
    // console.log(JSON.stringify(dataList));
    // var str = 'ab+c+de';
    // var a = str.split('+'); // [ab, c, de]
    // var b = str.split(''); //[a, b, +, c, +, d, e]
    // console.log(typeof(dataList));
    console.log(dataList);

    console.log("123456789");
    this.setData({//获取数据成功后的数据绑定 
      dataList: dataList,
      b:b,
      words:words,
      answer1: answer1,
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
      path: '/pages/result4/index',
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