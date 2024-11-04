import Aos from "aos";
import Status from '../../assets/status.png'
import "./Estrutura.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Estrutura = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return (
    <section className="estrutura">
      <div className="estrutura__container wrapper">
        <div className="estrutura__left" data-aos="fade-right">
          <h2>Uma fintech Inovadora</h2>
          <p>
            Temos uma equipe qualificada, motivada e empenhada a trabalhar para 
            tornar seus ganhos, disponibilizando as melhores taxas e soluções 
            que a tecnologia poem entregar atualmente. Conheça nossa estrutura 
            e entenda os beneficios de se juntar a nós.
          </p>
          <a href="#" className="btn">Entada nossa proposta</a>
        </div>

        <div className="estrutura__right" data-aos="fade-up">
          <img src={Status} alt="Estrura"/>
        </div>
      </div>

      
    </section>
  )
}

export default Estrutura