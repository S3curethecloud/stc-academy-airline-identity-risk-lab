import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

const SCENARIO_DIR = path.join(process.cwd(), "demo/scenarios");

app.get("/demo/scenarios", (req, res) => {
  const files = fs.readdirSync(SCENARIO_DIR);
  const scenarios = files.map(f => f.replace(".json", ""));
  res.json({ scenarios });
});

app.post("/risk/score", (req, res) => {
  const { scenario } = req.body;
  if (!scenario) {
    return res.status(400).json({ error: "scenario required" });
  }

  const filePath = path.join(SCENARIO_DIR, `${scenario}.json`);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "scenario not found" });
  }

  const payload = JSON.parse(fs.readFileSync(filePath));
  res.json(payload);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`STC-Aegis-Air demo API running on port ${PORT}`);
});
