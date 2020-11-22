## vue.js使用vue-cli搭建一个SPA项目

why：

这个教程主要是对入门vue的同学。

how：

#### 1.首先，你电脑必须需要nodejs环境，如果没有请去下载

[点击我进入node官网](https://nodejs.org/en/)

```
安装完成之后在命令窗口执行node -v
```



#### 安装脚手架vue-cli

在命令行执行npm install -g vue-cli

```
在命令行执行 npm install -g vue-cli
```

安装完毕之后在命令行执行 vue -V (大写V)

如果执行完毕后会出现cli的版本号就ok了

#### 3.在你的项目目录下初始化的一个webpack配置的项目

在命令行执行 vue init webpack name 是你的项目名称

执行后有 project name<name> 输入项目名称 回车

Project description 项目的描述，回车

Author 作者

后面安装yes就行

#### 4.在你心间好的项目下install安装所有的需要的模块

进入当前项目执行npm install 她会根据package.json文件以来的所有模块进行安装，回车之后你就静静的等着。

#### 5.运行你的项目

先进入目录下，在命令窗口执行 npm run dev 就可以运行你的项目 