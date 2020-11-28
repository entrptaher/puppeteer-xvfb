The beginning steps are always hard so here is a straightforward documentation for starter. No need to learn docker or anything complex to get started. Most of the instruction below are copy-paste type of thing.

### Step 1:
Signup on a cloud server. Some good cloud hosting companies are (aff link),

- [Digitalocean](https://m.do.co/c/bfdc47190e24)
- [Linode](https://www.linode.com/?r=5faf4b6ffea568cb69679416313fcdba57c41164)
- [Vultr](https://www.vultr.com/?ref=7128819)

Buy a Ubuntu 20.04 droplet. The size of the server depends on the load you are going to give to the api.

![](https://i.imgur.com/70LdHL5.png)

Login to the server via ssh or other provided means.

![](https://i.imgur.com/Jqgxbmq.png)

### Step 2:
Install [nodejs](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions) and Yarn,

```
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install -yq nodejs yarn
```

and other important modules needed to run puppeteer headlessly,

```
apt-get install -yq build-essential gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget xvfb x11vnc x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps git curl libgbm-dev
```

### Step 3:
Install the package dependencies,

```
git clone https://github.com/entrptaher/puppeteer-xvfb
cd puppeteer-xvfb
yarn
```

### Step 4:
Run the app in background,

```
yarn pm2 start process.json
```

### Step ?:
Now open `http://<THE SERVER IP>:3000` and see the result.

![](https://i.imgur.com/1Ngws1H.png)

# Important PM2 Commands

PM2 is a process manager, which runs on background with a nice panel. Here are some common commands,

```sh
# list all apps
yarn pm2 list

# restart all services
yarn pm2 restart all

# see logs (and press CTRL+C to exit)
yarn pm2 logs

# ensure pm2 and the app runs on startup/restart
yarn pm2 startup && yarn pm2 save
```

# Notes

- This is not secure at all.
- This is going to run the browser every time you hit the link. Best if you add some protection there.
- This is purely for experimental purpose. Make sure to remove the droplet once you are done with this.
- This [args in puppeteer](app/scraper.js#L6) are very important to make it run properly. 