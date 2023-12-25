import React from 'react'
import './footer.css'

export default function Footer() {
  return (
<footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">DoRRa</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#contact" className="footer__link">Contact Me</a>
            </li>
        </ul>
        <div className="footer__social">
            <a href="https://www.instagram.com/" className='footer__social-link' target='blank'>
            <i class="ri-instagram-line"></i>
            </a>
            <a href="https://www.facebook.com/" className='footer__social-link' target='blank'>
            <i class="ri-facebook-line"></i>
            </a>
            <a href="https://www.twitter.com/" className='footer__social-link' target='blank'>
            <i class="ri-twitter-x-line"></i>
            </a>
      
        </div>
        <span className="footer__copy">&#169; DorraNsir. All rights reserved</span>
    </div>
</footer>
  )
}
