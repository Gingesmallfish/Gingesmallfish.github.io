import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { resolve } from "node:path";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "极客笔记",
  description: "vuepress-theme-hope 的极客笔记",

  theme,

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