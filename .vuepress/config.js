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
            "text": "简历",
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
        "markdown流程图"
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
        options: {
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

      ['flowchart']

    ]

}
