// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  site: {
    url: "https://droposs.org/",
    name: "Drop OSS",
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
  ],
  extends: ["./drop-base"],
  css: ["~/assets/core.scss"],
  carousel: {
    prefix: "Vue",
  },

  nitro: {
    preset: "github_pages",
    minify: true,
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },

  ogImage: {
    zeroRuntime: true,
  },

  fonts: {
    families: [
      /*
      {
        name: "Helvetica",
        src: "/fonts/helvetica/helvetica-300-light.woff2",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-400-italic.woff",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-400.woff",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-600-bold-italic.woff",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-600-bold.woff",
      },
      */
      {
        name: "Inter",
        src: "/fonts/inter/Inter-variable-400.ttf",
      },
      {
        name: "Inter",
        src: "/fonts/inter/Inter-variable-400-italic.ttf",
      },
      /*
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-100-thin.ttf",
        weight: 100,
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-300-light.woff.ttf",
        weight: 300,
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-400-regular.woff.ttf",
        weight: 400,
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-500-medium.woff.ttf",
        weight: 500
      },
      */
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-600-bold.woff.ttf",
        weight: 600,
      },
      /*
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-700-extra-bold.ttf",
        weight: 700
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-900-black.woff.ttf",
        weight: 900
      },
      */
    ],
  },

  typescript: {
    typeCheck: false,

    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
        strictNullChecks: true,
        exactOptionalPropertyTypes: true,
        skipLibCheck: true,
      },
    },
  },
});
