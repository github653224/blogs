---
title: 更新本地到远程仓库
date: 2020-01-24
sidebar: auto  
keys:
 - 'e10adc3949ba59abbe56e057f20f883e'    
 - '988a62912142f79235e58b863d6fc7c8'  
 - 'e1d754ff273077ea7f7004103e238ac1'  

publish: true
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
   git branch -m main blog-br01
   git push -f git@github.com:github653224/blogs.git blog-br01
   ```
5. 非常好的把本地图片转换为网络在线地址
   - https://zhuanlan.zhihu.com/p/201347765
   - https://sm.ms/
   - https://imgse.com/
