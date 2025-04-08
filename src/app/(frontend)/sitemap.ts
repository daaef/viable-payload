import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITEMAP_BASE_URL as string,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/about-us`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/contact-us`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/about-us`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/partner`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/volunteer`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/privacy-policy`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/terms-of-use`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/our-story`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/our-work`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/our-work/educational`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITEMAP_BASE_URL}/our-work/extremadura`,
      lastModified: new Date(2024, 6, 17),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
