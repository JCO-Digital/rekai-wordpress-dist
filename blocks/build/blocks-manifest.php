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
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => false
			)
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
		'usesContext' => array(
			'postType',
			'postId'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => false
			)
		),
		'attributes' => array(
			'blockType' => array(
				'type' => 'string',
				'default' => 'recommendations'
			),
			'nrOfHits' => array(
				'type' => 'number',
				'default' => 10
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
			'ingressMaxLength' => array(
				'type' => 'number',
				'default' => 100
			),
			'currentLanguage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'subtreeIds' => array(
				'type' => 'array',
				'default' => array(
					
				)
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
