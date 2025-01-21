const gulp = require('gulp');
const replace = require('gulp-replace');
const path = require('path');

function replaceInfileMain(filePathMain, {currentData, userData, token}) {
  return gulp
    .src(`./${filePathMain}`)
    //.pipe(replace(/(currentData =).*/g, `$1 \`${currentData}\`;`))
    //.pipe(replace(/(userData =).*/g, `$1 ${userData};`))
    .pipe(replace(/(const tokenString =).*/g, `$1 '${token}';`))
    .pipe(gulp.dest(`./${path.dirname(filePathMain)}`));
}

module.exports = replaceInfileMain;
