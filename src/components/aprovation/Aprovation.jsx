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
          <h2>Liberação de conta com alto índice de aprovação!</h2>
          <p>
            Nossos métodos de liberação de conta são eficientes e garantidos, proporcionando uma experiência rápida e segura para todos os nossos clientes.
          </p>
          <a href="#" className="btn">Comece Agora</a>
        </div>
      </div>
    </section>
  )
}

export default Earnings