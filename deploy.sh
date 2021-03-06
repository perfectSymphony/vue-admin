# deploy.sh
#!/usr/bin/env sh
# 错误时停止
set -e

# 打包
npm run build:prod

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:perfectSymphony/vue-admin.git master:gh-pages
#git subtree push --prefix origin master:gh-pages

cd -