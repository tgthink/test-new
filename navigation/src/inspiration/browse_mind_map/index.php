<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
    <link type="text/css" rel="stylesheet" href="navigation/dist/css/fire_ui.css" />
    <link type="text/css" rel="stylesheet" href="framework/jsmind/style/jsmind.css" />
    <style type="text/css">
        #jsmind_container {
            width:800px;
            height:500px;
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
	<script type="text/javascript">
	    function load_jsmind(){
	        var mind = {
	            "meta":{
	                "name":"demo",
	                "author":"hizzgdev@163.com",
	                "version":"0.2",
	            },
	            "format":"node_array",
	            "data":[
	                {"id": "root", "isroot": true, "topic": "计算机"},
	                {"id": "sub1", "parentid": "root", "topic": "工具", "background-color": "#0000ff"},//
	                {"id": "sub11", "parentid": "sub1", "topic": "Chocolatey(命令行软件包管理)"},
	                {"id": "sub2", "parentid": "root", "topic": "其他"},
	                {"id": "sub3", "parentid": "root", "topic": "前端"},
	                {"id": "sub31", "parentid": "sub3", "topic": "js"},
	                {"id": "sub311", "parentid": "sub31", "topic": "es6"},
	                {"id": "sub3111", "parentid": "sub311", "topic": "let和const命令"},
	                {"id": "sub3112", "parentid": "sub311", "topic": "变量的解构赋值"},
	                {"id": "sub3113", "parentid": "sub311", "topic": "字符串的扩展"},
	                {"id": "sub3114", "parentid": "sub311", "topic": "正则的扩展"},
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