/**
 * Gera a imagem de Open Graph (preview de link no WhatsApp, Instagram, Google).
 *
 * Rodar com `npm run og` sempre que o logo ou o posicionamento da marca mudar.
 * Saída: public/images/og/og-caios-dog-pet.jpg — referenciada em src/app/layout.tsx.
 *
 * JPEG e não webp de propósito: o crawler de preview do WhatsApp — canal principal
 * de agendamento aqui — não renderiza webp de forma confiável.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(root, "public/images/logo/caios-dog-pet.png");
const outDir = path.join(root, "public/images/og");
const outPath = path.join(outDir, "og-caios-dog-pet.jpg");

const W = 1200;
const H = 630;
const LOGO = 380;

const background = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d2d4d"/>
      <stop offset="55%" stop-color="#0A2540"/>
      <stop offset="100%" stop-color="#061726"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.25" cy="0.5" r="0.55">
      <stop offset="0%" stop-color="#32B5FF" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#32B5FF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#D9B65F"/>
</svg>
`);

const textLayer = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .brand { font-family: "Segoe UI", Arial, sans-serif; font-weight: 700; fill: #FFFFFF; }
    .gold  { font-family: "Segoe UI", Arial, sans-serif; font-weight: 700; fill: #E8C87A; }
    .sub   { font-family: "Segoe UI", Arial, sans-serif; font-weight: 600; fill: #FFFFFF; opacity: 0.92; }
    .slog  { font-family: "Segoe UI", Arial, sans-serif; font-weight: 400; fill: #FFFFFF; opacity: 0.7; }
  </style>
  <text x="530" y="232" class="gold" font-size="46" letter-spacing="6">CAIO'S</text>
  <text x="530" y="322" class="brand" font-size="94" letter-spacing="-2">DOG PET</text>
  <rect x="530" y="360" width="96" height="6" rx="3" fill="#D9B65F"/>
  <text x="530" y="428" class="sub" font-size="38">Banho &#183; Tosa &#183; T&#225;xi Dog</text>
  <text x="530" y="482" class="slog" font-size="27">Seu melhor amigo merece esse carinho!</text>
</svg>
`);

const logo = await sharp(logoPath)
  .resize(LOGO, LOGO, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const composite = [
  { input: logo, top: Math.round((H - LOGO) / 2), left: 90 },
  { input: textLayer, top: 0, left: 0 },
];

await sharp(background)
  .composite(composite)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(outPath);

const meta = await sharp(outPath).metadata();
console.log(`OK ${meta.width}x${meta.height} ${meta.format} -> ${path.relative(root, outPath)}`);
