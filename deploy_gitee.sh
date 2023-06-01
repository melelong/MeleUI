#!/usr/bin/env sh
# .sh脚本，win安装git，双击使用

set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git branch -M main
git add -A
git commit -m 'deploy'
git push -f https://gitee.com/mele-long/mele-ui.git main:docs-pages
cd -