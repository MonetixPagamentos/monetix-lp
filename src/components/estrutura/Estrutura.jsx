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
          <h2>Uma fintech inovadora!</h2>
          <p>
          Contamos com uma equipe qualificada, motivada e dedicada a maximizar seus ganhos,
          oferecendo as melhores taxas e soluções que a tecnologia pode proporcionar.
          Conheça nossa estrutura e descubra os benefícios de se juntar a nós!
          </p>
          {/* <a href="#" className="btn">Entenda nossa proposta</a> */}
        </div>

        <div className="estrutura__right" data-aos="fade-up">
          <img src={Status} alt="Estrura"/>
        </div>
      </div>

      
    </section>
  )
}

export default Estrutura