/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'api.themoviedb.org', 'assets.nflxext.com'],
  },
};

module.exports = nextConfig;
