                <div id="header">
	<!-- <h1><a href="index.php"> <img src="images/daloradius_small.png" border=0/ style="width:250px;"></a></h1>
			<h2>
			
			<? echo $l['all']['copyright1']; ?>
			
</h2> -->
			<ul id="nav" style="background:#1e406d;">
			<a name='top'></a> <li class="dropdown" style="height:55px;width:139px;margin:-3px -4px;"><a href="index.php"> <img 
src="images/default-logo.png" border=0/ style="width:118px;margin:0px;"></a></li> <a></a> 
<li class="dropdown" style="margin:0px 70px; font-size:12px;"> <button 
class="dropbtn" style="font-size:15px;font-weight:bold;">Management <i class="fa fa-caret-down"></i> </button> <ul class="dropdown-content" style="min-width: 162px;">
 <!--a href="mng-main.php">Management</a--> <a target="frame1" href="mng-users.php">Users</a>

<a target="frame1" href="mng-rad-usergroup.php">User-Groups</a>
   <a target="frame1" href="mng-rad-profiles.php">Profiles</a>
 <a target="frame1" href="mng-rad-attributes.php">Attributes</a>
 <a target="frame1" href="mng-rad-realms.php">Proxys </a>
 <a target="frame1" href="iamlsc.html">DB Synchronization </a>

 <a target="frame1" href="rep-main.php">Reports</a>
   <a target="frame1" href="rep-logs.php">Logs</a>
   <a  target="frame1" href="rep-status.php">Status</a>
 <a  target="frame1" href="config-main.php">Configuration</a>
   <a  target="frame1" href="config-reports.php">DB Settings</a>
             <a target="frame1" href="config-maint.php">Maintenance</a>
          <a target="frame1" href="config-operators.php">Administrators</a>
          <a target="frame1" href="config-backup.php">DB Backup</a>
		  <!-- <a target="frame1" href="https://192.168.50.117:10800/index.html"> Interceptor License</a> -->

     </ul> </li>
 <li class="dropdown" style="margin:0px -80px;font-size:12px;"> <button class="dropbtn" style="font-size:15px;font-weight:bold;">Choose<br>Database <i class="fa fa-caret-down"></i> </button> 
<ul class="dropdown-content" style="min-width:115px;">
  <a target="blank" href="http://192.168.50.117/CyberInterceptorDB/index.php">Radius Database</a>
  <a target="blank" href="http://192.168.50.117/CyberInterceptorAdmin/index.php?cmd=login_form">LDAP Database</a>
<!--<a target="frame1" href="addDatabase.html">Add Database</a>-->

     </ul> </li>
 <li class="dropdown" style="margin:0px 30px;font-size:12px;""> <button class="dropbtn"  style="font-size:15px;">Real-Time<br>Monitoring <i class="fa fa-caret-down"></i> </button> <ul 
class="dropdown-content" style="min-width: 168px;">
<a target="frame1" href="http://192.168.50.117/RealTimeMonitoring/"> Launch Real-Time Monitoring</a>
 <a target="frame1" href="addlinux.html">Add Linux/BSD Server</a>
 <a target="frame1" href="addwindows.html">Add Windows Server</a>
  <a target="frame1" href="device.html">Add Device</a>
           
             <a target="frame1" href="contact.html">Add Contact</a>
          <a target="frame1" href="delete.html">Remove Device</a>


       </ul> </li> 

<li class="dropdown" style="margin:0px -40px;font-size:12px;"> <button class="dropbtn"  style="font-size:15px;font-weight:bold;"> Threat<br>Analytics <i class="fa fa-caret-down"></i> </button> <ul class="dropdown-content" style="min-width: 202px;"> 
<a target="frame1" href="http://192.168.50.117:5601/app/kibana#/discover?_g=()"> Launch Threat Analytics</a>
<a target="frame1" href="vunerabilityAssessment.html">Vulnerability Assessment</a>
 <a  target="frame1" href="http://192.168.50.117:5601/app/wazuh#/agents-preview//?_g=()">List Agents</a>
 <a  target="frame1" href="tacontact.html">Add Contact</a>


             <a target="frame1" href="taalert.html">Change Alert Level</a>
          <a target="frame1" href="generatekeys.html">Generate Keys</a>

 </ul> </li>
<li class="dropdown" style="margin:0px 40px;font-size:12px;"> <button class="dropbtn"  style="font-size:15px;font-weight:bold;"> Breach<br>Detection <i class="fa fa-caret-down"></i> </button> <ul class="dropdown-content" style="min-width: 202px;">
<a target="frame1" href="http://192.168.50.117:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fy,mode:quick,to:now%2Fy))&_a=(columns:!(_source),index:'interceptor-alerts-*',interval:auto,query:(query_string:(analyze_wildcard:!t,query:USB)),sort:!('@timestamp',desc))">Data Loss Protection</a>
 <a  target="frame1" href="http://192.168.50.117:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-6M,mode:quick,to:now))&_a=(columns:!(_source),index:'interceptor-alerts-*',interval:auto,query:(query_string:(analyze_wildcard:!t,query:malware)),sort:!('@timestamp',desc))">Malware Protection</a>
 

 </ul> </li>

 
<li class="dropdown" style="margin:0px -40px;font-size:12px;"> <button class="dropbtn"  style="font-size:15px;font-weight:bold;">Regulatory<br>Compliance <i class="fa fa-caret-down"></i> </button> 
<ul class="dropdown-content" style="min-width: 143px;">
  <!--a href="gis-main.php">GIS</a-->
 <a  target="frame1" href="http://192.168.50.117:5601/app/wazuh#/overview/?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-1y,mode:quick,to:now))&tabView=panels&tab=pci&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:manager.name,negate:!f,params:(query:saiuser-VirtualBox,type:phrase),removable:!f,type:phrase,value:saiuser-VirtualBox),query:(match:(manager.name:(query:saiuser-VirtualBox,type:phrase)))),('$state':(store:appState),exists:(field:rule.pci_dss),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:rule.pci_dss,negate:!f,removable:!f,type:exists,value:exists))),index:'interceptor-alerts-*',interval:M,query:(language:lucene,query:''),sort:!('@timestamp',desc))">PCI-DSS</a>

             <a target="frame1" href="hipaa.html">HIPAA</a>
          <a target="frame1" href="fisma.html">FISMA</a>
          <a target="frame1" href="sox.html">SOX</a>
		  <a target="frame1" href="http://192.168.50.117:5601/app/wazuh#/overview/?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-1y,mode:quick,to:now))&tab=gdpr&tabView=panels&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:manager.name,negate:!f,params:(query:saiuser-VirtualBox,type:phrase),removable:!f,type:phrase,value:saiuser-VirtualBox),query:(match:(manager.name:(query:saiuser-VirtualBox,type:phrase)))),('$state':(store:appState),exists:(field:rule.gdpr),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:rule.gdpr,negate:!f,removable:!f,type:exists,value:exists))),index:'interceptor-alerts-*',interval:M,query:(language:lucene,query:''),sort:!('@timestamp',desc))">GDPR</a>

             

 </ul> </li>
 <li class="dropdown" style="margin:13px 30px;"><a target="frame1" href="help-main.php" style="font-weight:bold;" <?php echo ($m_active == "Help") ? 
"class=\"active\"" : ""?>><?php echo $l['menu']['Help']; ?></a></li>

                                </ul>
