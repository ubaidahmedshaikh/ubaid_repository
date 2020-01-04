<?php
/**
 * Show a simple welcome page.
 *
 * @package phpLDAPadmin
 * @subpackage Page
 */

/**
 */

require './common.php';

echo '<div style="text-align: center;">';
echo '<br /><br />';
printf('<img src="%s/logo.png" title="%s" alt="%s" />',IMGDIR,_('phpLDAPadmin logo'),_('phpLDAPadmin logo'));
echo '<br /><br />';
echo _('Use the menu to the left to navigate');
echo '<br /><br />';

if ($_SESSION[APPCONFIG]->isCommandAvailable('cmd','oslinks')) {
	printf('<a href="%s" onclick="target=\'_blank\';">%s</a>',get_href(''),_(''));
	printf('  <a href="%s" onclick="target=\'_blank\';">%s</a>',get_href(''),_(''));
	printf('  <a href="%s" onclick="target=\'_blank\';">%s</a>',get_href(''),_(''));
	echo '<br /><br />';
}

echo '</div>';
?>
