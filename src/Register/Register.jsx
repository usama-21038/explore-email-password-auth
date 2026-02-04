import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        console.log(email, password,terms);

        if(!terms){
            alert('You must accept terms and conditions');
            return;
        }

        //create user,  =>upore thaka email ar pass ta niye kaj korbe
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className='max-w-sm border-amber-500 border-2 rounded-4xl p-10 mx-auto mt-20'>
            <h1 className='mb-4 text-2xl font-bold'>Create an account</h1>
            <form className='space-y-4' onSubmit={handleRegister}>
                {/* Email field */}

                <label className="input validator join-item">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>

                <br />
                {/* password field */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    {/* for show passShow Icon */}
                    <div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button onClick={() => { setShowPassword(!showPassword) }} className='btn btn-xs mr-[30px]'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />} </button>
                    </div>
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                <br />
                <label className="label">
                    <input type="checkbox" name='terms'  className="checkbox" />
                    Accept terms and conditions
                </label>
                <br />
                <input className='btn bg-green-700' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;