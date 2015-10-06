"use strict";

var path = require('path');
var join = path.join;

var PATH = require('../workflow.config').PATH;

module.exports = function (gulp) {
  return function () {

    return gulp.src([
        PATH.src.bower + '/bootstrap/dist/css/*.*',
        PATH.src.bower + '/font-awesome/css/*.*',
        PATH.src.bower + '/rdash-ui/dist/css/*.*'
      ])
      .pipe(gulp.dest(PATH.dest.dev.bowercss));
  };
};
