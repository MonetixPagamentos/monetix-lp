import "./Companies.scss"
import React from 'react'
import { companyInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Companies = () => {
  useEffect(() => {
    Aos.init({duration: 2000 })
  });

  return (
    <section className="companies">
      <div className="companies__container wrapper" data-aos="fade-up">
        {
          companyInfo.map(({id, img}) => (
            <img src={img} alt="company" key={id}/>
          ))
        }
        </div> 
    </section>
  );
}

export default Companies