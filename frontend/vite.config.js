import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		port: 80,
		cors: true,
		proxy: {
			"/api/backend": {
				target: "http://backend.qa.svc.cluster.local:8800",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/backend/, "")
			},
			"/api/api-1": {
				target: "http://api-1.qa.svc.cluster.local:8802",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/api-1/, "")
			},
			"/api/api-2": {
				target: "http://api-2.qa.svc.cluster.local:8804",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/api-2/, "")
			}
		},
		allowedHosts: [
			"ad2c8a8a162124b85a35e2f2a019e9a0-1081224088.us-east-1.elb.amazonaws.com",
			"pauldoestech.dev",
			"uat.pauldoestech.dev",
			"qa.pauldoestech.dev",
			"k8s-sharedfrontend-c96d91d6ec-991894069.us-east-1.elb.amazonaws.com"
		]
	}
});
