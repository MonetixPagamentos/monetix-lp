import "./Subscribe.scss"
import React,  { useEffect,  } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-right">Deixe seu email para receber as novidades.</h2>
        <p data-aos="fade-left">
          Nossas tecnologias estão em constante mudanças,
          acompanhe-nos para ficar por dentro das novidades.
        </p>
        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Digite seu email" />
          <a href="#" className="btn">Inscrever-se</a>
        </form>
      </div>
    </section>
  )
}

export default Subscribe