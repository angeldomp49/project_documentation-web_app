import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { API_BASE_URL } from '../app/ui/config/config';
import { IdGenerator } from '@makechtec/randomkey';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Documentación - MakechTec</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 >
          Makech documentación.
        </h1>

        <div>
          <ul>
            <li>
              <a href="/projects">Projectos</a>
            </li>
            <li>
            <a href="/templates">Templates</a>
            </li>
          </ul>
        </div>

      </main>

      <footer>
        Creado por MakechTec. &copy; todos los derechos reservados.
      </footer>

    </div>
  )
}
