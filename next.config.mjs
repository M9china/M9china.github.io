/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    assetPrefix: isProd ? '/M9china.github.io/' : '',
    basePath: isProd ? '/M9china.github.io' : '',
};

export default nextConfig;
