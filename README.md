# Newupstream

[![CircleCI](https://circleci.com/gh/electriccitizen/newupstream.svg?style=shield)](https://circleci.com/gh/electriccitizen/newupstream)
[![Dashboard newupstream](https://img.shields.io/badge/dashboard-newupstream-yellow.svg)](https://dashboard.pantheon.io/sites/9ec12d94-c804-44b7-968e-166a0b49fdc0#dev/code)
[![Dev Site newupstream](https://img.shields.io/badge/site-newupstream-blue.svg)](http://dev-newupstream.pantheonsite.io/)

Newupstream is a Composer-based Drupal 8 application hosted on [Pantheon](http://dashboard.getpantheon.com). The application integrates with [Circle CI](https://circleci.com/dashboard) for continuous integration testing and automated deployments. Follow this README to set up a local Docksal environment for site building, development, and theming. 

## Onboarding

See the [onboarding instructions](docs/ONBOARD.md) for installing Docksal and Terminus for the first time. Please also:

* Add your public key to your Pantheon account, and be on the team
* Add your public key to your Github account, and be on the team
* Update your Pantheon aliases ```terminus aliases```

## Getting started

Clone the repository into your Docksal projects directory, and initialize the site:

```cd ~/Projects``` (assuming you chose the default Docksal project folder)

```git clone git@github.com:electriccitizen/newupstream.git```

Navigate to your project root folder and run:

```fin sync```

This will spin up and clone a local copy of the site that is ready for work:

* Local URL: http://newupstream.docksal
* Dev URL: http://dev-newupstream.pantheonsite.io
* Local drush: ```fin drush <your-command>```
* Remote drush: ```drush @newupstream.dev <your-command>```

## Be a good citizen

You are working in a team environment and must follow a few rules. If you are careless, it can lead to:

* Losing all of your uncommitted work (bad)
* Overriding or losing the work of others (worse)
* Uninstallable configuration or deploy errors

See this guide to [following a safe workflow](docs/WORKFLOW.md) when using configuration management in Drupal 8.

## Recommended workflow

Here is a safe workflow that will help prevent lost work and other problems.

```fin sync``` to ensure your local site is synced with Github master branch and Pantheon db before starting a new task

```git checkout -b <your-feature-branch>``` to checkout a new feature branch; start a new task and do your thing

```fin drush cex``` to export your changes

```git add``` and ```git commit``` to add and commit any new config, theme, module or config files in your feature branch

```fin validate``` to check your work against the master branch

```git push origin <your-feature-branch>``` to push up your feature branch if everything looks good

When you push your feature branch to Github, it triggers a Circle CI build to run tests and imports against the development server. Submit a pull request to merge your changes into master when your work is ready to be merged.

**NOTES**

*1. ```fin sync``` is a wrapper command that runs: ```git pull origin master```, ```composer install```, a Pantheon ```database sync```, and a ```drush upwd``` to set user 1 pwd to admin/admin. This is followed by ```drush cim```, ```drush dbup```, ```drush entup``` and ```drush cr```. This command ensures your local environment is in a one-to-one state with the Pantheon development environment.*

*2. ```fin validate``` is a wrapper command that runs: ```git pull origin master```, ```composer install```, ```drush dbup```, ```drush entup```, ```drush cim```, and ```drush cr```. This command is designed to ensure that your feature branch works against the current master branch.*

*3. If you see a merge conflict when running ```fin validate``` against your feature branch, it means your changes to a file(s) are conflicting with another change that has already been pushed to master branch. You will need to understand, fix, and commit the conflicting file(s) prior to continuing. As long as you committed your work you can always rollback to your last known working version if necessary.*

*4. Both ```fin sync``` and ```fin validate``` are  helper commands to speed up your normal worklow. For debugging you may need to [run the commands manually](docs/WORKFLOW.md) as needed. You may also sync your site manually if you do not want a full database sync.*

## Submit a Github pull request

Once your feature branch looks good and is passing its Circle CI tests, submit a Github pull request against your branch. A project maintainer will review the changes and merge into master.

*Note: Advanced or otherwise approved users can submit and merge their own PRs, and/or merge and push a feature branch directly into master without a formal pull request. Ask if you have questions, and err on the side of caution.*


## Other helpful topics

Instructions for frontend theming and other topics related to Docksal and site building are available in separate documents:

* [Onboarding](docs/ONBOARD.md)
* [Frontend/theming](docs/THEME.md)
* [Fin commands](https://docs.docksal.io/en/develop/fin/fin/)
* [Docksal troubleshooting](https://docs.docksal.io/en/develop/troubleshooting/)

## Old local environments

If you have previously worked on this project or are having trouble with Docksal, the old [Lando](docs/LANDO.md) and [DrupalVM](docs/DRUPALVM.md) builds are both still available if needed.


## Support and feedback

If you need support or find any errors or suggested improvements in this README contact <tim@electriccitizen.com>.

[Back to top](#newupstream)
