import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "192.168.150.144", // 指定網路 IP
    port: 3000, // 可以自定義端口號，默認是3000
    open: true, // 啟動時自動打開瀏覽器
  },
});
