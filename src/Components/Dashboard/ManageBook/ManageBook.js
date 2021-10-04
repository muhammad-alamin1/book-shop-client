import './managebook.css';
import React, { useEffect, useState } from 'react'

export default function ManageBook() {
    const [books, setBooks] = useState([]);

    // fake data load to database
    useEffect(() => {
        const url = `http://localhost:7070/books`;
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setBooks(data)
                // console.log(data)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])
    
    return (
        <div id="manageBook">
            <h3 className="my-4">All Book List</h3>
            <div className="row">
                <div className="col-md-3">
                    <h6 className="py-2">Name</h6>
                    {
                        books.map((book) => <p><strong>{book.id}.   </strong>{book.title}</p>)
                    }
                </div>
                <div className="col-md-4">
                    <h6 className="py-2">Author Name</h6>
                    {
                        books.map((book) => <p>{book.author}</p>)
                    }
                </div>
                <div className="col-md-2">
                    <h6 className="py-2">Code</h6>
                    {
                        books.map((book) => <p>{book.bookCode}</p>)
                    }
                </div>
                <div className="col-md-1">
                    <h6 className="py-2">Price</h6>
                    {
                        books.map((book) => <p>{book.price}</p>)
                    }
                </div>
                <div className="col-md-2">
                    <h6 className="py-2">Action</h6>
                    <span id="action-icon"><i class="fas fa-trash-alt"></i></span>
                    {
                       
                    }
                </div>
            </div>
        </div>
    )
}
