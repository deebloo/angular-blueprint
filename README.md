Angular-Blueprint
=================

***
! Requires Node, Grunt, Bower, Sass and Compass
***

Angular js seed project based on John Papa's Angular style guide and the Yeoman Angular generator. The goal is to have an out of the box scaffolding that will scale well for large complex applications. I am looking for input and opinions to make this as good as we possibly can.
  
Seed includes https://github.com/drewzboto/grunt-connect-proxy to hit outside APIs for development. The proxy is set up for the github API right now but can can be configured easily to hit your own api. (Yes I know githubs api does not require this!). 

Style Guide: https://github.com/johnpapa/angularjs-styleguide  
Angular Generator: https://github.com/yeoman/generator-angular  

Download the seed
```bash
git clone https://github.com/DannyBlueDesign/angular-blueprint.git <project-name>
cd <project-name>
bower install && npm install

OPTIONAL (Remove git history ) rm -rf .git
```

To start the development server
```bash
grunt serve
```

Start server with no sass source mapping (may compile faster)
```bash
grunt serve --sourcemap=false
```

To run unit tests
```bash
grunt test
```

To build app for deployment
```shell
grunt build
```

Angular Blueprint has a switch for proxying API's. To turn it on set ```appConfig.proxy = true```
```JS
var appConfig = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist',
  proxy: false, // <-- HERE HERE DO IT HERE!!!
  proxyConfig: [{
    context: '/api',
    host: 'api.github.com',
    port: 443,
    https: true,
    changeOrigin: true,
    rewrite: {
      '^/api': ''
    }
  }]
};
```

If you are using the JSDOCs style of comments (which you should!!!) you can generate your automated JSDOCs by running the following command. (Horay for automated documentation)
```JS
grunt jsdoc
```
