module.exports = {
  "title": "潘雪岩的技术专栏",
  "description": "blog of panxueyan",
  "base": "/blogs/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    subSidebar: 'auto',
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          },
          {
            "text": "python教程系列",
            "link": "/docs/python教程/"
          },
          {
            "text": "其他技术教程",
            "link": "/docs/其他技术教程/"
          }

        ]

      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          {
            "text": "我的简历",
            "link": "/about/resume/"
          },

          {
            "text": "关于我",
            "link": "/about/me/"
          }
        ]
      },

      {
        "text": "留言板",
        "icon": "reco-message",
        "items": [
          {
            "text": "留言板",
            "link": "/message/msg/"
          },

          {
            "text": "bug曝光台",
            "link": "/message/bug/"
          }
        ]
      },

      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/github653224",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],

      "/docs/python教程/": [
        "",
        "python数据结构",
        "python列表",
        "push_code"

      ],

      "/docs/其他技术教程/": [
        "",
        "markdown流程图",
        "easyUI"
      ]

    },

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
     {
        "title": "热爱技术的小牛",
        "desc": "博客园技术博客.",
        "email": "944851899@qq.com",
        "link": "https://www.cnblogs.com/my-blogs-for-everone/"
      },
      /*
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }*/
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "panxueyan",
    "authorAvatar": "/imgs/avatar.png",
    "record": "github托管",
    "startYear": "2015"
  },
  "markdown": {
    "lineNumbers": true
  },

  plugins: [

      ['@vuepress-reco/comments', {
        solution: 'valine',
//        choosen: 'valine',
        options: {
//          el: '#valine-vuepress-comment',
          appId: 'hGrwbHvwzB7IRwYEp6wnw4Sg-gzGzoHsz',
          appKey: 'iq512yWIul3DMGhLzXLyTxjh',
        }
      }],

      ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }],
     /* 这个动态titile不好看不好用，屏蔽掉
      ['dynamic-title', {
            showIcon: '/favicon.ico',
            showText: '(/≧▽≦/)咦！又好了！',
            hideIcon: '/failure.ico',
            hideText: '(●—●)喔哟，崩溃啦！',
            recoverTime: 2000,
         }],
            */
      // 文章右侧动态地图站点，需要配合在文章加上： sidebar: auto
      ['sitemap', {
        hostname: 'https://github653224.github.io/blogs/',
      }],

      // 进度条
      ['@vuepress/nprogress'],

      // 代码
      ['@vuepress-reco/extract-code'],

      // 页面滚动时自动激活侧边栏链接的插件
      ['@vuepress/active-header-links'],

      ['vuepress-plugin-container'],

      ['flowchart'],
      ['one-click-copy', {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
        duration: 300, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
         }],
         // 公告插件
         ['vuepress-plugin-window'],
         // 右侧边栏
        ['vuepress-plugin-toolbar',{
      'pageNav': {
        name: '导航'
      },
      opts: [
        {
          icon: '',
          name: '二维码',
          link: '',
          popover: {
            title: '使用 Base64 来作为图片源',
            type: 'image',
            imageUrl: 'data:image/png;base64,这里是 Base64图片编码代码作为图片源',
            more: {
              newWindow: false,
              link: '/vuepress-plugin/vuepress-plugin-toolbar/',
              name: '了解更多'
            }
          }
        }, {
          icon: '',
          name: '纯展示'
        },
//        {
//          icon: '',
//          name: '文本',
//          popover: {
//            type: 'text',
//            title: '纯文本说明',
//            text: '这是一个纯文本的内容展示，就是一段话'
//          }
//        },
//        {
//          icon: '',
//          name: 'html 支持',
//          popover: {
//            type: 'html',
//            title: '使用简单的 HTML 显示',
//            html: '<h1>使用简单的 HTML</h1> 进行展示 <a href="http://www.baidu.com"> 链接到百度 </a>'
//          }
//        },
        {
          icon: '',
          name: '网络图片',
          link: '',
          popover: {
            title: '使用 网络图片 来作为图片源',
            type: 'image',
            imageUrl: 'http://img.bjtata.com/img/5c5de63193ea53a4.jpg',
          }
        }
      ]
    }]


    ]

}
