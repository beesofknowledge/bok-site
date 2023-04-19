// docs/vite.config.js
import { SimpleSearch } from "vitepress-plugin-simple-search";
import { defineConfig } from "vite";

const re = new RegExp("{{.*}}|#|<.*>", "gim");

export default defineConfig({
  plugins: [
    SimpleSearch(
      {
        partialsToIgnore: [
          "index.md",
          "about/todo.md",
          "/classes",
        ],
        regexForContentStripping: re
      }
    )
  ],
});
