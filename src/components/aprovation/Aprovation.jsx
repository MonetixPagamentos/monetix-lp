import Aos from "aos";
import Img from '../../assets/aprovation.png'
import "./Aprovation.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Earnings = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return (
    <section className="aprovation">
      <div className="aprovation__container wrapper">
        <div className="aprovation__left" data-aos="fade-right">
          <img src={Img} alt="aprovation"/>
        </div>

        <div className="aprovation__right" data-aos="zoom-in-up">
          <h2>Liberação de conta com auto indice de Aprovação.</h2>
          <p>
            Nosso métodos de liberação de conta não eficases e garantidos.
          </p>
          <a href="#" className="btn">Comece Agora</a>
        </div>
      </div>
    </section>
  )
}

export default Earnings