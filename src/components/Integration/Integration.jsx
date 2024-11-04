import Aos from "aos";
import Status from '../../assets/integration.png'
import "./Integration.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Estrutura = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return (
    <section className="integration">
      <div className="integration__container wrapper">
        <div className="integration__left" data-aos="fade-right">
          <h2>Integração de pagamento</h2>
          <p>
            Temos soluções de pagamentos com a principais bandeiras de cartões, e as melhores taxas do mercado,
            intregando confiança e qualidade de serviço.
          </p>
          <a href="#" className="btn">Contrate agora!</a>
        </div>

        <div className="integration__right" data-aos="fade-up">
          <img src={Status} alt="Integration"/>
        </div>
      </div>

      
    </section>
  )
}

export default Estrutura