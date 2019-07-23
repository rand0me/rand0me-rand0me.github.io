const pages = require("gh-pages");
const path = require("path");
const fs = require("fs");

const buildPath = path.resolve(__dirname, "../build");

fs.writeFileSync(buildPath + "/CNAME", "rand0.me");
fs.writeFileSync(buildPath + "/README.md", "# SEE SOURCES :rocket: [HERE](https://github.com/rand0me/rand0me.github.io/tree/source)")

pages.publish(buildPath, { branch: "master" });