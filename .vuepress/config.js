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
            "text": "python教程",
            "link": "/docs/python教程/"
          }
        ]

      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          {
            "text": "me",
            "link": "/about/me/"
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
  /*
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }]
  */

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
      }]
    ]

}
