
import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

const NavMenu = ({}: {}) => {

    const [showBasic, setShowBasic] = useState(true);

  return (
    <MDBNavbar
        expand="lg"
        light
        bgColor="light"
    >
        <MDBContainer fluid>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse
            navbar
            show={showBasic}
        >
            <MDBNavbarNav
             className="mr-auto mb-2 mb-lg-0"
            >
                <MDBNavbarItem>
                    <MDBNavbarLink href="/project">
                        Lista de proyectos
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href="/project/new">
                        crear nuevo proyecto
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href="/history-block/new">
                        Nuevo bloque
                    </MDBNavbarLink>
                </MDBNavbarItem>
                
            </MDBNavbarNav>

        </MDBCollapse>

        </MDBContainer>
    </MDBNavbar>
  )
}

export default NavMenu