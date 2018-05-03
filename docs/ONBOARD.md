# Onboarding
[back to README](../README.md)

**Install Terminus and authenticate via machine token**

Follow the [Terminus install instructions](https://pantheon.io/docs/terminus/install/){:target="_blank"} to install and generate a machine token for authentication. If you are already Terminus you can check you version:

```terminus --version``` and [update Terminus](https://pantheon.io/docs/terminus/updates/) if you are running an older version.

**Install VirtualBox (5.1.28 or higher)**

VirtualBox is available for Mac, PC and Linux and can be [installed manually](https://www.virtualbox.org/wiki/Downloads) on your platform. If necessary, you can update or manage your install via the VirtualBox Manager GUI. 

**Install Docksal (One-time setup)**

Follow the [one-time setup instructions](https://docs.docksal.io/en/master/getting-started/env-setup/) for your platform. 

*IMPORTANT: By default, Docksal uses the /Users/[username]/Projects folder to store projects. You can change this to /Users/[username]/Sites (or another location) during setup, but be sure to clone all of your projects into whichever project folder you defined during Docksal setup. Docksal is opinionated and will not work if you attempt to run from outside your defined project folder.*

Once you have created and started your Docksal vm you should be all set for this and future Docksal projects. 

[back to README](../README.md)
