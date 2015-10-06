"use strict";

var path = require('path');
var join = path.join;

var PATH = require('../workflow.config').PATH;

module.exports = function (gulp) {
  return function () {

    return gulp.src([
        PATH.src.bower + '/bootstrap/dist/fonts/*.*',
        PATH.src.bower + '/font-awesome/fonts/*.*',
        PATH.src.bower + '/rdash-ui/dist/fonts/*.*'
      ])
      .pipe(gulp.dest(PATH.dest.dev.bowerfonts));
  };
};
