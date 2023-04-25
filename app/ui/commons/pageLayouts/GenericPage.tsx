import React from 'react'
import NavMenu from '../../components/menus/NavMenu';
import Head from 'next/head';


const GenericPage = ({ children }: { children: any }) => {
  return (

    <div className="genericWrapper">

      <Head>
        <title>Documentación - MakechTec</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavMenu />
      </header>

      {children}

      <footer>
        Creado por MakechTec. &copy; todos los derechos reservados.
      </footer>
    </div>

  )
};

export default GenericPage;