import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext'
const Navbar = () => {
    const { user, Logout } = useAuth()
    // console.log(user);
    const navigate = useNavigate()

    const handleLogOut = async()=>{
        try {
            await Logout()
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to="/">
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX </h1>
            </Link>
            {
                user?.email ? (
                    <div>
                        <Link to="/account">
                            <button className='text-white pr-4'> Account </button>
                        </Link>
                            <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/Login">
                            <button className='text-white pr-4'>Sign In </button>
                        </Link>
                        <Link to="/signUp">
                            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar
