import React from "react";
import "./Sobre.scss";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1>Sobre Nós</h1>

      <h2>Simplifique seus pagamentos com segurança e agilidade!</h2>
      <p>
        Nosso sistema de pagamentos online oferece uma plataforma prática e confiável, permitindo que você faça transações financeiras de forma rápida e segura, 24 horas por dia. 
        Para compras, cobranças ou transferências, garantimos a proteção completa dos seus dados e transparência em cada etapa do processo. 
        Experimente uma maneira mais fácil e segura de gerenciar seus pagamentos!
      </p>

      <h2>Liberação de conta com alto índice de aprovação!</h2>
      <p>
        Nossos métodos de liberação de conta são eficientes e garantidos, proporcionando uma experiência rápida e segura para todos os nossos clientes.
      </p>

      <ul>
        <li><span className="highlight">Contas Jurídicas:</span> Liberação facilitada para empresas.</li>
        <li><span className="highlight">Link de Pagamento:</span> Soluções simples e rápidas para cobrar seus clientes.</li>
        <li><span className="highlight">Antecipação de Recebíveis:</span> Liberação automática e segura.</li>
      </ul>

      <h2>Acompanhe seus ganhos com um painel intuitivo!</h2>
      <p>
        Nossa plataforma oferece atualizações em tempo real sobre seus ganhos, garantindo que você tenha sempre uma visão clara e precisa de sua performance financeira.
      </p>

      <h2>Integração de pagamentos simplificada!</h2>
      <p>
        Oferecemos soluções de pagamento com as principais bandeiras de cartões, além das melhores taxas do mercado, garantindo confiança e qualidade em nossos serviços.
      </p>

      <h2>Uma fintech inovadora!</h2>
      <p>
        Contamos com uma equipe qualificada, motivada e dedicada a maximizar seus ganhos, oferecendo as melhores taxas e soluções que a tecnologia pode proporcionar. 
        Conheça nossa estrutura e descubra os benefícios de se juntar a nós!
      </p>
    </div>
  );
};

export default Sobre;