<?php
	$imgW200 = '"200"';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
    <link type="text/css" rel="stylesheet" href="http://localhost:81/test-new/navigation/dist/css/fire_ui.css">
    <link type="text/css" rel="stylesheet" href="http://localhost:81/test-new/framework/jsmind/style/jsmind.css">
    <link rel="stylesheet" type="text/css" href="http://localhost:81/test-new/navigation/dist/css/main.css">
    <style type="text/css">
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
	<script type="text/javascript" src="http://localhost:81/test-new/framework/jsmind/js/jsmind.js"></script>
	<script type="text/javascript" src="http://localhost:81/test-new/framework/jsmind/js/jsmind.draggable.js"></script>
	<script type="text/javascript" src="http://localhost:81/test-new/framework/jsmind/js/jsmind.screenshot.js"></script>
	<script type="text/javascript">
		//[i:]、[i]、[e]、[æ]、[ʌ]、[ɜ:]、[ə]、[ɑ:]、[ɔ:]、[ɒ]

		//、[ɔ]、[u:]、[u]、[ə:] 12
		//[ei]、[ai]、[ɔi]、[iə]、[ɛə]、[uə]、[au]、[əu] 8
		//[p]、[b] 、[t]、[d]、[k]、[g]、[f]、[v]、[s]、[z]、[θ]、[ð]、[ʃ]、[ʒ]、[tʃ]、[dʒ] [tr]、[dr]、[ts]、[dz]、[m]、[n]、[ŋ]、[h]、[l]、[r]、[j]、[w] 16
	    function load_jsmind(){
	        var mind = {
	            "meta":{
	                "name": "demo",
	                "author": "hizzgdev@163.com",
	                "version": "0.2",
	            },
	            "format":"node_array",
	            "data":[
	                {
	                	"id": "root",
	                	"isroot": true,
	                	"topic": "音标"
	                },
	                {
	                	"id": "1",
	                	"parentid": "root",
	                	"topic": "[i:]<br/>sheep[ʃi:p]羊<br/><img src='../../images/sheep.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "left"
	                },
	                {
	                	"id": "2",
	                	"parentid": "root",
	                	"topic": "[i]<br/>pig[pɪɡ]猪<br/><img src='../../images/pig.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "left"
	                },
	                {
	                	"id": "3",
	                	"parentid": "root",
	                	"topic": "[e]<br/>bed[bed]床<br/><img src='../../images/bed.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "4",
	                	"parentid": "root",
	                	"topic": "[æ]<br/>bag[bæɡ]袋<br/><img src='../../images/bag.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "5",
	                	"parentid": "root",
	                	"topic": "[ʌ]<br/>duck[dʌk]鸭子<br/><img src='../../images/duck.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "6",
	                	"parentid": "root",
	                	"topic": "[ɜ:]<br/>bird[bɜ:d]鸟<br/><img src='../../images/bird.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "7",
	                	"parentid": "root",
	                	"topic": "[ə]<br/>tiger[ˈtaɪgə]老虎<br/><img src='../../images/tiger.jpeg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "8",
	                	"parentid": "root",
	                	"topic": "[ɑ:]<br/>car[kɑ:]汽车<br/><img src='../../images/car.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "9",
	                	"parentid": "root",
	                	"topic": "[ɔ:]<br/>short[ʃɔ:t]短的<br/><img src='../../images/short.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                },
	                {
	                	"id": "10",
	                	"parentid": "root",
	                	"topic": "[ɒ]<br/>dog[dɒg]狗<br/><img src='../../images/dog.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "left"
	                },
	                {
	                	"id": "11",
	                	"parentid": "root",
	                	"topic": "[]<br/>[]<br/><img src='../../images/.jpg' width='200'/>",
	                	"width": <?php echo $imgW200;?>,
	                	"height": "180",
	                	"direction": "right"
	                }
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




































