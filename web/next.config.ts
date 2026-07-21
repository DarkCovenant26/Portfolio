import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/work",
                destination: "/projects",
                permanent: true,
            },
            {
                source: "/work/:slug",
                destination: "/projects/:slug",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
