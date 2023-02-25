import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

function AdminLogin() {
    const [pass, setPass] = useState('');
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8082/api/users/checkAdmin', { password: pass })
            .then((response) => {
                console.log(response.data);
                if (response.data.message === 'Success') {
                    // Cookies.set('access_token', response.data.access_token);
                    Cookies.set('access_token', 'TOP_SECRET');
                    history.push('/');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <form>
                <input type="password" name="password" onChange={(e) => setPass(e.target.value)} />
                <button onClick={submitForm}>Проверка</button>
            </form>
        </div>
    );
}

export default AdminLogin;
