import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tronxgroup.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/quienes-somos`, lastModified: new Date() },
    { url: `${base}/marcas`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
  ];
}
