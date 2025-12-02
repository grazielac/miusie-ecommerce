

const nextConfig = {
  images: {
    domains: ['https://iylhgfeyswubczbzyeup.supabase.co'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;