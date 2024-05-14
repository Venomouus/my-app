/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import './styles.css'

function NavBar() {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/estado`}>Estado</Link>
            </li>

            <li>
                <Link to={`/`}>Home</Link>
            </li>

            <li>
                <Link to={`/`} className="new-btn">
                    Novo post
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar