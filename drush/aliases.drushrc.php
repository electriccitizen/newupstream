<?php

$aliases['newupstream.local'] = array(
  'uri' => 'newupstream.local',
  'root' => '/var/www/drupalvm/web',
  'remote-host' => 'newupstream.local',
  'remote-user' => 'vagrant',
  'ssh-options' => '-o "SendEnv PHP_IDE_CONFIG PHP_OPTIONS XDEBUG_CONFIG" -o PasswordAuthentication=no -i "' . (getenv('VAGRANT_HOME') ?: drush_server_home() . '/.vagrant.d') . '/insecure_private_key"',
  'path-aliases' => array(
    '%drush-script' => '/var/www/drupalvm/vendor/drush/drush/drush',
  ),
);

