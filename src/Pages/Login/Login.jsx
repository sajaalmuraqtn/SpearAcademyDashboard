import React from 'react'
import './login.css'
export default function Login() {
    return (
        < >
            <div className='div'>
                <div className="background">
                    <div className="shape" />
                    <div className="shape" />
                </div>
                <form>
                    <h3>Login Here</h3>
                    <label htmlFor="Email" className='text-light'>Email</label>
                    <input type="Email" placeholder="Email  " id="Email" />
                    <label htmlFor="password" className='text-light'>Password</label>
                    <input type="password" placeholder="Password" id="password" />
                    <button className='mt-5'>Log In</button>
                   
                </form>
            </div>

        </ >
    )
}
