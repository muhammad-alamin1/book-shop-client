import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookCard from './../BookCard/BookCard';
import Announcer from './../Search/Announcer';
import Search from './../Search/Search';
import './book.css';


export default function Book() {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState({});
    const [count, setCount] = useState(0);

    // filter books
    const filterPosts = (posts, query) => {
        if (!query) {
            return posts;
        }

        return books.filter((post) => {
            const postName = post.title.toLowerCase();
            return postName.includes(query);
        });
    };

    // search query
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(books, searchQuery);

    // data load to database
    useEffect(() => {
        const url = `https://book-shop2303.herokuapp.com/book/all-books`;
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setBooks(data.books)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Add Product to card
    const handleAddProduct = (product) => {
        setCount(count + 1);
        setCart(product)
    }

    return (
        <Router>
            <Announcer
                message={`${filteredPosts.length} posts`}
            />
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <div className="book container" id="home-page-book-list">
                <div className="row">
                    {
                        books.length === 0 && <div className="text-center"></div>
                    }
                    {filteredPosts.map((book) => (
                        <BookCard key={book._id} book={book} handleAddProduct={handleAddProduct} />
                    ))}
                </div>
            </div>
        </Router>
    )
}
