import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { resolve } from "node:path";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "meta",
      { name: "algolia-site-verification", content: "775E508DED4DF092" },
    ],
  ],

  lang: "zh-CN",

  // 多语言配置："/" 为中文，"/en/" 为英文
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Jiang's Blog",
      description: "vuepress-theme-hope 的极客笔记",
    },
    "/en/": {
      lang: "en-US",
      title: "Jiang's Blog",
      description: "Geek notes powered by vuepress-theme-hope",
    },
  },

  theme,

  // 使用 vite 作为打包工具
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "vuepress-theme-hope/dist/client/blog": resolve(
            process.cwd(),
            "node_modules/vuepress-theme-hope/dist/client/blog.js",
          ),
        },
      },
    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});