import React from 'react';
import { Container } from './styles';
import minhaFoto from "../../assets/eu.jpeg"
export default function Sumario() {
    return (
        <Container>
           <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
           src={minhaFoto}
            alt="Eu"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Conheça um pouco sobre mim</h1>
        <p className="a-sub">
         Residente na Capital do Pantanal conhecida como Corumbá, no estado de 
         Mato Grosso do Sul, estou concluindo o curso de Sistemas de Informação
         na Universidade Federal de Mato Grosso do Sul
        </p>
        <p className="a-desc">
          Atualmente estou empenhado em me tornar Desenvolvedor Front End, e
          ainda não adotei um framework para focar, ainda em dúvida entre VueJS 
          ou React, adoraria dominar os dois. Algumas habilidades minhas são:
          
        </p>
        <br></br>

        <p className="a-desc">
         FAZER UMA LISTA AQUI           
        </p>
      </div>
    </div>
        </Container>
    );
}
