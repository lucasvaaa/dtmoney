import './styles/global'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')


export function App() {

  //Aqui temos as funções de Click
    const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);



    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }


  return (


    //Não será possível deixar uma div aqui para que não estrague o layout da página    
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

// é muito comum exportar o App como default, mas nesse caso, é uma exportação nomeada, devido a clareza de importação no index.tsx