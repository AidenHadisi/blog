import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
    },
  },
  plugins: [tailwindTypography],
};

export default config;
