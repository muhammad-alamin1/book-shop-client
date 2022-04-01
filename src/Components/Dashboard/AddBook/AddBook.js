import axios from "axios";
import React, { useState } from "react";
import "./addBook.css";

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [bookCode, setBookCode] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData();

        formData.append("file", file);
        formData.append("title", title);
        formData.append("author", author);
        formData.append("bookCode", bookCode);
        formData.append("price", price);

        try {
            const response = await axios({
                method: "post",
                url: "https://book-shop2303.herokuapp.com/book/add-book",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data.message);
            if (response.status === 200 || response.status === 201) {
                setError('');
                setSuccess(response.data.message);
            }
        } catch (error) {
            setSuccess('');
            setError('Book added failed.!');
        }

    };

    // file change
    const handleFileSelect = (event) => {
        setFile(event.target.files[0])
    }

    return (
        <div id="add-book">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <h3 className="my-4">Add Book </h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <label className="my-2" for="title">
                    Book Name
                </label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    required
                />

                <label className="my-2" for="author">
                    Author Name
                </label>
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    name="author"
                    id="author"
                    className="form-control"
                    required
                />

                <label className="my-2" for="code">
                    Add Book Code
                </label>
                <input
                    value={bookCode}
                    onChange={(e) => setBookCode(e.target.value)}
                    type="text"
                    name="bookCode"
                    id="code"
                    className="form-control"
                    required
                />

                <label className="my-2" for="price">
                    Add Price
                </label>
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    name="price"
                    id="price"
                    className="form-control"
                    required
                />

                <label className="my-2" for="img">
                    Add Book Cover Photo
                </label>
                <input
                    // value={file}
                    onChange={handleFileSelect}
                    type="file"
                    name="file"
                    id="img"
                    className="form-control"
                    required
                />
                <br />
                <input type="submit" value="Save" className="btn btn-outline-success" />
            </form>
        </div>
    );
}
