// 本地模拟数据  
var localData = [
  {
    "content": "你大概多久去旅行一次呢？",
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
          a: "a.节假日都会出去玩",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.每个月都会安排出去玩",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.一年一两次出去玩",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "你随身携带几面镜子？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 2,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.从不带",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.两面",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.一面",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "如果你现在用的化妆品出了新品，你会选择去尝试吗？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 3,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.不会去尝试",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.一有新品我就想买回来试试",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.又出新品了~我可以考虑考虑",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "不管是化妆品还是护肤品，如果不巧中招过敏了；你的皮肤会更接近以下选项中的哪种情况？",
    "content_type": 1,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId":4,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.会很痒痒、有刺痛的感觉",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.会起一些小疹子，有发红的现象",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.没什么太大感觉",
          "whether": 0
        },
        "option": 'c'
      }
    }
  },
  {
    "content": "你在网上买东西时，最看重的是？",
    "content_type": 1,
    "role": true,
    'whether': 1,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 5,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.商品价格",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.商品详情",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.商品评论",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "你觉得瘦下来最有效的方法是以下选项中的哪个？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 6,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.健身啊~强身又健体",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.轻食啊~不得不辜负美食了",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.吸脂啊~能快速暴瘦",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "你知道“旅行青蛙”这个游戏吗？",
    "content_img": "../../images/frog.jpg",
    "content_type": 1,
    "role": true,
    'whether': 4,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 7,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.知道，玩过",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.知道，没玩过",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.不知道",
          "whether": 0
        },
        "option": 'c'
      }
    }
  },  {
    "content": "脸上有皱纹你认为一般采取什么措施比较有效？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 8,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.在家自己用除皱工具捯饬捯饬~",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.抗皱的化妆品，面霜啊什么的~",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.打除皱针啊~一针见效",
          "whether": 0
        },
        "option": 'c'
      }
    }
  },
  {
    "content": "平时你的穿衣风格会更偏向于哪种类型的？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 9,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.穿着自然得体、干净舒适就好啦~",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.当然是CHANEL、GUCCI等大牌有气质的啦~",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.比较大众一点的ZARA、HM、优衣库牌子的时尚服装啦~",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "如果把疼痛感分成等级类痛感，您的接受范围会是多少级的呢？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 10,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.深度疼痛：似被针扎、棍棒鞭打",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.轻度痛感：似蚊虫叮咬",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.中度痛感：似饮食不洁引起的肠胃炎、肚子疼",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },  
  {
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
          a: "http://deer.ysigntech.com/upload/qYfmwk/jin.jpg",
          b: "http://deer.ysigntech.com/upload/qYfmwk/ti.jpg",
          c: "http://deer.ysigntech.com/upload/qYfmwk/daon.jpg",
        },
        "whether": 1,
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




