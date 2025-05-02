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
	res.json("Hello World from api-2!!!");
});

app.get("/time", (req, res) => {
	res.json(new Date().toDateString());
});

http
	.createServer({
		key: process.env.SSL_KEY,
		cert: process.env.SSL_CERT
	}, app)
	.listen(process.env.API2_PORT || 8804, () => {
		console.log(`Server is running on port ${process.env.API2_PORT || 8804}`);
	});

//npm start