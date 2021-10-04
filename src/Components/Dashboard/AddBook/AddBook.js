import './addBook.css';
import React from 'react';

export default function AddBook() {
    return (
        <div id="add-book">
            <h3 className="my-4">Add Book </h3>
            <form>
                <label className="my-2" for="bookName">Book Name</label>
                <input type="text" id="bookName" className="form-control" />
                <label className="my-2" for="author">Author Name</label>
                <input type="text" id="author" className="form-control" />
                <label className="my-2" for="code">Add Book Code</label>
                <input type="number" id="code" className="form-control" />
                <label className="my-2" for="price">Add Price</label>
                <input type="number" id="price" className="form-control" />
                <label className="my-2" for="bookName">Add Book Cover Photo</label>
                <input type="file" id="bookName" className="form-control" />
                <br/>
                <input type="submit" value="Save" className="btn btn-success" />
            </form>
        </div>
    )
}
