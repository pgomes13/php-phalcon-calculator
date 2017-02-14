# php-phalcon-calculator
A simple calculator application having PHP Phalcon as the backend and AngularJS as the frontend.

## Synopsis
The PHP Phalcon code resides inside the /server folder. The AngularJS & other frontend assets reside inside the /client folder.
It makes use of the following open source projects for boostrapping & running the application -

* [Phalcon] - High Performance PHP Framework
* [AngularJS] - HTML enhanced for web apps
* [node.js] - Evented I/O for the backend
* [npm] - Installs, publishes and manages node programs
* [Bower] - A package manager for the web
* [Gulp] - The streaming build system
* [Sass] - Syntactically Awesome Style Sheets
* [Babel] - The compiler for writing next generation JavaScript
* [Git] - Distributed version control system
* [Karma] - Spectacular Test Runner for JavaScript
* [Jasmine] - Behavior-Driven Javascript
* [Browsersync] - Time-saving synchronised browser testing


## Installation
Download or clone this respository on your local machine.

### Server-side
Setup PHP Phalcon with MAMP to serve the Phalcon app from the root folder
(you can use any other way to setup the app. Since it is done with MAMP on my dev machine, all my instructions will refer to that).

Following are the 4 RESTful endpoints -

#### Add
http://localhost:8888/server/api/add/82/12

#### Subtract
http://localhost:8888/server/api/subtract/20/12

#### Multiply
http://localhost:8888/server/api/multiply/10.2/4

#### Divide
http://localhost:8888/server/api/multiply/100/5



### Client-side
Install the dependencies by running the following commands in the root directory.

#### Development environment
The app will serve & watch for development changes. Change the BASE_URL variable in /client/app/app.constants.js as per the PHP server. 

```sh
gulp
```


#### Production environment
The app will build for production. All assets in the build folder have been minified & asset revisioned for production release.

(if you serve the app using MAMP, after this command, you just have to go to http://localhost:8888 to see the working calculator app).

```sh
gulp --prod
```




## File Structure

```
|-- client                      # Contains all the client-side code and assets
    |-- app                     # Contains all the AngularJS code
    |-- sass                    # Contains all the SASS files
    |-- public                  # Contains all the compiled assets for dev environment
        |-- components          # Contains all the bower components
        |-- css
            |-- app.css         # Compiled SASS files into one single app.css file
        |-- js
            |-- app.js          # Compiled JS files in /app directory into one single app.js file using Babel
        |-- templates           # Contains all the HTML templates from /app directory
        |-- index.html          # Loads all the assets in /public for dev environment

    |-- gulp                    # Contains all the gulp files for asset pipelining
    |-- server                  # Contains all the PHP Phalcon RESTful code for end-points
    |-- public                  # Folder is generated when 'gulp --prod' command is run. Contains production assets.
    |-- .bowerrc                # Contains the installation location for bower components
    |-- .gitignore              # Contains all the files and folders to be ignored by git
    |-- bower.json              # File for bower packages dependency management
    |-- Gulpfile.js             # Loads all the gulp tasks in /gulp directory
    |-- karma.conf.js           # Configuration file for the karma test runner
    |-- package.json            # File for node packages dependency management
    |-- index.html              # File is generated when 'gulp --prod' command is run. Serves the frontend app.
```


## Tests
Following command will run the frontend unit tests using PhantomJS.

```sh
npm test
```


## Contributors
[Pascoal Gomes](https://au.linkedin.com/in/pascoal-gomes-a4835954)




[Phalcon]: <https://phalconphp.com/en/>
[AngularJS]: <http://angularjs.org>
[Gulp]: <http://gulpjs.com>
[node.js]: <http://nodejs.org>
[Bower]: https://bower.io/
[npm]: https://www.npmjs.com/
[Sass]: http://sass-lang.com/
[Babel]: https://babeljs.io/
[Git]: https://git-scm.com/
[Karma]: https://github.com/karma-runner/karma
[Jasmine]: https://jasmine.github.io/
[Browsersync]: https://www.browsersync.io/
