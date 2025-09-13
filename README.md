# Tronx Group — Next.js (App Router) + Tailwind

Sitio corporativo con Home, Quiénes Somos, Marcas y Contacto. Incluye SEO (OG/Twitter), `robots.txt`, `sitemap`, componentes base y tests con Vitest.

## Requisitos
- Node 18+
- pnpm/npm/yarn (usa uno)
- GitHub + Vercel

## Scripts
- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm start` — servidor de producción
- `npm run test` — tests (Vitest + RTL)

## Despliegue en Vercel
1. Sube este repo a GitHub.
2. En Vercel: **Add New Project** → Importa el repo.
3. Framework: **Next.js**. Build: `next build` (por defecto). Output: `.next` (por defecto).
4. Variables de entorno: (opcional) si usas endpoints externos.
5. Deploy.

### Importante
- Cambia el endpoint de Formspree en `/src/app/contacto/page.tsx` (`action="https://formspree.io/f/XXXXXXXX"`).
- Ajusta `metadataBase` y dominio en `layout.tsx` y `sitemap.ts` cuando tengas el dominio final.
