import { withImages } from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your domain here for optimized images
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
        ]
},
    ];
  },
  optimizeFonts: true,
  experimental: {
    optimizeCss: true
}
}

export default withImages(nextConfig);