import { Container } from "./styles";

import savings from "../../assets/img/savings.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const Navigation = () => {
    navigate("/new-project");
  };

  return (
    <Container>
      <div>
        <h1>
          Bem-vindo ao <span>DYN Public</span>
        </h1>
        <p>Comece a anunciar seus projetos agora mesmo!</p>
        <Button animate={true} event={Navigation}>Criar projeto</Button>
        <img
          src={savings}
          alt="Homem em cima de um cofre segurando uma moeda"
          loading="lazy"
        />
      </div>
    </Container>
  );
};

export default Home;
