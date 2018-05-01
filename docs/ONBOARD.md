# Onboarding
[back to README](../README.md)

**Requirements**

* Add public key to Pantheon account and add user to project team
* Add public key to Github account and add user to project team
* [Install Terminus](https://pantheon.io/docs/terminus/install/) and authenticate via Machine Token
* Update your Pantheon aliases with ```terminus aliases```

**1. Install VirtualBox (5.1.28 or higher)**

VirtualBox is available for Mac, PC and Linux and can be [installed manually](https://www.virtualbox.org/wiki/Downloads) on your platform.

**2. Install Docksal (One-time setup)**

Follow the [one-time setup instructions](https://docs.docksal.io/en/master/getting-started/env-setup/) for your platform. One you have gotten through Step 3 and started your VM return to this document and continue below.

*IMPORTANT: By default Docksal uses the /Users/your-name/Projects folder to store all Docksal projects. You can change this to /Users/<you>/Sites or another location during setup, but be sure to clone all of your projects into whichever project folder you defined during Dockal setup or you will not be able to start your containers.*

**3. Clone repository**

```git clone git@github.com:electriccitizen/<repo-name>```

**4. Sync project from Pantheon**

```cd ~/Projects/<repo-name>```

```fin sync```

**5. Start working**

You should now have a synced copy of the site. Be sure to [follow a safe workflow!](../README.md#follow-a-safe-workflow)

[back to README](../README.md)
