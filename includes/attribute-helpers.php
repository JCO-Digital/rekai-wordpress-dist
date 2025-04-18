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
 *
 * @return array
 */
function generate_data_attributes( $attributes ) {
	$data = handle_testing_mode();
	$data = handle_path_options( $data, $attributes );

	$blocked_attributes = array(
		'align',
		'className',
		'blockType',
		'currentLanguage',
		'showHeader',
		'subtreeIds',
		'style',
		'extraAttributes',
	);

	switch ( $attributes['blockType'] ?? '' ) {
		case 'recommendations':
			$blocked_attributes[] = 'tags';
			break;
		case 'qna':
			$attributes['entitytype'] = 'rekai-qna';
			$blocked_attributes[]     = 'renderstyle';
			$blocked_attributes[]     = 'listcols';
			$blocked_attributes[]     = 'cols';
			$blocked_attributes[]     = 'showImage';
			$blocked_attributes[]     = 'showIngress';
			$blocked_attributes[]     = 'ingressMaxLength';
			break;
	}

	// Add site language to only display current language.
	if ( ! empty( $attributes['currentLanguage'] ) ) {
		$data['allowedlangs'] = get_bloginfo( 'language' );
	}
	if ( isset( $attributes['showHeader'] ) && $attributes['showHeader'] === false ) {
		$blocked_attributes[] = 'headerText';
	}

	if ( ! empty( $attributes['subtreeIds'] ) ) {
		$attributes['subtree'] = generate_subtree( $attributes['subtreeIds'] );
	}

	foreach ( $attributes as $key => $value ) {
		if ( in_array( $key, $blocked_attributes, true ) ) {
			continue;
		}
		if ( is_bool( $value ) ) {
			$data[ $key ] = $value ? 'true' : 'false';
		} elseif ( ! empty( $value ) && is_array( $value ) ) {
			$data[ $key ] = implode( ',', $value );
		} elseif ( ! empty( $value ) ) {
			$data[ $key ] = $value;
		}
	}

	return map_data_to_dataset( $data );
}

/**
 * Handles path-related options and modifies the provided data array based on the attributes.
 *
 * @param array $data The data array to be modified with path options.
 * @param array $attributes An array of attributes containing path options and limits. Passed by reference to cleanup the attributes.
 *
 * @return array The modified data array reflecting the applied path options.
 */
function handle_path_options( array $data, array &$attributes ): array {
	switch ( $attributes['pathOption'] ?? '' ) {
		case 'useRoot':
			$data['userootpath'] = 'true';
			break;
		case 'maxDepth':
			$data['maxpathdepth'] = $attributes['depth'] ?? 1;
			break;
		case 'rootPathLevel':
			$data['userootpath']   = 'true';
			$data['rootpathlevel'] = $attributes['depth'] ?? 1;
			break;
		default:
			break;
	}
	switch ( $attributes['limit'] ?? '' ) {
		case 'subPages':
			$data['excludechildnodes'] = 'true';
			break;
		case 'minDepth':
			$data['minpathdepth'] = $attributes['limitDepth'] ?? 1;
			break;
		default:
			break;
	}
	unset( $attributes['pathOption'], $attributes['limit'], $attributes['depth'], $attributes['limitDepth'] );
	return $data;
}

/**
 * Handles configuration for test mode settings.
 *
 * @param array $data Initial data array to populate with test mode settings.
 * @return array Data array with test mode settings if applicable.
 */
function handle_testing_mode( $data = array() ) {
	// Check for test mode.
	if ( ! RekaiMain::get_instance()->get_test_mode() ) {
		return $data;
	}

	$project_id = get_option( 'rekai_project_id' );
	$secret_key = get_option( 'rekai_secret_key' );

	// Check that both project id and secret key is set.
	if ( empty( $project_id ) || empty( $secret_key ) ) {
		return $data;
	}

	$data['projectid'] = $project_id;
	$data['secretkey'] = $secret_key;

	// Set mock data attribute.
	if ( get_option( 'rekai_use_mock_data' ) === '1' ) {
		$data['advanced_mockdata'] = 'true';
	}

	return $data;
}

/**
 * Generates a comma-separated string of links based on an array of IDs.
 *
 * This function takes an array of post IDs, retrieves the permalink for each ID,
 * and constructs a string of permalinks separated by commas. The URL is shortened to a relative path.
 *
 * @param array $ids An array of post IDs.
 * @return string A comma-separated string of permalinks, or an empty string if input is invalid.
 */
function generate_subtree( array $ids ): string {
	$subtree = '';
	foreach ( $ids as $id ) {
		$link = preg_replace( '|^https?://[^/]+/|', '^/', get_permalink( $id ) );
		if ( ! empty( $subtree ) ) {
			$subtree .= ',';
		}
		$subtree .= $link;
	}
	return $subtree;
}

/**
 * Handles extra attributes supplied by the user in a string format.
 *
 * This function parses a string of attributes (e.g., `data-attribute="value"`)
 * and adds them to an existing array of attributes. It ensures that all added
 * attributes have the `data-` prefix and that values are properly escaped.
 * It also has special handling for `data-subtree` attributes, concatenating
 * new values to existing ones.
 *
 * @param string $attributes_string The user-supplied attributes string.
 * @param array  &$attributes The array of attributes to add the user-supplied attributes.
 *                           This will be updated by reference.
 *
 * @return void
 */
function handle_extra_attributes(
	string $attributes_string,
	array &$attributes
): void {
	if (
		preg_match_all(
			'/([a-zA-Z0-9_-]+)="([^"]*)"/',
			$attributes_string,
			$attr_array,
			PREG_SET_ORDER
		)
	) {
		foreach ( $attr_array as $match ) {
			$attr_name     = ( strpos( $match[1], 'data-' ) === false ? 'data-' : '' ) . $match[1];
			$cleaned_value = esc_attr( str_replace( array( '"', "'" ), '', $match[2] ) );
			$old_value     = $attributes[ $attr_name ] ?? '';
			switch ( $attr_name ) {
				case 'data-subtree':
					$attributes['data-subtree'] = ( empty( $old_value ) ? '' : $old_value . ',' ) . $cleaned_value;
					break;
				default:
					$attributes[ $attr_name ] = $cleaned_value;
					break;
			}
		}
	}
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
		$dataset[ 'data-' . strtolower( $key ) ] = $value;
	}
	return $dataset;
}

/**
 * Converts an array of data attributes into an HTML attribute string.
 *
 * @param array $data The array of data attributes, where keys are attribute names and values are attribute values.
 * @return string An HTML attribute string containing the data attributes.
 */
function dataset_to_attributes( $data ) {
	$output = '';
	foreach ( $data as $key => $value ) {
		$output .= ' ' . $key . '="' . esc_attr( $value ) . '"';
	}
	return $output;
}
