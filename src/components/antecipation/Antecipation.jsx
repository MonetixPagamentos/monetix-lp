import Aos from "aos";
import Img from '../../assets/antecipation.png'
import "./Antecipation.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Earnings = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return (
    <section className="antecipation">
      <div className="antecipation__container wrapper">
        <div className="antecipation__left" data-aos="fade-right">
          <img src={Img} alt="antecipation"/>
        </div>

        <div className="antecipation__right" data-aos="zoom-in-up">
          <h2>Antecipação com liberação avaliada automaticamente</h2>
          <p>
            Contamos com processos automaticos de liberação de antecipação..
          </p>
          <a href="#" className="btn">Entenda melhor</a>
        </div>
      </div>
    </section>
  )
}

export default Earnings