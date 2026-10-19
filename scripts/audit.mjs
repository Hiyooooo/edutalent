import fs from "fs";
import path from "path";

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const files = walk("src");
console.log("Total files checked in src:", files.length);

const checks = [
  { name: "Buzzwords", regex: /revolusioner|game-changer|seamless|100% aman|anti-curang 100%|terbukti meningkatkan produktivitas/i },
  { name: "Prohibited APIs", regex: /getUserMedia|navigator\.geolocation|mediaDevices/i },
  { name: "Hotlink URLs", regex: /unsplash\.com\/.+\.(jpg|png|webp)|images\.pexels\.com/i },
  { name: "Lorem/Templates", regex: /lorem ipsum|TODO: testimonial|10x lebih produktif/i },
  { name: "Em Dash (—)", regex: /—/ },
];

let failed = false;
for (const check of checks) {
  let matches = [];
  for (const f of files) {
    const content = fs.readFileSync(f, "utf8");
    const lines = content.split("\n");
    lines.forEach((line, idx) => {
      if (check.regex.test(line)) {
        matches.push({ file: f, line: idx + 1, content: line.trim() });
      }
    });
  }
  console.log(`Check [${check.name}]: ${matches.length} matches`);
  if (matches.length > 0) {
    failed = true;
    console.log(matches);
  }
}

// CTA Primary Count Check
let ctaCount = 0;
for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const matches = content.match(/Jadwalkan konsultasi/g);
  if (matches) {
    ctaCount += matches.length;
  }
}
console.log(`CTA 'Jadwalkan konsultasi' total occurrences: ${ctaCount} (Target: >= 5)`);

// Simulation label check
let simulationLabels = 0;
for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const matches = content.match(/DATA SIMULASI|simulasi|Foto ilustrasi/gi);
  if (matches) {
    simulationLabels += matches.length;
  }
}
console.log(`Simulation / Illustration label occurrences: ${simulationLabels}`);

if (!failed && ctaCount >= 5) {
  console.log("\n>>> ALL QUALITY GATE AUDITS PASSED SUCCESSFULLY! <<<");
} else {
  console.error("\n>>> QUALITY GATE AUDIT FAILED <<<");
  process.exit(1);
}
