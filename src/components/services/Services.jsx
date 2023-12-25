import React, { useState } from 'react'
import './services.css'

export default function Services() {
    const [toggleState,setToggleState]=useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
<section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">
        
        <div className="services__content">

            <div>
                <i class="ri-layout-4-line services__icon"></i>
                <h3 className="services__title">Product <br/> Designer</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab (1)}>View More
            <i class="ri-arrow-right-line services__button-icon"></i>
            </span>

            <div className={toggleState===1?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                <i onClick={()=>toggleTab(0)} class="ri-close-line services__modal-close"></i>
                    <h3 className='services__modal-title'>Product Designer</h3>
                    <p className="services__modal-description">
                        Service with than 3 years of experience.
                        Providing quality work to clients and companies.
                    </p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                            Web page development
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux elemet interactions
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">

            <div>
                <i class="ri-expand-left-right-line services__icon"></i>
                <h3 className="services__title">Ui/Ux <br/> Designer</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab (2)}>View More
            <i class="ri-arrow-right-line services__button-icon"></i>
            </span>

            <div className={toggleState===2?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                <i onClick={()=>toggleTab(0)} class="ri-close-line services__modal-close"></i>
                    <h3 className='services__modal-title'>Ui/Ux Designer</h3>
                    <p className="services__modal-description">
                        Service with than 3 years of experience.
                        Providing quality work to clients and companies.
                    </p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                            Web page development
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux elemet interactions
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">

            <div>
                <i class="ri-edit-box-line services__icon"></i>
                <h3 className="services__title">Visual<br/> Designer</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab (3)}>View More
            <i class="ri-arrow-right-line services__button-icon"></i>
            </span>

            <div className={toggleState===3?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                <i onClick={()=>toggleTab(0)} class="ri-close-line services__modal-close"></i>
                    <h3 className='services__modal-title'>Visual Designer</h3>
                    <p className="services__modal-description">
                        Service with than 3 years of experience.
                        Providing quality work to clients and companies.
                    </p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                            Web page development
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux elemet interactions
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand
                            </p>
                        </li>

                        <li className="services__modal-service">
                        <i class="ri-checkbox-circle-line services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
</section>
  )
}
