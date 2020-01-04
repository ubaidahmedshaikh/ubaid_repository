                <div id="header">
				<div >
			      	<div style="float:right;"><form action="">
                                <input value="Search" />
                                </form>
				</div><div style="float:left;">
                                <h1 style="padding:5px;border:none;"><a href="index.php"style="color:#1e406d;"> <img src="images/cyberforza_logo.png" width="162px" border=0 style="padding-right:5px;"/><b>Cyber Interceptor Management</b></a></h1>
				</div>
				</div>
                                <h2>
                                
                                <? echo $l['all']['copyright1']; ?>
                                
				                                </h2>

                                <ul id="nav">
				<a name='top'></a>

				<li><a href="index.php" <?php echo ($m_active == "Home") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Home']; ?></a></li>
				<li><a href="pref-main.php" <?php echo ($m_active == "Preferences") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Preferences']; ?></li>
				<li><a href="acct-main.php" <?php echo ($m_active == "Apps") ? "class=\"active\"" : "" ?>><?php echo $l['menu']['Accounting']; ?></a></li>
				<li><a href="graph-main.php" <?php echo ($m_active == "Graphs") ? "class=\"active\"" : ""?>><?php echo $l['menu']['Graphs']; ?></li>

                                </ul>

