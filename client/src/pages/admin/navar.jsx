import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../style/colores';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Logos from '../../assets/klipartz.png'
import { useUser } from '../../store/user';
import { toast } from 'react-toastify';
const Navar = () => {
  const { user,logout } = useUser();
  const handlerLogout = () => {
    logout();
    toast.success("Cierre de sesion correcta")
  }
  if (!user || user.rol === "usuario") {
    return <Navigate to={"/"}></Navigate>
  }
  return (
    <>
      <Navbar>
        <Logo src={Logos} alt="" />
        <NavLinks>
          <NavLink to="empresas">Empresas</NavLink>
          <NavLink to="formularios">Formularios</NavLink>
          <NavLink to="convocatorias">Convocatorias</NavLink>
          <NavLink to="empresasAdj">Empresas Adjudicadas</NavLink>
          <NavLink to="proyectos">Proyectos</NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink to="/" onClick={handlerLogout}>Salir</NavLink>
        </NavLinks>
      </Navbar>
      <Body>
        <Outlet />
      </Body>
    </>
  );
};

export default Navar;

const Navbar = styled.nav`
  width:100%; 
  background: #ffffffdf;
  position:relative;
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