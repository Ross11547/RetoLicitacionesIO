import React from 'react'
import styled from 'styled-components'
import { Colors } from '../style/colores'
import Foot from './admin/foot'
import { Link } from 'react-router-dom'

const MenuConvo = () => {
  return (
    <>
      <Container>
        <ContainerForm>
          <Card>
            <h1>TIPO DE LICITACIÓN PARA CONVOCATORIA</h1>
          </Card>
          <CardBody1>
            <Card1>
              <button><Link to="/obras">OBRAS</Link></button>
              <button><Link to="/serviciosGene">SERVICIOS GENERALES</Link></button>
              <button><Link to="/bienes">BIENES</Link></button>
              <button><Link to="/serviciosConsul">SERVICIOS DE CONSULTORÍA</Link></button>
            </Card1>
          </CardBody1>
        </ContainerForm>
      </Container>
      <Foot />
    </>
  )
}

export default MenuConvo

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ContainerForm = styled.div`
  width: 1519px;
  height: 100%;
  padding: 80px;
`;
const Card = styled.div`
  height: 100px; 
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 5px;
  background: ${Colors.primary300};
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  h1{
  color:${Colors.primary500}
  }
  `;

const Card1 = styled.div`
  height: 570px; 
  display: flex;
  justify-content:center;
  align-items: center;
  background: ${Colors.primary500};
  margin-block-start: 15px;
  flex-direction: column;
  gap: 55px;
  h1{
  color:${Colors.primary500}
  }
  button{
    width: 280px;
    height: 90px;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 16px;
    border-radius: 5px;
    font-weight:bold;
    border: none;
    background: ${Colors.primary200};
    color: ${Colors.primary500};
    box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
    cursor: pointer;
  }
  :hover{
    background: #ecaa40;
  }
  a{
    text-decoration: none;
    color: ${Colors.primary500}
  }  
  `;
const CardBody1 = styled.div`
  width: 100%;
  margin-top: 5px;
  background:${Colors.primary400};
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  border-radius: 5px;
  `;