import React from 'react'
import "./Footer.css"
import 'remixicon/fonts/remixicon.css'
import footer_logo from "../../Assets/logo_big.png"
import instagram_icon from "../../Assets/instagram_icon.png"
import watsapp_icon from "../../Assets/whatsapp_icon.png"
import painters_icon from "../../Assets/pintester_icon.png"
import telegram_icon from "../../Assets/telegram-line.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li >Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
             <Link to={'@dostonck_me'}> <img src={instagram_icon} alt="" /></Link>  
            </div>
            <div className="footer-icons-container">
             <Link to={'/'}> <img src={watsapp_icon} alt="" /></Link>  
            </div>
            <div className='footer-icons-container1'>
              <Link to={'/'}> <img src={telegram_icon} alt="" />  </Link>
            </div>
            <div className="footer-icons-container">
              <Link to={'t.me/Doston_akken'}> <img src={painters_icon} alt="" /></Link> 
            </div>
        </div>
        <div className="footer-corpyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>

    </div>
    
    </>
  )
}

export default Footer