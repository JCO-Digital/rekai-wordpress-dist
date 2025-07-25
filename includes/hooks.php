<?php
/**
 * Hooks for the plugin.
 *
 * @package Rekai
 */

namespace Rekai;

use Rekai\Options\OptionsPage;
use Rekai\Options\ShortcodeGenerator;
use Rekai\Scripts\RekaiAutocomplete;
use Rekai\Scripts\RekaiMain;

// Initializes all classes.
add_action(
	'plugins_loaded',
	static function () {
		OptionsPage::get_instance();
		ShortcodeGenerator::get_instance();
		RekaiMain::get_instance();
		RekaiAutocomplete::get_instance();
	}
);

add_action(
	'init',
	'Rekai\register_plugin_assets'
);


add_action(
	'admin_notices',
	'Rekai\handle_notices'
);

// Add filter to add settings link to plugin page.
add_filter(
	'plugin_action_links_rekai/rekai.php',
	array(
		OptionsPage::get_instance(),
		'settings_link',
	)
);

// Legacy filter for versions using the old slug.
add_filter(
	'plugin_action_links_rekai_wordpress/rekai.php',
	array(
		OptionsPage::get_instance(),
		'settings_link',
	)
);
