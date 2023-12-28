import React,{ useState }  from 'react'
import "./qualification.css"

export default function Qualification() {
    const [toggleState,setToggleState]=useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
<section className="qualification section">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personel journey</span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div 
            className={
            toggleState===1
            ?"qualification__button qualification__active button--flex"
            :"qualification__button  button--flex"}
            onClick={()=>toggleTab(1)}
            >
            <i class="ri-graduation-cap-line qualification__icon"></i>
            Education
            </div>

            <div 
            className={
            toggleState===2
            ?"qualification__button qualification__active button--flex"
            :"qualification__button  button--flex"}
            onClick={()=>toggleTab(2)}
            >
            <i class="ri-briefcase-2-fill qualification__icon"></i>
            Experience
            </div>

        </div>
        <div className="qualification__sections">

            <div className={
            toggleState===1
            ? "qualification__content qualification__content-active"
            :"qualification__content "}
            >

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">
                            first-year in ISET
                        </h3>
                        <span className="qualification__subtitle">
                            Tunisia - Institute
                        </span>
                        <div className="qualification__calendar">
                        <i class="ri-calendar-2-line"></i> 2022 - 2023
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span v className="qualification__line"></span>
                    </div>

                </div>

                <div className="qualification__data">
                    <div></div>

                    
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">
                        Second-year in ISET
                        </h3>
                        <span className="qualification__subtitle">
                            Tunisia - Institute
                        </span>
                        <div className="qualification__calendar">
                        <i class="ri-calendar-2-line"></i> 2021 - Present
                        </div>
                    </div>
                </div>
            </div>

            <div className={
            toggleState=== 2
            ? "qualification__content qualification__content-active"
            :"qualification__content "} 
            >

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">
                            information Systeme development
                        </h3>
                        <span className="qualification__subtitle">
                            Tunisia - Institute
                        </span>
                        <div className="qualification__calendar">
                        <i class="ri-calendar-2-line"></i> 2023 - 2024
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span v className="qualification__line"></span>
                    </div>

                </div>

                {/* <div className="qualification__data">
                    <div></div>

                    
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">
                            
                        </h3>
                        <span className="qualification__subtitle">
                            
                        </span>
                        <div className="qualification__calendar">
                        <i class="ri-calendar-2-line"></i> 
                        </div>
                    </div>
                </div> */}



            </div>

        </div>
    </div>
</section>
  )
}
