const express = require("express");
const fs = require("fs");
const path = require("path");

const envLocalPath = path.join(__dirname, ".env.local");
if (fs.existsSync(envLocalPath)) {
  try {
    process.loadEnvFile(envLocalPath);
    console.log("Loaded environment variables from .env.local");
  } catch (e) {
    console.warn("Could not load .env.local:", e.message);
  }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sliderContactHandler = require("./api/slidercontact");
const contactHandler = require("./api/contact");
const newsletterHandler = require("./api/newsletter");

const wrap = handler => (req, res) => {
  const fn = handler.default || handler;
  return fn(req, res);
};

app.post("/api/slidercontact", wrap(sliderContactHandler));
app.post("/api/contact", wrap(contactHandler));
app.post("/api/newsletter", wrap(newsletterHandler));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Bright Side Security, INC API" });
});

// Serve static React build assets in production if build/ exists
const buildPath = path.join(__dirname, "build");
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

const PORT = process.env.PORT || process.env.API_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Bright Side Security, INC server listening on port ${PORT}`);
});
