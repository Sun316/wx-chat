//引入本地json数据，这里引入的就是第一步定义的json数据  
var postData = require('../../data/data3.js');
//引入全局
var app = getApp()
//初始对话
var i=0;
var y=0;
var map;
var maxV;
var title;
var catalogSelect;
var ansArray = new Array();
Page({
  data: {
    flag: true,//加号的控制打开/关闭
    userInfo: [],//用户信息，用于头像显示
    urls:[],
    catalogSelect: 0,//判断是否选中
    viewBg: 'white',
    feedback: [{
      content: '夏日头等大事——“防晒”不知道各位亲的防晒工作做的咋样呀？下面就先来做个小测试，看看你是否是防晒小达人吧~',
      content_type: 0,
      contract_info: '',
      myDate: '',
      role: true,
      maxV:'',
      word:'true',
      whether: 6,
      title:'000001u83y721g3',
      img: "../../images/hotapp_01_07.png"
    }, {
      content: "http://deer.ysigntech.com/upload/qYfmwk/head4.png",
      content_type: 1,
      contract_info: '',
      myDate: '',
      role: true,
      maxV: '',
      title: '',
      whether: 7,
      img: "../../images/hotapp_01_07.png"
    }
    ],
    //返回数据
    addinput: '',//清楚input框的值
    sendflag: 0,//发送按钮控制
    networkType: '',//判断当前网络类型
    addtell: {
      addtellHidden: true,//弹出框显示/隐藏

    },
  },
  onLoad: function (options) {
    var that = this;
     app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo,
        sendflag: 0
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    //将全局的方法赋值
    ansArray.splice(0, 11);
    wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.height
      })
    }).exec()
    var that = this;
    // this.setData({
    //   sendflag: 2
    // })
    //提交输入框的数据

      //消息数组，系统默认
      var newfeedback = this.data.feedback;
      newfeedback.push({
        content: '再测一次',
        content_type: 0,
        contract_info: that.data.contract_info,
        myDate: mydata,
        role: false,
        img: that.data.userInfo.avatarUrl,
      },
        {
          content: postData.postList[0].content,
          content_type: 0,
          contract_info: '',
          myDate: '',
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[0].optionList.optionA.con.a,
          content_type: 0,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[0].optionList.optionB.con.b,
          content_type: 0,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[0].optionList.optionC.con.c,
          content_type: 0,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }
      ),
        //修改feedback,设置addaddinput为[]值为空
        this.setData({
          addinput: [],
          sendflag: 1,
          feedback: newfeedback
          // feedback: postData.postList
        })
      //上传文字到服务器

      app.globalData.hotapp.feedback(e.detail.value, 0, that.data.contract_info, function (res) {

        // wx.showToast({
        //   // title: '已成功反馈',
        //   // icon: 'success',
        //   // duration: 1000
        // })
      })
    var that = this;
//调用登录接口
wx.login({
  success: function (res) {
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })

        typeof cb == "function" && cb(res.userInfo)
      }
    })
  }
})
},
bindfocus: function (e) {
  var that = this;
  wx.getNetworkType({
    success: function (res) {
      if (res.networkType == 'fail') {
        wx.showToast({
          title: '当前网络不可用',
          icon: 'loading',
          duration: 10000
        })
      } else {
        wx.hideToast()
      }
      that.setData({
        networkType: res.networkType// 返回网络类型2g，3g，4g，wifi
      })
    }
  })
  //当sendflag有值的时候，设置发送按钮显示
  this.setData({
    sendflag: 0
  })
},
//开始
bindtap: function (e) {
  
  var that = this;
  this.setData({
    sendflag: 0
  })
  // console.log("that.data.userInfo.avatarUrl");
  // console.log(that.data.userInfo.avatarUrl);
    //消息数组，系统默认
    var newfeedback = this.data.feedback;
    newfeedback.push({
      content: '开始',
      // content_type: 0,
      contract_info: that.data.contract_info,
      role: false,
      img: that.data.userInfo.avatarUrl,
    },
      {
        content: postData.postList[0].content,
        content_type: 0,
        contract_info: '',
        role: true,
        option: 'a',
        word:'',
        whether: 6,
        img: "../../images/hotapp_01_07.png"
      }, {
        content: postData.postList[0].optionList.optionA.con.a,
        content_type: 0,
        role: true,
        option:'postData.postList[0].optionList.optionA.option',
        // img: "../../images/hotapp_01_07.png"
      }, {
        content: postData.postList[0].optionList.optionB.con.b,
        content_type: 0,
        role: true,
        option:'b',
        // img: "../../images/hotapp_01_07.png"
      }, {
        content: postData.postList[0].optionList.optionC.con.c,
        content_type: 0,
        role: true,
        option: 'c',
        // img: "../../images/hotapp_01_07.png"
      }
    ),
      //修改feedback,设置addaddinput为[]值为空
      this.setData({
        addinput: [],
        sendflag:1,
        feedback: newfeedback
        // feedback: postData.postList
      })
    //上传文字到服务器    
    // app.globalData.hotapp.feedback(e.detail.value, 0, that.data.contract_info, function (res) {

      // wx.showToast({
      //   // title: '已成功反馈',
      //   // icon: 'success',
      //   // duration: 1000
      // })
    // })
  
  wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
    // 使页面滚动到底部
    wx.pageScrollTo({
      scrollTop: rect.height
    })
  }).exec()
},
//数组中出现对多的选项
f:function(arr){
  // var str = arr.replace(/,/g, '');;
 map = {};

  for (var i = 0; i < arr.length; i++) {
    // arr.splice(0, 11);
    var s = arr[i];
    var r = map[s];
    if (r) {
      map[s] += 1;
    } else {
      map[s] = 1;
    }
  }

  console.log(JSON.stringify(map)); 
  console.log(JSON.stringify(map.b));
console.log(maxV)
},
//再测一次
test_again:function(e){
  ansArray.splice(0, 11);
    var that = this;
    this.setData({
      sendflag: 2
    })
    console.log('ansArray');
    console.log(ansArray);
    //提交输入框的数据

      //消息数组，系统默认
      var newfeedback = this.data.feedback;
      newfeedback.push({
        content: '再测一次',
        content_type: 0,
        contract_info: that.data.contract_info,
        role: false,
        img: that.data.userInfo.avatarUrl,
      },
        {
          content: postData.postList[0].content,
          content_type: 0,
          contract_info: '',
          role: true,
          whether: 6,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[0].optionList.optionA.con.a,
          content_type: 0,
          role: true,
          option: 'a',
          // img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[0].optionList.optionB.con.b,
          content_type: 0,
          role: true,
          option: 'b',
          // img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[0].optionList.optionC.con.c,
          content_type: 0,
          role: true,
          option: 'c',
          // img: "../../images/hotapp_01_07.png"
        }
      ),
        //修改feedback,设置addaddinput为[]值为空
        this.setData({
          addinput: [],
          sendflag: 1,
          feedback: newfeedback
          // feedback: postData.postList
        })
      //上传文字到服务器
      app.globalData.hotapp.feedback(e.detail.value, 0, that.data.contract_info, function (res) {

        // wx.showToast({
        //   // title: '已成功反馈',
        //   // icon: 'success',
        //   // duration: 1000
        // })
      })
    wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.height
      })
    }).exec()
},
//点击abcd
btn_default: function (e) {
  var that = this;
  this.setData({
    sendflag: 1,
    text:'a',
  })
 var text1=this.data.text;
 ansArray.push(text1);
 console.log(ansArray);
 if (ansArray.length) {
   var i = ansArray.length-1;
 }
 if(ansArray.length==10){
   console.log("测序和");
   var i = ansArray.length - 1;
    maxV = this.f(ansArray);
    console.log("map.b");
    console.log(map.b);
 }
     //消息数组，系统默认
    //消息数组，系统默认
    let newfeedback = this.data.feedback; 
    if (ansArray.length == 10) {
      console.log("测序和");
      console.log("maxV");
      console.log(maxV);
      if (map.b<= 4 || map.b == undefined) {
        maxV = 'd';
      }
      else if (map.b > 4 && map.b < 8) {
        maxV = "c";
      }
      else if (map.b >= 8 && map.b < 10) {
        maxV = "b";
      }
      else if(map.b = 10) {
        maxV = "a";
      }
      console.log(maxV);

      console.log('################', postData.postList[i + 1].optionList.optionA.con[maxV], maxV, ansArray);
      newfeedback.push(
        {
          content: postData.postList[i].optionList.optionA.option,
          // content: postData.postList[i].optionList,
          content_type: postData.postList[i].content_type,
          contract_info: that.data.contract_info,
          role: false,
          img: that.data.userInfo.avatarUrl,
        },
        {
          content: postData.postList[i + 1].content,
          content_type: postData.postList[i + 1].content_type,
          contract_info: '',
          word: '',
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionA.con[maxV],
          content_type: postData.postList[i + 1].content_type,
          whether: postData.postList[i + 1].whether,
          role: true,
          maxV: maxV,
          title: title,
          ansArray: ansArray,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionB.con,
          content_type: postData.postList[i + 1].content_type,
          whether: postData.postList[i + 1].optionList.optionB.whether,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }
      )
      this.setData({
        addinput: [],
        sendflag: 2,
        feedback: newfeedback,
        // answer: e.detail.value
        })
      this.urls = ['http://deer.ysigntech.com/upload/qYfmwk/chao.png'];
      wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.height
        })
      }).exec()
    }
    else {
      this.setData({
        sendflag: 1
        })
      // console.log(postData.postList[i].optionList);
      newfeedback.push(
        {
          content: postData.postList[i].optionList.optionA.option,
          // content: postData.postList[i].optionList,
          viewBg: 'blue',
          questionId: postData.postList[i + 1].questionId,
          content_type: postData.postList[i].content_type,
          contract_info: that.data.contract_info,
          // myDate: mydata,
          role: false,
          img: that.data.userInfo.avatarUrl,
        },
        {
          content: postData.postList[i + 1].content,
          content_img: postData.postList[i + 1].content_img,
          questionId: postData.postList[i + 1].questionId,
          content_type: postData.postList[i + 1].content_type,
          contract_info: '',
          whether: 6,
          // myDate: '', 
          word: '',
          // whether: postData.postList[i + 1].whether,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionA.con.a,
          viewBg: 'blue',
          option:'a',
          "select": 1,
          option: postData.postList[i+1].optionList.optionA.option,
          content1: postData.postList[i + 1].optionList.optionA.con.word,
          content_type: postData.postList[i + 1].content_type,
          questionId: postData.postList[i + 1].questionId,
          whether: postData.postList[i + 1].optionList.optionA.con.whether,
          role: true,
          // img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionB.con.b,
          content1: postData.postList[i + 1].optionList.optionB.con.word,
          content_type: postData.postList[i + 1].content_type,
          questionId: postData.postList[i + 1].questionId,
          option: postData.postList[i + 1].optionList.optionB.option,
          "select": 2,
          whether: postData.postList[i + 1].optionList.optionB.con.whether,
          role: true,
          // img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionC.con.c,
          content1: postData.postList[i + 1].optionList.optionC.con.word,
          content_type: postData.postList[i + 1].content_type, 
          option: postData.postList[i + 1].optionList.optionC.option,
          "select": 3,
          questionId: postData.postList[i + 1].questionId,
          whether: postData.postList[i + 1].optionList.optionC.con.whether,
          role: true,
          // img: "../../images/hotapp_01_07.png"
        },

      )
      this.setData({
        addinput: [],
        sendflag: 1,
        // minutes: minutes,
        feedback: newfeedback,
        // answer: e.detail.value
        // feedback: postData.postList
      })
      // console.log('################', postData.postList[i + 1].optionList.optionA.con[maxV], maxV);

    }
    i++;
      // console.log(postData.postList[i + 1].optionList.optionB.whether);
      //修改feedback,设置addaddinput为[]值为空
  wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
    // 使页面滚动到底部
    wx.pageScrollTo({
      scrollTop: rect.height
    })
    // console.log(rect.height);
  }).exec()
},
btn_primary: function (e) {
    var that = this;
    this.setData({
      sendflag: 1,
      text:'b'
    })
    var text2 = this.data.text;
    ansArray.push(text2);
    // console.log(ansArray);
    if (ansArray.length) {
      var i = ansArray.length - 1;
    }
    if (ansArray.length == 10) {
      var i = ansArray.length - 1;
       maxV = this.f(ansArray);
      // console.log('UUUUUUUUUUUUU', maxV);
      // console.log(ansArray);
    }
    //提交输入框的数据
      // console.log(postData.postList[i].optionList.optionA);
      //消息数组，系统默认
      let newfeedback = this.data.feedback;
      // console.log(postData.postList[i].optionList.optionA.index==0);
      if (ansArray.length == 10) {
        if (map.b<= 4 || map.b == undefined) {
        maxV = 'd';
      }
      else if (map.b > 4 && map.b < 8) {
        maxV = "c";
      }
      else if (map.b >= 8 && map.b < 10) {
        maxV = "b";
      }
      else if(map.b = 10) {
        maxV = "a";
      }
        console.log('################', postData.postList[i + 1].optionList.optionA.con[maxV], maxV, ansArray);

      newfeedback.push(
        {
          content: postData.postList[i].optionList.optionB.option,
          // content: postData.postList[i].optionList,
          content_type: postData.postList[i].content_type,
          contract_info: that.data.contract_info,
          role: false,
          img: that.data.userInfo.avatarUrl,
        },
        {
          content: postData.postList[i + 1].content,
          word: '',
          content_type: postData.postList[i + 1].content_type,
          contract_info: '',
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionA.con[maxV],
          content_type: postData.postList[i + 1].content_type,
          whether: postData.postList[i + 1].whether,
          role: true,
          title: title,
          maxV: maxV,
          ansArray: ansArray,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionB.con,
          content_type: postData.postList[i + 1].content_type,
          whether: postData.postList[i + 1].optionList.optionB.whether,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }
      )
      this.setData({
        addinput: [],
        sendflag: 2,
        feedback: newfeedback,
        // answer: e.detail.value
      })
      this.urls = ['http://deer.ysigntech.com/upload/qYfmwk/feng.jpg'];
      wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.height
        })
        // console.log(rect.bottom);
      }).exec()
      }else{
        newfeedback.push(
          {
            content: postData.postList[i].optionList.optionB.option,
            // content: postData.postList[i].optionList,
            content_type: postData.postList[i].content_type,
            contract_info: that.data.contract_info,
            role: false,
            img: that.data.userInfo.avatarUrl,
          },
          {
            content: postData.postList[i + 1].content,
            content_img: postData.postList[i + 1].content_img,
            questionId: postData.postList[i + 1].questionId,
            content_type: postData.postList[i + 1].content_type,
            contract_info: '',
            word: '',
            // whether: postData.postList[i + 1].whether,
            role: true,
            whether: 6,
            img: "../../images/hotapp_01_07.png"
          }, {
            content: postData.postList[i + 1].optionList.optionA.con.a,
            content1: postData.postList[i + 1].optionList.optionA.con.word,
            content_type: postData.postList[i + 1].content_type,
            questionId: postData.postList[i + 1].questionId,
            whether: postData.postList[i + 1].optionList.optionA.con.whether,
            role: true,
            // img: "../../images/hotapp_01_07.png"
          }, {
            content: postData.postList[i + 1].optionList.optionB.con.b,
            content1: postData.postList[i + 1].optionList.optionB.con.word,
            content_type: postData.postList[i + 1].content_type,
            questionId: postData.postList[i + 1].questionId,
            whether: postData.postList[i + 1].optionList.optionB.con.whether,
            role: true,
            // img: "../../images/hotapp_01_07.png"
          }, {
            content: postData.postList[i + 1].optionList.optionC.con.c,
            content1: postData.postList[i + 1].optionList.optionC.con.word,
            content_type: postData.postList[i + 1].content_type,
            questionId: postData.postList[i + 1].questionId,
            whether: postData.postList[i + 1].optionList.optionC.con.whether,
            role: true,
            // img: "../../images/hotapp_01_07.png"
          }

        )
        //修改feedback,设置addaddinput为[]值为空
        this.setData({
          addinput: [],
          sendflag: 1,
          feedback: newfeedback,
          // feedback: postData.postList
        })
      }
        i++;
      // console.log(postData.postList[i + 1].optionList.optionB.whether);
  
      // this.setData({ "btn_b_plain": 'false' });
      // this.setData({ "btn_b_disabled": 'false' });
    wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.height
      })
      // console.log(rect.bottom);
    }).exec()
  },
btn_warn: function (e) {
  var that = this;
  this.setData({
    sendflag: 1,
    text: "c"
  })
  var text3 = this.data.text;
  //  console.log(ansArray);
  ansArray.push(text3);
  if (ansArray.length) {
    var i = ansArray.length - 1;
  }
  if (ansArray.length == 10) {
    var i = ansArray.length - 1;
    maxV = this.f(ansArray);
    // console.log('UUUUUUUUUUUUU', maxV);
    // console.log(ansArray);
  }
  //提交输入框的数据
    // console.log(postData.postList[i].optionList.optionA);
    //消息数组，系统默认
    let newfeedback = this.data.feedback;
    // console.log(postData.postList[i].optionList.optionA.index==0);
    if (ansArray.length == 10) {
      if (map.b <= 4 || map.b == undefined) {
        maxV = 'd';
      }
      else if (map.b > 4 && map.b < 8) {
        maxV = "c";
      }
      else if (map.b >= 8 && map.b < 10) {
        maxV = "b";
      }
      else if (map.b = 10) {
        maxV = "a";
      }
            console.log('################', postData.postList[i + 1].optionList.optionA.con[maxV], maxV, ansArray);

      newfeedback.push(
        {
          content: postData.postList[i].optionList.optionC.option,
          // content: postData.postList[i].optionList,
          content_type: postData.postList[i].content_type,
          contract_info: that.data.contract_info,
          role: false,
          img: that.data.userInfo.avatarUrl,
        },
        {
          content: postData.postList[i + 1].content,
          content_type: postData.postList[i + 1].content_type,
          contract_info: '',
          word: '',
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionA.con[maxV],
          content_type: postData.postList[i + 1].content_type,
          whether: postData.postList[i + 1].whether,
          role: true,
          maxV: maxV,
          title: title,
          ansArray: ansArray,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionB.con,
          content_type: postData.postList[i + 1].content_type,
          whether: postData.postList[i + 1].optionList.optionB.whether,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }
      )
      //修改feedback,设置addaddinput为[]值为空
      this.setData({
        addinput: [],
        sendflag: 2,
        feedback: newfeedback,
        // feedback: postData.postList
      })
      this.urls = ['http://deer.ysigntech.com/upload/qYfmwk/dianz.jpg'];
      wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.height
        })
        // console.log(rect.bottom);
      }).exec()
    } else {
      newfeedback.push(
        {
          content: postData.postList[i].optionList.optionC.option,
          // content: postData.postList[i].optionList,
          content_type: postData.postList[i].content_type,
          contract_info: that.data.contract_info,
          role: false,
          img: that.data.userInfo.avatarUrl,
        },
        {
          content: postData.postList[i + 1].content,
          content_img: postData.postList[i + 1].content_img,
          questionId: postData.postList[i + 1].questionId,
          content_type: postData.postList[i + 1].content_type,
          contract_info: '',
          word: '',
          whether: 6,
          // whether: postData.postList[i + 1].whether,
          role: true,
          img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionA.con.a,
          content1: postData.postList[i + 1].optionList.optionA.con.word,
          content_type: postData.postList[i + 1].content_type,
          questionId: postData.postList[i + 1].questionId,
          whether: postData.postList[i + 1].optionList.optionA.con.whether,
          role: true,
          // img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionB.con.b,
          content1: postData.postList[i + 1].optionList.optionB.con.word,
          content_type: postData.postList[i + 1].content_type,
          questionId: postData.postList[i + 1].questionId,
          whether: postData.postList[i + 1].optionList.optionB.con.whether,
          role: true,
          // img: "../../images/hotapp_01_07.png"
        }, {
          content: postData.postList[i + 1].optionList.optionC.con.c,
          content1: postData.postList[i + 1].optionList.optionC.con.word,
          content_type: postData.postList[i + 1].content_type,
          questionId: postData.postList[i + 1].questionId,
          whether: postData.postList[i + 1].optionList.optionC.con.whether,
          role: true,
          // img: "../../images/hotapp_01_07.png"
        }
      )
      //修改feedback,设置addaddinput为[]值为空
      this.setData({
        addinput: [],
        sendflag: 1,
        feedback: newfeedback,
        // feedback: postData.postList
      })
    }
    i++;
  wx.createSelectorQuery().select('#scroll').boundingClientRect(function (rect) {
    // 使页面滚动到底部
    wx.pageScrollTo({
      scrollTop: rect.height
    })
    // console.log(rect.bottom);
  }).exec()
}, 
btn_more: function (e) {
    var that = this;
    this.setData({
      sendflag: 1,
      text: 'e'
    })
  },
changColor: function (e) {
  this.setData({
    key: e.target.dataset.index
  })
  console.log(e.target.dataset.index);
  console.log('key');
  for (y = 1; y <=10; y++) {
    // console.log(y);
    if (e.target.dataset.index == 5 * y - 1 || e.target.dataset.index == 5 * y + 53 || e.target.dataset.index == 5 * y + 107 || e.target.dataset.index == 5 * y + 161) {
      this.btn_default();
    }
    if (e.target.dataset.index == 5 * y || e.target.dataset.index == 5 * y + 54 || e.target.dataset.index == 5 * y + 108 || e.target.dataset.index == 5 * y + 162) {
      this.btn_primary();
    }
    if (e.target.dataset.index == 5 * y + 1 || e.target.dataset.index == 5 * y + 55 || e.target.dataset.index == 5 * y + 109 || e.target.dataset.index == 5 * y + 163) {
      this.btn_warn();
    }
  } 
  
},
jump: function () {
  wx.navigateTo({
    url: '../index/index'
  })
}, 
btn_what: function () {
  if(this.option==a){
    console.log("shuahduishaifjhijvchdjuvcujdv");

  }
  console.log(option);
},
bigger:function(e){
  wx.previewImage({
    current: 'http://deer.ysigntech.com/upload/qYfmwk/ai.jpg', // 当前显示图片的http链接
    urls: ["http://deer.ysigntech.com/upload/qYfmwk/ai.jpg"] // 需要预览的图片http链接列表
  })
},
big: function (e) {
  wx.previewImage({
    current: 'http://deer.ysigntech.com/upload/qYfmwk/ai.jpg', // 当前显示图片的http链接
    urls: ["http://deer.ysigntech.com/upload/qYfmwk/purple.png",
      "http://deer.ysigntech.com/upload/qYfmwk/green.png",
      "http://deer.ysigntech.com/upload/qYfmwk/pink.png",
      "http://deer.ysigntech.com/upload/qYfmwk/pink.jpg",
      "http://deer.ysigntech.com/upload/qYfmwk/orange.jpg",
      "http://deer.ysigntech.com/upload/qYfmwk/yellow.jpg"
] // 需要预览的图片http链接列表
  })
},
onShareAppMessage: function (res) {
  if (res.from === 'button') {
    // 来自页面内转发按钮
    console.log(res.target)
  }
  return {
    title: "防晒的正确打开方式了解一下？",
    path: '/pages/feedback4/index',
    imageUrl: "http://deer.ysigntech.com/upload/qYfmwk/head4.png",
    success: function (res) {
      // 转发成功
    },
    fail: function (res) {
      // 转发失败
    }
  }
},
onHide: function () {
  // 页面隐藏
},
onUnload: function () {
  // 页面关闭
}
})