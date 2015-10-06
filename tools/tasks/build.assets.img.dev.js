"use strict";

var path = require('path');
var join = path.join;

var PATH = require('../workflow.config').PATH;

module.exports = function (gulp) {
  return function () {

    return gulp.src([
        PATH.src.all + '/public/img/**/*'
      ])
      .pipe(gulp.dest(PATH.dest.dev.img));
  };
};
