import Aos from "aos";
import Img from '../../assets/earnings.png'
import "./Earnings.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Earnings = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
          <img src={Img} alt="earnings"/>
        </div>

        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Acompanhe seus ganhos com um painel intuitivo!</h2>
          <p>
            Nossa plataforma oferece atualizações em tempo real sobre seus ganhos, garantindo que você tenha sempre uma visão clara e precisa de sua performance financeira.
          </p>
          {/* <a href="#" className="btn">Comece Agora</a> */}
        </div>
      </div>
    </section>
  )
}

export default Earnings