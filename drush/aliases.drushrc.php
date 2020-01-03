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

$aliases['newupstream.dev'] = array(
  'uri' => 'dev-newupstream.pantheonsite.io',
  'db-url' => 'mysql://pantheon:597c2a5b8e2f4c88bd37b97666239de9@dbserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in:25960/pantheon',
  'db-allows-remote' => TRUE,
  'remote-host' => 'appserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
  'remote-user' => 'dev.8be50dbc-4463-43b5-bd18-d83046623820',
  'ssh-options' => '-p 2222 -o "AddressFamily inet"',
  'path-aliases' => array(
    '%files' => 'files',
    '%drush-script' => 'drush',
   ),
);
$aliases['newupstream.test'] = array(
  'uri' => 'test-newupstream.pantheonsite.io',
  'db-url' => 'mysql://pantheon:a5fef3ca0d7b47c2a5a545b6cdc0b9c6@dbserver.test.8be50dbc-4463-43b5-bd18-d83046623820.drush.in:11662/pantheon',
  'db-allows-remote' => TRUE,
  'remote-host' => 'appserver.test.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
  'remote-user' => 'test.8be50dbc-4463-43b5-bd18-d83046623820',
  'ssh-options' => '-p 2222 -o "AddressFamily inet"',
  'path-aliases' => array(
    '%files' => 'files',
    '%drush-script' => 'drush',
   ),
);
$aliases['newupstream.live'] = array(
  'uri' => 'live-newupstream.pantheonsite.io',
  'db-url' => 'mysql://pantheon:0f2843f0bda644309cae5dc5b0f0cdf2@dbserver.live.8be50dbc-4463-43b5-bd18-d83046623820.drush.in:12408/pantheon',
  'db-allows-remote' => TRUE,
  'remote-host' => 'appserver.live.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
  'remote-user' => 'live.8be50dbc-4463-43b5-bd18-d83046623820',
  'ssh-options' => '-p 2222 -o "AddressFamily inet"',
  'path-aliases' => array(
    '%files' => 'files',
    '%drush-script' => 'drush',
   ),
);