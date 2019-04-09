// 本地模拟数据  
var localData = [
  {
    "content": "你喜欢早、晚都用洗面奶洗脸吗？",
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
          a: "a.是的，喜欢",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.只在晚上用",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.只在早上用",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "你洗脸喜欢用冷水、热水还是温水？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 2,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.冷水",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.温水",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.热水",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "皮肤的正常生理代谢周期是多少天？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 3,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.18天",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.28天",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.32天",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "防晒霜有人会随时随地补涂，你认为有用吗？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 4,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.没有什么用",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.当然有用",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.我不知道",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "你认为紫外线只有在烈日高温下才是最强烈的吗？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 5,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.是的",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.不是",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 1,
        'con': {
          c: "c.不确定",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "外出海边玩耍时，你会随时随刻或是涂很多的防晒霜嘛？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 6,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.不会",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.会",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.涂一点不会很多",
          "whether": 0
        },
        "option": 'c'
      },
    }
  },
  {
    "content": "你是否认为防晒霜只要涂抹了就会即刻起防晒护肤效果？",
    "content_type": 0,
    // "content_img": "../../images/neck.jpg",
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    // 'whether': 4,
    "questionId": 7,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.是的",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.不是",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.可能是",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "当你的皮肤被晒黑了之后，你是否会认为涂防晒霜也无济于事？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 8,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.是的",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.不是",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.不清楚",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "防晒产品对皮肤的防晒、防护指数的大小是看SPF还是看PA+++？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 9,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.PA+++",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.SPF",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.不清楚",
          "whether": 0
        },
        "option": 'c'
      },
    }
  }, {
    "content": "多吃含维生素C的东西与多喝绿茶说是能抗氧化？",
    "content_type": 0,
    "role": true,
    "img": "../../images/hotapp_01_07.png",
    "answer": "",
    "questionId": 10,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.不可能",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.是的",
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
      },
    }
  }, {
    "content": "正在为您分析......",
    "content_type": 1,
    "role": true,
    'whether': 1,
    "img": "../../images/hotapp_01_07.png",
    // "answer": "",
    "questionId": 11,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "http://deer.ysigntech.com/upload/qYfmwk/a.png",
          b: "http://deer.ysigntech.com/upload/qYfmwk/b.png",
          c: "http://deer.ysigntech.com/upload/qYfmwk/c.png",
          d: "http://deer.ysigntech.com/upload/qYfmwk/d.png",
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
      },
      "optionD": {
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




