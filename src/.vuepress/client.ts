import { defineClientConfig } from "vuepress/client";
import { Docsearch } from "@vuepress/plugin-docsearch/client";

import BlogWithVideo from "./layouts/BlogWithVideo.vue";

export default defineClientConfig({
  layouts: {
    BlogWithVideo,
  },
  enhance({ app }) {
    app.component("SearchBox", Docsearch);
  },
});