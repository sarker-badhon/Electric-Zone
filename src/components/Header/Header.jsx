import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='header'>
            <div title="Electric Zone" className='web-title '>
                <Link to="/">
                    Electric Zone
                    </Link>
            </div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
            
        </div>
        </div>
    )
}
export default Header;