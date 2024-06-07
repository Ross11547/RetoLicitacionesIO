import React from 'react';
import { Tr, Table, Th } from '../../style/formulariosStyleUno';
import { Container, FormAdm2, Link, TableContainer, Titulo, Titulo2 } from '../../style/estilosAdm';

const Licitantes = () => {
  return (
    <Container>
      <FormAdm2>
        <Titulo2>
          <h1>Proyectos</h1>
          <div>
            <button>Excel</button>
            <button>PDF</button>
          </div>
        </Titulo2>
        <TableContainer>
          <Table>
            <thead>
              <Tr>
                <th>Nombre Proyecto</th>
                <th>ESTADO</th>
                <th>DEPARTAMENTO</th>
                <th>FECHA PUBLICACIÓN</th>
                <th>FECHA CIERRE</th>
                <th>TIPO CONTRATACIÓN</th>
                <th>ACCION</th>
              </Tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan={3}>John</th>
                <th rowSpan={3}>Doe</th>
                <th rowSpan={3}>555-1234</th>
                <th rowSpan={3}>Administrador</th>
                <th rowSpan={3}>johndoe</th>
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
      </FormAdm2>
    </Container >

  )
}

export default Licitantes