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
  res.json({ status: "ok", service: "Bright Side Security API" });
});

const PORT = process.env.API_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Bright Side Security API server listening on http://localhost:${PORT}`);
});
