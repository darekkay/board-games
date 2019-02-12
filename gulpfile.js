"use strict";

const gulp = require("gulp");
const yaml = require("gulp-yaml");

const folder = {
  yamlSrc: "data/*.yml",
  yamlDest: "src/data/"
};

/** Convert YAML → JSON  */
const convertYaml = () => gulp
  .src(folder.yamlSrc)
  .pipe(yaml())
  .pipe(gulp.dest(folder.yamlDest));


const watch = () => {
  gulp.watch(folder.yamlSrc, convertYaml);
};

const build = gulp.series(convertYaml, watch);

exports.watch = watch;
exports.convertYaml = convertYaml;
exports.default = build;
