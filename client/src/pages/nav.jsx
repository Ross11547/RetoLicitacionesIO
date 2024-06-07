import React from 'react';
import styled from 'styled-components';
import { Colors } from '../style/colores';
import { Link, Outlet } from 'react-router-dom';
import Logos from '../assets/klipartz.png'

const Nav = () => {
  return (
    <>
      <Navbar>
        <Logo src={Logos} />
        <NavLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="acercaNosotros">Acerca de Nosotros</NavLink>
          <NavLink to="convoObras">Convocatorias</NavLink>
          <NavLink to="result">Resultados</NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink to="inicioSesion">Inicio Sesión</NavLink>
          <NavLink to="registro">Registro</NavLink>
        </NavLinks>
      </Navbar>
      <Body>
        <Outlet />
      </Body>

    </>
  );
};

export default Nav;

const Navbar = styled.nav`
  width:100%; 
  background: #ffffffdf;
  position:fixed;
  z-index:1000;
  padding: 10px 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Body = styled.div`
  width: 100%;
  height: calc(80px - 100%);
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  gap: 20px;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: ${Colors.primary100};
  text-decoration: none;
  margin-left: 40px;
  transition: 0.2s;
  border-bottom: 2px solid transparent;
  z-index:1500;
  &:hover {
    color: ${Colors.primary200};
    transition: 0.2s;
    border-bottom: 2px solid ${Colors.primary200};
  }
`;