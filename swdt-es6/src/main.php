<?php
	include_once "public.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<div>
		<a href="./mind_map/?<?php echo encrypt_url("id=1"."&time=".time(), $key_url_md_5); ?>">音标导图</a>
		<a href="./mind_map/?<?php echo encrypt_url("id=2"."&time=".time(), $key_url_md_5); ?>">首字母导图</a>
	</div>
	<script type="text/javascript">
		
	</script>
</body>
</html>



























