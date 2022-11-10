import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='brand'>
            <img className='logo' src="/images/fav2.png" alt="logo" />
            <h1 className='title'>JAZ STORE</h1>
            </div>
            <img className='avatar' src="/images/1.png" alt="avr" />
        </div>
    )
}

export default Navbar