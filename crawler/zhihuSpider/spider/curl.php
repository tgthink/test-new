<?php
/**
 * @Author: huhuaquan
 * @Date:   2015-08-10 18:08:43
 * @Last Modified by:   huhuaquan
 * @Last Modified time: 2016-05-27 18:21:16
 */
require_once './function.php';
class Curl {

	private static function getCookieObject() {
		$filename = "./spider/mycookie.json";
    	$json_string = file_get_contents($filename);
    	return json_decode($json_string);
	}
	private static $cookie_arr = array(
		/*'__utma' => '51854390.847096722.1463637721.1464335701.1464340069.13',
		'__utmb' => '51854390.26.10.1464340069',
		'__utmc' => '51854390',
		'__utmv' => '51854390.100-1|2=registration_date=20141017=1^3=entry_date=20141017=1',
		'__utmz' => '51854390.1464168187.9.3.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)',
		'_xsrf' => 'adcfcf915f4506927b88d87646016dc2',
		'_za' => 'a2889ef9-c598-4e96-8ab5-9ca0a9f42e7e',
		'_zap' => '06c40d9b-e783-45c3-875b-b5def3690777',
		'_zap' => '9349f159-e616-4d41-9799-11ee42b5c5eb',
		'cap_id' => '"Y2ExNDNlMjU1MTk4NDRlYTgyMGZkMjc0NDBhNzliNTg=|1461919186|0dc2691feec234e052506642d742b21eb59be6e4"',
		'd_c0' => '"AGAAuXZTsAmPTiftYaWT02M1JeAkw0ewo9w=|1459231862"',
		'l_cap_id' => '"ZDI4ZjAzMTA3ODIxNGZmMWE3MmVlN2Q5OWMzYjhhZjY=|1461919186|84a64a2066181bd12069ecf4719366ac226e5da8"',
		'l_n_c' => '1',
		'login' => '"YjdjZjBmMmVlNTc1NDNlOGIxZDU5Yjg4MjhkZjJmZjU=|1461919194|a1cb43545b786305147c7c19b7b85111f810b4a5"',
		'q_c1' => '21fd5f4d6c3541aa873163af7517ab8d|1461908846000|1459231862000',
		's-i' => '6',
		's-q' => '%E6%85%A2%E6%80%A7%E8%83%83%E7%82%8E',
		's-t' => 'autocomplete',
		'sid' => 'e63rlk6q',
		'z_c0' => 'Mi4wQUFEQTRZbzZBQUFBWUFDNWRsT3dDUmNBQUFCaEFsVk4ycXBLVndCRktqRFFudXVaRzFyV3g1dUUwdkhsQ19UaEp3|1461919194|141c3c517d5be5e1e205e233f0d18c1f832a3806'*/
	);
	private static $strCookie = 'd_c0="AJBAM6CzvwqPTnltghF8PAn0benGnEjFCDs=|1477443572"; q_c1=c6f3cde1fd0945478518a1ebd26c579c|1477443572000|1477443572000; _zap=1f23ca0e-de8b-4f49-ae0d-24ed79bd96ba; _xsrf=46dfbeef9b6691462ae3255e602c83b1; OUTFOX_SEARCH_USER_ID_NCOO=1094906864.9228687; s-q=%E6%AF%8D%E7%8C%AB%20%E5%8F%91%E6%83%85; s-i=1; sid=m4ci652g; l_cap_id="MTI0ODhlNzI1OTQ0NDVhMWFiNWRjY2JlMDE4Y2I5ODA=|1478662938|cf7ccdd433ac65d3f61625d4a2595e518eff8698"; cap_id="OTEyZWI2ZDU2N2YwNGQ5ODk2OWZlMWE0NjA0ZDg3ZTg=|1478662937|f79a92efd5902c6d838fb2e32e83259e0b7fdc9e"; l_n_c=1; a_t="2.0ADDAHlTf0QoXAAAAbUJKWAAwwB5U39EKAJBAM6CzvwoXAAAAYQJVTUwoSlgADdkFgOc8KO-ty2zU_sJfazQ80WJHratYALgpZnX64Uf8KXb7M_2UbA=="; z_c0=Mi4wQUREQUhsVGYwUW9Ba0VBem9MT19DaGNBQUFCaEFsVk5UQ2hLV0FBTjJRV0E1endvNzYzTGJOVC13bDlyTkR6Ulln|1478669677|0dc9cf30d27e1b43f6e52866a08b976a3f1f3d14; __utmt=1; __utma=51854390.1419714722.1478658565.1478659439.1478668092.3; __utmb=51854390.7.9.1478668260879; __utmc=51854390; __utmz=51854390.1478668092.3.3.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/people/fire6; __utmv=51854390.100--|2=registration_date=20161109=1^3=entry_date=20161026=1';

	private static function genCookie() {
		$myCookies = self::getCookieObject();
		foreach ($myCookies as $key => $item) {
			$cookie_arr[$item->name] = $item->value;
		}
		// print_r($cookie_arr);
		// echo "========================end\n";
		//echo gettype(self::aaaaaaaa());
		$cookie = '';
		foreach (self::$cookie_arr as $key => $value) {
			if($key != 'z_c0')
				$cookie .= $key . '=' . $value . ';';
			else
				$cookie .= $key . '=' . $value;
		}
		echo $cookie;
		return $cookie;
	}

	/**
	 * [request 执行一次curl请求]
	 * @param  [string] $method     [请求方法]
	 * @param  [string] $url        [请求的URL]
	 * @param  array  $fields     [执行POST请求时的数据]
	 * @return [stirng]             [请求结果]
	 */
	public static function request($method, $url, $fields = array())
	{
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_COOKIE, self::$strCookie);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);
		if ($method === 'POST')
		{
			curl_setopt($ch, CURLOPT_POST, true );
			curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		}
		$result = curl_exec($ch);
		return $result;
	}

	/**
	 * [getMultiUser 多进程获取用户数据]
	 * @param  [type] $user_list [description]
	 * @return [type]            [description]
	 */
	public static function getMultiUser($user_list)
	{
		$ch_arr = array();
		$text = array();
		$len = count($user_list);
		$max_size = ($len > 5) ? 5 : $len;
		$requestMap = array();

		$mh = curl_multi_init();
		for ($i = 0; $i < $max_size; $i++)
		{
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_HEADER, 0);
			curl_setopt($ch, CURLOPT_URL, 'http://www.zhihu.com/people/' . $user_list[$i] . '/about');
			curl_setopt($ch, CURLOPT_COOKIE, self::genCookie());
			curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36');
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			$requestMap[$i] = $ch;
			curl_multi_add_handle($mh, $ch);
		}

		$user_arr = array();
		do {
			while (($cme = curl_multi_exec($mh, $active)) == CURLM_CALL_MULTI_PERFORM);
			
			if ($cme != CURLM_OK) {break;}

			while ($done = curl_multi_info_read($mh))
			{
				$info = curl_getinfo($done['handle']);
				$tmp_result = curl_multi_getcontent($done['handle']);
				$error = curl_error($done['handle']);

				$user_arr[] = array_values(getUserInfo($tmp_result));

				//保证同时有$max_size个请求在处理
				if ($i < sizeof($user_list) && isset($user_list[$i]) && $i < count($user_list))
                {
                	$ch = curl_init();
					curl_setopt($ch, CURLOPT_HEADER, 0);
					curl_setopt($ch, CURLOPT_URL, 'http://www.zhihu.com/people/' . $user_list[$i] . '/about');
					curl_setopt($ch, CURLOPT_COOKIE, self::$user_cookie);
					curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36');
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
					curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
					$requestMap[$i] = $ch;
					curl_multi_add_handle($mh, $ch);

                    $i++;
                }

                curl_multi_remove_handle($mh, $done['handle']);
			}

			if ($active)
                curl_multi_select($mh, 10);
		} while ($active);

		curl_multi_close($mh);
		return $user_arr;
	}

}