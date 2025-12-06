import type { MetadataRoute } from "next";

const routes = [{ path: "", priority: 1 }];

const locales = ["en", "th"];
const baseUrl = "https://onnha.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = locales.flatMap((locale) =>
    routes.map((route) => {
      const url = `${baseUrl}/${locale}${route.path ? `/${route.path}` : ""}`;
      return {
        url,
        lastModified: new Date(),
        priority: route.priority,
      };
    })
  );
  return [...staticPages];
}
