
<link rel="shortcut icon" type="image/png" href="images/favicon.ico" />
<script> document.addEventListener('contextmenu', event => event.preventDefault());
</script>
<?php
    include ("library/checklogin.php");
    $operator = $_SESSION['operator_user'];

    include ("menu-home.php");

	include_once('library/config_read.php');
    $log = "visited page: ";
    include('include/config/logging.php');

?>
		
		<div id="contentnorightbar">
<h2 id="Intro"><a href="#"></a></h2>

		
		</div>
		
				<p>

<?php
	include 'library/exten-welcome_page.php';
?>
				</p>
		
 
	<div id="footer">

		
					
 


		
		</div>
		




</body>
</html>
