import React from 'react';
import { Tr, Table, Th } from '../../style/formulariosStyleUno';
import { Container, FormAdm, FormAdm2, Link, TableContainer, Titulo, Titulo2 } from '../../style/estilosAdm';
import { useGetDelete } from '../../hooks/useGetDelete';
import { ENDPOINTS } from '../../routes/enpoints';

const EmpresasAdj = () => {
  const { handlePost, handleDelete, res, getData } = useGetDelete(ENDPOINTS.EMPRESAADJUDICADA.GET);

  return (
    <Container>
      <FormAdm2>
        <Titulo2>
          <h1>Empresas Adjudicadas</h1>
          <div>
            <button>Excel</button>
            <button>PDF</button>
          </div>
        </Titulo2>
        <TableContainer>
          <Table>
            <thead>
              <Tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>NIT</th>
                <th>Direccion</th>
                <th>Descripción</th>
                <th>Accion</th>
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

export default EmpresasAdj