<?php
$ip=$_GET['ip'];
$os=$_GET['os'];
if($os=="Ubuntu")
	{
		/*$result=exec("/block.sh \ $ip");*/
		$result=shell_exec("./block.sh $ip");
/*		exec("block.sh");*/
/*		echo $result;*/
		header("location:asset.php?result='usb is blocked for $ip'");
	}
elseif($os="Microsoft Windows *")
{

}
?>
