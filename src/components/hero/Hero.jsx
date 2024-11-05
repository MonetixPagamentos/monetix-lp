import "./Hero.scss"
import Mob from '../../assets/Mob.png'
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Hero = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  return <section className="hero">
    <div className="hero__container wrapper">
      <div className="hero__left" data-aos="fade-right" >
        <img src={Mob} alt="hero" />
      </div>

      <div className="hero__rigth">
        <h1>Simplifique seus pagamentos com segurança e agilidade!</h1>
        <p>
        Nosso site de pagamentos online oferece uma plataforma prática e confiável,
        permitindo que você faça transações financeiras de forma rápida e segura,
        24 horas por dia. Para compras, cobranças ou transferências,
        garantimos a proteção completa dos seus dados e transparência em cada etapa do processo.
        Experimente uma maneira mais fácil e segura de gerenciar seus pagamentos!
        </p>
        <a href="#" className="btn">Contrate Agora</a>
      </div>
    </div>
  </section>
}

export default Hero;