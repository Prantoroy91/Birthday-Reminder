import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const birthdaysFile = path.join(__dirname, "birthdays.json");

function readBirthdays() {
  if (!fs.existsSync(birthdaysFile)) return [];
  return JSON.parse(fs.readFileSync(birthdaysFile));
}

function saveBirthdays(data) {
  fs.writeFileSync(birthdaysFile, JSON.stringify(data, null, 2));
}

app.post("/add", (req, res) => {
  const { name, day, month } = req.body;
  if (!name || !day || !month) return res.status(400).send("Invalid data");

  const data = readBirthdays();
  data.push({ name, day, month });
  saveBirthdays(data);
  res.send("Birthday added successfully!");
});

app.get("/getAll", (req, res) => {
  const data = readBirthdays();
  res.json(data);
});

app.get("/today", (req, res) => {
  const today = new Date();
  const d = today.getDate();
  const m = today.getMonth() + 1;
  const data = readBirthdays().filter(b => b.day === d && b.month === m);
  res.json(data);
});

app.listen(3000, () => console.log("🎂 Server running on http://localhost:3000"));
