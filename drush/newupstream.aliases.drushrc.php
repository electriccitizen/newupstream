<?php

$aliases['newupstream.dev'] = array(
    'uri' => 'dev-newupstream.pantheonsite.io',
    'db-url' => 'mysql://pantheon:9d228146cdb9421ab93d99a8d27b18d7@dbserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
    'db-allows-remote' => TRUE,
    'remote-host' => 'appserver.dev.8be50dbc-4463-43b5-bd18-d83046623820.drush.in',
    'remote-user' => 'dev.8be50dbc-4463-43b5-bd18-d83046623820',
    'ssh-options' => '-p 2222 -o "AddressFamily inet"',
    'path-aliases' => array(
        '%files' => 'files',
        '%drush-script' => 'drush',
    ),
);
