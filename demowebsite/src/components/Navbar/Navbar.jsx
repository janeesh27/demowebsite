import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
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

                <div className='social-links'>
                    <div className='socialmedia-desktop'>
                        <ul>
                            <li><a href='https://www.linkedin.com/company/the-indegenous/?viewAsMember=true' target='_indegrnous'><FaLinkedinIn /></a></li>
                            <li><a href='https://www.instagram.com/theindegenous/' target='_indegrnous'><FaInstagramSquare /></a></li>
                            <li><a href='https://www.facebook.com/theindegenous' target='_indegrnous'><FaFacebookSquare /></a></li>
                        </ul>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar
