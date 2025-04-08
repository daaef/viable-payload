import { withPayload } from "@payloadcms/next/withPayload";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://accounts.google.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://deedmob-prod.imgix.net;
  font-src 'self' data:;
  frame-src 'self' https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  connect-src 'self' https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com;
  upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deedmob-prod.imgix.net",
        port: "",
        pathname: "/o-prod/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, "").trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
