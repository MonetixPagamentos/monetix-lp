import "./Footer.scss"
import React,  { useEffect,  } from "react";
import Aos from "aos";
import Logo from '../../assets/Logo.png';
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa"


const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  });
  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer_col">
          <img srcSet={Logo}></img>
          <p>Facilite seus pagamentos com segurança e rapidez!</p>
        </div>
        
        <div className="footer__col">
          <h3>
            Sobre
          </h3>
          <a href="#">Sobre nós</a>
          <a href="#">Produtos</a>
          <a href="#">Novidades</a>
        </div>

        <div className="footer__col">
          <h3>
            Documentacao
          </h3>
          <a href="#">Api</a>
          <a href="#">Swagger</a>
          <a href="#">Regras de negocio.</a>
        </div>

        <div className="footer__col">
          <h3>
            Suporte
          </h3>
          <a href="#">FAQs</a>
          <a href="#">Suporte</a>
          <a href="#">Nosso contato</a>
        </div>

        <div className="footer__col">
          <h3>
            Nossas Redes.
          </h3>
          <div className="footer__icons">
            <a href="#" className="footer__icon">
              <FaFacebookF/>
            </a>
            <a href="#" className="footer__icon">
              <FaInstagram/>
            </a>
            <a href="#" className="footer__icon">
              <FaLinkedinIn/>
            </a>
            <a href="#" className="footer__icon">
              <FaYoutube/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer