<?php
include_once(dirname(__FILE__).'/includes/utils.inc.php');

$this_version = '4.2.4';
//$link_target = 'main';
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html>

<head>
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">
<title>Real Time Monitoring Core</title>
<link href="stylesheets/common.css?<?php echo $this_version; ?>" type="text/css" rel="stylesheet">
</head>


<body class='navbar'>

<!--<div class="navbarlogo">
	<a href="http://www.cyberforza.com/" target="_blank"><img src="images/cyberforzalogo.png" height="69" width="140" border="0" alt="Cyberforza"/></a>
</div>-->

<div class="navsection">
	<div class="navsectiontitle">General</div>
	<div class="navsectionlinks">
		<ul class="navsectionlinks">
			<li><a href="main.php" target="<?php echo $link_target;?>">Home</a></li>
		</ul>
	</div>
</div>

<div class="navsection">
	<div class="navsectiontitle">Current Status</div>
	<div class="navsectionlinks">
		<ul class="navsectionlinks">
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/tac.cgi" target="<?php echo $link_target;?>">Tactical Overview</a>target="_blank"-->


<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Tactical Overview</a>

</li>
			<li>
				<a href="map.php?host=all" target="<?php echo $link_target;?>">Map</a>
				<!--a href="<?php echo $cfg["cgi_base_url"];?>/statusmap.cgi?host=all" target="<?php echo $link_target;?>"></a-->
			</li>
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?hostgroup=all&amp;style=hostdetail" target="<?php echo $link_target;?>">Asset Monitoring</a>/CyberInterceptorManagement/error.html--></li>
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?host=all" target="<?php echo $link_target;?>">Services</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Services</a>

</li>

			<li>
				<!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?hostgroup=all&amp;style=overview" target="<?php echo $link_target;?>">Host Groups</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Host Groups</a>
				<ul>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?hostgroup=all&amp;style=summary" target="<?php echo $link_target;?>">Summary</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Summary</a>

</li>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?hostgroup=all&amp;style=grid" target="<?php echo $link_target;?>">Grid</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Grid</a>

</li>
				</ul>
			</li>
			<li>
				<!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?servicegroup=all&amp;style=overview" target="<?php echo $link_target;?>">Service Groups</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Service Groups </a>
				<ul>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?servicegroup=all&amp;style=summary" target="<?php echo $link_target;?>">Summary</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Summary</a>
</li>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?servicegroup=all&amp;style=grid" target="<?php echo $link_target;?>">Grid</a>-->

<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Grid</a>
</li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="navsectionheader">
		<ul>
			<li>Problems
				<ul>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?host=all&amp;servicestatustypes=28" target="<?php echo $link_target;?>">Services</a>--> <a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Services</a>(<!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?host=all&amp;type=detail&amp;hoststatustypes=3&amp;serviceprops=10&amp;servicestatustypes=28" target="<?php echo $link_target;?>">Unhandled</a>--><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Unhandled</a>)</li>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?hostgroup=all&amp;style=hostdetail&amp;hoststatustypes=12" target="<?php echo $link_target;?>">Hosts</a> --><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Hosts</a>(<!--<a href="<?php echo $cfg["cgi_base_url"];?>/status.cgi?hostgroup=all&amp;style=hostdetail&amp;hoststatustypes=12&amp;hostprops=42" target="<?php echo $link_target;?>">Unhandled</a>--><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Unhandled</a>)</li>
					<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/outages.cgi" target="<?php echo $link_target;?>">Network Outages</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Network Outages</a>

</li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="navbarsearch">
		<form method="get" action="<?php echo $cfg["cgi_base_url"];?>/status.cgi" target="<?php echo $link_target;?>">
			<fieldset>
				<legend>Quick Search:</legend>
				<input type='hidden' name='navbarsearch' value='1'>
				<input type='text' name='host' size='15' class="NavBarSearchItem">
			</fieldset>
		</form>
	</div>
</div>

<div class="navsection">
	<div class="navsectiontitle">Reports</div>
	<div class="navsectionlinks">
		<ul class="navsectionlinks">
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/avail.cgi" target="<?php echo $link_target;?>">Availability</a>-->

<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Availability</a>
</li>
			<li>
				<a href="trends.html" target="<?php echo $link_target;?>">Trends</a>
				<a href="<?php echo $cfg["cgi_base_url"];?>/trends.cgi" target="<?php echo $link_target;?>"></a>
			</li>
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/history.cgi?host=all" target="<?php echo $link_target;?>">Alerts</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Alerts</a>
			<ul>
				<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/history.cgi?host=all" target="<?php echo $link_target;?>">History</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">History</a>
</li>
				<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/summary.cgi" target="<?php echo $link_target;?>">Summary</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Summary</a>				
</li>
				<li>
					<a href="histogram.html" target="<?php echo $link_target;?>">Histogram</a>
					<a href="<?php echo $cfg["cgi_base_url"];?>/histogram.cgi" target="<?php echo $link_target;?>"></a>
				</li>
			</ul>
			</li>
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/notifications.cgi?contact=all" target="<?php echo $link_target;?>">Notifications</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Notifications</a>
</li>
			<li><!--<a href="<?php echo $cfg["cgi_base_url"];?>/showlog.cgi" target="<?php echo $link_target;?>">Event Log</a>-->
<a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Event Log</a>
</li>
		</ul>
	</div>
</div>

<div class="navsection">
	<div class="navsectiontitle">System</div>
	<div class="navsectionlinks">
		<ul class="navsectionlinks">
			<!--<li><a href="<?php echo $cfg["cgi_base_url"];?>/extinfo.cgi?type=3" target="<?php echo $link_target;?>">Comments</a></li>
			<li><a href="<?php echo $cfg["cgi_base_url"];?>/extinfo.cgi?type=6" target="<?php echo $link_target;?>">Downtime</a></li>
			<li><a href="<?php echo $cfg["cgi_base_url"];?>/extinfo.cgi?type=0" target="<?php echo $link_target;?>">Process Info</a></li>
			<li><a href="<?php echo $cfg["cgi_base_url"];?>/extinfo.cgi?type=4" target="<?php echo $link_target;?>">Performance Info</a></li>
			<li><a href="<?php echo $cfg["cgi_base_url"];?>/extinfo.cgi?type=7" target="<?php echo $link_target;?>">Scheduling Queue</a></li>
			<li><a href="<?php echo $cfg["cgi_base_url"];?>/config.cgi" target="<?php echo $link_target;?>">Configuration</a></li>-->





<li><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Comments</a></li>
			<li><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Downtime</a></li>
			<li><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Process Info</a></li>
			<li><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Performance Info</a></li>
			<li><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Scheduling Queue</a></li>
			<li><a href="/CyberInterceptorManagement/hide.html" target="_blank" rel="noopener noreferrer">Configuration</a></li>



		</ul>
	</div>
</div>



<!--div class="navsection">
    <div class="navsectiontitle">Extra Tools</div>
        <div class="navsectionlinks">
            <ul class="navsectionlinks">
                <li><a href="/RealTimeMonitoring/stats" target="<?php echo
$link_target;?>">MRTG stats</a></li>
            </ul>
        </div>
    </div>
</div-->




<div class="navsection">
    <div class="navsectiontitle">Logout</div>
        <div class="navsectionlinks">
            <ul class="navsectionlinks">
                <li> <a href="logout.php"  target="<?php echo
$link_target;?>">Logout RTM session</a></li>
            </ul>
        </div>
    </div>
</div>








</body>
</html>
