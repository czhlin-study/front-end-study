export default {
  navbar: [
    //配置顶部导航
    //https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    {
      text: "hello",
      link: "/hello/",
    },
    {
      text: "unKnow",
      link: "/unKnow/",
    },
    {
      text: "如何开发",
      link: "/contributing.md",
      // 该元素将一直处于激活状态
      activeMatch: "^/contributing",
    },
  ],
  sidebar: {
    //配置侧边栏
    //https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    "/hello/": [
      {
        text: "教程",
        children: ["/hello/readme.md"],
      },
    ],
    "/unKnow/": [
      {
        text: "test",
        children: ["/unKnow/readme.md"],
      },
    ],
  },
};
