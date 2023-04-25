
import GenericPage from '../app/ui/commons/pageLayouts/GenericPage';

export default function Home() {

  return (
    <GenericPage>
      <main>
        <h1>
          Makech documentación.
        </h1>

        <div>
          <ul>
            <li>
              <a href="/projectlist">Projectos</a>
            </li>
            <li>
              <a href="/templates">Templates</a>
            </li>
          </ul>
        </div>

      </main>
    </GenericPage>
  )
}
