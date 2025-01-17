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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "app/components"),
      "@app": path.resolve(__dirname, "app"),
    };
    return config;
  },
};

export default nextConfig;
