let gulp = require('gulp');
var rename = require("gulp-rename");

const cfg = {
  src: './tmp/',
  dest: './dist/'
};

gulp.task('movehtml', () => {
  return gulp.src("./tmp/**/*.html")
    .pipe(rename(function (path) {

      path.dirname = "/";
      path.basename += "";
      path.extname = ".html";
      console.log(path);
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md
});
