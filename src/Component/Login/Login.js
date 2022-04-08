import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h1>Please Login!</h1>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle} >Google Sign In</button>
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