/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            },
            {
                protocol: 'https',
                hostname: 'images.prismic.io'
            },
            {
                protocol: 'https',
                hostname: 'www.facebook.com'
            },
            {
              protocol: 'https',
              hostname: 'www.motivabolsas.com.br'
          },
          {
            protocol: 'https',
            hostname: 'www.souenfermagem.com.br'
        },
        {
          protocol: 'https',
          hostname: 'www.contabilizei.com.br'
      },
      {
        protocol: 'https',
        hostname: 'teloseducacional.com.br'
    },
        ]
    },
 
}

module.exports = nextConfig
