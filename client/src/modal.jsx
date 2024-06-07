import React from "react";
import { useModalContext } from "./context/modalContext";
import styled from "styled-components";

const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();

  if (!openModal) return null;

  return (
    <DivModalContainer>
      <DivAtras onClick={() => setOpenModal(false)}></DivAtras>
      <DivChildContainer>
        <DivCabecera>
          <PTitulo>{titulo}</PTitulo>
          <WhiteIconButton onClick={() => setOpenModal(false)}>x</WhiteIconButton>
        </DivCabecera>
        <DivBody>{contenido}</DivBody>
      </DivChildContainer>
    </DivModalContainer>
  );
};

const DivModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const DivAtras = styled.div`
  width: 900px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  animation: transitionBackground 1s;

  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const DivChildContainer = styled.div`
  z-index: 1;
  border-radius: 16px;
  width: 90%;
  max-width: 1000px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  animation: move 0.5s;
  margin-top: 50px;
overflow-y: hidden;
  @keyframes move {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PTitulo = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: gray;
`;

const DivCabecera = styled.div`
  width: 100%;
  padding: 10px 26px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivBody = styled.div`
  padding: 26px;
  position: relative;
`;

const WhiteIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
  border: 1px solid ${props => props.theme.borders};
  background-color: ${props => props.theme.principal};
  border-radius: 10px;
  color: ${props => props.theme.textPrincipal};
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: ${props => props.minwidth};

  &:hover {
    color: ${props => props.theme.textSecondary};
    background-color: ${props => props.theme.colorPrincipal};
    border: 1px solid ${props => props.theme.colorPrincipal};
  }

  color: ${props => props.active && props.theme.textSecondary};
  background-color: ${props => props.active && props.theme.colorPrincipal};
  border: ${props => props.active && "1px solid " + props.theme.colorPrincipal};

  &:disabled {
    pointer-events: none;
    border: 1px solid ${props => props.theme.textPrincipal};
    background-color: ${props => props.theme.textPrincipal};
    color: ${props => props.theme.textSecondary};
  }
`;

export default Modal;
