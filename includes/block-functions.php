<?php
/**
 * Block functions for handling data attributes and string conversions.
 *
 * @package Rekai
 */

namespace Rekai;

use Rekai\Scripts\RekaiMain;

/**
 * Generates data attributes for the Rekai configuration.
 *
 * @param array $attributes The attributes array to be processed.
 * @return array
 */
function generate_data_attributes( $attributes ) {
	$is_test  = RekaiMain::get_instance()->get_test_mode();
	$add_test = false;

	if ( $is_test ) {
			$project_id = get_option( 'rekai_project_id' );
			$secret_key = get_option( 'rekai_secret_key' );
			$add_test   = ! empty( $project_id ) && ! empty( $secret_key );
	}

	$data = array();
	if ( $add_test ) {
		$data['projectid'] = $project_id;
		$data['secretkey'] = $secret_key;
		$mock_data         = get_option( 'rekai_use_mock_data' );
		if ( $mock_data === '1' ) {
			$data['advanced_mockdata'] = 'true';
		}
	}

	// Add site language to only display current language.
	if ( ! empty( $attributes['currentLanguage'] ) ) {
		$data['allowedlangs'] = get_locale();
	}

	$block = array( 'className', 'currentLanguage' );

	foreach ( $attributes as $key => $value ) {
		if ( ! in_array( $key, $block, true ) ) {
			if ( is_bool( $value ) ) {
				$data[ $key ] = $value ? 'true' : 'false';
			} elseif ( ! empty( $value ) && is_array( $value ) ) {
				$data[ $key ] = implode( ',', $value );
			} elseif ( ! empty( $value ) ) {
				$data[ $key ] = $value;
			}
		}
	}

	return map_data_to_dataset( $data );
}


/**
 * Maps an array of data to HTML5 data attributes.
 *
 * @param array $data The data array to be mapped.
 * @return array The mapped dataset array with 'data-' prefixes.
 */
function map_data_to_dataset( $data ) {
	$dataset = array();
	foreach ( $data as $key => $value ) {
		$dataset[ 'data-' . $key ] = $value;
	}
	return $dataset;
}
