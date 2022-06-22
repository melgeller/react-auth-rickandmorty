import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='listContainer'>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
            <Link to='/planets'>Planets</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar