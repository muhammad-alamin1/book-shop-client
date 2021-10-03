import './book.css';
import React, { useContext, useEffect } from 'react';
import img1 from '../../img/image1.png';
import img2 from '../../img/image2.png';
import img3 from '../../img/image3.png';
import img4 from '../../img/image4.png';
import img5 from '../../img/image5.png';
import img6 from '../../img/image6.png';
import img7 from '../../img/image7.png';
import img8 from '../../img/image8.png';
import img9 from '../../img/image9.png';
import BookCard from './../BookCard/BookCard';
import { BrowserRouter as Router } from 'react-router-dom';
import Announcer from './../Search/Announcer';
import Search from './../Search/Search';
import { useState } from 'react';


const books = [
    {
        id: 1,
        bookCode: 2000,
        img: img1,
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        price: `$${134}`
    },
    {
        id: 2,
        bookCode: 2001,
        img: img2,
        title: 'Learn JavaScript Quickly',
        author: 'Dan Vanderkam',
        price: `$${132}`
    },
    {
        id: 3,
        bookCode: 2002,
        img: img3,
        title: 'Software Engineering at Google',
        author: 'Titus Winter',
        price: `$${342}`
    },
    {
        id: 4,
        bookCode: 2003,
        img: img4,
        title: 'Python Crash Course',
        author: 'Eric Matthes',
        price: `$${334}`
    },
    {
        id: 5,
        bookCode: 2004,
        img: img5,
        title: 'JavaScript Everywhere',
        author: 'Adam D. Scottark Lutz',
        price: `$${234}`
    },
    {
        id: 6,
        bookCode: 2005,
        img: img6,
        title: 'Effective TypeScript',
        author: 'Dan Vanderkam',
        price: `$${134}`
    },
    {
        id: 7,
        bookCode: 2006,
        img: img7,
        title: 'The C Programming Language',
        author: 'Brain W. Kernighan Dennis M. Ritchie',
        price: `$${342}`
    },
    {
        id: 8,
        bookCode: 2007,
        img: img8,
        title: 'The Road to React',
        author: 'Robin Wieruch',
        price: `$${334}`
    },
    {
        id: 9,
        bookCode: 2008,
        img: img9,
        title: 'Learning React',
        author: 'Alex Banks & Eve Porcello ',
        price: `$${225}`
    },
]

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return books.filter((post) => {
        const postName = post.title.toLowerCase();
        return postName.includes(query);
    });
};

export default function Book() {
    const [book, setBook] = useState([])
    // const [user, setUser] = useContext(userContext);
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(books, searchQuery);

    // fake data load to database
    useEffect(() => {
        const url = `http://localhost:7070/books`;
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setBook(data)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    return (
        <Router>
            <Announcer
                message={`${filteredPosts.length} posts`}
            />
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <h3 className="text-center">All book list</h3>
            <div className="my-5 book-list">
                {filteredPosts.map((post) => (
                    <li key={post.id}>{post.title} (code: {post.bookCode})</li>
                ))}
            </div>
            <div className="book container" id="home-page-book-list">
                <div className="row">
                    {
                        book.length === 0 && <div className="text-center"><div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div></div>
                    }
                    {
                        book.map((book) => <BookCard key={book.id} book={book} />)
                    }
                </div>
            </div>
        </Router>
    )
}
