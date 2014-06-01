Resume
======

After checking out the repository, you'll need to do two things to get started:

1. Set up the project for the first time by running `grunt setup`
2. Run a grunt build for development with `grunt`

This will install all necessary dependencies, compile the SASS, and begin watching files for changes.

Grunt & SASS
-----------------
[Grunt](http://gruntjs.com/) & [SASS](http://sass-lang.com/) are the only two system dependencies that must be available in order for the project to run.

Both can be installed by following the instructions on their respective pages.  
For a rough outline of what to install, see below:  
1. `sudo apt-get install nodejs`  
>Obviously, this is for Debian-based systems. Other systems will vary wildly. See [the NodeJS website](http://nodejs.org/) for instructions for your system.  

2. `sudo apt-get install npm`  
>*This step is only necessary in some cases where npm is not installed alongside nodejs. You can verify that you do or do not already have npm by issuing a simple `npm -v` in your terminal.*  
>Once again, only for Debian systems. Refer to [the NodeJS website](http://nodejs.org/) for pertinent instructions.

3. `sudo npm install -g grunt grunt-cli`  
4. `\curl -sSL https://get.rvm.io | bash`  
>This step installs [RVM (Ruby Version Manager)](http://rvm.io/) to make managing Ruby and installed Gems a little easier.  
5. `rvm install ruby-2.1.2`  
>This repository require SASS 3.3 (installed next) which depends on Ruby>=1.8.7. Pick your poison.  
6. `gem install sass`  

If everything has gone according to plan and your system is EXACTLY like mine, everything should work.  
I _really_ do recommend just following the official install instructions, though.