export default {
  navbar: [
    //配置顶部导航
    //https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    {
      text: "hello",
      link: "/hello/",
    },
  ],
  sidebar: {
    //配置侧边栏
    //https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    "/hello/": [
      {
        text: "教程",
        children: ["/hello/readme.md", "/getting-started.md"],
      },
    ],
  },
};
