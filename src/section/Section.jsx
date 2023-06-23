import React from 'react'
import '../section/section.css'
import logo1 from '../assest/logo.svg'
import logo2 from '../assest/logo2.svg'
import logo3 from '../assest/logo3.svg'
import logo4 from '../assest/logo4.svg'

const Section = () => {
  return (
    <div>
        <section>
        <div className="container">
        <h2 className='section-title'>How can we help you?</h2>

        <div className="card-menu">
        <div className="card-1">
            <div className="card-list">
                <h4>Web Designer</h4>
               <div className="img">
               <img src={logo1} alt="logo" />
               </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <p className='span'>View  more</p>
        </div>

        <div className="card-1">
            <div className="card-list">
                <h4>SMM</h4>
               <div className="img">
               <img src={logo3} alt="logo" />
               </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <p className='span'>View  more</p>
        </div>

        <div className="card-1">
            <div className="card-list">
                <h4>Branding</h4>
                <div className="img">
                <img src={logo4} alt="logo" />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <p className='span'>View  more</p>
        </div>


        <div className="card-1">
            <div className="card-list">
                <h4>Developer</h4>
                <div className="img">
                <img src={logo3} alt="logo" />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <p className='span'>View  more</p>
        </div>

        <div className="card-1">
            <div className="card-list">
                <h4>Graphic design</h4>
               <div className="img">
               <img src={logo2} alt="logo" />
               </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <h5 className='span'>View  more</h5>
        </div>
      </div>
      </div>
        </section>
    </div>
  )
}

export default Section
