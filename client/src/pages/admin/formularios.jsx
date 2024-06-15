import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../style/colores';

const Formularios = () => {
  return (
    <Container>
      <SectionTitle1>Formularios</SectionTitle1>
      <div>
        <Section>
        <SectionTitle>
            <Sectionh2>Convocatoria</Sectionh2>
          </SectionTitle>
          <CardBody>
            {["Uno"].map((item, index) => (
              <ButtonWrapper key={index}>
                <StyledButton to={`/dashboard/Adm${item}`}>{item}</StyledButton>
              </ButtonWrapper>
            ))}
          </CardBody>
        </Section>
        <Section>
          <SectionTitle>
            <Sectionh2>Proponente</Sectionh2>
          </SectionTitle>
          <CardBody>
            {["Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete"].map((item, index) => (
              <ButtonWrapper key={index}>
                <StyledButton to={`/dashboard/Adm${item}`}>{item}</StyledButton>
              </ButtonWrapper>
            ))}
          </CardBody>
        </Section>
        <Section>
          <SectionTitle>
            <Sectionh2>Evaluador</Sectionh2>
          </SectionTitle>
          <CardBody>
            {["Ocho", "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce"].map((item, index) => (
              <ButtonWrapper key={index}>
                <StyledButton to={`/dashboard/Adm${item}`}>{item}</StyledButton>
              </ButtonWrapper>
            ))}
          </CardBody>
        </Section>
      </div>
    </Container>
  );
};

export default Formularios;

const Container = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 20px;
  div{
    display: flex;
    flex-direction: row;
    gap: 20px; 
  }
`;


const Section = styled.div`
  width: 470px;
  height:800px;
  margin-top:20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:center;
  padding: 20px;
  background:${Colors.primary400};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px;
`;

const SectionTitle1 = styled.h1`
  width:100%;
  color: ${Colors.primary100};
  margin-bottom: 20px;
  font-size: 30px;
  &::first-letter {
          color: ${Colors.primary200};
          font-size: 1.5em;
          font-weight: 600;
      }
`;

const SectionTitle = styled.h2`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content:center;
  align-items:center;
  color: ${Colors.primary100};
  margin-bottom: 10px;
  text-align: center;
`;
const Sectionh2 = styled.h2`
  width: 100%;
  font-size:30px;
  &::first-letter {
    color: ${Colors.primary200};
    font-size: 35px;
    font-weight: 600;
  }
`;

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const ButtonWrapper = styled.div`
  flex: 1 1 200px;
  max-width: 200px;
`;

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: ${Colors.primary500};
  background: ${Colors.primary200};
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ecaa40;
  }
`;
