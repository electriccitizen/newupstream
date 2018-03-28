#!/bin/bash

# Set the default terminus environment to the currently checked out branch
#TERMINUS_ENV=$(cd $LANDO_MOUNT && git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Map the master branch to dev
#if [ "$TERMINUS_ENV" == "master" ]; then
#  TERMINUS_ENV="dev"
#fi

#Set terminus environment to DEV by default
TERMINUS_ENV="dev"

# Get the git branch
GIT_BRANCH=master

 chmod u+w /etc/ssh/known_hosts

  # Make sure we are in the git root
  cd $LANDO_MOUNT

 # Checkout and pull
  echo "Pulling code from Github..."
  git checkout master
  git pull -Xtheirs --no-edit origin master

  # Composer install
  echo "Running composer install"
  composer install



# Set option defaults
DATABASE=${TERMINUS_ENV:-dev}
#CODE=${TERMINUS_ENV:-dev}
#FILES=${TERMINUS_ENV:-dev
#RSYNC=false

# Set helpers
SSH_KEY="/lando/keys/pantheon.lando.id_rsa"
FRAMEWORK=${FRAMEWORK:-drupal}
SITE=${PANTHEON_SITE_NAME:-${TERMINUS_SITE:-whoops}}
ENV=${TERMINUS_ENV:-dev}
FILE_DUMP="/tmp/files.tar.gz"
PV=""
PULL_DB=""
PULL_FILES=""
GREEN='\033[0;32m'
DEFAULT_COLOR='\033[0;0m'

# PARSE THE ARGZZ
while (( "$#" )); do
  case "$1" in
    -d|--db|--db=*)
      if [ "${1##--db=}" != "$1" ]; then
        DATABASE="${1##--db=}"
        shift
      else
        DATABASE=$2
        shift 2
      fi
      ;;

    --rsync)
        RSYNC=$1
        shift
      ;;
    --)
      shift
      break
      ;;
    -*|--*=)
      echo "Error: Unsupported flag $1" >&2
      exit 1
      ;;
    *)
      shift
      ;;
  esac
done

# Do some basic validation to make sure we are logged in
echo "Verifying that you are logged in and authenticated by getting info about $SITE..."
terminus site:info $SITE || exit 1
echo "Logged in as `terminus auth:whoami`"
echo "Detected that $SITE is a $FRAMEWORK site"

# Ensuring a viable ssh key
#echo "Checking for $SSH_KEY"
#if [ ! -f "$SSH_KEY" ]; then
#  ssh-keygen -t rsa -N "" -C "lando" -f "$SSH_KEY"
#  terminus ssh-key:add "$SSH_KEY.pub"
#  /scripts/load-keys.sh
#fi


  # Make sure we are in the git root
  cd $LANDO_MOUNT

 # Checkout and pull
  echo "Pulling code..."
  #git checkout master
  #git pull -Xtheirs --no-edit origin master

  # Composer install
  echo "Running composer install"
  #composer install

  # Clear drush cache
  drush cc drush

    # Make sure we are in the web root
    cd $LANDO_MOUNT/web

# Get the database
if [ "$DATABASE" != "none" ]; then

  # Destroy existing tables
  # NOTE: We do this so the source DB **EXACTLY MATCHES** the target DB
  TABLES=$(mysql --user=pantheon --password=pantheon --database=pantheon --host=database --port=3306 -e 'SHOW TABLES' | awk '{ print $1}' | grep -v '^Tables' )
  echo "Destroying all current tables in database... "
  for t in $TABLES; do
    echo "Dropping $t table from lando database..."
    mysql --user=pantheon --password=pantheon --database=pantheon --host=database --port=3306 -e "DROP TABLE $t"
  done

  # Holla at @uberhacker for this fu
  # Start with this by default
  PULL_DB="$(echo $(terminus connection:info $SITE.$DATABASE --field=mysql_command) | sed 's,^mysql,mysqldump --no-autocommit --single-transaction --opt -Q,')"

  # Switch to drushy pull if we can
  if [ "$FRAMEWORK" != "wordpress" ]; then

    # Get drush aliases
    echo "Downloading drush aliases..."
    terminus aliases

    # Use drush if we can (this is always faster for some reason)
    if drush sa | grep @pantheon.$SITE.$DATABASE 2>&1; then

      # If we aint pulling the live DB then lets clear caches to minimize the DL time
      if [ "$DATABASE" != "live" ]; then
        echo "Clearing remote cache to shrink db size"
        if [ "$FRAMEWORK" == "drupal8" ]; then
          drush @pantheon.$SITE.$DATABASE cr all --strict=0
        else
          drush @pantheon.$SITE.$DATABASE cc all --strict=0
        fi
      fi

      # Build the DB command
      PULL_DB="drush @pantheon.$SITE.$DATABASE sql-dump"

    fi

  fi

  # Wake up the database so we can actually connect
  terminus env:wake $SITE.$DATABASE

  # Build out the rest of the command
  if command -v pv >/dev/null 2>&1; then
    PULL_DB="$PULL_DB | pv"
  fi
  PULL_DB="$PULL_DB | mysql --user=pantheon --password=pantheon --database=pantheon --host=database --port=3306"

  # Importing database
  echo "Pulling database..."
  eval "$PULL_DB"

fi

# Make sure we are in the git root
cd $LANDO_MOUNT/web

echo DATABASE: $DATABASE;

echo "Export config..."
drush cex sync

echo "Running database updates..."
drush updb -y

echo "Running entity updates..."
drush entup -y

echo "Clearing caches"
drush cr all

# Finish up!
echo ""
printf "${GREEN}Sync complete!${DEFAULT_COLOR}"
echo ""

repos()
{
  return "['dev','test','live','none']";
}







