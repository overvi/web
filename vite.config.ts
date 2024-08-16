import { sync } from "glob";
import { ViteMinifyPlugin } from "vite-plugin-minify";

//@ts-ignore
import { resolve } from "path";

export default {
  root: "./src",
  plugins: [ViteMinifyPlugin({})],
  resolve: {
    alias: {
      //@ts-ignore
      "@ts": resolve(__dirname, "src/assets/ts"),
    },
  },
  build: {
    appType: "mpa",
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
};
