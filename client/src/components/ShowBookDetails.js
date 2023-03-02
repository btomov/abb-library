import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const ShowBookDetails = (props) => {
    const [book, setBook] = useState({});
    const isAuthenticated = Cookies.get('access_token');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/books/${props.match.params.id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowBookDetails');
            });
    }, [props.match.params.id]);

    const onDeleteClick = (id) => {
        axios
            .delete(`${process.env.REACT_APP_BACKEND_URL}/api/books/${id}`)
            .then((res) => {
                props.history.push('/');
            })
            .catch((err) => {
                console.log('Error form ShowBookDetails_deleteClick');
            });
    };

    let BookItem = (
        <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Заглавие</td>
                        <td>{book.title}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Автор</td>
                        <td>{book.author}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Published Date</td>
                        <td>{book.published_date}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Описание</td>
                        <td>{book.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Взета от: //TODO</td>
                        <td>{book.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Следваща резервация от: //TODO</td>
                        <td>{book.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="ShowBookDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <br /> <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Всички книги
                        </Link>
                    </div>
                    <br />
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">{book.title}</h1>
                        <hr /> <br />
                    </div>
                </div>
                <div>{BookItem}</div>
                {isAuthenticated && (
                    <div className="row">
                        <div className="col-md-6">
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-lg btn-block"
                                onClick={() => onDeleteClick(book._id)}
                            >
                                Изтриване
                            </button>
                            <br />
                        </div>
                        <div className="col-md-6">
                            <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                                Редактиране
                            </Link>
                            <br />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowBookDetails;
