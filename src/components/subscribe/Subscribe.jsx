import "./Subscribe.scss"
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const mailtoLink = `mailto:suporte@monetixpagamentos.com?subject=Gostaria de mais informações sobre a Monetix&body=Olá, gostaria de saber mais sobre a Monetix. Meu e-mail é: ${email}`;
    window.location.href = mailtoLink; 
  };

  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-right">Deixe seu email para receber as novidades.</h2>
        <p data-aos="fade-left">
          Nossas tecnologias estão em constante mudanças,
          acompanhe-nos para ficar por dentro das novidades.
        </p>
        <form onSubmit={handleSubscribe} data-aos="fade-up">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <button type="submit" className="btn">Inscrever-se</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;