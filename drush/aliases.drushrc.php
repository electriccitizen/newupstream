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
    'db-url' => 'mysql://pantheon:880a9ab927944e21b023a428f715d98d@dbserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in:10796/pantheon',
    'db-allows-remote' => TRUE,
    'remote-host' => 'appserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
    'remote-user' => 'dev.8be50dbc-4463-43b5-bd18-d83046623820',
    'ssh-options' => '-p 2222 -o "AddressFamily inet"',
    'path-aliases' => array(
      '%files' => 'files',
      '%drush-script' => 'drush',
     ),
  );
