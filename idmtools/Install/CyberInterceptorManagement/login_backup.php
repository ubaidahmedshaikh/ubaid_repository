<?php 
	isset($_REQUEST['error']) ? $error = $_REQUEST['error'] : $error = "";
	
	// clean up error code to avoid XSS
	$error = strip_tags(htmlspecialchars($error));
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<script src="library/javascript/pages_common.js" type="text/javascript"></script>
<title>Interceptor Management </title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/1.css" type="text/css" media="screen,projection" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>
.side-nav {
    position: fixed;
    top: 0px;
    left: 225px;
    width: 20%;
    margin-left: -225px;
    border: none;
    border-radius: 0;
    overflow-y: auto;
    background-color: #1e406d;
    bottom: 0;
    overflow-x: hidden;
    padding-bottom: 40px;
}
</style>
</head>
 
<body onLoad="document.login.operator_user.focus()">
<?php
    include_once ("lang/main.php");
?>

<div id="wrapper">
<div id="innerwrapper">
<div class="collapse navbar-collapse navbar-ex1-collapse" style="background-color:#1e406d;">
 <ul class="nav navbar-nav side-nav">
<div class="middlediv" style="background-color:#f4f6f5;">
                 <a class="navbar-brand" href="#" style="padding:5px; height:60px;">
<div style="display:inline-block;margin-top:10px;"><img src="images/cyberforza_logo.png" alt="" style="width: 100px;margin-left: 10%;max-width:200px;">
        </a>

</div>
                </ul>
            </div>


		<div>
		<h1 style="margin-left:20%;color:#1e406d;"><b>Welcome to Interceptor Management</b></h1><br><br>
		</div>
<div style="display:flex;">	
		<div id="sidebar" class="well" style="float:left;margin-left:21%;width:300px;">
	
		
		<h2 style="background:none;color:#1e406d;"> Admin Manager</h2>	
				<form name="login" action="dologin.php" class="sidebar" method="post" >
					<ul class="subnav">
						<li><select name="menu" tabindex=3 class="generic" onChange="top.location.href=this.options[this.selectedIndex].value;" value="GO">
						        <option selected="selected" value="login.php">Radius Server</option>
						        <option value="http://127.0.0.1/CyberInterceptorAdmin/index.php?cmd=login_form">LDAP/AD</option>
   						     </select></li>
						<li><a href="#" >Username</a> </li>
						<input name="operator_user" value="administrator" type="text" tabindex=1 style="margin-left:10px;"/>
						<li><a href="#" >Password</a> </li>
						<input name="operator_pass" value="" type="password" tabindex=2 style="margin-left:10px;"/>
						<br/>
						<li><a href="#" >Location</a> </li>
						<select name="location" tabindex=3 class="generic" >
							<option value="default">Default</option>
							<?php
								if (isset($configValues['CONFIG_LOCATIONS']) && is_array($configValues['CONFIG_LOCATIONS'])) {
							        	foreach ($configValues['CONFIG_LOCATIONS'] as $locations=>$val)
							                	echo "<option value='$locations'>$locations</option>";
								}
							?>
						</select>
						<br/><br/>
						<input class="sidebutton" type="submit" value="Login" tabindex=3 style="margin-left:10px;background: #4091af;color: #fff;"/>
					</ul>
				</form>
						
		</div>
		<div style="float:right; margin-left:15%;" >
		<div class="well text-center">
		<h2 style="background:none;font: 160% Arial;color:#1e406d;margin: 10px 0 10px 0;"> Successful Corporate Security</h2>	
                  <ul class="nav nav-tabs" style="display:;list-style: none;border:none">

                	<li class=""><button type="button" data-toggle="modal" data-target="#myModal1" class="btn btn-default" ><img src="compliance.png" width="300px"><br>
		</button></li></ul>
		</div>	
		</div>	
		</div>
		<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog" style="margin:172px auto;">

    <!-- Modal content-->
    <div class="modal-content"style="background-color:#f4f6f5;">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body text-center">
 <div class="row">
<div class="col-sm-6"> <a href="http://127.0.0.1/RealTimeMonitoring/"><h3>RealTimeMonitoring</h3><br><img src="monitoring1.jpg" class="img-thumbnail" alt="Monitoring Tool" width="auto" height="236"></a> </div>
  <div class="col-sm-6"><a href="http://127.0.0.1:5601/app/kibana/"><h3>ThreatAnalytics</h3><br> <img src="compliance.png" class="img-thumbnail" alt="Security Compliance Tool" width="auto" height="236"></a> </div>
</div>       
</div>
    </div>

  </div>
</div>
		<div id="contentnorightbar" style="background:#f4f6f5;color:red;">
	
			<h2 id="Intro"><a href="#" onclick="javascript:toggleShowDiv('helpPage')"></a></h2>
                                <div id="helpPage" style="display:none;visibility:visible" >				
					<?php echo $l['helpPage']['login'] ?>
				</div>
				
<?php
	 if ($error) { 
		echo $error;
		echo $l['messages']['loginerror'];
	}
?>
				


		</div>
		
		<div id="footer" style="margin-left:20%;" >
		
	<?php
        include 'page-footer.php';
	?>

		
		</div>
		
</div>
</div>


</body>
</html>
