import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.init';
import { useState } from 'react';
import { Link } from 'react-router';
import { useRef } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [success,setSuccess]=useState(false);
    const [errorMassage,setErrorMassage]=useState('');
    const emailRef=useRef();

    const handleLogin = (event)=>{
        event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;
console.log(email, password);

// reset error message
setSuccess(false);
setErrorMassage('');

//login logic will be added here
signInWithEmailAndPassword(auth, email, password)
.then(result=>{
    console.log(result);
if(!result.user.emailVerified){
    alert("please verify your email address");
}
else{
    setSuccess(true);
}

})
.catch(error=>{
console.log(error);
setErrorMassage(error.message);
})

    }

    const handleForgetPassword=()=>{
        const email=emailRef.current.value;

setErrorMassage('');
        // send password reset email
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Password reset email sent. Please check your inbox.');
        })
        .catch(error => {
            setErrorMassage(error.message);
        })
    }

    return (

        <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <label className="label">Email</label>
                    <input name='email' type="email" ref={emailRef} className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                    <input className="btn btn-neutral mt-4 hover:bg-blue-400 border-none shadow-none" type="submit" value="Login" />
                </form>
                <Link to="/register" className="link link-hover underline">Create an account</Link>
                {
                    errorMassage && <p className='text-red-600 mt-4'>{errorMassage}</p>
                }
                {
                    success && <p className='text-green-600 mt-4'>Login successful!</p>
                }
            </div>
        </div>

    );
};

export default Login;