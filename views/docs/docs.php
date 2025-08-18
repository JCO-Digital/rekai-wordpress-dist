<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing ?>
<p>
	<?php
		$link = esc_attr__('https://docs.rek.ai/integration-modules/wordpress','rekai');
		$text = esc_html__('Documentation for the plugin','rekai');
		echo sprintf('<a href="%s" target="_blank">%s</a>.', $link, $text);
	?>
</p>
<p>
	<?php
		$link = esc_attr('admin.php?page=rekai-shortcodes');
		$text = esc_html__('Shortcode Generator','rekai');
		echo sprintf('<a href="%s" target="_blank">%s</a>.', $link, $text);
	?>
</p>
