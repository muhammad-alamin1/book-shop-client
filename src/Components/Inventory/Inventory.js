import './inventory.css';
import React from 'react';
import fakeData from '../../FakeData';


export default function Inventory() {
    const handleAddBook = () => {
        // fake data send to database
        const url = `http://localhost:7070/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div className="text-center py-5">
            <button onClick={handleAddBook} className="btn btn-success">Add Book</button>
        </div>
    )
}
