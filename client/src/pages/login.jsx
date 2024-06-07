import React, { useState } from 'react';
import { ButtonInicio, CheckboxContainer, CheckboxInput, CheckboxLabel, Container, DivImg, Form, FormGroup, Input, Label, LoginForm, Title } from '../style/registros';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertError, AlertSuccess } from '../components/alertTostify';
const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({ usuario, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.data);
        alert("Inicio de sesión exitoso");
      } else {
        alert(data.message);
      }
    } catch (error) {
      AlertError("Error al iniciar sesión", error);
      alert("Error al iniciar sesión");
    }
  };
  return (
    <Container>
      <DivImg>
        <img src='https://rapidweblaunch.com/wp-content/uploads/2022/11/construction-website-examples.jpg' alt="Imagen de fondo"></img>
      </DivImg>
      <Form onSubmit={handleLogin}>
        <LoginForm>
          <Title>Iniciar sesión</Title>
          <FormGroup>
            <Input
              type="text"
              id="username"
              placeholder="Nombre Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <CheckboxContainer>
              <div>
                <CheckboxInput type="checkbox" required></CheckboxInput>
                <CheckboxLabel htmlFor="check">Recordar</CheckboxLabel>
              </div>
              <a href="/">¿No recuerda su contraseña?</a>
            </CheckboxContainer>
          </FormGroup>
          <ButtonInicio type="submit">Iniciar sesión</ButtonInicio>
          <FormGroup>
            <Label htmlFor="register">No tienes una cuenta <a href="/Pages/myaccount.html">registrate</a></Label>
          </FormGroup>
        </LoginForm>
      </Form>
    </Container>
  );
};

export default Login;

