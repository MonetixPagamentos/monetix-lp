import React from "react";
import "./Politica.scss";

const Politica = () => {
  return (
    <div className="politica-container">
      <h1>Política de Cancelamento Monetix</h1>

      <p>
        Esta política de cancelamento descreve os termos e condições aplicáveis
        ao cancelamento do contrato de uso da Monetix. Ao utilizar nossos
        serviços, você concorda com os termos estabelecidos abaixo.
      </p>

      <h2>1. Prazos de Cancelamento</h2>
      <ul>
        <li>
          <span className="highlight">Aviso Prévio:</span> O cliente deve
          notificar o cancelamento com pelo menos{" "}
          <strong>30 dias de antecedência</strong>, através de uma solicitação
          formal via e-mail ou pelo nosso portal de clientes.
        </li>
        <li>
          <span className="highlight">Período Mínimo de Contrato:</span> O uso
          do serviço requer um período mínimo de <strong>6 meses</strong>.
          Cancelamentos antes desse período podem estar sujeitos a penalidades.
        </li>
      </ul>

      <h2>2. Penalidades e Multas</h2>
      <ul>
        <li>
          <span className="highlight">Cobrança de Taxas Pendentes:</span> Todas
          as taxas de transação e mensalidades pendentes serão cobradas no
          momento do cancelamento.
        </li>
        <li>
          <span className="highlight">Ajuste de Descontos:</span> Se foram
          aplicados descontos para grandes volumes de transação, o valor será
          ajustado com base no uso real até a data do cancelamento.
        </li>
      </ul>

      <h2>3. Procedimento de Cancelamento</h2>
      <ul>
        <li>
          <span className="highlight">Solicitação Formal:</span> Para cancelar
          o serviço, o cliente deve enviar uma solicitação formal via e-mail
          para <strong>cancelamento@gateway.com</strong> ou pelo nosso portal de
          clientes.
        </li>
        <li>
          <span className="highlight">Desconexão de APIs:</span> O cliente deve
          desativar as APIs e integrações associadas ao gateway. Nossa equipe de
          suporte está disponível para auxiliar nessa transição.
        </li>
      </ul>

      <h2>4. Reembolsos e Ajustes Finais</h2>
      <ul>
        <li>
          <span className="highlight">Reembolso de Saldo:</span> Se houver saldo
          na conta do cliente, este será transferido para a conta bancária
          vinculada após o desconto das taxas pendentes.
        </li>
        <li>
          <span className="highlight">Proporcionalidade nas Mensalidades:</span>{" "}
          Em caso de cancelamento no meio do mês, a mensalidade será cobrada
          proporcionalmente até a data do cancelamento.
        </li>
        <li>
          <span className="highlight">Chargebacks:</span> O gateway reterá parte
          dos fundos para cobrir possíveis chargebacks e devoluções de
          transações que possam ocorrer após o cancelamento.
        </li>
      </ul>

      <h2>5. Continuidade de Serviços e Dados</h2>
      <ul>
        <li>
          <span className="highlight">Acesso a Dados Transacionais:</span> Após
          o cancelamento, o cliente pode solicitar um relatório com o histórico
          de transações realizadas. A solicitação deve ser feita no prazo de 30
          dias após o término do contrato.
        </li>
        <li>
          <span className="highlight">Exportação de Dados:</span> O cliente
          poderá exportar os dados de transação e histórico de pagamentos antes
          do término do contrato para continuidade dos serviços com outro
          provedor.
        </li>
      </ul>

      <h2>6. Contato para Cancelamento</h2>
      <p>
        Em caso de dúvidas sobre o processo de cancelamento, entre em contato
        com nossa equipe de atendimento ao cliente:
      </p>
      <p>
        <strong>E-mail:</strong> suporte@monetixpagamentos.com
      </p>
      <p>
        <strong>Telefone:</strong> (47) 9 9995 0730
      </p>
    </div>
  );
};

export default Politica;