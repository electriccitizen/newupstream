<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_block to find node info.
 */
function oc_patterns_preprocess_block(&$variables) {
  //find the title of the node the block is on
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node){
    $nodetitle = $node->getTitle();
    $variables['nodetitle'] = $nodetitle;
  }
}