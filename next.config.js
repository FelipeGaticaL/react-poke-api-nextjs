/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

/* Con domains, podemos agregar imagenes fuera de la librería */
module.exports = nextConfig
