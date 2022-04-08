import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please Login!</h1>
            <div style={{margin:'20px'}}>
                <button>Google Sign In</button>
            </div>
            <form>
               
                <input type="email" placeholder='Your Email' /><br></br>
                <input type="password" placeholder='Your Password'/><br></br>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;