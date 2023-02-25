import React, { useState } from 'react';

function LoginRegister() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            <form>
                <input name="username" />
                <input name="password" />
            </form>
        </div>
    );
}

export default LoginRegister;
