import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import Cookies from 'js-cookie';

const ShowBookList = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [originalBooks, setOriginalBooks] = useState();
    const [onlyFree, setOnlyFree] = useState(false);
    const isAuthenticated = Cookies.get('access_token');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/books`)
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowBookList');
            });
    }, []);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/api/books/searchBooks`, {
                    params: { searchTerm },
                })
                .then((res) => {
                    setBooks(res.data);
                })
                .catch((err) => {
                    console.log('Error from ShowBookList', err);
                });
        }, 500); // Set the debounce timeout to 500ms

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [searchTerm]);

    let bookList;

    if (!books) {
        bookList = 'there is no book record!';
    } else {
        bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }
    const handleOnlyFree = (e) => {
        setOnlyFree(e.target.checked);
        if (e.target.checked) {
            setOriginalBooks(books);
            setBooks(books.filter((book) => !book.takenBy));
        } else {
            setBooks(originalBooks);
        }
    };
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
                    <input
                        type="text"
                        placeholder="Търсене по заглавие, автор..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <label htmlFor="onlyFreeCheckbox">
                        <input
                            type="checkbox"
                            id="onlyFreeCheckbox"
                            placeholder="Само свободни"
                            onChange={handleOnlyFree}
                            checked={onlyFree}
                        />
                        Само свободни книги
                    </label>
                </div>

                <div className="list">{bookList}</div>
            </div>
        </div>
    );
};

export default ShowBookList;
