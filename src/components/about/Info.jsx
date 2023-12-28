import React from 'react'

export default function Info() {
  return (
    <div className='about__info grid '>
        <div className="about__box">
        <i class="ri-award-line about__icon"></i>
        
            <h3 className="about__title">
                Experiences
            </h3>
            <span className="about__subtitle">1 internship </span>
        </div>

        <div className="about__box">
        <i class="ri-briefcase-3-line about__icon"></i>
            <h3 className="about__title">
                Completed
            </h3>
            <span className="about__subtitle">4 + Projects </span>
        </div>

        <div className="about__box">
        <i class="ri-customer-service-fill about__icon"></i>
            <h3 className="about__title">
                Support
            </h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
      
    </div>
  )
}
