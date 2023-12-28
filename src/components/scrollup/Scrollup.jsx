import React from 'react'
import './scrollup.css'

export default function Scrollup() {
    window.addEventListener("scroll",function(){
        const scrollUp=this.document.querySelector(".scrollup");
        if(this.scrollY >= 560)scrollUp.classList.add("show__scroll");
        else scrollUp.classList.remove("show__scroll")
    })
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="scrollup">
        <i class="ri-arrow-up-fill scrollup__icon"></i>
    </a>
  )
}
