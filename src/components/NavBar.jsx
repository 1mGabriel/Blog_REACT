import React from 'react'
import "./NavBar.css"
// Componente responsavel pelo dinamismo de rota, onde cada link tem seu path, que faz o encaminhamento da pagina para ooutro componente:
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h2>
        <Link to={"/"}>Blog</Link> {/* propiedade "to" é responsavel por manter o caminho desejado para o encaminhamento */}
      </h2>
      <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/new"} className='new-btn'>Post</Link>
        </li>
        <li>
            <Link to={"/admin"}>Grenciar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
