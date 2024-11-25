import Aos from "aos";
import { pricingInfo } from "../../Data";
import "./informations.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Informations = () => {

  useEffect(() => {
    Aos.init ({ duration: 2000})
  })

  return (
    <section className="informations">
      <h2 data-aos="fade-right"> A Melhor solução de pagamento Online!</h2>
      <div className="informations__container wrapper">
        {
          pricingInfo.map(({image, name, price}) =>(
            <div className="informations__card" data-aos="fade-up">
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <span>{price}</span>
              {/* <a href="#" className="btn">Entenda mais.</a> */}
            </div>
          ))
        }

      </div>
    </section>
  );
}

export default Informations
