<?php/** * Created by PhpStorm. * User: Admin * Date: 03.04.2017 * Time: 15:31 */if ( ! defined( 'POST_VIEWS_PATH' ) ) {	die();}$context = Timber::get_context();	switch_to_blog($the_post['blog_id']);  $context['result_site_name'] = get_bloginfo('name');  $context['news_link'] = $the_post['guid'];	$context['news'] = Timber::get_post($the_post['ID']);	$templates = array( 'partials/news-list.twig' );	restore_current_blog();Timber::render($templates, $context);// include POST_VIEWS_PATH . '/header.php';// if ( ! $shortcode_mgr->get_boolean( 'titles_only' ) ) {// 	if ( $thumbnail ) {// 		include POST_VIEWS_PATH . '/thumbnail.php';// 		$the_post['post_content'] = preg_replace( "/<img[^>]+\>/i", "", $the_post['post_content'] );// 	}// 	include POST_VIEWS_PATH . '/content.php';// 	if ( isset( $the_post['price'] ) ) {// 		include POST_VIEWS_PATH . '/commerce.php';// 	}// }