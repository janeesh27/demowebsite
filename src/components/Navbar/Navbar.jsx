import React from 'react'
// import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import './Navbar.css'
function Navbar() {
    return (
        <>
            <nav className='main-nav'>


                <div className='logo'>
                    <h2>
                        <span>T</span>he
                        <span>I</span>ndegenous
                    </h2>
                </div>

                <div className='menu-bar'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        
                        
                    </ul>
                </div>

                <div className='social'>
                    <div className="socialmedia-desktop">
                        <ul>
                            <li><a href='https://www.linkedin.com/company/the-indegenous/?viewAsMember=true' target='_indegenous'><FaLinkedinIn /></a></li>
                            <li><a href='https://www.instagram.com/theindegenous/' target='_indegenous'><FaInstagramSquare /></a></li>
                            <li><a href='https://www.facebook.com/theindegenous' target='_indegenous'><FaFacebookSquare /></a></li>
                        </ul>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar
