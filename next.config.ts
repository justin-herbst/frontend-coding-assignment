import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/requests.ts");

const nextConfig: NextConfig = {
  distDir: "build", // Changes the build output directory to `build`
};

export default withNextIntl(nextConfig);
