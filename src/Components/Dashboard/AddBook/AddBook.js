import './addBook.css';
import React, { useState } from 'react';

export default function AddBook() {
    // , img: ''
    const initialFormState = { id: null, title: '', author: '', bookCode: null, price: null, img:'' }
    const [user, setUser] = useState(initialFormState)
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // admin data send to database
        const formData = new FormData()
        formData.append('file', file)
        formData.append('img', user.img)
        formData.append('title', user.title)
        formData.append('author', user.author)
        formData.append('bookCode', user.bookCode)
        formData.append('price', user.price)
        fetch('http://localhost:7070/newAddBook', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    console.log(user)

    // handle input change
    const handleChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    // file change
    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    return (
        <div id="add-book">
            <h3 className="my-4">Add Book </h3>
            <form onSubmit={handleSubmit}>
                <label className="my-2" for="title">Book Name</label>
                <input onBlur={handleChange} type="text" name="title" id="title" className="form-control" required />

                <label className="my-2" for="author">Author Name</label>
                <input onBlur={handleChange} type="text" name="author" id="author" className="form-control" required />

                <label className="my-2" for="code">Add Book Code</label>
                <input onBlur={handleChange} type="number" name="bookCode" id="code" className="form-control" required />

                <label className="my-2" for="price">Add Price</label>
                <input onBlur={handleChange} type="text" name="price" id="price" className="form-control" required />

                <label className="my-2" for="img">Add Book Cover Photo</label>
                <input onChange={handleFileChange} onBlur={handleChange} type="file" name="img" id="img" className="form-control" required />
                <br />
                <input type="submit" value="Save" className="btn btn-success" />
            </form>
        </div>
    )
}
