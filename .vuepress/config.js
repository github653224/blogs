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
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "系列教程",
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
            "text": "vue技术教程",
            "link": "/docs/vue技术教程/"
          },
          {
            "text": "web自动化测试教程",
            "link": "/docs/web自动化测试教程/"
          },
          {
            "text": "pytest系列教程",
            "link": "/docs/pytest系列教程/"
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
        "text": "联系我",
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

        "/docs/web自动化测试教程/": [
        "",
        "01-自动化测试概述",
        "02-Selenum核心技术",

      ],

      "/docs/python教程/": [
        "",
        "python数据结构",
        "python列表",
        "push_code"

      ],

      "/docs/vue技术教程/": [
        "",
        "markdown流程图",
        "easyUI"
      ],

        "/docs/pytest系列教程/": [
        "",
        "01-pytest概述和安装",
        "02-pytest使用",
        "03-pytest执行方式",
        "04-pytest运行规则",
        "05-pytest自定义运行规则",
        "06-pytest标记",
        "07-pytest数据参数化",
        "08-pytest常用插件",
        "09-pytest案例实践"
      ]

    },

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
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
         ['@vuepress-yard/vuepress-plugin-window'],
         ["dynamic-title",
              {
                showIcon: "vuepress/smile.ico",
                showText: "(/≧▽≦/)欢迎来到潘雪岩的博客！",
                hideIcon: "vuepress/cry.ico",
                hideText: "(●—●)呜呜，不要走嘛！！",
                recoverTime: 2000
              }
          ],

          ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
                }
            }
          ]



    ]

}
