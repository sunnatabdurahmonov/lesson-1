import React from 'react'
import '../header/header.css'
import image from '../assest/Vector.svg'
import Hero from './Hero'

const Navbar = () => {
  return (
    <div>
        <header>
            <nav>
                <div className="container nav-menu">
                    <div className="menu-list">
                    <div className="menu">
                    <img src={image} alt="photo" />
                    </div>
                    <ul className='list'>
                       <li>Services</li>
                       <li>Portfolio</li>
                       <li>Team</li>
                       <li>Blog</li>
                       <li>Contacts</li>
                    </ul>
                    </div>
                    <div className="btn">
                        <button className='button'>(239) 555-0108</button>
                    </div>
                </div>
            </nav>
        </header>
        <Hero/>
    </div>
  )
}

export default Navbar