#!/usr/bin/env bash

## Import a database from a Pantheon environment.
##
## Usage: this function is included in various custom fin commands via:
## source "${PROJECT_ROOT}/.docksal/commands/common/dbsync.sh"

sync_db ()
{
  echo "syncing db"
  fin drush sql-sync $REMOTE_ALIAS @self -y
}
