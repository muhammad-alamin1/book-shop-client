import axios from "axios";
import React, { useEffect, useState } from "react";
import "./managebook.css";

export default function ManageBook() {
    const [id, setId] = useState("");
    const [books, setBooks] = useState([]);
    const [update, setUpdate] = useState({
        title: "",
        author: "",
        bookCode: "",
        price: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const textInput = React.useRef();

    // all books data load to database
    useEffect(() => {
        const url = `http://localhost:8080/book/all-books`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.books);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // delete single product
    const deleteBook = async (id) => {
        const response = await axios.delete(
            `http://localhost:8080/book/delete/${id}`
        );
        console.log(response);

        if (response.status === 200 || response.status === 201) {
            setSuccess(response.data.message);
        } else {
            setError(`Book does not delete.!`);
        }
    };

    // load single book && show input fields
    const updateBook = async (id) => {
        setId(id);
        await fetch(`http://localhost:8080/book/single/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUpdate(data.book);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // update
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(
            `http://localhost:8080/book/update/${id}`,
            update
        );

        if (response.status === 200 || response.status === 201) {
            setSuccess(response.data.message);
        } else {
            setError(`Book does not update.!`);
        }
    };

    // handle change
    const handleChange = (event) => {
        const newData = { ...update };
        newData[event.target.name] = event.target.value;
        setUpdate(newData);
    };

    return (
        <div id="manageBook">
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
            <h3 className="my-4">All Book List</h3>
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book._id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.bookCode}</td>
                            <td>
                                <button
                                    onClick={() => updateBook(`${book._id}`)}
                                    id="action-edit-icon"
                                >
                                    <i class="far fa-edit"></i>
                                </button>
                                <button
                                    onClick={() => deleteBook(`${book._id}`)}
                                    id="action-icon"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-5 text-center" id="update">
                <h3 className="py-2">Update Book</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        value={update.title}
                        onChange={handleChange}
                        name="title"
                        placeholder="updated name"
                    />
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        value={update.author}
                        onChange={handleChange}
                        name="author"
                        placeholder="updated author name"
                    />
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        value={update.bookCode}
                        onChange={handleChange}
                        name="bookCode"
                        placeholder="updated book code"
                    />
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        value={update.price}
                        onChange={handleChange}
                        name="price"
                        placeholder="updated price"
                    />
                    <br />
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-outline-success"
                    />
                </form>
            </div>
        </div>
    );
}
//>
