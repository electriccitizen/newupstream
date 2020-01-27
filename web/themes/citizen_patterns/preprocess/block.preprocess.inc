<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_block to find node info.
 */
function citizen_patterns_preprocess_block(&$variables) {
  //find the title of the node the block is on for custom breadcrumbs
  if (isset($variables['content']['#block_content'])) {
	  if ($variables['content']['#block_content']->bundle() == 'custom_breadcrumbs') { 
		  $node = \Drupal::routeMatch()->getParameter('node');
		  if ((!$node instanceof NodeInterface) && ($node_revision = \Drupal::routeMatch()->getParameter('node_revision'))) {
		    $node = \Drupal::entityTypeManager()->getStorage('node')->loadRevision($node_revision);
		  }
		  if ($node){
		    $variables['nodeTitle'] = $node->getTitle();
		  }
		}
	}
}