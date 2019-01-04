<?php

/**
 * @file
 * Preprocess function for this hook.
 */

 /**
  * Implements hook.
  */
function oc_patterns_preprocess_html(&$variables) {
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node) {
    if ((!$node instanceof NodeInterface) && ($node_revision = \Drupal::routeMatch()->getParameter('node_revision'))) {
      $node = \Drupal::entityTypeManager()->getStorage('node')->loadRevision($node_revision);
    }
    //set published or unpublished
    if($node->status[0]->value == '1'){
      $variables['attributes']['class'][] = 'published';
    } else {
      $variables['attributes']['class'][] = 'unpublished';
    }
    //find out if there is a banner cut chosen and add as class
    if ((!empty($node->field_banner[0])) || ($node->field_profile_image[0])){
      $variables['attributes']['class'][] = 'has-main-image';
    }
  }
}
