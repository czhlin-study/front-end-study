import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import viteConfig from "./vite.config";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { pathDir } from "./build";
import appConfig from "./app.config";
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
  alias: {
    "@": pathDir("src"),
  },
  // 主题和它的配置
  //https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
  theme: defaultTheme({
    home: "/",
    logo: "https://avatars.githubusercontent.com/u/141436083?s=96&v=4",
    logoDark: "https://avatars.githubusercontent.com/u/141436083?s=96&v=4",
    colorMode: "auto",
    colorModeSwitch: true,
    navbar: appConfig.navbar,
    lastUpdatedText: "最近更新",
    contributorsText: "贡献者",
    editLinkText: "编辑此页",
    editLinkPattern: ":repo/edit/:branch/src/docs/:path",
    sidebar: appConfig.sidebar,
    repo: "czhlin-study/front-end-study",
    repoLabel: "源码地址",
  }),
  // 使用vite作为打包工具
  bundler: viteConfig,
  plugins: [
    registerComponentsPlugin({
      componentsDir: pathDir("src/components"),
      componentsPatterns: ["**/*.vue"],
      getComponentName: (filename) => {
        const execArr = /(\w+)(\/index)?(\.vue)$/.exec(filename);
        return execArr?.[1] || "";
      },
    }),
  ],
});
