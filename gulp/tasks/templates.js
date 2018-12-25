const gulp = require("gulp");
const config = require("../config").templates;
const camelCaseToDash = require("../utils").camelCaseToDash;
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gutil = require("gulp-util");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const cache = require("gulp-cache");
const options = require("minimist")(process.argv.slice(2));
const rename = require("gulp-rename");

const filters = {
  code(html, options) {
    const lang = options.lang || "html";
    const preview =
      lang === "html" ? `<div class="hf-preview">${html}</div>` : "";
    return `
      <div class="hf-exemple">
        ${preview}
        <pre class="hf-code"><code class="js-highlight ${lang}">${html}</code></pre>
      </div>`;
  },
};

gulp.task("templates", () => {
  return gulp
    .src(config.page_src)
    .pipe(
      plumber({
        errorHandler: notify.onError("PUG Error: <%= error.message %>"),
      })
    )
    //.pipe(cache(pug({ pretty: true, filters })))
    .pipe(pug({ pretty: true, filters }))
    .pipe(
      options.production ? htmlmin({ collapseWhitespace: true }) : gutil.noop()
    )
    .pipe(size({ title: "template" }))
    .pipe(rename(function (path) {
      let fileName = camelCaseToDash( path.dirname );
      path.dirname = "../";
      path.basename = fileName;
      path.extname = ".html";
    }))
    .pipe(gulp.dest(config.dist));
    //.pipe(gulp.dest('./tmp/'));
});
