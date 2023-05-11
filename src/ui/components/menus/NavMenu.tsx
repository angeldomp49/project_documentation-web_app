
import React from 'react'

const NavMenu = ({}: {}) => {
  return (
    <nav>
        <ul>
            <li>
                <a href="/project">Lista de proyectos</a>
            </li>
            <li>
                <a href="/project/new">crear nuevo proyecto</a>
            </li>
            <li>
                <a href="/history-block/new">Nuevo bloque</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavMenu