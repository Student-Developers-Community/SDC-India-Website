import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog/blog.html",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
