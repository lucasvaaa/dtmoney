import logoImg from '../../assets/logo.svg'
import { Container,Content } from './styles'
import { useState } from 'react';
import Modal from 'react-modal'

interface HeaderProps {
    onOpenNewTransactionModal: () => void; //função que não recebe parameters and not return anything


} //Interface define os tipos de props que uma function tem de parâmetros

export function Header({onOpenNewTransactionModal}:HeaderProps) {



    return (
    
            <Container>
                <Content>
                    <img src={logoImg} alt="dt Money" />
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova Transação
                    </button>



                </Content>
            </Container>
        
)}