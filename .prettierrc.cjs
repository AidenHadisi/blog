module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  // Tailwind class sorting
  tailwindConfig: "./tailwind.config.mjs",
  // Astro-specific options
  astroAllowShorthand: true,
};
