#!/usr/bin/env bash

## Import a database from a Pantheon environment.
##
## Usage: this function is included in various custom fin commands via:
## source "${PROJECT_ROOT}/.docksal/commands/common/dbsync.sh"

# Console colors
red='\033[0;31m'
green='\033[0;32m'
green_bg='\033[42m'
yellow='\033[1;33m'
NC='\033[0m'


sync_config ()
{

cd $PROJECT_ROOT

# Check for a clean repository
if ! [ -z "$(git status --untracked-files=no --porcelain)" ]; then
  # Uncommitted changes in tracked files
  echo -e  "You have uncommitted changes in your branch. Commit or stash your changes prior to continuing. The results of git status are output below:"
  git status

  exit 1
fi

# Pull from Github
echo -e  "${green_bg} Step 3 ${NC}${green} Pulling $GIT_BRANCH branch from Github...${NC}"
git pull origin $GIT_BRANCH

# Run composer install
echo -e "${green_bg} Step 3 ${NC}${green} Running composer install...${NC}"
composer install

# No idea why this is needed but i abide
if is_windows; then
	echo-green "Add ${VIRTUAL_HOST} to your hosts file (/etc/hosts), e.g.:"
	echo-green "192.168.64.100 ${VIRTUAL_HOST}"
	echo
fi

# Configure things for local development environment.
echo -e "${green_bg} Step 4 ${NC}${green} Importing config...${NC}"
fin drush cim -y

echo -e "${green_bg} Step 5 ${NC}${green} Running db updates...${NC}"
fin drush updb -y

echo -e "${green_bg} Step 6 ${NC}${green} Running entity updtes...${NC}"
fin drush entup -y

echo -e "${green_bg} Step 7 ${NC}${green} Clearing caches...${NC}"
fin drush cr all

echo -en "${green_bg} DONE! ${NC} "
echo -e "Open ${yellow}http://${VIRTUAL_HOST}${NC} in your browser to verify the setup."

}
