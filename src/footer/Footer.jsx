import React from 'react'
import '../footer/footer.css'
import image from '../assest/Vector2.svg'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
            <div className="footer-menu">
                <div className="footer-left">
                <ul className='footer-list'>
                    <li>
                        <h5>Services</h5>
                    </li>
                    <li>
                        <p>SMM</p>
                    </li>
                    <li>
                        <p>Web development</p>
                    </li>
                    <li>
                        <p>Mobile apps</p>
                    </li>
                    <li>
                        <p>Mobile apps</p>
                    </li>
                    <li>
                        <p>Graphic design</p>
                    </li>
                </ul>
                <ul className='footer-list'>
                    <li>
                        <h5>Resources</h5>
                    </li>
                    <li>
                        <p>About us</p>
                    </li>
                    <li>
                        <p>Showcase</p>
                    </li>
                    <li>
                        <p>Blog</p>
                    </li>
                </ul>
                </div>
                <div className="footer-right">
                    <ul className='footer-list'>
                        <li>
                            <h5>Connect with us</h5>
                        </li>
                        <li>
                            <p>(239) 555-0108</p>
                        </li>
                        <li>
                            <p>hello@pixer.com</p>
                        </li>
                        <li>
                           <p className='f-text'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                        </li>
                    </ul>

                    <div class="footer_icon">
                    <i class="fa-brands fa-twitter" ></i>
                    <i class="fa-brands fa-facebook" ></i>
                    <i class="fa-brands fa-linkedin-in" ></i>
                    <i class="fa-brands fa-instagram" ></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="br"></div>
        <div className="container">
            <div className="footer-end">
                <img src={image} alt="logo" />
                <p>Copyright © 2022 Pixer</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
