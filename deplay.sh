set -e
echo "开始构建静态文件"
yarn build && echo "构建静态文件结束" && echo "开始提交所有代码" && git add . && git commit -m "deploy" && git push origin master && echo "推送代码代码到远程仓库结束"

cd .vuepress/dist && git init && git add -A && git commit -m 'update' && git branch -m main blog-br01 && git push -f git@github.com:github653224/blogs.git blog-br01