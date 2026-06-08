import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://virasatinteriors.com";

  // Define main categories
  const categories = [
    "living-room",
    "master-bedroom",
    "kitchen",
    "wardrobe",
    "bathroom",
  ];

  // Define design IDs (1-6 are present in the design-ideas data)
  const designIds = [1, 2, 3, 4, 5, 6];

  // Base routes
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Add category routes (e.g. /design-ideas/kitchen)
  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/design-ideas/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Add individual design detail routes (e.g. /design-ideas/kitchen/1)
  const detailEntries: MetadataRoute.Sitemap = [];
  categories.forEach((category) => {
    designIds.forEach((id) => {
      detailEntries.push({
        url: `${baseUrl}/design-ideas/${category}/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return [...baseEntries, ...categoryEntries, ...detailEntries];
}
