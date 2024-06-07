import React, { useState } from "react";
import {
  ButtonInicio,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  Container,
  DivImg,
  Form,
  FormGroup,
  Input,
  Label,
  LoginForm,
  Title,
} from "../style/registros";
import { toast } from "react-toastify";
import { useUser } from "../store/user";
import { Navigate } from "react-router-dom";
const InicioSesion = () => {
    const { setUser, user } = useUser();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const login = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        usuario: usuario,
        password: password,
      }),
    });
    if (login.ok) {
      const json = await login.json();
      if (json.error) {
        toast.error(json.error);
      } else {
        toast.success(json.message);
        setUser(json.data);
      }
    }
  };
  if (user) {
    return <Navigate to="/dashboard/empresas"></Navigate>
  }
  return (
    <Container>
      <DivImg>
        <img
          src="https://rapidweblaunch.com/wp-content/uploads/2022/11/construction-website-examples.jpg"
          alt="Imagen de fondo"
        ></img>
      </DivImg>
      <Form>
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
          <ButtonInicio onClick={handleLogin}>Iniciar sesión</ButtonInicio>
          <FormGroup>
            <Label htmlFor="register">
              No tienes una cuenta{" "}
              <a href="/Pages/myaccount.html">registrate</a>
            </Label>
          </FormGroup>
        </LoginForm>
      </Form>
    </Container>
  );
};

export default InicioSesion;
