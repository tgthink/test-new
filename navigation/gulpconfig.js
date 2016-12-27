"use strict";
 
/* 模块信息 */
module.exports = {
  //资源路径配置
  oPrefixUrl: {
    develop: "http://localhost:81/test-new/",//开发前缀路径
    production: ""//发布前缀路径
  },
  //环境信息
  oEnvironment: {
    source: "src",//源码目录
    develop: "dist",//开发生成目录
    production: "production"//发布生成目录
  },
  //文件名配置
  // oFile: {
  //   styleFrame: "/css/fire_ui/fire_ui.less",  //基础框架样式路径
  //   styleSkins: "/css/fire_ui/skins/*.less",  //皮肤样式路径
  // }
  //文件名配置
  oFile: {
    styleFrameUrl: "/fire_ui/**/*.less",  //基础框架样式目录路径
    styleFrame: "/fire_ui/fire_ui.less",  //基础框架样式路径
    styleSkins: "/fire_ui/skins/*.less",  //皮肤样式路径
  }
}