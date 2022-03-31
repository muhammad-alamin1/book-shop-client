import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookCard from './../BookCard/BookCard';
import Announcer from './../Search/Announcer';
import Search from './../Search/Search';
import './book.css';


export default function Book() {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([]);

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
        const url = `http://localhost:8080/book/all-books`;
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
        console.log(product)
        const toBeAddedKey = product.id;
        const sameProduct = cart.find(pd => pd.id === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.id !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
    }

    let totalPrice = 0;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;

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
