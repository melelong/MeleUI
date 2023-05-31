#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git branch -M main
git add -A
git commit -m 'deploy'
git push -f https://github.com/melelong/MeleUI.git main:docs-pages
cd -