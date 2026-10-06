import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "pen-to-square",
      prefix: "notes/",
      children: [
        {
          text: "前端基础",
          prefix: "frontend/",
          children: [ "html","css","javascript","vue", "framework", ],
        },
      ],
    },
    {
      text: "项目",
      icon: "folder-open",
      link: "project/",
    },
    {
      text: "部署",
      icon: "rocket",
      link: "deploy/",
    },
    {
      text: "关于本站",
      icon: "circle-info",
      prefix: "about/",
      children: ["homepage", "contact", "links", "equipment"],
    },
  ],
});