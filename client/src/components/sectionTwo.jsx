import React, { useState } from "react";
import Fonto from "../assets/Fondo.svg";
import Sbienes from "../assets/SBieneS.jpg";
import Sobras from "../assets/Sobras.svg";
import Sservicios from "../assets/Sservicios.svg";
import Sconsultoria from "../assets/SConsultoria.avif";
import styled, { keyframes } from "styled-components";
import { Colors } from "../style/colores";
import { Link } from 'react-router-dom';

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
    font-size: 18px; 
    text-align: center;
   color: ${Colors.primary500};
    animation: ${isVisible ? appearFromBottom : "none"} 0.8s ease forwards;
  `;

  return (
    <Container>
      <GridContainer>
        <GridItem>
          <BackgroundImage src={Sobras} />
          <Content onClick={handleContainerClick}>
            <Label>Obras</Label>
            <Text>
              El sector de Obras se centra en la planificación, diseño y
              construcción de estructuras físicas.
            </Text>
          </Content>
        </GridItem>
        <GridItem>
          <BackgroundImage src={Sservicios} />
          <Content>
            <Label>Servicios Generales</Label>
            <Text>
              El sector de Servicios se dedica a proporcionar una amplia gama de
              servicios a clientes y empresas.
            </Text>
          </Content>
        </GridItem>
        <GridItem>
          <BackgroundImage src={Sbienes} />
          <Content>
            <Label>Bienes</Label>
            <Text>
              El sector de Bienes se centra en la producción y gestión de
              recursos materiales tangibles.
            </Text>
          </Content>
        </GridItem>
        <GridItem>
          <BackgroundImage src={Sconsultoria} />
          <Content>
            <Label>Servicios De Consultoría</Label>
            <Text>
              El sector de Servicios se dedica a proporcionar una amplia gama de
              servicios a clientes y empresas.
            </Text>
          </Content>
        </GridItem>
        <ImageWrapper>
          <ButtonContainer>
            <StyledButton><Link to="/leerMas">LEER MÁS</Link></StyledButton>
          </ButtonContainer>
        </ImageWrapper>
      </GridContainer>
    </Container>
  );
};

export default SectionTwo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 1175px;
    height: 00px;
    border-radius: 15px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -20px;  // Adjust this value to control the button's vertical position
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  background: ${Colors.primary200};
  border-radius: 5px;
  border: none;
  color: ${Colors.primary500};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${Colors.primary500};
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const GridItem = styled.div`
  position: relative;
  width: 280px;  // Increased width
  height: 300px;  // Increased height
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  
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
  text-align: center;
`;

const Label = styled.label`
  color: #fff;
  font-size: 28px;  // Increased font size
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.label`
  // Increased font size
`;
