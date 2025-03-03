import path from "path";
import { config } from "dotenv";
import withBundleAnalyzer from '@next/bundle-analyzer';


// load .env file from root of the project
const rootEnvVariables = config({
  path: path.resolve(new URL('.', import.meta.url).pathname, "../../.env"), 
});

const bundleAnalyzer = withBundleAnalyzer({
	// eslint-disable-next-line no-undef
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  transpilePackages: ["@workspace/ui"],
  env: rootEnvVariables.parsed,
  
  experimental: {
    // optimizePackageImports: ['icon-library'],
  },

}

export default bundleAnalyzer(nextConfig)
