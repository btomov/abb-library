import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import Cookies from 'js-cookie';

const ShowBookList = () => {
    const [books, setBooks] = useState([]);
    const isAuthenticated = Cookies.get('access_token');

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/books', { headers: { Authorization: `Bearer ${Cookies.get('token')}` } })
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowBookList');
            });
    }, []);

    console.log('PrintBook: ' + books);

    let bookList;

    if (!books) {
        bookList = 'there is no book record!';
    } else {
        bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    return (
        <div className="ShowBookList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">Библиотека</h2>
                    </div>

                    {isAuthenticated && (
                        <div className="col-md-11">
                            <Link to="/create-book" className="btn btn-outline-warning float-right">
                                + Добави нова книга
                            </Link>
                            <br />
                            <br />
                            <hr />
                        </div>
                    )}
                </div>

                <div className="list">{bookList}</div>
            </div>
        </div>
    );
};

export default ShowBookList;
