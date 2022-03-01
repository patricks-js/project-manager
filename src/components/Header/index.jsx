import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

import { Container, Navigation, Menu} from "./styles";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Navigation>
        <Menu>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/new-project'>Novo projeto</Link></li>
          <li><Link to='/about'>Sobre</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </Menu>
      </Navigation>
    </Container>
  );
};
