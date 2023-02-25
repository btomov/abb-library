import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const book = props.book;
    const isAuthenticated = Cookies.get('access_token');
    const [takenBy, setTakenBy] = useState('');
    const [reservedBy, setReservedBy] = useState('');
    console.log(book);
    const sendTakenBy = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8082/api/books/takeBook', { bookId: book._id, takerName: takenBy })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const sendReserve = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8082/api/books/reserve', { bookId: book._id, reserveeName: reservedBy })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>{book.title}</Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
                <p>Взета от: {book.takenBy}</p>
                {isAuthenticated && (
                    <form>
                        <input
                            name="takenBy"
                            value={takenBy}
                            placeholder="Взета от име"
                            onChange={(e) => setTakenBy(e.target.value)}
                        />
                        <button onClick={sendTakenBy}>Изпрати</button>
                    </form>
                )}
                <form>
                    <input
                        name="takenBy"
                        value={reservedBy}
                        placeholder="Име за резервация"
                        onChange={(e) => setReservedBy(e.target.value)}
                    />
                    <button onClick={sendReserve}>Изпрати</button>
                </form>
            </div>
        </div>
    );
};

export default BookCard;
