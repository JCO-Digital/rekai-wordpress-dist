<?php
// This file is generated. Do not modify it manually.
return array(
	'recommendations' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'rekai/recommendations',
		'version' => '0.1.0',
		'title' => 'Rek.ai Recommendations',
		'category' => 'widgets',
		'icon' => 'editor-ul',
		'description' => 'Recommendations block using Rek.ai.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'nrofhits' => array(
				'type' => 'string',
				'default' => '10'
			),
			'currentLanguage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'addcontent' => array(
				'type' => 'boolean',
				'default' => false
			),
			'subtree' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'rekai-wordpress',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
