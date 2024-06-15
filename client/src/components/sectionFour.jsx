import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../style/colores";
import { Link } from 'react-router-dom';
import Imagenes from '../data/imagenes.json';

const SectionFour = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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
    animation: ${hoveredIndex !== null ? appearFromBottom : "none"} 0.5s ease forwards;
  `;

  return (
    <Container>
      <GridContainer>
        {Imagenes?.map((v, i) => (
          <GridItem 
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <BackgroundImage src={hoveredIndex === i ? v.url2 : v.url1} />
            <Content>
              <Label>{v.nombre}</Label>
            </Content>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};

export default SectionFour;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  position: relative;
  width: 100%;  
  height: 400px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); // Slightly increase the size on hover
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GridItem}:hover & {
    transform: scale(1.1); // Increase the size of the image on hover
  }
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
  transition: transform 0.3s ease;
`;

const Label = styled.label`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;
