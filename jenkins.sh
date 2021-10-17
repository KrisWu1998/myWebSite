#!/bin/sh -il

echo "开始执行了vue脚本文件"

echo "开始下载node_module"
npm i

echo "开始打包"
npm run build