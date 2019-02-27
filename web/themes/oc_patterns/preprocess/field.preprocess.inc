<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_field.
 */
function oc_patterns_preprocess_field(&$variables, $hook) {
  if ($variables['element']['#object']->bundle() == 'view_placer') {
        $view_name = str_replace(' ','_',strtolower($variables['element']['#object']->get('field_view_machine_name')->value));
        $display_name = str_replace(' ','_',strtolower($variables['element']['#object']->get('field_display_machine_name')->value));
        $view = views_embed_view($view_name,$display_name);
        $view_output = \Drupal::service('renderer')->render($view);
        $variables["viewfield"] = $view_output;
  }
}
