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
<link rel="stylesheet" href="../css/1.css" type="text/css" media="screen,projection" />
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
<div style="display:inline-block;margin-top:10px;"><img src="../images/cyberforza_logo.png" alt="" style="width: 100px;margin-left: 10%;max-width:200px;">
        </a>

</div>
                </ul>
            </div>


		<div>
		<h1 style="margin-left:20%;color:#1e406d;"><b>Welcome to Interceptor Management</b></h1><br><br>
		</div>
<div style="display:flex;">	
		<div id="sidebar" class="well" style="float:left;margin-left:21%;width:300px;">
	
		
		<h2 style="background:none;color:#1e406d;"> User</h2>	
				<form name="login" action="dologin.php" class="sidebar" method="post" >
					<ul class="subnav">
						<li><a href="#" >Username</a> </li>
						<input name="login_user" value="" type="text" tabindex=1 style="margin-left:10px;"/>
						<li><a href="#" >Password</a> </li>
						<input name="login_pass" value="" type="password" tabindex=2 style="margin-left:10px;"/>
						<br/>
						<br/><br/>
						<input class="sidebutton" type="submit" value="Login" tabindex=3 style="margin-left:10px;background: #4091af;color: #fff;"/>
					</ul>
				</form>
						
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
