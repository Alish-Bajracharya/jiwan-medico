import axios from 'axios'
import  { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('admin@gmail.com')  // Default email
    const [password, setPassword] = useState('admin@123')    // Default password

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password })
            if (response.data.success) {
                setToken(response.data.token) // Set token in state/context
                toast.success("Login successful!")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error("Login Error:", error) // Logs the error
            toast.error("Login failed. Please check your credentials.")
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' 
                            type="email" 
                            placeholder='Your@email.com' 
                            required 
                        />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' 
                            type="password" 
                            placeholder='Enter your password' 
                            required 
                        />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-gray-900' type='submit'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

// Ensure setToken is a required function prop
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
