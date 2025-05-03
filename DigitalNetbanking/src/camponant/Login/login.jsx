import { React, useState } from 'react';
import './login.css'
import { NavLink } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function Login() {

    const [atmNumber, setAtmNumber] = useState();
    const [password, setpassword] = useState()
    const handleLogin = (e) => {
        e.preventDefault();
        // You can add your login logic here
        console.log('Logging in with ATM number:', atmNumber);
    };

    return (

        <div className="login-container">
            <h2>Net Banking Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="atm_number">ATM Number:</label>
                <input className='p-0'
                    type="text"
                    id="atm_number"
                    name="atm_number"
                    value={atmNumber}
                    onChange={(e) => setAtmNumber(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                />
                <div className='flex justify-center w-full'>
                    <NavLink to="/Land"><button type="submit" className='bg-blue-500 text-white px-5 py-1 w-fit ' >Login</button></NavLink>
                </div>
            </form>
            <p>Don't have an account?<NavLink to="/CreatePage">Create one</NavLink></p>
        </div>

    );
}

export default Login;
