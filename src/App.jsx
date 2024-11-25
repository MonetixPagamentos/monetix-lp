import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Informations from "./components/informations/Informations";
import Earnings from "./components/earnings/Earnings";
import Aprovation from "./components/aprovation/Aprovation";
import Antecipation from "./components/antecipation/Antecipation";
import Estrutura from "./components/estrutura/Estrutura";
import Integration from "./components/Integration/Integration";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import Politica from "./pages/politica";
import Sobre from "./pages/sobre"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Rota principal (página inicial) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Companies />
              <Aprovation />
              <Informations />
              <Earnings />
              <Integration />
              <Antecipation />
              <Estrutura />
              <Subscribe />
            </>
          }
        />
        {/* Rota para a Política de Cancelamento */}
        <Route path="/politica-de-cancelamento" element={<Politica />} />
        {/* Rota para a página Sobre Nós */}
        <Route path="/sobre-nos" element={<Sobre />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;