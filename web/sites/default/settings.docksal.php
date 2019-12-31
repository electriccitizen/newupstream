<?php
# Docksal DB connection settings.
$databases['default']['default'] = array (
  'database' => 'default',
  'username' => 'user',
  'password' => 'user',
  'host' => 'db',
  'driver' => 'mysql',
);
$settings['hash_salt'] = 'wahoo';


$config['stage_file_proxy.settings']['origin'] = 'http://dev-newupstream.pantheonsite.io'; // no trailing slash