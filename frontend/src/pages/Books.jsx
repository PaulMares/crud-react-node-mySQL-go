import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const Books = () => {

	const [books, setBooks] = useState([]);
	const [dateString, setDateString] = useState("");
	const [title, setTitle] = useState("");
	const [reloads, setReloads] = useState(0);
	const reloadTimer = useRef(0);

	useEffect(() => {
		if (reloadTimer.current > 0) {
			clearTimeout(reloadTimer.current);
		}
		fetchAllBooks();
		fetchDateString();
		fetchTitle();
		reloadTimer.current = setTimeout(() => {
			setReloads((prev) => (prev + 1) % 10);
		}, 1000);
	}, [reloads]);

	const fetchAllBooks = async () => {
		try {
			const res = await axios.get('/api/backend/books');
			setBooks(res.data);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchDateString = async () => {
		try {
			const res = await axios.get('/api/api-2/time');
			setDateString(res.data);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchTitle = async () => {
		try {
			const res = await axios.get('/api/api-1/title');
			setTitle(res.data);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete('/api/backend/books/' + id);
			setReloads((prev) => (prev + 1) % 10);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h5>{dateString}</h5>
			<h1>{title}</h1>
			<div className="books">
				{books.map(book => (
					<div className="book" key={book.id}>
						{book.cover && <img src={book.cover} alt=""/>}
						<h2>{book.title}</h2>
						<p><strong>{book.description}</strong></p>
						<span>${book.price}</span>
						<button className="delete" onClick={() => handleDelete(book.id)}>
							Delete
						</button>
						<button className="update">
							<Link to={`/update/${book.id}`}>Update</Link>
						</button>
					</div>
				))}
			</div>
			<button className="addBookButton">
				<Link to="/add">Add new Book</Link>
			</button>
		</div>
	);
};

export default Books;
