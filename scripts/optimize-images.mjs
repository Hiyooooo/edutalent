import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const tasks = [
  {
    input: 'edu-01-learning-session.jpg',
    output: 'edu-01-learning-session.webp',
    width: 1600,
    height: 900,
    position: sharp.strategy.entropy,
  },
  {
    input: 'edu-02-consulting-team.jpg',
    output: 'edu-02-consulting-team.webp',
    width: 1200,
    height: 900,
    position: 'center',
  },
  {
    input: 'edu-03-technical-training.jpg',
    output: 'edu-03-technical-training.webp',
    width: 1200,
    height: 900,
    position: 'center',
  },
  {
    input: 'edu-04-education-workshop.jpg',
    output: 'edu-04-education-workshop.webp',
    width: 1200,
    height: 900,
    position: 'center',
  },
  {
    input: 'edu-05-learning-planning.jpg',
    output: 'edu-05-learning-planning.webp',
    width: 1600,
    height: 900,
    position: 'center',
  },
  {
    input: 'edu-06-team-reflection.jpg',
    output: 'edu-06-team-reflection.webp',
    width: 1600,
    height: 900,
    position: 'center',
  },
];

async function run() {
  console.log('Optimizing images...');
  for (const item of tasks) {
    const inputPath = path.join(imagesDir, item.input);
    const outputPath = path.join(imagesDir, item.output);

    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      continue;
    }

    await sharp(inputPath)
      .resize(item.width, item.height, {
        fit: 'cover',
        position: item.position,
      })
      .webp({ quality: 78, effort: 6 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const kb = (stats.size / 1024).toFixed(1);
    console.log(`Optimized ${item.output}: ${kb} KB (Target: <= 220 KB)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
