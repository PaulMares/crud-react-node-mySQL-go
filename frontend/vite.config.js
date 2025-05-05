import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		port: 80,
		cors: true,
		proxy: {},
		allowedHosts: [
			"ad2c8a8a162124b85a35e2f2a019e9a0-1081224088.us-east-1.elb.amazonaws.com"
		]
	}
});
