<?php
	$username = 'fire66';
	$url = 'http://www.zhihu.com/people/'.$username.'/about';
	$cookie = 'd_c0="AJBAM6CzvwqPTnltghF8PAn0benGnEjFCDs=|1477443572"; q_c1=c6f3cde1fd0945478518a1ebd26c579c|1477443572000|1477443572000; _zap=1f23ca0e-de8b-4f49-ae0d-24ed79bd96ba; _xsrf=46dfbeef9b6691462ae3255e602c83b1; OUTFOX_SEARCH_USER_ID_NCOO=1094906864.9228687; s-q=%E6%AF%8D%E7%8C%AB%20%E5%8F%91%E6%83%85; s-i=1; sid=m4ci652g; l_cap_id="MTI0ODhlNzI1OTQ0NDVhMWFiNWRjY2JlMDE4Y2I5ODA=|1478662938|cf7ccdd433ac65d3f61625d4a2595e518eff8698"; cap_id="OTEyZWI2ZDU2N2YwNGQ5ODk2OWZlMWE0NjA0ZDg3ZTg=|1478662937|f79a92efd5902c6d838fb2e32e83259e0b7fdc9e"; l_n_c=1; __utma=51854390.1419714722.1478658565.1478659439.1478668092.3; __utmc=51854390; __utmz=51854390.1478668092.3.3.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/people/fire6; __utmv=51854390.100--|2=registration_date=20161109=1^3=entry_date=20161026=1; a_t="2.0ADDAHlTf0QoXAAAAoVdKWAAwwB5U39EKAJBAM6CzvwoXAAAAYQJVTUwoSlgADdkFgOc8KO-ty2zU_sJfazQ80WKn4DOtyE-EBjjJsll83jJYQtUUhA=="; z_c0=Mi4wQUREQUhsVGYwUW9Ba0VBem9MT19DaGNBQUFCaEFsVk5UQ2hLV0FBTjJRV0E1endvNzYzTGJOVC13bDlyTkR6Ulln|1478675105|e1f4106fed796ee8ee3df5ed19283c41c874b2cb';

    $ch = curl_init($url);
    //初始化会话
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    //设置请求COOKIE
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
     //将curl_exec()获取的信息以文件流的形式返回，而不是直接输出。
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    $content = curl_exec($ch);
    echo $content;  //抓取的结果
    //echo file_get_contents('http://static.jb51.net/images/v1/loading-16-16.gif');
 //    $preg = "/<td class='portrait'>(.*)<\/td>/i";
   	$preg = '/<img class="Avatar Avatar--l"(.*?)src="(.*?)"(.*?)alt="'.$username.'"(.*?)>/i';
	preg_match_all($preg, $content, $arr);
	var_dump($arr);
	// echo "<br>";
	// var_dump($arr[2][0]);
	echo "<br>";
	echo $arr[2][0];
	echo "<br>";
	//echo file_get_contents("https://pic1.zhimg.com/da8e974dc_l.jpg");
    $context_options = array(
    	'http' => array(
			'header' => "Referer:http://www.zhihu.com"//带上referer参数
		)
	);
    $context = stream_context_create($context_options);

	$img = file_get_contents("https://pic1.zhimg.com/da8e974dc_l.jpg", FALSE, $context);
	file_put_contents("./images/".$username.".jpg", $img);
	echo '<img src="./images/'.$username.'.jpg">';
	//header('content-type: image/png');
	//echo file_get_contents($arr[2][0]);
	// foreach ( $arr as $k=>$v ) {
	// 	echo $v;
	// 	//if($k%6 == 5){
	// 	echo '<br>';
	// 	//}
	// }

	// $str = $arr[1][0]; 
	// //输出内容 
	// echo $str;
?>





















