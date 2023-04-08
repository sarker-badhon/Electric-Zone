import React, { useState } from 'react';

const Login = () => {
    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleUsernameChange = (event) => {
          setUsername(event.target.value);
        };
      
        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Perform login logic here
          console.log(`Submitting login with username: ${username} and password: ${password}`);
        };



    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
        </form>
      </div>
    </div>
    );
};

export default Login;