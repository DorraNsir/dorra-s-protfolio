import React, { useState } from 'react'
import "./header.css";
import 'remixicon/fonts/remixicon.css';


export default function Header() {
    /*======== Toggle Menu ============*/ 
    const[Toggle,showMenu]= useState(false);
  return (
<header className='header' id='header'>
        <nav className='nav container'>
          <a href='index.html' className='nav__logo'>
            liz
          </a>

          <div className={Toggle?'nav__menu show-menu':'nav__menu'}  id='nav-menu'>
            <ul className='nav__list '>
              <li className='nav__item'>
                <a href='#home' className='nav__link active-link'>
                <i class="ri-home-4-line nav__icon"></i>Home
                </a>
              </li>
              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                <i class="ri-user-line nav__icon"></i>
                  About Me
                </a>
              </li>
              <li className='nav__item'>
                <a href='#skills' className='nav__link'>
                <i class="ri-file-text-line nav__icon"></i>
                  Skills
                </a>
              </li>
              <li className='nav__item'>
                <a href='#services' className='nav__link'>
                <i class="ri-briefcase-2-line nav__icon"></i>Services
                </a>
              </li>
              <li className='nav__item'>
                <a href='#portfolio' className='nav__link'>
                <i class="ri-image-2-line nav__icon"></i>
                    Portfolio
                </a>
              </li>
              <li className='nav__item'>
                <a href='#contact' className='nav__link'>
                <i class="ri-send-plane-fill nav__icon"></i>
                    Contact Me
                </a>
              </li>
            </ul>

              <i className="ri-close-line nav__close" onClick={() => showMenu(!Toggle)}></i>
           </div>
            
            
              <div className='nav__toggle' id='nav-toggle' onClick={() => showMenu(!Toggle)}>
                <i className="ri-apps-2-line"></i>
              </div>
            
        </nav>
      </header>
  )
}
