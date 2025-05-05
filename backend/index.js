import express from "express";
import http from "http";

const app = express();

let db = []

app.options("/*", function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.end();
});

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.use(express.json());

app.get("/", (req, res) => {
	res.json("Hello World from the backend!!!");
});

app.get("/books", (req, res) => {
	console.log(db);
	res.json(db);
});

app.post("/books", (req, res) => {
	const values = {
		id: db.length,
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
		cover: req.body.cover
	};

	db.push(values);
	res.json("Book added successfully");
});

app.delete("/books/:id", (req, res) => {
	const bookID = parseInt(req.params.id, 10);

	db = db.filter((book) => {
		return book.id !== bookID;
	})
	res.json("Book deleted successfully");
});

app.put("/books/:id", (req, res) => {
	const bookID = parseInt(req.params.id, 10);

	db.forEach((book) => {
		if (book.id === bookID) {
			book.title = req.body.title;
			book.description = req.body.description;
			book.price = req.body.price;
			book.cover = req.body.cover;
		}
	})
	res.json("Book updated successfully");
});

let port = parseInt(process.env.BACKEND_PORT, 10)
if (Number.isNaN(port)) {
	port = 8800;
}

http
	.createServer(app)
	.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});

//npm start