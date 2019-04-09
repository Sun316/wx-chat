// 本地模拟数据  
var localData = [
  {
    "content": "你每天的护肤流程是怎样的？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": {
      "role": false,
      "option": ''
    },
    "questionId": 1,
    "optionList": {
      "optionA": {
        'index': 0,
        'con':
        {
          a: "a.专业派：你能想到的我都做了",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.简约派：水乳这些基本的",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.自然派：我天生丽质，不用那些",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "你对护肤品“好不好用”的判定标准是什么？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 2,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.我喜欢温和的，一瓶用完脸部状态慢慢变好就行",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.只要用起来皮肤不会过敏啥的就行",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.用一次就能看到明显变化的，简单粗暴",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "如果脸上冒了痘痘，你会用什么方法“消灭”它？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 3,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.抠了会留疤的，擦点辅助消炎代谢的产品，等它自己消",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.用纸盖着按掉（或者抠掉），再用辅助消炎的产品帮它快点消",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.当然选择抠掉它啦，跟它拼了！",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "你知道今年的潘通（Pantone）流行色是什么吗？",
    "content_type": 1,
    "role": true,
    'whether':1,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 4,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a:"http://deer.ysigntech.com/upload/qYfmwk/purple.png",
          word:'a.紫外光',
          "whether": 4
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "http://deer.ysigntech.com/upload/qYfmwk/green.png",
          word: 'b.草木绿',
          "whether": 4
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "http://deer.ysigntech.com/upload/qYfmwk/pink.png",
          word: 'c.粉晶&谧蓝',
          "whether": 4
        },
        "option": 'c'
      },
    }
  }, {
    "content": "过年你会串亲戚吗？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 5,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.去去爸妈或者公婆家就可以了吧",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.我不爱去，难得休息我就想到处玩儿",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.当然啦，一家人就是要齐齐整整，七大姑八大姨家都要去",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "平时买包你更倾向宠幸什么牌子的包包？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 6,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.Chanel，Celine，Chole：时尚时尚最时尚",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.MCM，Miu，Prada：我喜欢年轻有活力的",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.我不在意牌子，好看的话环保袋也很好",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "鞋子的话你喜欢穿哪一种？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 7,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.平底：舒适最重要",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.坡跟：舒适与美丽并存",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.8cm以上高跟鞋：好看就行！",
          "whether": 0
        },
        "option": 'c'
      }
    }
  }, {
    "content": "如果你在强烈的太阳光下暴晒，你的皮肤会更接近下面的哪种情况",
    "content_type": 1,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 8,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "http://deer.ysigntech.com/upload/qYfmwk/pink.jpg",
          word: 'a.会发红，来股小风我都要上天了。',
          "whether": 4
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "http://deer.ysigntech.com/upload/qYfmwk/orange.jpg",
          word: "b.会变黑，防晒霜都不管用了。",
          "whether": 4
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "http://deer.ysigntech.com/upload/qYfmwk/yellow.jpg",
          word: "c.没啥变化，无所畏惧，我也很苦恼。",
          "whether": 4
        },
        "option": 'c'
      }
    }
  },{
    "content": "下面这幅图，你第一眼看到的皮肤问题是什么？",
    "content_img":"http://deer.ysigntech.com/upload/qYfmwk/ai.jpg",
    "content_type": 1,
    "role": true,
    'whether': 4,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 9,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.各种皱纹，看着都挺糟心的。",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.皮肤暗沉、松弛，看起来很没精神。",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.各种斑，虽然我不太清楚是都什么斑。",
          "whether": 0
        },
        "option": 'c'
      }
    }
  },{
    "content": "正在为您分析......",
    "content_type": 1,
    "role": true,
    'whether': 1,
    "img": "../../images/hotapp_01_07.png",
    // "answer": "",
    "questionId": 8,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "http://deer.ysigntech.com/upload/qYfmwk/anschao.jpg", 
          b: "http://deer.ysigntech.com/upload/qYfmwk/ansfeng.jpg",
          c: "http://deer.ysigntech.com/upload/qYfmwk/ansdian.jpg",
        },
        "whether":1,
      },
      "optionB": {
        'index': 1,
        'con': "点击上方图片，即可查看你的详细测试结果!",
      },
      "optionC": {
        'index': 2,
        'con': "aaaaa",
      }
    }
  },
]


// 定义数据出口  
module.exports = {
  postList: localData
}




