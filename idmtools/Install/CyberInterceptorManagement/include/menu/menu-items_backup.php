                <div id="header" /*style="margin:0px -20px;background:#fff;"*/>
                                <h1 style="padding: 5px 20px 5px 5px;"><a href="index.php"> <img src="images/daloradius_small.png" border=0/ style="width:240px;height:80px"></a></h1>
			
				<h2>
                                <? echo $l['all']['copyright1']; ?>
                                
				                                </h2>

                                <ul id="nav" style="background:#1e406d;">
				<a name='top'></a>

				<li><a href="index.php" <?php echo ($m_active == "Home") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Home']; ?></a></li>
				<li><a href="mng-main.php" <?php echo ($m_active == "Management") ? "class=\"active\"" : "" ?>><?php echo $l['menu']['Managment']; ?></a></li>
				<li><a href="rep-main.php" <?php echo ($m_active == "Reports") ? "class=\"active\"" : "" ?>><?php echo $l['menu']['Reports']; ?></a></li>
		
<li><a href="http://127.0.0.1:5601/app/kibana/">ThreatAnalytics</a></li>

<li><a href="http://127.0.0.1/RealTimeMonitoring/">RealTimeMonitoring</a></li>



		<li><a href="gis-main.php" <?php echo ($m_active == "Gis") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Gis']; ?></a></li>
				<li><a href="graph-main.php" <?php echo ($m_active == "Graphs") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Graphs']; ?></li>
				<li><a href="config-main.php" <?php echo ($m_active == "Config") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Config']; ?></li>
				<li><a href="help-main.php" <?php echo ($m_active == "Help") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Help']; ?></a></li> 

       <li> <form action="mng-search.php"> <input name="username" value="Search" /> </form></li>

                                </ul>

