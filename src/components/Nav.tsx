import path from 'path'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
   
  return (
    <nav className='nav'>
        <ul className='nav-list'>
            <li><Link to={"/"} className='active'>Home</Link></li>
            <li><Link to={"/"}>Services</Link></li>
            <li><Link to={"/"}>Resume</Link></li>
            <li><Link to={"/"}>Work</Link></li>
            <li><Link to={"/"}>Contact</Link></li>
        </ul>
        <button className='hire-me'>Hire me</button>
    </nav>
  )
}

export default Nav