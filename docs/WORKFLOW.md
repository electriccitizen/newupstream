# Safe workflow for Configuration Management in Drupal 8

[back to README](../README.md)

Keep your team members and clients in a safe and happy state. If you practice the workflow outlined below, you will avoid most common problems.

## Get in sync

Following these steps will ensure that you are in one-to-one state with the development server, and that everything is working correctly prior to starting a new task.

```git status``` to make sure you have a clean master branch with no uncommitted work

```git pull origin master``` to make sure you have the latest code

```composer install``` to install any new dependencies

```fin drush sql-sync @<site>.dev @self``` to get a fresh database (optional)

```fin drush cim``` to import and verify configuration

```fin drush updb``` to verify your db is up-to-date

```fin drush entup``` to verify your entity definitions are current

```fin drush cr``` to verify a successful cache clear

**Using fin sync**

```fin sync``` is a helper that runs all of the commands above, in order, and is recommended to get into a one-to-one state with development.

*IMPORTANT: As noted above, the database sync is optional. However, it is critical that you run ```fin drush cim``` after pulling from master to import new configuration into your database and to your active configuration. If you fail to do so, any newly added configuration will be lost the next time you do a configuration export.*

## Create a feature branch and begin your task

Once you have a working local copy in a safe state:

```git checkout -b <my-new-branch>```

This will create and checkout a new feature branch where you can begin your task. 

## Safely export and deploy your work

Before deploying you need to make sure that your branch still works against the master branch, and that you capture any new configuration that has been added to the project by other team members.


```fin drush cex``` to export your active configuration into code

```git add``` to add any new configuration, theme, or custom module files

```git commit``` to get your feature branch into a safe and known state

```git pull origin master``` to merge in changes from other team members *[1]*

```composer install``` to install any new dependencies *[1]*

```fin drush updb``` to verify a working database udpate *[1]*

```fin drush entup``` to run any needed entity updates *[1]*

```fin drush cim``` to verify a working configuration import *[1]*

```fin drush cr``` to verify a successful cache clear *[1]*

```git push``` to push your branch up to Github once all of the above works

**Using fin validate**

*[1]* ```fin validate``` is a helper command that verifies your feature branch is a clean state, runs a ```git pull``` to merge from the master branch, ```composer install```, ```drush updb```, ```drush entup```,```drush cim```, and ```drush cr```. This command automatically validates your working branch against changes that have made by other team members.







