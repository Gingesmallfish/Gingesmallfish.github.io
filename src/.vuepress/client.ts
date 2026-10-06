import { defineClientConfig } from "vuepress/client";

// 自定义布局 BlogWithVideo
import BlogWithVideo from "./layouts/BlogWithVideo.vue";

// import your custom styles here
export default defineClientConfig({
  layouts: {
    BlogWithVideo,
  },
});