import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { resolve } from "node:path";
const pathDir = (dir: string) => resolve(process.cwd(), dir);
export default defineUserConfig({
  // 站点配置
  base: "/front-end-study/",
  lang: "zh-CN",
  title: "Front End Study",
  description: "一个前端知识积累文档仓库，分享带来快乐，知识需要积累。",
  cache: pathDir(".vuepress/.cache"),
  temp: pathDir(".vuepress/.temp"),
  dest: pathDir("dist"),
  public: pathDir("public"),
  // 主题和它的配置
  //https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
  theme: defaultTheme({
    home: "/",
    logo: "https://avatars.githubusercontent.com/u/141436083?s=96&v=4",
    logoDark: "https://avatars.githubusercontent.com/u/141436083?s=96&v=4",
    colorMode: "auto",
    colorModeSwitch: true,
    navbar: [
      {
        text: "hello",
        link: "/hello/",
      },
      {
        text: "JS 基础",
        link: "/JS/",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "教程",
          children: [
            "/hello/readme.md",
            "/getting-started.md",
            "/JS/readme.md",
          ],
        },
      ],
    },
    repo: "czhlin-study/front-end-study",
    repoLabel: "源码地址",
  }),
  // 使用vite作为打包工具
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
