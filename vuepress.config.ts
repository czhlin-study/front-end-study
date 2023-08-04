import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { resolve } from "node:path";
const pathDir = (dir: string) => resolve(process.cwd(), dir);
export default defineUserConfig({
  // 站点配置
  lang: "en-US",
  title: "Hello VuePress",
  description: "Just playing around",
  cache: pathDir(".vuepress/.cache"),
  temp: pathDir(".vuepress/.temp"),
  dest: pathDir("dist"),
  public: pathDir("public"),
  // 主题和它的配置
  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
  // 使用vite作为打包工具
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
