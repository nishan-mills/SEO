<?php
/*
Template Name: Global Home page
*/

$context = Timber::get_context();
$post = Timber::get_post();

$templates = array( 'global-home-page.twig' );

$context['post'] = $post;

/* Wiring Recent News and events */
$args = array(
  'post_type' => 'news',
  'posts_per_page'=> 3,
  'order' => 'DESC'
);
$context['recent_posts'] = Timber::get_posts($args);

Timber::render( $templates, $context );