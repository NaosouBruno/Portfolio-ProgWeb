import React from 'react';
import { Container, Content } from './styles';
import minhaFoto from '../../assets/eu.jpeg';
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export default function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img className="minhaFoto" src={minhaFoto} alt="Poupancinha" />
                <div className="i-title-wrapper">
              <div className="i-title-item">Desenvolvedor Front End</div>
              <div className="i-title-item">Prestativo</div>
              <div className="i-title-item">Editor de Videos</div>
              <div className="i-title-item">AINDA DESENVOLVENDO</div>
              <div className="i-title-item">NOVAS HABILIDADES</div>
            </div>
               {/*  <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button> */}
            </Content>
        </Container>
    );
}
