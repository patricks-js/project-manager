import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'

import { Container, Menu } from "./styles";

export const Footer = () => {
  return (
    <Container>
        <Menu>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaFacebook/> </a></li>
            <li><a href="#"><FaLinkedin /> </a></li>
            <li><a href="#"><FaGithub /> </a></li>
        </Menu>
        <p>&copy; Feito com <FaHeart className="heart" /> por <em>Lucas Patrick</em>.</p>
    </Container>
  );
};
