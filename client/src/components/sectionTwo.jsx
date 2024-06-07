import React, { useState } from "react";
import Fonto from "../assets/Fondo.svg";
import Sbienes from "../assets/SBieneS.jpg";
import Sobras from "../assets/Sobras.svg";
import Sservicios from "../assets/Sservicios.svg";
import Sconsultoria from "../assets/SConsultoria.avif";
import styled, { keyframes } from "styled-components";
import { Colors } from "../style/colores";

const SectionTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleContainerClick = () => {
    setIsVisible(!isVisible);
  };

  const appearFromBottom = keyframes`
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const Text = styled.label`
    text-align: center;
    color: #fff;
    animation: ${isVisible ? appearFromBottom : "none"} 0.5s ease forwards;
  `;
  return (
    <Container>
      <ImageWrapper>
        <img src={Fonto} />
        <button><a href="">LEER MÁS</a></button>
      </ImageWrapper>
      <Containera>
        <BackgroundImage src={Sobras} />
        <Content onClick={handleContainerClick}>
          <Label>Obras</Label>
          <Texts>
            El sector de Obras se centra en la planificación, diseño y
            construcción de estructuras físicas.
          </Texts>
        </Content>
      </Containera>
      <Containera>
        <BackgroundImage src={Sservicios} />
        <Content1>
          <Label className="label">Servicios Generales</Label>
          <Texts>
            El sector de Servicios se dedica a proporcionar una amplia gama de
            servicios a clientes y empresas.
          </Texts>
        </Content1>
      </Containera>
      <Containera>
        <BackgroundImage src={Sbienes} />
        <Content2>
          <Label className="label">Bienes</Label>
          <Texts>
            El sector de Bienes se centra en la producción y gestión de
            recursos materiales tangibles.
          </Texts>
        </Content2>
      </Containera>
      <Containera>
        <BackgroundImage src={Sconsultoria} />
        <Content1>
          <Label className="label">Servicios De Consultoria</Label>
          <Texts>
            El sector de Servicios se dedica a proporcionar una amplia gama de
            servicios a clientes y empresas.
          </Texts>
        </Content1>
      </Containera>
    </Container>
  );
};

export default SectionTwo;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 600px;
  & > img {
    width: 600px;
  }
  & > button {
    width: 200px;
    height: 50px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    font-weight: bold;
    background: ${Colors.primary200};
    border-radius: 5px;
    border: none;
    color: ${Colors.primary500};
    cursor: pointer;
    a {
      text-decoration: none;
      color: ${Colors.primary500};
    }
  }
`;
const Containera = styled.div`
  position: relative;
  width: 200px;
  height: 424px;
  cursor: pointer;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;

`;
const Content1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;
const Content2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const Label = styled.label`
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const Texts = styled.label`
  color: #fff;
  height: 100px;
  text-align: left;
`;