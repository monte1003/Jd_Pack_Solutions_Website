import fs from 'fs';
import path from 'path';

const contentDir = './src/content/products';

const products = [
  {
    category: 'bolsas-preformadas',
    title_es: 'Bolsas Preformadas',
    title_en: 'Pre-formed Bags',
    description_es: 'Bolsas preformadas de alta calidad para empaques seguros y profesionales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description_en: 'High quality pre-formed bags for secure and professional packaging. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hero_image: '/images/products/bolsas-preformadas/1-hero.webp',
    features_es: ['Alta barrera', 'Diseños personalizados', 'Fácil sellado'],
    features_en: ['High barrier', 'Custom designs', 'Easy sealing'],
    gallery: [
      { src: '/images/products/bolsas-preformadas/1-detail.webp', alt_es: 'Bolsas Preformadas', alt_en: 'Pre-formed Bags' }
    ]
  },
  {
    category: 'empaque-flow-pack',
    title_es: 'Empaque Flow Pack',
    title_en: 'Flow Pack Wrapping',
    description_es: 'Soluciones eficientes de empaque flow pack para la industria alimentaria y no alimentaria. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description_en: 'Efficient flow pack wrapping solutions for food and non-food industries. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hero_image: '/images/products/empaque-flow-pack/1-hero.webp',
    features_es: ['Velocidad de empaque', 'Conservación prolongada', 'Formatos versátiles'],
    features_en: ['Packaging speed', 'Extended shelf life', 'Versatile formats'],
    gallery: [
      { src: '/images/products/empaque-flow-pack/1-detail.webp', alt_es: 'Empaque Flow Pack', alt_en: 'Flow Pack Wrapping' }
    ]
  },
  {
    category: 'maquinas-verticales',
    title_es: 'Máquinas Verticales',
    title_en: 'Vertical Machines',
    description_es: 'Sistemas de empaque vertical para procesos automatizados de alto rendimiento. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description_en: 'Vertical packaging systems for high-performance automated processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hero_image: '/images/products/maquinas-verticales/1-hero.webp',
    features_es: ['Automatización', 'Alta precisión', 'Fácil mantenimiento'],
    features_en: ['Automation', 'High precision', 'Easy maintenance'],
    gallery: [
      { src: '/images/products/maquinas-verticales/1-detail.webp', alt_es: 'Máquina Vertical 1', alt_en: 'Vertical Machine 1' },
      { src: '/images/products/maquinas-verticales/2-detail.webp', alt_es: 'Máquina Vertical 2', alt_en: 'Vertical Machine 2' },
      { src: '/images/products/maquinas-verticales/3-detail.webp', alt_es: 'Máquina Vertical 3', alt_en: 'Vertical Machine 3' },
      { src: '/images/products/maquinas-verticales/4-detail.webp', alt_es: 'Máquina Vertical 4', alt_en: 'Vertical Machine 4' }
    ]
  },
  {
    category: 'separadores',
    title_es: 'Separadores',
    title_en: 'Separators',
    description_es: 'Separadores industriales para protección interna de productos durante el transporte y almacenamiento.',
    description_en: 'Industrial separators for internal product protection during transit and storage.',
    hero_image: '/images/products/separadores/1-hero.webp',
    features_es: ['Protección contra impactos', 'Diseño a medida', 'Materiales reciclables'],
    features_en: ['Impact protection', 'Custom design', 'Recyclable materials'],
    gallery: [
      { src: '/images/products/separadores/1-detail.webp', alt_es: 'Separador 1', alt_en: 'Separator 1' },
      { src: '/images/products/separadores/2-detail.webp', alt_es: 'Separador 2', alt_en: 'Separator 2' },
      { src: '/images/products/separadores/3-detail.webp', alt_es: 'Separador 3', alt_en: 'Separator 3' }
    ]
  },
  {
    category: 'termoformado-flexibles',
    title_es: 'Termoformado Flexibles',
    title_en: 'Flexible Thermoforming',
    description_es: 'Películas de termoformado flexibles adaptables a diferentes formas y tamaños para máxima versatilidad.',
    description_en: 'Flexible thermoforming films adaptable to different shapes and sizes for maximum versatility.',
    hero_image: '/images/products/termoformado-flexibles/2-hero.webp',
    features_es: ['Alta resistencia a perforaciones', 'Transparencia óptima', 'Sellado seguro'],
    features_en: ['High puncture resistance', 'Optimal transparency', 'Secure sealing'],
    gallery: [
      { src: '/images/products/termoformado-flexibles/1-detail.webp', alt_es: 'Flexible 1', alt_en: 'Flexible 1' },
      { src: '/images/products/termoformado-flexibles/2-detail.webp', alt_es: 'Flexible 2', alt_en: 'Flexible 2' },
      { src: '/images/products/termoformado-flexibles/3-detail.webp', alt_es: 'Flexible 3', alt_en: 'Flexible 3' },
      { src: '/images/products/termoformado-flexibles/4-detail.webp', alt_es: 'Flexible 4', alt_en: 'Flexible 4' },
      { src: '/images/products/termoformado-flexibles/5-detail.webp', alt_es: 'Flexible 5', alt_en: 'Flexible 5' },
      { src: '/images/products/termoformado-flexibles/6-detail.webp', alt_es: 'Flexible 6', alt_en: 'Flexible 6' }
    ]
  },
  {
    category: 'termoformado-rigido',
    title_es: 'Termoformado Rígido',
    title_en: 'Rigid Thermoforming',
    description_es: 'Bandejas y envases de termoformado rígido para protección estructural superior.',
    description_en: 'Rigid thermoforming trays and containers for superior structural protection.',
    hero_image: '/images/products/termoformado-rigido/1-hero.webp',
    features_es: ['Estructura firme', 'Presentación premium', 'Prolonga la vida útil'],
    features_en: ['Firm structure', 'Premium presentation', 'Extends shelf life'],
    gallery: [
      { src: '/images/products/termoformado-rigido/1-detail.webp', alt_es: 'Rígido 1', alt_en: 'Rigid 1' }
    ]
  }
];

fs.mkdirSync(contentDir, { recursive: true });

products.forEach((p, i) => {
  const content = `---
category: "${p.category}"
title_es: "${p.title_es}"
title_en: "${p.title_en}"
description_es: "${p.description_es}"
description_en: "${p.description_en}"
hero_image: "${p.hero_image}"
features_es:
${p.features_es.map(f => `  - "${f}"`).join('\n')}
features_en:
${p.features_en.map(f => `  - "${f}"`).join('\n')}
gallery:
${p.gallery.map(g => `  - src: "${g.src}"\n    alt_es: "${g.alt_es}"\n    alt_en: "${g.alt_en}"`).join('\n')}
order: ${i + 1}
visible: true
---

Contenido extenso del producto en español. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

***

Extensive product content in English. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

  fs.writeFileSync(path.join(contentDir, `${p.category}.md`), content);
});

console.log('✅ Created 6 content files.');
