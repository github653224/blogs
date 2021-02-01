---
title: python数据结构章节
date: 2020-01-24
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
