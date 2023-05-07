set -e
echo "开始构建静态文件"
yarn build && echo "构建静态文件结束" && echo "开始提交所有代码" && git add . && git commit -m "deploy" && git push origin master && echo "推送代码代码到远程仓库结束"

echo "进入到静态文件夹目录开始" && cd .vuepress/dist  && echo "进入到静态文件夹目录结束" && echo "初始化仓库开始" && git init echo "初始化仓库结束" && echo "提交代码开始" && git add -A && git commit -m 'update' echo "提交代码结束" && echo "修改分支main为blog-br01开始" && git branch -m main blog-br01 && echo "修改分支main为blog-br01结束" && echo "推送代码到远程仓库开始"  && git push -f git@github.com:github653224/blogs.git blog-br01 && echo "推送代码到远程仓库结束"