#!/bin/bash
# test.sh

echo "🎉 scioPro开始打包";

# 进入项目子包packages
cd ./packages

echo "✨ 进入components";
echo "📦 组件库正在进行打包...";
# 进入子项目 components 并且打包
cd ./components
yarn build

echo "🚀 进入hooks";
echo "📦 hooks库正在进行打包...";
# 进入子项目 hooks 并且打包
cd ../
cd ./hooks
yarn build

echo "🔧 进入utils";
echo "📦 utils库正在进行打包...";
# 进入子项目 utils 并且打包
cd ../
cd ./utils
yarn build
