<?php
/**
 * Registers the assets for the plugin.
 *
 * @package Rekai
 */

namespace Rekai;

/**
 * Handles registering the plugin styles and scripts.
 * These can be enqueued by the plugin as needed.
 *
 * @return void
 */
function register_plugin_assets(): void {
		style_register(
			'rekai-frontend',
			'dist/css/index.css',
		);
		style_register(
			'rekai-admin',
			'dist/css/admin.css',
			array( 'wp-components' )
		);
		script_register(
			'rekai-backend',
			'dist/js/admin.js'
		);
}
