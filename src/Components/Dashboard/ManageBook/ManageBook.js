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
                console.log(data)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    // delete single product
    const deleteProduct = (id) =>{
        fetch(`http://localhost:7070/delete/${id}`,{
            method: 'DELETE',
        })
        .then(res =>res.json())
        .then(result =>{
            console.log('Delete successfully')
        })
    }
    
    // Update single book
    // const updateProduct = (id) =>{
    //     // fetch(`book/${id}`)
    //     // .then(res =>res.json())
    //     // .then(data =>{
    //     //     console.log(data)
    //     // })
    // }

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
                                <button  id="action-edit-icon"><i class="far fa-edit"></i></button>
                                <button onClick={() => deleteProduct(`${book._id}`)} id="action-icon"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
//> 