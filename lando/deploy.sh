#!/bin/bash

# colors
GREEN='\033[0;32m'
DEFAULT_COLOR='\033[0;0m'

# PARSE THE ARGZZ
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

# Make sure we are in the project root
cd $LANDO_MOUNT/web

#export config
echo "Exporting config..."
drush cex sync -y

# Make sure any new config is added to git
echo "Adding new config to git..."
git add ../config/*

# Detect name of the feature branch
BRANCH_NAME="$(git symbolic-ref HEAD 2>/dev/null)" ||
BRANCH_NAME="(unnamed branch)"     # detached HEAD
BRANCH_NAME=${BRANCH_NAME##refs/heads/}


# Attempt to pull and merge master branch
echo "Checking out and merging master into $BRANCH_NAME ..."


git checkout master
git pull origin master
git checkout ${BRANCH_NAME##refs/heads/}
git merge master

# Attempt cim
echo "Importing config..."
drush cim -y

# Updatedb
echo "Updating db..."
drush updb -y

# Clear cache
echo "Clearing cache..."
drush cr

while true; do
    #read -p "Proceed with deploy (y/n)?" yn
    read -p "$(echo -e $GREEN"Proceed with the deploy [y/n]? "$DEFAULT)" yn
    case $yn in
        [Yy]* ) git commit -am "$MSG"; git push origin $FEATURE_BRANCH break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done







