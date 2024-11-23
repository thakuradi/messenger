/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental and swcPlugins configuration
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "dl.dropboxusercontent.com",
    ],
  },
};

module.exports = nextConfig;