import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ButtonInicio, CheckboxContainer, CheckboxInput, CheckboxLabel, Container, DivImg, Form, FormGroup, Input, Label, LoginForm, LoginForm2, Title } from '../style/registros';

const Register = () => {
  const [form, setForm] = useState({
    nombres: "",
    nit: 0,
    departamento: "",
    descripcion: "",
    direccion: "",
    correoElectronico: "",
    telefono: 0,
  });

  console.log(form);

  const handleRegistro = async (e) => {
    e.preventDefault();

    if (form.nombres === "" || form.nit === null || form.departamento === "" || form.descripcion === "" || form.correoElectronico === "" || form.telefono === 0) {
      return toast.error("Debe Llenar Todos Los Campos >:b");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@.+\.com$/;
    if (!emailRegex.test(form.correoElectronico)) {
      return toast.error("Por favor, ingresa un correo válido que contenga '@' y termine en '.com'");
    }

    const registro = await fetch("http://localhost:5000/empresaUsu", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        empresa: {
          nombres: form.nombres,
          nit: parseInt(form.nit),
          departamento: form.departamento,
          descripcion: form.descripcion,
          direccion: form.direccion,
          correoElectronico: form.correoElectronico,
          telefono: parseInt(form.telefono),
        },
        usuario: {
          rol: "usuario"
        },
      }),
    });

    if (registro.ok) {
      const json = await registro.json();
      if (json.error) {
        toast.error(json.error);
      } else {
        toast.success(json.message);
        toast.success("Usuario: " + json.generatedUsername + " Contraseña: " + json.generatedPassword);
        setUser(json.data);
      }
    }
  };

  return (
    <Container>
      <DivImg>
        <img src='https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/TMDW/40763190_40763190_20220927184804.jpg' alt="Imagen de fondo"></img>
      </DivImg>
      <Form>
        <LoginForm2>
          <Title>Registrarse</Title>
          <FormGroup>
            <Input
              type="text"
              id="username"
              placeholder="Nombre Empresa"
              required
              value={form.nombres}
              onChange={(event) => setForm((old) => ({...old, nombres:event.target.value}))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              id="nit"
              placeholder="NIT de la empresa"
              required
              onChange={(event) => setForm((old)=> ({...old, nit:event.target.value}))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              id="departamento"
              placeholder="Departamento"
              required
              value={form.departamento}
              onChange={(event) => setForm((old) =>({...old, departamento:event.target.value}))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              id="dedicada"
              placeholder="Empresa dedicada a..."
              required
              value={form.descripcion}
              onChange={(event) =>setForm((old) => ({...old, descripcion: event.target.value}))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              id="direccion"
              placeholder="Direccion"
              required
              value={form.direccion}
              onChange={(event) => setForm((old) => ({...old, direccion: event.target.value}))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              id="correo"
              placeholder="Correo Electrónico"
              required
              pattern="^[a-zA-Z0-9._%+-]+@.+\.com$"
              value={form.correoElectronico}
              onChange={(event) => setForm((old) => ({...old, correoElectronico: event.target.value}))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              id="celular"
              placeholder="Celular"
              required
              onChange={(event) => setForm((old) => ({...old, telefono: event.target.value}))}
            />
          </FormGroup>
          <ButtonInicio onClick={handleRegistro}>Iniciar sesión</ButtonInicio>
        </LoginForm2>
      </Form>
    </Container>
  );
};

export default Register;
