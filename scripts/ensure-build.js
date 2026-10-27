const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

// Some hosts run the build in a separate step or directory, so build/ may be
// missing when the server starts. Build it here so the site is always served.
const root = path.join(__dirname, "..");
const indexFile = path.join(root, "build", "index.html");

if (!fs.existsSync(indexFile)) {
  console.log("build/ not found, running production build...");
  const result = spawnSync(process.execPath, [path.join(__dirname, "run.js"), "build"], {
    cwd: root,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    console.error("Build failed; starting API server without the website.");
  }
}
