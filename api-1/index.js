import express from "express";
import http from "http";

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.use(express.json());

app.get("/", (req, res) => {
	res.json("Hello World from api-1!!!");
});

app.get("/title", (req, res) => {
	res.json("Lama Book Shop 4: If This Works I'll Cry");
});

http
	.createServer({
		key: process.env.SSL_KEY,
		cert: process.env.SSL_CERT
	}, app)
	.listen(process.env.API1_PORT || 8802, () => {
		console.log(`Server is running on port ${process.env.API1_PORT || 8802}`);
	});

//npm start