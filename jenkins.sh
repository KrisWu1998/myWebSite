#!/bin/sh -il

echo "开始执行了vue脚本文件"

echo "开始下载node_module"
sudo npm i

echo "开始打包"
sudo npm run build

echo "清空nginx下的文件"
sudo rm -rf '/usr/share/nginx/html/dist'

echo "将jenkins打包的文件拷贝到nginx下"
sudo cp -r '/var/lib/jenkins/workspace/mywebsite/dist' '/usr/share/nginx/html/dist'