/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api',
      }
    ]
  }
}
  ;

export default nextConfig;
