#!/bin/bash
# test.sh
echo " 🎉 scioPro开始打包 "

cd ./packages
echo  " ✨ 进入components "
echo  " 📦 组件库正在进行打包... "

cd ./components
yarn build

echo  " 🚀 进入hooks "
echo  " 📦 hooks库正在进行打包... "

cd ../
cd ./hooks
yarn build

echo  " 🔧 进入utils "
echo  " 📦 utils库正在进行打包... "

cd ../
cd ./utils
yarn build
cd ../../

echo  " 🎉 打包已完成 "
echo  " 🚀 开始打包文档并部署到GitHub "

yarn deploy

echo  " 🎉 部署已完成 "
echo  " 🚀 开始commit代码到GitHub "
yarn commit

echo  " 🌲开始push代码到GitHub "
git push


echo  "  ------------------------------------------------- "
echo  ""
echo  "  🎉 自动化部署已完成，请进入线上地址预览 🎉  "
echo  ""
echo  "  💻 线上地址: http://abinzhao.github.io/scioPro/ "
echo  ""
echo  "  ------------------------------------------------ "
