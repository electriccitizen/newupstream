<?php
/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';
/**
 * Include the Pantheon-specific settings file.
 *
 * n.b. The settings.pantheon.php file makes some changes
 *      that affect all envrionments that this site
 *      exists in.  Always include this file, even in
 *      a local development environment, to ensure that
 *      the site settings remain consistent.
 */
include __DIR__ . "/settings.pantheon.php";
/**
 * Place the config directory outside of the Drupal root.
 */
$settings['config_sync_directory'] = "../config/sync";

/**
 * Set up config splits
 */
if (isset($_ENV['PANTHEON_ENVIRONMENT'])) {
  $config['config_split.config_split.local']['status'] = FALSE;

  $settings['file_temp_path'] = '/tmp';

  switch($_ENV['PANTHEON_ENVIRONMENT']) {
    case 'live':
      // $config['config_split.config_split.live']['status'] = TRUE;
      // $config['config_split.config_split.excluded']['status'] = TRUE;
      break;
    case 'test':
      // $config['config_split.config_split.test']['status'] = TRUE;
      // $config['config_split.config_split.excluded']['status'] = TRUE;
      break;
    case 'dev':
      $config['config_split.config_split.dev']['status'] = TRUE;
      break;
    default:
      $config['config_split.config_split.local']['status'] = TRUE;
      break;
  }
} else { // LOCAL
  
  $config['config_split.config_split.local']['status'] = TRUE;
  $config['config_split.config_split.dev']['status'] = FALSE;

  $settings['trusted_host_patterns'] = array('^newupstream\.docksal');

  /**
   * If there is a drupalvm settings file, then include it
   */
  $docksal_settings = __DIR__ . "/settings.docksal.php";
  if (file_exists($docksal_settings)) {
    include $docksal_settings;
  }

  /**
   * If there is a local settings file, then include it
   */
  $local_settings = __DIR__ . "/settings.local.php";
  if (file_exists($local_settings)) {
    include $local_settings;
  }
}

// $settings['install_profile'] = 'citizen';
