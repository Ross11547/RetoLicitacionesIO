import React from 'react';
import { Tr, Table, Th } from '../../style/formulariosStyleUno';
import { Container, FormAdm, Link, Main, Section, TableContainer, Titulo } from '../../style/estilosAdm';
import Navar from './navar'

const Usuarios = () => {
  return (
    <Container>
      <Titulo>
        <h1>Usuarios</h1>
      </Titulo>
      <Main>
        <Section className="registro">
          <FormAdm action="#">
            <h2>Registro</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <label htmlFor="email">Apellido:</label>
            <input type="text" id="ape" name="ape" required />
            <label htmlFor="password">Celular:</label>
            <input type="number" id="cel" name="cel" required />
            <label htmlFor="email">Usuario:</label>
            <input type="text" id="usu" name="usu" required />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="repassword">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            <div>
              <button type="submit">Registrarse</button>
            </div>
          </FormAdm>
        </Section>
        <Section>
          <h1>Usuarios</h1>
          <TableContainer>
            <Table>
              <thead>
                <Tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Celular</th>
                  <th>Rol</th>
                  <th>Usuario</th>
                  <th>Contraseña</th>
                  <th>Correo Electrónico</th>
                  <th>Acción</th>
                </Tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
                <tr>
                  <th rowSpan={3}>John</th>
                  <th rowSpan={3}>Doe</th>
                  <th rowSpan={3}>555-1234</th>
                  <th rowSpan={3}>Administrador</th>
                  <th rowSpan={3}>johndoe</th>
                  <th rowSpan={3}>*********</th>
                  <th rowSpan={3} >john.doe@example.com</th>
                  <Th><Link href="#">Crear</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Editar</Link></Th>
                </tr>
                <tr>
                  <Th><Link href="#">Eliminar</Link></Th>
                </tr>
              </tbody>
            </Table>
          </TableContainer>
        </Section>
      </Main>
    </Container>
  );
};

export default Usuarios


