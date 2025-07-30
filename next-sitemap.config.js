/** @type {import('next-sitemap').IConfig} */
const fg = require("fast-glob");
const path = require("path");

// Use production URL from env, otherwise fallback
const siteUrl = process.env.NEXTAUTH_URL || "https://www.perficios.com";

/**
 * Recursively grab every `page.tsx|tsx|js|jsx|mdx` inside /app
 * and convert the file path to a clean, public‑facing URL.
 */
async function getStaticAppRoutes() {
  const files = await fg([
    "app/**/page.@(js|jsx|ts|tsx|mdx)",
    "!app/**/(api)/**", // skip API routes
    "!app/**/(_*)/**", // skip anything like _layout
  ]);

  return files.map((file) => {
    // ->  app/tax/direct-tax/page.tsx  ➜  /tax/direct-tax
    let route = file
      .replace(/^app\//, "") // drop leading 'app/'
      .replace(/\/page\.(jsx?|tsx?|mdx)$/, "") // drop trailing file name
      .split("/") // remove `(group)` and `@slot`
      .filter((seg) => !seg.startsWith("(") && !seg.startsWith("@"))
      .join("/");

    // root page (`app/page.tsx`) becomes '/'
    if (route === "page.tsx") route = "/"; 
    if (route === "") route = "/";

    return {
      loc: `${siteUrl}${route === "/" ? "" : `/${route.replace(/^\/+/, "")}`}`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  });
}

/** Main config */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,

  // paths that should never be indexed
  exclude: ["/admin/*", "/api/*", "/unauthorized", "/sign-in"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/sign-in", "/unauthorized"],
      },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },

  /**
   * next-sitemap will call this AFTER reading its own list.
   * We merge the App‑Router pages here.
   */
  additionalPaths: async () => await getStaticAppRoutes(),
};
