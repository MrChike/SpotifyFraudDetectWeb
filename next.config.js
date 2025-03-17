/** @type {import('next').NextConfig} */

// domains: ["enslclfxdhezohzcesvn.supabase.co"]
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const nextConfig = {
  images: {
    domains: [supabaseUrl, 'cdn-images.dzcdn.net']
  }
};

module.exports = nextConfig;
