import React from "react";
import styled from "styled-components";
import { Colors } from "../style/colores";
import { ButtonD, Cuce, Form1, Table, Titulo, Titulo2, Titulo3 } from "../style/formulariosStyleUno";
import { InputD } from "../style/formulariosStyleDosTres";
import { Link } from "react-router-dom";

const Card = styled.div`
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
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
  margin-top: 5px;
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
  h1{
    color: ${Colors.primary500}
  }
`;
const ContainerForm = styled.div`
  width: 1519px;
  height: 100%;
  padding: 80px;
`;

const SectionTwo = () => {
  return (
    <>
      <Container className="container py-5">
        <ContainerForm>
          <CardBody1>
            <Card1>
              <h1 className="text-center">PROYECTOS</h1>
            </Card1>
          </CardBody1>
          <Card>
            <CardBody>
              <Form1>
                <Titulo3>
                  <button><Link to="/obrasInicio">OBRAS</Link></button>
                </Titulo3>
                <Table>
                  <Scroll>
                    <thead>
                      <tr>
                        <th >DEPARTAMENTO / ENTIDAD / CUCE</th>
                        <th >ONJETO / TIPO DE CONTRATACIÓN / MODALIDAD</th>
                        <th >ESTADO / FECHA</th>
                        <th >CONTACTO</th>
                        <th ><ImgOjo src="https://cdn.icon-icons.com/icons2/2483/PNG/512/eye_icon_149935.png" alt="" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Cochabamba</th>
                        <th rowSpan={3}>Const. tinglado cancha polifuncional mzn 010 cinti raymi otb santa monica de Obras - ANPP</th>
                        <th>Vigente</th>
                        <th rowSpan={3}>Mariely Claudia Aguayo Taborga (Telf: 4258103- 4425810-4258030)</th>
                        <th rowSpan={3}><ButtonD>DETALLES</ButtonD></th>
                      </tr>
                      <tr>
                        <th>Gobierno Autonomo Municipal De Cochabamba</th>
                        <th>Publicación: 24 / 04 / 2024</th>
                      </tr>
                      <tr>
                        <th>24-1301-00-1416026-2-2</th>
                        <th>Presentación: 08 / 05 / 2024</th>
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
      </Container>
    </>
  );
};

export default SectionTwo;
