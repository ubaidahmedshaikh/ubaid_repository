<?php
/*
 *********************************************************************************************************
 * CyberForza - RADIUS Web Platform
 * Copyright (C) 2017 - CyberForza <info@cyberforza.com> All Rights Reserved.
 *
 * 
 *********************************************************************************************************
*
 * Authors:	CISS Interceptor Development Team
 *
 *********************************************************************************************************
 */

    include ("library/checklogin.php");
    $operator = $_SESSION['operator_user'];

    include('library/check_operator_perm.php');

	include_once('library/config_read.php');
    $log = "visited page: ";
    $logQuery = "performed query on page: ";
    include('include/config/logging.php');


?>


<?php

    include ("menu-reports-status.php");
  	
?>	
		
		
		<div id="contentnorightbar">
		
		<h2 id="Intro"><a href="#"  onclick="javascript:toggleShowDiv('helpPage')">UPS Status
		<h144>+</h144></a></h2>

		<div id="helpPage" style="display:none;visibility:visible" >
			<br/>
		</div>
		<br/>




<?php
	exec("`which apcaccess`", $output, $retStatus);
?>


	<h3>General Information</h3>

<?php 
	$sep = ":";
	if ($retStatus != 0):
		$sep = "\n";		 
?>
    <!-- <font color='red'><b>Error</b> accessing UPS device information:</font>
	<br/><br/>-->
<?php endif; ?>

<table class='summarySection'>


<?php 
	foreach($output as $line):
		list($var, $val) = split($sep, $line);
?>

  <tr>
    <td class='summaryKey'> <?php echo $var ?> </td>
    <td class='summaryValue'><span class='sleft'> <?php echo $val ?> </span> </td>
  </tr>

<?php endforeach; ?>

</table>

		</div>
		
		<div id="footer">

<?php
        include 'page-footer.php';
?>
		
		</div>
		
</div>
</div>


</body>
</html>
