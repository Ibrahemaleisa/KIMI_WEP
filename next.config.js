/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "images.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
