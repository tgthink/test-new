<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
    <link type="text/css" rel="stylesheet" href="navigation/dist/css/fire_ui.css">
    <link type="text/css" rel="stylesheet" href="framework/jsmind/style/jsmind.css">
    <style type="text/css">
    	html, body {
    		height: 100%;
    	}
        #jsmind_container {
            width:500px;
            height:400px;
            border:solid 1px #ccc;
            /*background:#f4f4f4;*/
            background:#f4f4f4;
        }
    </style>
</head>
<body>
	<div>
		<a href="../../main.php">导航页</a>
	</div>
	<!--标签列表-->
	<div class="listTag">
		<div>计算机</div>
		<div>计算机</div>
	</div>
	<div id="jsmind_container"></div>
	<script type="text/javascript" src="framework/jsmind/js/jsmind.js"></script>
	<script type="text/javascript" src="framework/jsmind/js/jsmind.draggable.js"></script>
	<script type="text/javascript" src="framework/jsmind/js/jsmind.screenshot.js"></script>
	<script type="text/javascript">
	    function load_jsmind(){
	        var mind = {
	            "meta":{
	                "name": "demo",
	                "author": "hizzgdev@163.com",
	                "version": "0.2",
	            },
	            "format":"node_array",
	            "data":[
	                {"id": "root", "isroot": true, "topic": "计算机"},
	                {"id": "sub1", "parentid": "root", "topic": "工具", "background-color": "#0000ff"},//
	                {"id": "sub11", "parentid": "sub1", "topic": "Chocolatey(命令行软件包管理)"},//
	                {"id": "sub12", "parentid": "sub1", "topic": "Composer(PHP5以上 的一个依赖管理工具)"},

	                {"id": "sub2", "parentid": "root", "topic": "其他"},
	                {"id": "sub3", "parentid": "root", "topic": "前端"},

	                {"id": "sub32", "parentid": "sub3", "topic": "其他"},

	                {"id": "sub321", "parentid": "sub32", "topic": "jasmine"},
	                {"id": "sub322", "parentid": "sub32", "topic": "phantomjs"},
	                {"id": "sub323", "parentid": "sub32", "topic": "karma"},

	                {"id": "sub31", "parentid": "sub3", "topic": "js"},
	                {"id": "sub311", "parentid": "sub31", "topic": "es6"},
	                {"id": "sub3111", "parentid": "sub311", "topic": "let和const命令"},
	                {"id": "sub3112", "parentid": "sub311", "topic": "变量的解构赋值"},
	                {"id": "sub3113", "parentid": "sub311", "topic": "字符串的扩展"},
	                {"id": "sub3114", "parentid": "sub311", "topic": "正则的扩展"},
	                {"id": "sub3115", "parentid": "sub311", "topic": "数值的扩展"},
	                {"id": "sub3116", "parentid": "sub311", "topic": "数组的扩展"},
	                {"id": "sub3117", "parentid": "sub311", "topic": "8.函数的扩展"},
	                {"id": "sub3118", "parentid": "sub311", "topic": "9.对象的扩展"},
					{"id": "sub3119", "parentid": "sub311", "topic": "10.Symbol"},
					{"id": "sub31110", "parentid": "sub311", "topic": "11.Proxy和Reflect"},
					{"id": "sub31211", "parentid": "sub311", "topic": "12.Set和Map数据结构"},
					{"id": "sub31212", "parentid": "sub311", "topic": "13.Iterator和for...of循环"},
					{"id": "sub31213", "parentid": "sub311", "topic": "14.Generator 函数"},
					{"id": "sub31214", "parentid": "sub311", "topic": "15.Promise对象"},
					{"id": "sub31215", "parentid": "sub311", "topic": "16.异步操作和Async函数(看不下去)"},
					{"id": "sub31216", "parentid": "sub311", "topic": "17.Class"},
					{"id": "sub31217", "parentid": "sub311", "topic": "18.修饰器"},
					{"id": "sub31218", "parentid": "sub311", "topic": "19.Module"},
					{"id": "sub31219", "parentid": "sub311", "topic": "20.编程风格"},
					{"id": "sub31220", "parentid": "sub311", "topic": "21.读懂 ECMAScript 规格"},
					{"id": "sub31221", "parentid": "sub311", "topic": "22.二进制数组"},
					{"id": "sub31222", "parentid": "sub311", "topic": "23.SIMD"},


	                {"id": "sub4", "parentid": "root", "topic": "python"},
	                {"id": "sub42", "parentid": "sub4", "topic": "4.2字符串和编码"},
	                {"id": "sub43", "parentid": "sub4", "topic": "4.3使用list和tuple"},
	                {"id": "sub44", "parentid": "sub4", "topic": "4.4条件判断"},
	                {"id": "sub45", "parentid": "sub4", "topic": "4.5循环"},
	                {"id": "sub46", "parentid": "sub4", "topic": "4.6使用dict和set"},
	                {"id": "sub51", "parentid": "sub4", "topic": "5.1调用函数"},
	                {"id": "sub52", "parentid": "sub4", "topic": "5.2定义函数"},
	                {"id": "sub53", "parentid": "sub4", "topic": "5.3函数的参数"},
	                {"id": "sub54", "parentid": "sub4", "topic": "5.4递归函数"},

	                /*{"id":"sub1", "parentid":"root", "topic":"sub1", "background-color":"#0000ff"},
	                {"id":"sub11", "parentid":"sub1", "topic":"sub11"},
	                {"id":"sub12", "parentid":"sub1", "topic":"sub12"},
	                {"id":"sub13", "parentid":"sub1", "topic":"sub13"},

	                {"id":"sub2", "parentid":"root", "topic":"sub2"},
	                {"id":"sub21", "parentid":"sub2", "topic":"sub21"},
	                {"id":"sub22", "parentid":"sub2", "topic":"sub22","foreground-color":"#33ff33"},

	                {"id":"sub3", "parentid":"root", "topic":"sub3"},*/
	            ]
	        };
	        var options = {
	            container: 'jsmind_container',
	            editable: true,
	            theme: 'primary'
	        }
	        var jm = jsMind.show(options, mind);
	        // jm.set_readonly(true);
	        // var mind_data = jm.get_data();
	        // alert(mind_data);
	        //jm.add_node("sub2","sub23", "new node", {"background-color":"red"});
	        //jm.set_node_color('sub21', 'green', '#ccc');
	    }

	    load_jsmind();
	</script>
</body>
</html>