import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = './assets/products';
const OUTPUT_DIR = './public/images/products';

const CONFIGS = {
  thumbnail: { width: 600, height: 600, fit: 'cover', quality: 82 },
  detail:    { width: 1200, height: 900, fit: 'cover', quality: 85 },
  hero:      { width: 1920, height: 800, fit: 'cover', quality: 85 },
};

async function processImage(inputPath, outputDir, baseName) {
  const results = [];

  for (const [type, config] of Object.entries(CONFIGS)) {
    const outputPath = path.join(outputDir, `${baseName}-${type}.webp`);

    await sharp(inputPath)
      .resize(config.width, config.height, { fit: config.fit, position: 'center' })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const originalStats = fs.statSync(inputPath);
    const savings = ((1 - stats.size / originalStats.size) * 100).toFixed(1);

    results.push({
      type,
      output: outputPath,
      originalSize: `${(originalStats.size / 1024).toFixed(1)}KB`,
      newSize: `${(stats.size / 1024).toFixed(1)}KB`,
      savings: `${savings}%`,
    });
  }

  return results;
}

async function main() {
  console.log('🖼️  JD Pack Solutions — Image Processor\n');
  console.log('='.repeat(60));

  const categories = fs.readdirSync(ASSETS_DIR).filter(f =>
    fs.statSync(path.join(ASSETS_DIR, f)).isDirectory()
  );

  let totalOriginal = 0;
  let totalOptimized = 0;
  let totalFiles = 0;

  for (const category of categories) {
    const categoryInput = path.join(ASSETS_DIR, category);
    const categoryOutput = path.join(OUTPUT_DIR, category);

    fs.mkdirSync(categoryOutput, { recursive: true });

    const files = fs.readdirSync(categoryInput).filter(f =>
      /\.(jpe?g|png|webp|avif)$/i.test(f)
    );

    console.log(`\n📁 ${category} (${files.length} images)`);
    console.log('-'.repeat(60));

    for (const file of files) {
      const inputPath = path.join(categoryInput, file);
      const baseName = path.parse(file).name;

      try {
        const results = await processImage(inputPath, categoryOutput, baseName);

        for (const r of results) {
          const origKB = parseFloat(r.originalSize);
          const newKB = parseFloat(r.newSize);
          totalOriginal += origKB;
          totalOptimized += newKB;
          totalFiles++;

          console.log(`  ✅ ${baseName}-${r.type}.webp | ${r.originalSize} → ${r.newSize} (${r.savings} saved)`);
        }
      } catch (err) {
        console.log(`  ❌ ${file}: ${err.message}`);
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 SUMMARY`);
  console.log(`   Files processed: ${totalFiles}`);
  console.log(`   Original total:  ${totalOriginal.toFixed(1)} KB`);
  console.log(`   Optimized total: ${totalOptimized.toFixed(1)} KB`);
  console.log(`   Total savings:   ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`\n✨ All images saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);
