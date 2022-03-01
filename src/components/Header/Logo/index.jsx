import { Link } from 'react-router-dom'

import logo from "../../../assets/img/logo.png";

import { Container } from "./styles";

export const Logo = () => {
  return (
    <Container>
      <Link to='/'><img src={logo} alt="Logo" loading="lazy" /></Link>
    </Container>
  );
};
