const pages = require("gh-pages");
const path = require("path");
const fs = require("fs");

const buildPath = path.resolve(__dirname, "../build");

fs.writeFileSync(buildPath + "/CNAME", "rand0.me");

pages.publish(buildPath, { branch: "master" });