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
            Greetings! I am a dedicated and ambitious second-year student at the Higher Institute of Technological Studies of Nabeul, specializing in Information System Development. My journey in the field of technology has been marked by a passion for creating efficient and innovative solutions. Through my academic pursuits, I've cultivated a strong foundation in information systems, programming, and development methodologies.
            </p>
            <a download="" href={CV} className="button button--flex"> 
            Download CV  &nbsp; <i class="ri-file-pdf-2-line"></i>
            </a>
        </div>
    </div>
     
</section>
  )
}
