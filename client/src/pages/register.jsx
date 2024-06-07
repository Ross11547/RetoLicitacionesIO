import React from 'react';
import { ButtonInicio, CheckboxContainer, CheckboxInput, CheckboxLabel, Container, DivImg, Form, FormGroup, Input, Label, LoginForm, LoginForm2, Title } from '../style/registros';

const Register = () => {
  return (
    <Container>
      <DivImg>
        <img src='https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/TMDW/40763190_40763190_20220927184804.jpg' alt="Imagen de fondo"></img>
      </DivImg>
      <Form>
        <LoginForm2>
          <Title>Registrarse</Title>
          <FormGroup>
            <Input type="text" id="username" placeholder="Nombre Empresa" required />
          </FormGroup>
          <FormGroup>
            <Input type="number" id="nit" placeholder="NIT de la empresa" required />
          </FormGroup>
          <FormGroup>
            <Input type="text" id="departamento" placeholder="Departamento" required />
          </FormGroup>
          <FormGroup>
            <Input type="text" id="dedicada" placeholder="Empresa dedicada a..." required />
          </FormGroup>
          <FormGroup>
            <Input type="email" id="correo" placeholder="Correo Electrónico" required />
          </FormGroup>
          <FormGroup>
            <Input type="number" id="celular" placeholder="Celular" required />
          </FormGroup>
          <FormGroup>
          </FormGroup>
          <ButtonInicio type="submit">Iniciar sesión</ButtonInicio>
        </LoginForm2>
      </Form>
    </Container>
  );
};

export default Register;
