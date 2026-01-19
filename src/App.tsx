import './styles/global'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';


export function App() {
  return (


      //Não será possível deixar uma div aqui para que não estrague o layout da página    
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

  // é muito comum exportar o App como default, mas nesse caso, é uma exportação nomeada, devido a clareza de importação no index.tsx