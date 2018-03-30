<?php
$aliases['newupstream.dev'] = array(
  'uri' => 'dev-newupstream.pantheonsite.io',
  'db-url' => 'mysql://pantheon:a6872daf0abe4ecbabac7d185e6d8e82@dbserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in:12588/pantheon',
  'db-allows-remote' => TRUE,
  'remote-host' => 'appserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
  'remote-user' => 'dev.8be50dbc-4463-43b5-bd18-d83046623820',
  'ssh-options' => '-p 2222 -o "AddressFamily inet"',
  'path-aliases' => array(
    '%files' => 'code/sites/default/files',
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
    '%files' => 'code/sites/default/files',
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
    '%files' => 'code/sites/default/files',
    '%drush-script' => 'drush',
  ),
);

