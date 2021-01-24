---
home: true
heroText: 潘雪岩的博客
tagline: 热爱技术的小牛.
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: {
  height: '450px'
}
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---

## 更新步骤：
1. 在blog更目录把本地更新好的文件推送到远程master分支
   ```python
   
   git add .
   git commit -m "update"
   git push origin master
   ```
   
   
2. 用用yarn构建静态文件
    ```python
   
    yarn build
   
    ``` 
3. 进入更新好的静态文件夹
    ```bash
              
    cd .vuepress/dist
   
    ```
4. 把更新好的静态文件推送到远程分支blog-br01
   ```bash
   
   git init
   git add -A
   git commit -m 'update'
   git push -f git@github.com:github653224/blogs.git master:blog-br01
   ```
