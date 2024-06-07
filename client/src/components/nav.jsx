import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <Container>

    <Navbar>
      <Logo>LOGO</Logo>
      <NavLinks>
        <NavLinks>
          <NavLink href="#">Inicio</NavLink>
          <NavLink href="#">Obras</NavLink>
          <NavLink href="#">Servicios Generales</NavLink>
          <NavLink href="#">Bienes</NavLink>
        </NavLinks>
        <NavLink href="#">Inicio Sesión</NavLink>
        <NavLink href="#">Registro</NavLink>
      </NavLinks>
    </Navbar>
  </Container>;
};

export default Nav;
const Container = styled.div`

`;


