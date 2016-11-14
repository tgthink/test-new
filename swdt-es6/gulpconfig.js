"use strict";
 
/* 模块信息 */
module.exports = {
  //路径配置
  oUrl: {
    //开发环境路径
    develop: {
      prefix:       "http://192.168.3.213:81/test-new/",  //开发环境资源前缀路径
      request_url:  "",                         //开发环境接口路径
      main_url:     "",
      login_url:    ""
    },
    //测试环境路径
    test: {
      prefix:       "",                           //测试环境资源前缀路径
      request_url:  "",       //测试环境接口路径
      main_url:     "",
      login_url:    ""
    },
    //正式环境路径
    production: {
      prefix:       "",                      //正式环境资源前缀路径
      request_url:  "",             //正式环境接口路径
      main_url:     "",
      login_url:    ""
    }
  },
  //环境信息
  oEnvironment: {
    source: "src",//源码目录
    develop: "dist",//开发生成目录
    test: "test",//测试发布生成目录
    production: "production"//正式发布生成目录
  },
  //文件名配置
  oFile: {
    styleFrameUrl: "/fire_ui/**/*.less",  //基础框架样式目录路径
    styleFrame: "/fire_ui/fire_ui.less",  //基础框架样式路径
    styleSkins: "/fire_ui/skins/*.less",  //皮肤样式路径
  }
}









