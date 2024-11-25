import "./Navbar.scss";
import Logo from '../../assets/logo_mini.png';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <a href="/" className="navbar__logo"  onClick={() => setShowNav(false)} >
          <img src={Logo} alt="logo" />
        </a>

        {/* <ul className={`${showNav ? "show" : ""}`}>
          <li  onClick={() => setShowNav(false)}  ><a href="#">Produto</a></li>
          <li  onClick={() => setShowNav(false)}  ><a href="#">Api</a></li>
          <li  onClick={() => setShowNav(false)}  ><a href="#">Contato</a></li>
        </ul>

        <div className="navbar__btns">
          <a href="#">Contratar</a>
          <a href="#" className="btn">Painel</a>
          
        </div> */}

        {/* <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoClose /> : <IoMdMenu />}
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar