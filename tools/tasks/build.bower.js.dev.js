"use strict";

var path = require('path');
var join = path.join;

var PATH = require('../workflow.config').PATH;

module.exports = function (gulp) {
  return function () {

    return gulp.src([
        PATH.src.bower + '/bootstrap/dist/js/*.*',
        PATH.src.bower + '/jquery/dist/*.*'
      ])
      .pipe(gulp.dest(PATH.dest.dev.bowerjs));
  };
};
