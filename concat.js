const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-16/polyfills.js",
    "./dist/angular-16/main.js",
    "./dist/angular-16/runtime.js",
    "./dist/angular-16/styles.css",
  ];
  await concat(files, "./dist/angular-16/micro-fe.js");
})();
