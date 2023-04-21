
import React from 'react'

const NavMenu = ({}: {}) => {
  return (
    <nav>
        <ul>
            <li>
                <a href="/projects">Lista de proyectos</a>
            </li>
            <li>
                <a href="/projects/create_project">crear nuevo proyecto</a>
            </li>
            <li>
                <a href="/projects/create_dependency_tag">agregar etiqueta de dependencia a un proyecto</a>
            </li>
            <li>
                <a href="/projects/create_version">agregar detalles de version</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavMenu