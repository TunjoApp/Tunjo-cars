import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/tunjo-cars",
  reactStrictMode: true,
  images: {
    domains: ["damian-bucket-aws-test.s3.us-east-2.amazonaws.com"], // S3 bucket domain
  },
};

export default nextConfig;
