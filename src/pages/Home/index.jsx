import React from "react";
import { Container } from './styles';

import savings from '../../assets/img/savings.svg'

const Home = () => {
  return (
      <Container>
            <h1>Bem-vindo ao <span>DYN Public</span></h1>
            <p>Comece a anunciar seus projetos agora mesmo!</p>
            <button>Criar Projeto</button>
            <img src={savings} alt="Homem em cima de um cofre segurando uma moeda" loading="lazy"/>
      </Container>
  );
};

export default Home;
