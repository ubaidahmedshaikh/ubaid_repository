<?php
/*
 *********************************************************************************************************
 * daloRADIUS - RADIUS Web Platform
 * Copyright (C) 2007 - Liran Tal <liran@enginx.com> All Rights Reserved.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 *
 *********************************************************************************************************
 *
 * Authors:	Liran Tal <liran@enginx.com>
 *
 *********************************************************************************************************
 */
 
    include ("library/checklogin.php");
    $login = $_SESSION['login_user'];
	
	include_once('library/config_read.php');
    $log = "visited page: ";

?>

<?php
	include("menu-accounting.php");	
?>		

	<div id="contentnorightbar">
<br>
<br>
<br>
	<center>	
			<img src="images/gmail.png" width="150">	
			<img src="images/drive.png" width="150" style="margin-left:15px;">	
			<img src="images/profile.png" width="150" style="margin-left:15px;">	
	</center>
		<div id="helpPage" style="display:none;visibility:visible" >
			<?php echo $l['helpPage']['acctmain'] ?>
			<br/>
		</div>
		<br/>

<?php
	include('include/config/logging.php');
?>

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
