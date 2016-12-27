var filesUrl = "/Users/tandyli/project/test-new/phantomjs/files/";
var websiteUrls = [
	{
		"name": "baidu",
		"url": "https://www.baidu.com/",
		"chinese": "百度"
	},
	{
		"name": "taobao",
		"url": "https://www.taobao.com/",
		"chinese": "淘宝网"
	},
	{
		"name": "qq",
		"url": "http://www.qq.com/",
		"chinese": "腾讯网"
	},
	{
		"name": "sina",
		"url": "http://www.sina.com.cn/",
		"chinese": "新浪网"
	},
	{
		"name": "sohu",
		"url": "http://www.sohu.com/",
		"chinese": "搜狐"
	},
	{
		"name": "zhihu",
		"url": "https://www.zhihu.com/",
		"chinese": "知乎"
	},
];
Date.prototype.format = function(format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 
	       		? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
	    }
	}
	return format;
}
var total = 0;
for( var i = 0; i < websiteUrls.length; i++ ) {
	//if ( websiteUrls[i]["name"] == "zhihu" ) {
		var getItem = websiteUrls[i];
		//(function(index){

		var page = require('webpage').create();
		(function(page, getItem, index, dateNow) {
			//console.log(getItem["url"]);
			page.open(getItem["url"], function () {
				var newDate = new Date();
				var imgName = getItem["name"] + "_" + dateNow.format('yyyy-MM-dd') + "_" + dateNow.format('h:m:s') + "_" + newDate.format('h:m:s') + ".png";
				page.render(filesUrl + imgName);
				page.close();
				console.log(imgName);
				total++;
				if ( total >= websiteUrls.length ) {
					phantom.exit();
				}
			});
		})(page, getItem, i, new Date());
}















