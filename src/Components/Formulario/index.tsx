import React from 'react';
import { Container } from './styles';

export default function TabelaTransacoes() {
    return (
        <Container>
             <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Vamos fazer um projeto?</h1>
        
        </div>
        <div className="c-right">
         
          <form>
            <input style={{backgroundColor:   "#333"}} type="text" placeholder="Nome" name="user_name" />
            <br></br>
            <input style={{backgroundColor:   "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: "#333"}} placeholder="Mensagem" name="message" />
            <button>Enviar</button>
         
          </form>
        </div>
      </div>
    </div>
        </Container>
    );
}
