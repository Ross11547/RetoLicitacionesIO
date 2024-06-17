import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../../style/colores';
import Foot from './foot';
import FormUno from '../postuObras/dos';
import FormDos from '../proponenteObras/tres';
import FormTres from '../proponenteObras/cuatro';
import FormCuatro from '../proponenteObras/cinco';
import FormCinco from '../proponenteObras/seis';
import FormSeis from '../proponenteObras/siete';
import Proyectos from './licitantes';
import EmpresasAdj from './empresasAdj';
import PorCalificar from "./porCalificar"
import CalificarEmpresa from './components/calificarEmpresa';
const Calificar = () => {
    const [selectedForm, setSelectedForm] = useState(null);

    const handleControlClick = (formName) => {
        setSelectedForm(formName);
    };
    const[califica,setCalificar]=useState(true);
  
    const handleCambio=()=>{
      handleControlClick("calificarEmpresa")
    }
    const handleCambioCalificar=()=>{
      handleControlClick("porCalificar")
    }
    const renderSelectedForm = () => {
        switch (selectedForm) {
            case 'proyectos':
                return <Proyectos />;
            case 'empresaAdju':
                 return <EmpresasAdj />;
            case 'porCalificar':
              return <PorCalificar handleCambio={handleCambio}  />;
            case 'calificarEmpresa':
              return <CalificarEmpresa handleCambioCalificar={handleCambioCalificar} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Container>
                <ContainerForm>
                    <Card>
                        <h1>DATOS LICITACIONES</h1>
                    </Card>
                    <CardBody1>
                        <Card1>
                            <button onClick={() => handleControlClick('porCalificar')} >POR CALIFICAR</button>
                            <button onClick={() => handleControlClick('proyectos')}>CALIFICADOS</button>
                            <button onClick={() => handleControlClick('empresaAdju')}>EMPRESAS ACEPTADAS</button>
                        </Card1>
                        <FormContainer>
                            {renderSelectedForm()}
                        </FormContainer>
                    </CardBody1>
                </ContainerForm>
            </Container>
        </>
    );
};

export default Calificar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
  height:100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${Colors.primary100};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  h1 {
    color: ${Colors.primary500};
  }
`;

const Card1 = styled.div`
  width: 250px;
  height: 500px; 
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  margin-block-start: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  flex-direction: column;
  gap: 25px;
  button {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 5px;
    font-weight: bold;
    border: none;
    background: ${Colors.primary200};
    color: ${Colors.primary500};
    box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
    cursor: pointer;
  }
  button:hover {
    background: #ecaa40;
  }
`;

const CardBody1 = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`;

const FormContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 20px;
  overflow-y: auto;
  margin-top: 20px;
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
  height: 100%;
  background: url("https://fge.pe/wp-content/uploads/2020/07/servicios-de-construcci%C3%B3n-y-mantenimiento-en-lima-peru.jpg");
  background-size: cover;
  animation: ${moveBackground} 80s linear infinite;
  z-index: -2;
`;
