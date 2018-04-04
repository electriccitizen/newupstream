#!/bin/bash

# SET COMMIT MSG
while (( "$#" )); do
  case "$1" in
    -d|--db|--db=*)
      if [ "${1##--db=}" != "$1" ]; then
        MSG="${1##--db=}"
        shift
      else
        MSG=$2
        shift 2
      fi
      ;;
  esac
done

# SET DEVELOPMENT BRANCH (GITHUB)
MASTER_BRANCH=master

# DETECT ACTIVE FEATURE BRANCH (IF ANY)
FEATURE_BRANCH="$(git symbolic-ref HEAD 2>/dev/null)" ||
FEATURE_BRANCH="(unnamed branch)"     # detached HEAD
FEATURE_BRANCH=${FEATURE_BRANCH##refs/heads/}

# SET COLORS
GREEN='\033[0;32m'
DEFAULT_COLOR='\033[0;0m'

# Make sure we are in the project root
cd $LANDO_MOUNT/web

# Export config for deploy
echo "Exporting config..."
drush cex sync -y

# Add any new config files to git
echo "Adding new config to git..."
git add ../config/*

# Attempt to pull and merge master branch
echo "Checking out $MASTER_BRANCH..."
git checkout master
git pull origin master

echo "Merging $MASTER_BRANCH into $FEATURE_BRANCH..."
git checkout ${FEATURE_BRANCH##refs/heads/}
git merge master

# Attempt cim
echo "Importing config..."
drush cim -y

# Updatedb
echo "Updating database..."
drush updb -y

# Clear cache
echo "Clearing cache..."
drush cr

# Deploy feature branch to Github
while true; do
    #read -p "Proceed with deploy (y/n)?" yn
    read -p $'\033[0;32mProceed with deploy [y/n]?\033[0;0m ' yn
    #read -p "$(echo -e $GREEN"Proceed with the deploy [y/n]? "$DEFAULT)" yn
    case $yn in
        [Yy]* ) git commit -am "$MSG"; git push origin $FEATURE_BRANCH; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done









