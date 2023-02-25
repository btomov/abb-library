import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function CreateBook(props) {
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
        image: null,
    });

    const { title, author, description, image } = book;

    const onChange = (e) => {
        if (e.target.name === 'image') {
            setBook({ ...book, image: e.target.files[0] });
        } else {
            setBook({ ...book, [e.target.name]: e.target.value });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('image', image);

        axios
            .post('http://localhost:8082/api/books', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                setBook({
                    title: '',
                    author: '',
                    description: '',
                    image: null,
                });
                props.history.push('/');
            })
            .catch((err) => {
                console.log(err, ' err');
                console.log('Error in CreateBook!');
            });
    };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Всички книги
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Добави книга</h1>

                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Заглавие"
                                    name="title"
                                    className="form-control"
                                    value={title}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Автор"
                                    name="author"
                                    className="form-control"
                                    value={author}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Описание"
                                    name="description"
                                    className="form-control"
                                    value={description}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="file" name="image" onChange={onChange} />
                            </div>

                            <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBook;
