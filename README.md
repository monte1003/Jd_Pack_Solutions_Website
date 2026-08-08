<div align="center">

# 📦 JD Pack Solutions

**Premium Packaging, Wrapping & Custom Logistics Solutions**

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)
![License](https://img.shields.io/badge/license-proprietary-red?style=flat-square)

[Live Site](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 About

Corporate website for **JD Pack Solutions**, a Miami-based company specializing in packaging, wrapping, and custom logistics solutions. The site serves as a digital catalog showcasing the company's product portfolio across six core categories.

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro 5.x](https://astro.build/) (Static Site Generation) |
| **Styling** | Vanilla CSS (Custom Properties / Design Tokens) |
| **CMS** | [Decap CMS](https://decapcms.org/) (Git-based, headless) |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) |
| **Forms** | [Formspree](https://formspree.io/) |
| **i18n** | English / Spanish |

## 📁 Project Structure

```
jdpack-solutions/
├── assets/                   # Raw source assets (pre-optimization)
│   ├── logos/                 # Brand logos (PDF, SVG)
│   └── products/             # Product images by category
│       ├── bolsas-preformadas/
│       ├── empaque-flow-pack/
│       ├── maquinas-verticales/
│       ├── separadores/
│       ├── termoformado-flexibles/
│       └── termoformado-rigido/
├── docs/                     # Documentation & reference files
│   └── catalogo.pdf          # Product catalog reference
├── src/                      # Source code (created during development)
│   ├── components/           # Reusable Astro components
│   ├── content/              # Markdown content (CMS-managed)
│   ├── layouts/              # Page layouts
│   ├── pages/                # Route pages
│   └── styles/               # Global CSS & design tokens
├── public/                   # Static assets served as-is
│   ├── admin/                # Decap CMS admin panel
│   └── images/               # Optimized images (WebP/AVIF)
├── .gitignore
├── astro.config.mjs
├── package.json
└── README.md
```

## 🛍️ Product Categories

| Category | Description |
|---|---|
| **Bolsas Preformadas** | Pre-formed bags for various industries |
| **Empaque Flow Pack** | Flow pack wrapping solutions |
| **Máquinas Verticales** | Vertical packaging machines |
| **Separadores** | Industrial separators and dividers |
| **Termoformado Flexibles** | Flexible thermoformed packaging |
| **Termoformado Rígido** | Rigid thermoformed packaging |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/jdpack-solutions.git

# Navigate to the project
cd jdpack-solutions

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 🌐 Site Map

```
/                    → Homepage (Hero + Product Highlights + CTA)
/about               → About Us (Company overview)
/products            → Product Catalog (Category grid)
/products/[slug]     → Product Detail (Gallery + specs)
/contact             → Contact (Form + map + direct info)

/es/                 → Página principal (Español)
/es/about            → Quiénes Somos
/es/products         → Catálogo de Productos
/es/products/[slug]  → Detalle de Producto
/es/contact          → Contacto
```

## 📄 License

This project is proprietary software developed for JD Pack Solutions. All rights reserved.

## 📧 Contact

**JD Pack Solutions**  
📍 Miami, Florida, USA  
📧 example@gmail.com

---

<div align="center">

Built with ❤️ using [Astro](https://astro.build/)

</div>
