# Every-Day-Once-Test
每日一练
1、安装nvm，nvm下载地址   用于管理多个版本node，此处可省略！

2、安装nodejs

3、安装cnpm命令，后面包可以使用cnpm命令安装，此处可省略，如果安装了该命令，请替换后面的npm为cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

4、安装express-generator,本文安装版本是4.16.1
```
npm install express-generator -g
```

5、查看命令express --help

6、生成项目
```
express -e -c sass -v ejs test
```

7、进入项目目录
```
cd test
```
查看package.json

8、安装依赖，windows平台建议使用cmd控制台，便于查看安装问题。
```
npm i
```

9、运行项目
```
set DEBUG=test & npm start
```

10、访问浏览器


11、express 热更新方法
```
npm install -g node-dev
```
或

```
npm install node-dev -D
```

12、然后在package.json里加上"dev": "node-dev ./bin/www"

13、安装依赖
```
npm install express body-parser mysql cors --save
```