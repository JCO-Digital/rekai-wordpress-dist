<?php
// This file is generated. Do not modify it manually.
return array(
	'qna' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'rekai/qna',
		'version' => '0.1.0',
		'title' => 'Rek.ai Questions and Answers',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Rek.ai Questions and answers block',
		'example' => array(
			
		),
		'attributes' => array(
			'nrofhits' => array(
				'type' => 'number',
				'default' => 5
			),
			'headerText' => array(
				'type' => 'string',
				'default' => ''
			),
			'pathOption' => array(
				'type' => 'string',
				'default' => 'all',
				'enum' => array(
					'all',
					'rootPath',
					'maxDepth',
					'rootPathLevel'
				)
			),
			'depth' => array(
				'type' => 'number',
				'default' => 1
			),
			'limit' => array(
				'type' => 'string',
				'default' => 'none',
				'enum' => array(
					'none',
					'subPages',
					'minDepth'
				)
			),
			'limitDepth' => array(
				'type' => 'number',
				'default' => 1
			),
			'useCurrentLanguage' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tags' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'extraAttributes' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'rekai-wordpress',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
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
			'headerText' => array(
				'type' => 'string',
				'default' => ''
			),
			'showHeader' => array(
				'type' => 'boolean',
				'default' => false
			),
			'pathOption' => array(
				'type' => 'string',
				'default' => 'all',
				'enum' => array(
					'all',
					'rootPath',
					'maxDepth',
					'rootPathLevel'
				)
			),
			'depth' => array(
				'type' => 'number',
				'default' => 1
			),
			'limit' => array(
				'type' => 'string',
				'default' => 'none',
				'enum' => array(
					'none',
					'subPages',
					'minDepth'
				)
			),
			'limitDepth' => array(
				'type' => 'number',
				'default' => 1
			),
			'renderstyle' => array(
				'type' => 'string',
				'default' => 'list',
				'enum' => array(
					'list',
					'pills',
					'advanced'
				)
			),
			'listcols' => array(
				'type' => 'string',
				'default' => '1'
			),
			'cols' => array(
				'type' => 'string',
				'default' => '2'
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'fallbackimgsrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'showIngress' => array(
				'type' => 'boolean',
				'default' => true
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
			),
			'extraAttributes' => array(
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
