import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Title>Iniciar sesión</Title>
        <FormGroup>
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Correo electrónico" required />
        </FormGroup>
        <FormGroup>
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" required />
        </FormGroup>
        <SubmitButton type="submit">Iniciar sesión</SubmitButton>
      </LoginForm>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #C1CAD6;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #336699;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #003366;
  }
`;
