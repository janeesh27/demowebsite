import React from 'react'
import {Link} from 'react-router-dom'
function Navbar()
 {
  return (
    <>
        <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
The Indegenous
            </Link>
        </div>


       </nav>
    </>
  )
}

export default Navbar
