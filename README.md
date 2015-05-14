# Express app with Grunt.js build system with Docker and docker-compose

This app contains a [Grunt](http://gruntjs.com/) configuration which will

* Restart the app on **.js**, **.scss** or **.html** file changes via [grunt-nodemon](https://github.com/ChrisWren/grunt-nodemon)
* Automatically compile [SASS](http://sass-lang.com/) stylesheets to CSS via [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) and [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
* Manage the concurrent `nodemon` and `watch` tasks via [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Setup

Run `docker-compose build`. It will

* install [Ruby](https://www.ruby-lang.org) and [SASS](https://rubygems.org/gems/sass)
* install the [Grunt](http://gruntjs.com) CLI globally
* install all dependencies from the package.json locally
* expose port 3000 to the host
* instruct the container to execute `grunt` on start up.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 3000 (On OS X you can use `boot2docker ip` to find out the IP address).