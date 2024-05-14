/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Projeto</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/estado`}>Estado</Link>
        </li>

        <li>
          <Link to={`/covidStatus`}>CovidStatus</Link>
        </li>
        <li>
          <Link to={`/covidCountry`}>CovidCountry</Link>
        </li>

        <li>
          <Link to={`/form`}>Formulario</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
