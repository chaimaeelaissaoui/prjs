import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img src={assets.logo}  className="logoS"/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates et corporis iusto atque vel beatae nihil quod. Quis distinctio
                     quos deleniti nobis veritatis laboriosam illum, 
                     maiores commodi eius inventore.</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />    
                        <img src={assets.linkedin_icon} alt="" />
                     </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Police</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+2126 399 061 03</li>
                        <li>shoprose90@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                copyright C 2024 
            </p>
        </div>
    )
}

export default Footer
