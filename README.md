Angular-Blueprint
=================

Angular js seed project based on John Papa's Angular style guide and the Yeoman Angular generator. The goal is to have an out of the box scaffolding that will scale well for large complex applications. I am looking for input and help turning this into a generator (probably yeoman) and switching to gulp.
  
Seed includes https://github.com/drewzboto/grunt-connect-proxy to hit outside APIs for development. The proxy is set up for the github API right now but can can be configured easily to hit your own api. (Yes I know githubs api does not require this!). 

Style Guide: https://github.com/johnpapa/angularjs-styleguide  
Angular Generator: https://github.com/yeoman/generator-angular  

To use this seed:

Download the seed
```bash
git clone https://github.com/DannyBlueDesign/angular-blueprint.git <project-name>
cd <project-name>
bower install && npm install
OPTIONAL (Remove git history )rm -rf .git
```

To start the development server
```bash
grunt serve
```

To run unit tests
```bash
grunt test
```

To build app for deployment
```shell
grunt build
```

Angular Blueprint has proxying set turned on by default. To turn it off set ```appConfig.proxy = false```
```JS
var appConfig = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist',
  proxy: true, // <-- HERE HERE DO IT HERE!!!
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
