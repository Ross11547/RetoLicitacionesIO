import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Navbar>
      <Logo>LOGO</Logo>
      <NavLinks>
        <NavLink href="#">Inicio</NavLink>
        <NavLink href="#">Obras</NavLink>
        <NavLink href="#">Servicios Generales</NavLink>
        <NavLink href="#">Bienes</NavLink>
        <NavLink href="#">Inicio Sesión</NavLink>
        <NavLink href="#">Registro</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  background-color: #336699;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
