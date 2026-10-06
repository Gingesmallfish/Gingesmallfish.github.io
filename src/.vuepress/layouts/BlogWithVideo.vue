<script lang="ts">
declare const __VUEPRESS_BASE__: string;
</script>

<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/dist/client/blog";

const withBase = (url: string): string => {
  if (/^(https?:)?\/\//.test(url) || url.startsWith("data:")) return url;
  return __VUEPRESS_BASE__ + url.replace(/^\/?/, "");
};

const isVideo = (url: string | null | undefined): url is string =>
  !!url && /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
</script>

<template>
  <Blog>
    <template #articleCover="{ cover }">
      <video
        v-if="isVideo(cover)"
        class="vp-article-cover"
        :src="withBase(cover)"
        autoplay
        muted
        loop
        playsinline
      />
      <img
        v-else-if="cover"
        class="vp-article-cover"
        :src="withBase(cover)"
        loading="lazy"
        alt=""
      />
    </template>
  </Blog>
</template>