import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		port: 80,
		cors: true,
		// https: {
		// 	key: process.env.SSL_KEY,
		// 	cert: process.env.SSL_CERT
		// },
		proxy: {}
	}
});
