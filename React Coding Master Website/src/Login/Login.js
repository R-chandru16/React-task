


import React, { useState } from 'react';
import './Login.css'
// Define a static list of users and passwords
const users = [

    { username: 'admin01', password: 'password1' },
    { username: 'admin2', password: 'password2' },
    { username: 'admin3', password: 'password3' },
];
export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogin(event) {
        event.preventDefault();
        // Prevent the default form submission  
        // Look for a user with the entered username and password 
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {

            // If a user was found, log them in   
            console.log('User logged in:', user.username);
            setError('');
            window.location = '/home'; // Clear any previous error messages    
        } else {

            // If no user was found, display an error message     
            console.log('Login failed');
            setError('Invalid username or password');
        }
    } return (
        <div className="nav" >
            <>
                <ul>
                    <h3>CODINGMARKET</h3>



                </ul>
            </>

            <div className="login-container">
                <form onSubmit={handleLogin} className="login-form">

                    <h2 className="login-title">Login</h2>
                    <label className="login-label">
                        <span className="login-label-text">Username:</span>
                        <input type="text" value={username} onChange={event => setUsername(event.target.value)}
                            className="login-input" />
                    </label>
                    <label className="login-label">
                        <span className="login-label-text">Password:</span>
                        <input type="password" value={password} onChange={event => setPassword(event.target.value)}
                            className="login-input" />
                    </label>
                    <button type="submit" className="login-button">Log In</button>
                    {error && <div className="login-error">{error}</div>}
                </form>
            </div>
        </div>
    );
}