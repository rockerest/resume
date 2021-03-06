Resume
======

After checking out the repository, you'll need to do two things to get started:

1. Install the package by running `npm install`  
  * If you're running the project in a VM accessing shared Windows directories, add ` --no-bin-links` to the end
1. Set up the project for the first time by running `grunt setup`
2. Run a grunt build for development with `grunt`

This will install all necessary dependencies, compile the SASS, and begin watching files for changes.

NPM, Grunt & SASS
-----------------
[NPM](http://nodejs.org/), [Grunt](http://gruntjs.com/) & [SASS](http://sass-lang.com/) are the only system dependencies that must be available in order for the project to run.  

Many developers already have NodeJS (and therefore NPM) installed.  
Additionally, many developers also already have Ruby (a dependency of SASS) installed.

Regardless, all system dependencies can be installed by following the instructions on their respective pages.  
For a rough outline of what to install, see below:  
1. `sudo apt-get install nodejs`  
2. `sudo apt-get install npm`  
3. `sudo npm install -g grunt grunt-cli`  
4. `\curl -sSL https://get.rvm.io | bash`  
5. `rvm install ruby-2.1.2`  
6. `gem install sass`  

If everything has gone according to plan and your system is EXACTLY like mine, everything should work.  
I _really_ do recommend just following the official install instructions, though.
