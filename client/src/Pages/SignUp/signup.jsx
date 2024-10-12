import React, { useState } from 'react';
import TopNav from "../../Components/TopNav";

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState(''); // To store the success/error message
    const [error, setError] = useState(false);  // To handle error state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);  // Set success message
                setError(false);  // Clear any previous error
            } else {
                setMessage(data.message);  // Set error message from server
                setError(true);  // Indicate that it's an error
            }
        } catch (error) {
            console.error('There was an error!', error);
            setMessage('An unexpected error occurred.');
            setError(true);  // Indicate that it's an error
        }
    };

    return (
        <div className="pt-32 text-standard bg-slate-300 text-orange-800 font-bold w-full h-screen">
            <TopNav />
            <div className="w-[60%] min-h-80 bg-black text-white mx-auto my-auto mt-4 text-center p-4">
                <form onSubmit={handleSubmit} className="bg-slate-800 h-80 p-2">
                    <legend>Signup</legend>
                    <label htmlFor="username">Username: 
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className="ml-4 mt-4 text-black" 
                            value={formData.username} 
                            onChange={handleChange}
                        />
                    </label> <br />
                    <label htmlFor="password">Password:
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="ml-4 mt-3 text-black" 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                    </label> <br />
                    <input type="submit" value="Signup" className="bg-white text-black mt-10 p-3" />
                </form>

                {/* Alert Message */}
                {message && (
                    <div 
                        className={`mt-4 p-2 ${error ? 'bg-red-500' : 'bg-green-500'} text-white`}
                    >
                        {message}
                    </div>
                )}
            </div>      
        </div>
    );
}

export default Signup;
