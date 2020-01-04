<?php
$ip=$_GET['ip'];
$os=$_GET['os'];
if($os=="Ubuntu")
	{
		/*$result=exec("/block.sh \ $ip");*/
		$result=shell_exec("./ublock.sh $ip");
/*		exec("block.sh");*/
/*		echo $result;*/
		header("location:asset.php?result='usb is Unblocked for $ip'");
	}
elseif($os="Microsoft Windows *")
{

}
?>
