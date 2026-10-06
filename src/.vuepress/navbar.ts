import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "pen-to-square",
    prefix: "/notes/",
    children: [
      {
        text: "前端基础",
        icon: "code",
        prefix: "frontend/",
        children: [
          { text: "HTML", icon: "code", link: "html" },
          { text: "CSS", icon: "code", link: "css" },
          { text: "JavaScript", icon: "code", link: "javascript" },
          { text: "Vue", icon: "code", link: "vue" },
          { text: "框架学习", icon: "code", link: "framework" },
        ],
      },
    ],
  },
  {
    text: "项目",
    icon: "folder-open",
    link: "/project/",
  },
  {
    text: "部署",
    icon: "rocket",
    link: "/deploy/",
  },
  {
    text: "时间轴",
    icon: "clock",
    link: "/timeline/",
  },
  {
    text: "分类",
    icon: "folder-tree",
    link: "/category/",
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/你的用户名",
  },
  {
    text: "关于本站",
    icon: "circle-info",
    prefix: "/about/",
    children: [
      { text: "个人主页", icon: "user", link: "homepage" },
      { text: "联系作者", icon: "envelope", link: "contact" },
      { text: "友情链接", icon: "link", link: "links" },
      { text: "工作装备", icon: "laptop-code", link: "equipment" },
    ],
  },
]);