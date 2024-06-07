import React, { useState, useEffect } from "react";
import { Tr, Table, Th, Form } from "../../style/formulariosStyleUno";
import {
  Container,
  FormAdm,
  Link,
  Main,
  Section,
  SectionTwo,
  TableContainer,
  ThAccion,
  Titulo,
} from "../../style/estilosAdm";
import { useGetDelete } from "../../hooks/useGetDelete";
import { ENDPOINTS } from "../../routes/enpoints";

const Empresa = () => {
  const { handleDelete, res, getData } = useGetDelete(ENDPOINTS.EMPRESA.GET);
  const { res: resUsu, getData: getUsu } = useGetDelete("usuarioEm");
  const [form, setForm] = useState({
    nombres: "",
    nit: 0,
    departamento: "",
    descripcion: "",
    direccion: "",
    correoElectronico: "",
    telefono: 0,
    rol: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editMode ? "PUT" : "POST";
      const url = editMode
        ? `http://localhost:5000/empresa/${editId}`
        : "http://localhost:5000/empresaUsu";

      const data = editMode
        ? {
            nombres: form.nombres,
            nit: parseInt(form.nit),
            departamento: form.departamento,
            descripcion: form.descripcion,
            direccion: form.direccion,
            correoElectronico: form.correoElectronico,
            telefono: parseInt(form.telefono),
          }
        : {
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
              rol: form.rol,
            },
          };

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      getData();
      getUsu();
      setForm({
        nombres: "",
        nit: 0,
        departamento: "",
        descripcion: "",
        direccion: "",
        correoElectronico: "",
        telefono: 0,
        rol: "",
      });
      setEditMode(false);
      setEditId(null);
      console.log("Success:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id) => {
    const empresa = res.find((v) => v.id === id);
    setForm({
      nombres: empresa.nombres,
      nit: empresa.nit,
      departamento: empresa.departamento,
      descripcion: empresa.descripcion,
      direccion: empresa.direccion,
      correoElectronico: empresa.correoElectronico,
      telefono: empresa.telefono,
      rol: empresa.rol,
    });
    setEditMode(true);
    setEditId(id);
  };
  const handleDeletes = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/empresa/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      getUsu();
      console.log(`Empresa con id ${id} eliminada con éxito`);
    } catch (error) {
      console.error(`Error al eliminar la empresa con id ${id}:`, error);
    }
  };
  return (
    <Container>
      <Titulo>
        <h1>Empresas</h1>
      </Titulo>
      <div>
        <Section className="registro">
          <FormAdm action="#">
            <h2>{editMode ? "Editar Empresa" : "Registro"}</h2>
            <label htmlFor="nombre">Nombre Empresa:</label>
            <input
              type="text"
              required
              value={form.nombres}
              onChange={(event) =>
                setForm((old) => ({ ...old, nombres: event.target.value }))
              }
            />
            <label htmlFor="nit">NIT:</label>
            <input
              type="number"
              required
              value={form.nit}
              onChange={(event) =>
                setForm((old) => ({ ...old, nit: event.target.value }))
              }
            />
            <label htmlFor="departamento">Departamento:</label>
            <input
              type="text"
              required
              value={form.departamento}
              onChange={(event) =>
                setForm((old) => ({ ...old, departamento: event.target.value }))
              }
            />
            <label htmlFor="descripcion">Empresa deicada a:</label>
            <input
              type="text"
              required
              value={form.descripcion}
              onChange={(event) =>
                setForm((old) => ({ ...old, descripcion: event.target.value }))
              }
            />
            <label htmlFor="direccion">Direccion:</label>
            <input
              type="text"
              required
              value={form.direccion}
              onChange={(event) =>
                setForm((old) => ({ ...old, direccion: event.target.value }))
              }
            />
            <label htmlFor="email">Correo Electronico:</label>
            <input
              type="email"
              required
              value={form.correoElectronico}
              onChange={(event) =>
                setForm((old) => ({
                  ...old,
                  correoElectronico: event.target.value,
                }))
              }
            />
            <label htmlFor="number">Teléfono:</label>
            <input
              type="number"
              required
              value={form.telefono}
              onChange={(event) =>
                setForm((old) => ({ ...old, telefono: event.target.value }))
              }
            />
            {editMode ? (
              <></>
            ) : (
              <>
                <label htmlFor="rol">Rol:</label>
                <input
                  type="text"
                  value={form.rol}
                  onChange={(event) =>
                    setForm((old) => ({ ...old, rol: event.target.value }))
                  }
                />
              </>
            )}

            <div>
              <button type="submit" onClick={handleSubmit}>
                {editMode ? "Actualizar" : "Registrar"}
              </button>
            </div>
          </FormAdm>
        </Section>
        <SectionTwo>
          <h1>Empresas</h1>
          <TableContainer>
            <Table>
              <thead>
                <Tr>
                  <th>N°</th>
                  <th>Nombre Empresa</th>
                  <th>NIT</th>
                  <th>Departamento</th>
                  <th>Descripcion</th>
                  <th>Direccion</th>
                  <th>Correo Electronico</th>
                  <th>Teléfono</th>
                  <th>Usuario</th>
                  <th>Contraseña</th>
                  <th>Rol</th>
                  <th>Accion</th>
                </Tr>
              </thead>
              <tbody>
                {resUsu?.map((v, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>{v.empresa.nombres}</th>
                    <th>{v.empresa.nit}</th>
                    <th>{v.empresa.departamento}</th>
                    <th>{v.empresa.descripcion}</th>
                    <th>{v.empresa.direccion}</th>
                    <th>{v.empresa.correoElectronico}</th>
                    <th>{v.empresa.telefono}</th>
                    <th>{v.usuario}</th>
                    <th>{v.password}</th>
                    <th>{v.rol}</th>
                    <ThAccion>
                      <Th>
                        <button onClick={() => handleEdit(v.empresa.id)}>
                          Editar
                        </button>
                      </Th>
                      <Th>
                        <button onClick={() => handleDeletes(v.empresa.id)}>
                          Eliminar
                        </button>
                      </Th>
                    </ThAccion>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </SectionTwo>
      </div>
    </Container>
  );
};

export default Empresa;
