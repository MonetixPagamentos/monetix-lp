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
        <h1>Soluções de pagamentos para seu negocio</h1>
        <p>
          Facilite seus pagamentos com segurança e rapidez! 
          Nosso site de pagamento online oferece uma plataforma simples e confiável 
          para que você realize suas transações financeiras de forma ágil, 
          24 horas por dia. Seja para compras, cobranças ou transferências, 
          garantimos total proteção dos seus dados e transparência em cada etapa do processo. 
          Experimente uma nova maneira de gerir seus pagamentos com praticidade e confiança!
        </p>
        <a href="#" className="btn">Contrate Agora</a>
      </div>
    </div>
  </section>
}

export default Hero;