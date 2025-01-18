import path from "path";

interface RemotePattern {
  protocol: string;
  hostname: string;
  pathname: string;
}

interface ImagesConfig {
  remotePatterns: RemotePattern[];
}

interface WebpackConfig {
  resolve: {
    alias: { [key: string]: string };
  };
}

interface NextConfig {
  reactStrictMode: boolean;
  basePath: string;
  images: ImagesConfig;
  experimental: {
    typedRoutes: boolean;
  };
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/tunjo-cars",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "damian-bucket-aws-test.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    // If this is true, try setting it to false
    typedRoutes: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@src": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "app"),
    };
    return config;
  },
};

export default nextConfig;
