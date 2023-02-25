import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ShowBookList} />
                    <ProtectedRoute path="/create-book" component={CreateBook} />
                    <ProtectedRoute path="/edit-book/:id" component={UpdateBookInfo} />
                    <Route path="/show-book/:id" component={ShowBookDetails} />
                    <Route path="/admin" component={AdminLogin} />
                </div>
            </Router>
        );
    }
}

export default App;
