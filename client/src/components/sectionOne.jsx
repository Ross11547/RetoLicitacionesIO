import React from "react";
import styled from "styled-components";
import Edificio1 from "../assets/edicifio.jpg";
import Edificio from "../assets/edi.jpg";

const SectionOne = () => {
  return (
    <Container>
      <div>
        <DivDate>
          <label>Licitaciones De Cochabamba</label>
          <p>
            Lideramos la transformación del entorno urbano mediante proyectos
            sostenibles y eficientes, enfocados en mejorar la calidad de vida y
            minimizar el impacto ambiental.
          </p>
        </DivDate>
        <div>
          <Img src={Edificio1} />
          <Img src={Edificio} />
        </div>
      </div>
    </Container>
  );
};

export default SectionOne;
const Container = styled.div`
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }
`;
const DivDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 600px;
  height: 400px;
  gap: 20px;
  & > label {
    font-size: 50px;
    font-weight: 700;
    line-height: 40px;
    color: #fca311;
  }
  & > p {
    color: #000;
    font-size: 20px;
  }
`;
const Img = styled.img`
  width: 250px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin: 5px;
`;