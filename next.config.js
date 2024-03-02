/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'server.mudahmemilih.com',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig

