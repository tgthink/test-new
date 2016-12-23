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
	                {"id": "root", "isroot": true, "topic": "英语"},
	                {"id": "sub1", "parentid": "root", "topic": "feature"},
	                {"id": "sub2", "parentid": "root", "topic": "asset"},
	            ]
	        };
	        var options = {
	            container: 'jsmind_container',
	            editable: true,
	            theme: 'primary'
	        }
	        var jm = jsMind.show(options, mind);
	    }

	    load_jsmind();
	</script>
</body>
</html>












