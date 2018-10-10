"use strict";

const gulp = require("gulp");
const yaml = require("gulp-yaml");

const folder = {
  yamlSrc: "data/*.yml",
  yamlDest: "src/data/"
};

gulp.task("yaml", ["yaml-convert", "watch"]);

gulp.task("yaml-convert", () => {
  /* Convert YAML → JSON */
  return gulp
    .src(folder.yamlSrc)
    .pipe(yaml())
    .pipe(gulp.dest(folder.yamlDest));
});

gulp.task("watch", () => {
  gulp.watch(folder.yamlSrc, ["yaml-convert"]);
});
