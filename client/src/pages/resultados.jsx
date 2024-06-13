import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../style/colores";
import { ButtonD, Form1, Table, Titulo2 } from "../style/formulariosStyleUno";
import { Link } from "react-router-dom";
import Foot from "./admin/foot";

const Card = styled.div`
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  backdrop-filter: blur(20px);
`;

const CardBody = styled.div`
  width: 100%;
  height: 1070px; 
  margin-top: 15px;
`;
const Scroll = styled.div`
  width: 100%;
  height: 848px; 
  overflow-y: scroll;
`;
const CardBody1 = styled.div`
  width: 100%;
  background:${Colors.primary100};
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  border-radius: 5px;
`;

const ImgOjo = styled.img`
  width: 40px;
  height: 40px;
`;

const Card1 = styled.div`
  height: 100px; 
  display: flex;
  justify-content:center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  h1{
    color: ${Colors.primary500}
  }
`;
const ContainerForm = styled.div`
  width: 1519px;
  height: 100%;
  padding: 80px;
`;
const moveBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;

const MovingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1400px;
  background: url('https://vinccler.wordpress.com/wp-content/uploads/2020/10/vinccler-construccion-conjunto-de-tareas-y-objetivos-definidos.jpg') repeat;
  background-size:cover;
  animation: ${moveBackground} 80s linear infinite;
  z-index: -2;
`;

const Resultado = () => {
  return (
    <>
      <MovingBackground />
      <Container className="container py-5">
        <ContainerForm>
          <CardBody1>
            <Card1>
              <h1 className="text-center">RESULTADOS</h1>
            </Card1>
          </CardBody1>
          <Card>
            <CardBody>
              <Form1>
                <Table>
                  <Scroll>
                    <thead>
                      <tr>
                        <th >DEPARTAMENTO</th>
                        <th >NOMBRE PROYECTO/ MODALIDAD</th>
                        <th >FECHA SUBIDA</th>
                        <th ><ImgOjo src="https://c0.klipartz.com/pngpicture/453/989/gratis-png-icono-de-accion-de-lista-de-verificacion-de-iconos-de-computadora-salud-dental-y-hoja-de-registro.png" alt="" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Cochabamba</th>
                        <th >Const. tinglado cancha polifuncional mzn 010 cinti raymi otb santa monica de Obras - ANPE</th>
                        <th>Presentación: 08 / 05 / 2024</th>
                        <th ><ButtonD><Link to="/resultadodetalle">DETALLE</Link></ButtonD></th>
                      </tr>
                    </tbody>
                  </Scroll>
                </Table>
                <Titulo2>
                </Titulo2>
              </Form1>
            </CardBody>
          </Card>
        </ContainerForm>
        <Foot />
      </Container>
    </>
  )
}

export default Resultado