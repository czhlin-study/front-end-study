import { viteBundler } from "@vuepress/bundler-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { pathDir } from "./build";
export default viteBundler({
  viteOptions: {
    resolve: {
      alias: {
        "@": pathDir("src"),
      },
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".vue",
        ".tsx",
        ".json",
        ".css",
        ".scss",
      ],
    },
    plugins: [vueJsx()],
  },
  vuePluginOptions: {},
});
