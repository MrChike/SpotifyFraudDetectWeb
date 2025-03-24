/** @type {import('next').NextConfig} */

// domains: ["enslclfxdhezohzcesvn.supabase.co"]
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
supabaseUrl = supabaseUrl.split("//")[1];

const nextConfig = {
  images: {
    domains: [supabaseUrl, 'cdn-images.dzcdn.net']
  }
};

module.exports = nextConfig;
