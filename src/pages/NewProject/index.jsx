import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";

const NewProject = () => {
  return (
    <Container>
      <div>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <form>
          <Input
            identify="project-name"
            textLabel="Nome do projeto:"
            placeholder="Insira o nome do projeto"
            inputType='text'
          />
          <Input
            identify="project-name"
            textLabel="Orçamento do projeto:"
            placeholder="Insira o orçamento total"
            inputType='number'
          />
          <Input
            identify="project-name"
            textLabel="Selecione a categoria:"
            isSelect={true}
          />
          
        </form>
        <Button animate={true}>Criar projeto</Button>
      </div>
    </Container>
  );
};

export default NewProject;
