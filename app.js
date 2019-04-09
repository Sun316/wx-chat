var hotapp = require('utils/hotapp.js');
var postData = require('data/util.js');
var postData1 = require('data/util1.js');
var postData2 = require('data/util2.js');
var postData3 = require('data/util3.js');
App({
  onLaunch: function () {

    //使用HotApp小程序统计，统计小程序新增，日活，留存，当日可查看统计结果
    //线上发布
    hotapp.init('hotapp2427615');
    // 输入debug错误日志, 建议生产环境不要开启
    hotapp.setDebug(true);
  },
  onLoad: function () {
    // 查看是否授权
    
  },
  onError: function (msg) {
    //错误日志上传 (版本号：2.0.0，自定义在这里，上传服务器)
    hotapp.onError(msg,'2.0.0',function (err) {
      console.log(err)
    })
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口  
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },  
  /**
   * 全局变量
   */
  globalData: {
    hotapp: hotapp, // 这里作为一个全局变量, 方便其它页面调用
    dataList: postData.postList,
    dataList1: postData1.postList1,
    dataList2: postData2.postList2,
    dataList3: postData3.postList3,
    
  },
})
