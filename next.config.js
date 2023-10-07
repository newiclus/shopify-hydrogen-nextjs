/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      fileName: true,
      ssr: true,
    },
  },
}

module.exports = nextConfig
