import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = ({ authenticated, logoutUser}) => {
  return (
    <div className='navigator'>
        <ul>
        <img src='https://play-lh.googleusercontent.com/fXQVXTma1ENwAFjsxJ4IT6GntBr3RxWP3HMSLbNdvycl-0tscOQEeJIEAmehcNOt5hCp' alt='logo'></img>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
            <Link to='/planets'>Planets</Link>
            </li>
            {authenticated ? (
              <li className='log'>
            <p className='logout' onClick={logoutUser}>Logout</p>
            </li>) : (<Link to="/login" className='login'>Login</Link>)}
            
        </ul>
    </div>
  )
}

export default Navbar