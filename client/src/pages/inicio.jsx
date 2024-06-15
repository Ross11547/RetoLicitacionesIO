import React from "react";
import styled from "styled-components";
import Bienes from "../assets/BIenes.png";
import Obras from "../assets/Obras.png";
import Servicios from "../assets/Servicios.png";
import SectionTre from "../components/sectionTre";
import SectionTwo from "../components/sectionTwo";
import SectionFour from "../components/sectionFour";
import { Colors } from "../style/colores";
import Foot from "./admin/foot";
import { ENDPOINTS } from "../routes/enpoints";
import { useGetDelete } from "../hooks/useGetDelete";


const Inicio = () => {
  const {res: resEmpresa} = useGetDelete(ENDPOINTS.EMPRESA.GET);
  const {res} = useGetDelete(ENDPOINTS.CONVOCATORIA.GET);
  return (
    <> 
      <Container>
        <Img src="https://fiic.la/blog/wp-content/uploads/2019/07/Articuloguateweb.jpg" />
        <DivDate>
          <label>ALCALDÍA DE COCHABAMBA</label>
          <p>
            La alcaldía de Cochabamba es la institución local encargada de la administración y gestión
            de los asuntos municipales en la ciudad de Cochabamba, Bolivia. Su responsabilidad abarca
            una amplia gama de funciones, que incluyen la provisión de servicios públicos, el mantenimiento
            de infraestructuras, la planificación urbana y el impulso del desarrollo económico local.

          </p>
        </DivDate>
        <Div2>
          <div className="DivTipo">
            <label className="h1">{resEmpresa.length}</label>
            <label>EMPRESAS</label>
          </div>
          <div className="DivTipo2">
            <label className="h1">{res.length}</label>
            <label>CONVOCATORIAS</label>
          </div>
          <DivTipoLici>
            <label>TIPOS DE LICITACIONES</label>
            <DivTipoL>
              <div>
                <img src={Obras} />
                <div>
                  <label className="label">Obras</label>
                  <label>Construcciones</label>
                </div>
              </div>
              <div>
                <img src={Servicios} />
                <div>
                  <label className="label">Servicios generales</label>
                  <label>Facilidades completas</label>
                </div>
              </div>
              <div>
                <img src={Bienes} />
                <div>
                  <label className="label">Bienes</label>
                  <label>Propiedades </label>
                </div>
              </div>
            </DivTipoL>
          </DivTipoLici>
        </Div2>
      </Container>
      <SectionTwo />
      <SectionTre />
      <SectionFour/>
      <Foot />
    </>
  );
};

export default Inicio;
const Container = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 800px;
  margin-block-end: 250px;
`;
const DivDate = styled.div`
  top: 70px;
  left: 120px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 900px;
  height: 400px;
  gap: 20px;
  & > label {
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    color: ${Colors.primary200};
  }
  & > p {
    color: ${Colors.primary500};
    font-size: 25px;
    text-align: justify;
    line-height: 1.8;
  }
  & > button {
    padding: 10px 70px;
    background-color: ${Colors.primary200};
    border: none;
    border-radius: 5px;
    color: ${Colors.primary500};
    font-size: 20px;
    cursor: pointer;
  }
`;
const Div2 = styled.div`
  top: 580px;
  position: absolute;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  & > .DivTipo {
    width: 250px;
    height: 160px;
    background: ${Colors.primary100};
    color: ${Colors.primary500};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > .h1 {
      font-size: 60px;
    }
    & > label {
      font-size: 20px;
      font-weight: 700;
    }
  }
  & > .DivTipo2 {
    width: 250px;
    height: 160px;
    background: ${Colors.primary300};
    color: ${Colors.primary500};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > .h1 {
      font-size: 60px;
    }
    & > label {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
const DivTipoLici = styled.div`
  width: 450px;
  padding: 40px;
  height: 440px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-top: 5px solid ${Colors.primary100};
  background: ${Colors.primary500};
  & > label {
    font-size: 30px;
    font-weight: 600;
    color: ${Colors.primary200};
  }
  & > div {
    margin-left: 40px;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & > div {
      display: flex;
      flex-direction: row;
      gap: 10px;
      & > img {
        width: 50px;
        height: 50px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        & > .label {
          font-size: 20px;
          font-weight: 600;
          color:${Colors.primary200};
        }
      }
    }
  }
`;

const DivTipoL = styled.div`
margin: 35px;
`;
