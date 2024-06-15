import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../style/colores";
import {
  ButtonD,
  Cuce,
  Form1,
  Table,
  Titulo,
  Titulo2,
  Titulo3,
} from "../style/formulariosStyleUno";
import { Link } from "react-router-dom";
import Foot from "./admin/foot";
import { useGetDelete } from "../hooks/useGetDelete";
import { ENDPOINTS } from "../routes/enpoints";
import { convertirFecha } from "../utils/dateformat";

const ConvoServicios = () => {
  const { res } = useGetDelete(ENDPOINTS.CONVOCATORIA.GET);

  return (
    <>
      <MovingBackground />
      <Container className="container py-5">
        <ContainerForm>
          <CardBody1>
            <Card1>
              <h1 className="text-center">CONVOCATORIAS DE OBRAS</h1>
            </Card1>
          </CardBody1>
          <Card>
            <CardBody>
              <Form1>
                <Table>
                  <Scroll>
                    <thead>
                      <tr>
                        <th>Nro</th>
                        <th>DEPARTAMENTO</th>
                        <th>DESCRIPCION</th>
                        <th>NOMBRE PROYECTO/ MODALIDAD</th>
                        <th>MODALIDAD</th>
                        <th>FECHA SUBIDA</th>
                        <th>
                          <ImgOjo
                            src="https://c0.klipartz.com/pngpicture/453/989/gratis-png-icono-de-accion-de-lista-de-verificacion-de-iconos-de-computadora-salud-dental-y-hoja-de-registro.png"
                            alt=""
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {res?.map((v, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <th>{v.nombre}</th>
                          <th>{v.descripcion}</th>
                          <th>{v.departamento}</th>
                          <th>{v.modalidad}</th>
                          <th>{convertirFecha(v.fechaPublicacion)}</th>
                          <th>
                            <ButtonD>
                              <Link to="/postular">POSTULAR</Link>
                            </ButtonD>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </Scroll>
                </Table>
                <Titulo2></Titulo2>
              </Form1>
            </CardBody>
          </Card>
        </ContainerForm>
        <Foot />
      </Container>
    </>
  );
};

export default ConvoServicios;

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
  background: url("https://72cf75f9f7.clvaw-cdnwnd.com/bda6742a4e78d889360304a280fac4d6/200000009-1a0741b01b/Fondo%201.jpg?ph=72cf75f9f7")
    repeat;
  background-size: cover;
  animation: ${moveBackground} 80s linear infinite;
  z-index: -2;
`;

const Card = styled.div`
  width: 1160px;
  height: 1020px;
  border-radius: 30px;
  margin-left: 100px;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  backdrop-filter: blur(20px);
`;

const CardBody = styled.div`
  width: 100%;
  height: 1070px;
  margin-top: 30px;
`;
const Scroll = styled.div`
  width: 100%;
  height: 848px;
  overflow-y: scroll;
`;
const CardBody1 = styled.div`
  width: 100%;
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
  justify-content: center;
  align-items: center;
  background:${Colors.primary100};
  h1{
      color:${Colors.primary500};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
`;
const ContainerForm = styled.div`
  width: 1519px;
  height: 100%;
  padding: 80px;
`;
