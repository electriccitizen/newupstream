<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_page_alter.
 */
function citizen_patterns_preprocess_page(&$variables) {
  $node = Drupal::request()->attributes->get('node');
  $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
  $variables['fname'] = $user->get('field_first_name')->value;
  if ($node) {
    if ((!$node instanceof NodeInterface) && ($node_revision = \Drupal::routeMatch()->getParameter('node_revision'))) {
      $node = \Drupal::entityTypeManager()->getStorage('node')->loadRevision($node_revision);
    }
    $variables['currentId'] = $node;
  }
}
