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
          <h2>Integração de pagamentos simplificada!</h2>
          <p>
            Oferecemos soluções de pagamento com as principais bandeiras de cartões,
            além das melhores taxas do mercado, garantindo confiança e qualidade em nossos serviços.
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