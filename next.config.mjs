/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.chatbritish.ai" }],
        destination: "https://chatbritish.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
