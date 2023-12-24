import React from 'react'
import "./about.css"
import AboutImg from "../../assets/images/dorra.jpg"
import CV from '../../assets/dorraCV.pdf'
import Info from './Info'

export default function About() {
  return (
<section className="about section"id='about'>
    <h2 className="section__title">
        About Me
    </h2>
    <span className='section__subtitle'>My introduction</span>
    <div className="about__container container grid">
        <img src={AboutImg} alt=""  className='about__img'/>
        <div className="about__data">
            <Info/>
            <p className="about__description">
                Frontend developer, I create web pages with UI/UX user interace, I have years of experience and many clients are  happy with the projects carried out.
            </p>
            <a download="" href={CV} className="button button--flex"> 
            Download CV  &nbsp; <i class="ri-file-pdf-2-line"></i>
            </a>
        </div>
    </div>
     
</section>
  )
}
