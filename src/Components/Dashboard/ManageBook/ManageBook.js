import './managebook.css';
import React, { useEffect, useState } from 'react'

export default function ManageBook() {
    const [books, setBooks] = useState([]);
    const [update, setUpdate] = useState({});
    const textInput = React.useRef();
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

    // delete single product
    const deleteProduct = (id) => {
        fetch(`http://localhost:7070/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log('Delete successfully')
            })
    }

    // Update single book
    const updateProduct = (id) => {
        fetch(`http://localhost:7070/book/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdate(data);
            })
    }

    // update
    const singleProductUpdating = (id, event) => {
        fetch(`http://localhost:7070/update/${id}`, {
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(books)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.log(err))
            


    }

    return (
        <div id="manageBook">
            <h3 className="my-4">All Book List</h3>
            <table>
                <thead >
                    <tr >
                        <th>#ID</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {books.map(book => (
                        <tr key={book._id}>
                            <td>{book._id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.bookCode}</td>
                            <td>
                                <button onClick={() => updateProduct(`${book._id}`)} id="action-edit-icon"><i class="far fa-edit"></i></button>
                                <button onClick={() => deleteProduct(`${book._id}`)} id="action-icon"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-5 text-center" id="update">
                <h3 className="py-2">Update Book</h3>
                <label>Title</label>
                <input className="form-control" type="text" value={update.title} name="title" /><br />
                <label>Author</label>
                <input className="form-control" type="text" value={update.author} name="author" /><br />
                <label>Book Code</label>
                <input className="form-control" type="number" value={update.bookCode} name="bookCode" /><br />
                <label>Price</label>
                <input className="form-control" type="number" value={update.price} name="price" /><br />
                <button onClick={() => singleProductUpdating(`${books._id}`)} className="btn btn-success">Update</button>
            </div>
        </div>
    )
}
//>