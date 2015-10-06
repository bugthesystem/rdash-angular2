"use strict";

var argv = require('yargs').argv;

// --------------
// Configuration.
var PORT = argv['port'] || 5555;
var LIVE_RELOAD_PORT = argv['reload-port'] || 4002;
var APP_BASE = argv['base'] || '/';

var BOWER_SRC = 'bower_components';
var APP_SRC = 'app';
var APP_DEST = 'dist';
var ANGULAR_BUNDLES = './node_modules/angular2/bundles';

var PATH = {
    dest: {
      all: APP_DEST,
      dev: {
        all: APP_DEST + '/dev',
        lib: APP_DEST + '/dev/lib',
        bowerjs: APP_DEST + '/dev/js',
        bowerfonts: APP_DEST + '/dev/fonts',
        bowercss: APP_DEST + '/dev/css',
        img: APP_DEST + '/dev/img'
      },
      prod: {
        all: APP_DEST + '/prod',
        lib: APP_DEST + '/prod/lib',
        bowerjs: APP_DEST + '/prod/js',
        bowerfonts: APP_DEST + '/prod/fonts',
        bowercss: APP_DEST + '/prod/css',
        img: APP_DEST + '/prod/img'
      }
    },
    src: {
      all: APP_SRC,
      bower: BOWER_SRC,
      lib: [
        // Order is quite important here for the HTML tag injection.
        require.resolve('traceur/bin/traceur-runtime.js'),
        require.resolve('es6-module-loader/dist/es6-module-loader-sans-promises.js'),
        require.resolve('es6-module-loader/dist/es6-module-loader-sans-promises.js.map'),
        require.resolve('reflect-metadata/Reflect.js'),
        require.resolve('reflect-metadata/Reflect.js.map'),
        require.resolve('systemjs/dist/system.src.js'),
        APP_SRC + '/system.config.js',
        ANGULAR_BUNDLES + '/angular2.dev.js',
        ANGULAR_BUNDLES + '/router.dev.js',
        ANGULAR_BUNDLES + '/http.dev.js'
      ]
    }
  }
  ;

var CONFIG = {
  PORT: PORT,
  LIVE_RELOAD_PORT: LIVE_RELOAD_PORT,
  APP_BASE: APP_BASE,
  APP_SRC: APP_SRC,
  APP_DEST: APP_DEST,
  ANGULAR_BUNDLES: ANGULAR_BUNDLES,
  PATH: PATH
};
module.exports = CONFIG;
