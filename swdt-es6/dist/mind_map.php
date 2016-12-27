<?php
	include_once "public.php";
	//echo $_GET["id"];
	$url_info = geturl($_SERVER["QUERY_STRING"], $key_url_md_5);//接收所有参数
	$id = $url_info['id'];
	$time = $url_info['time'];//这个是时间戳，大家可以利用这个参数判断一下链接生成的时间，就可以判断是否超时了（此项如果不需要也可以忽略）
	echo $id;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
    <link type="text/css" rel="stylesheet" href="http://192.168.2.1:81/test-new/framework/jsmind/style/jsmind.css">
    <style type="text/css">
        #jsmind_container{
            width:800px;
            height:500px;
            border:solid 1px #ccc;
            /*background:#f4f4f4;*/
            background:#f4f4f4;
        }
    </style>
</head>
<body>
	<div id="jsmind_container"></div>
	<script type="text/javascript" src="http://192.168.2.1:81/test-new/framework/jsmind/js/jsmind.js"></script>
	<script type="text/javascript" src="http://192.168.2.1:81/test-new/framework/jsmind/js/jsmind.draggable.js"></script>
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
	                {"id":"root", "isroot":true, "topic":"jsMind"},

	                {"id":"sub1", "parentid":"root", "topic":"sub1", "background-color":"#0000ff"},
	                {"id":"sub11", "parentid":"sub1", "topic":"sub11"},
	                {"id":"sub12", "parentid":"sub1", "topic":"sub12"},
	                {"id":"sub13", "parentid":"sub1", "topic":"sub13"},

	                {"id":"sub2", "parentid":"root", "topic":"sub2"},
	                {"id":"sub21", "parentid":"sub2", "topic":"sub21"},
	                {"id":"sub22", "parentid":"sub2", "topic":"sub22","foreground-color":"#33ff33"},

	                {"id":"sub3", "parentid":"root", "topic":"sub3"},
	            ]
	        };
	        var options = {
	            container:'jsmind_container',
	            editable:true,
	            theme:'primary'
	        }
	        var jm = jsMind.show(options,mind);
	        // jm.set_readonly(true);
	        // var mind_data = jm.get_data();
	        // alert(mind_data);
	        jm.add_node("sub2","sub23", "new node", {"background-color":"red"});
	        jm.set_node_color('sub21', 'green', '#ccc');
	    }

	    load_jsmind();
	</script>
</body>
</html>