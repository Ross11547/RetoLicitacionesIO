import React, { useEffect, useState } from "react";
import { Tr, Table, Th } from "../../style/formulariosStyleUno";
import {
  Container,
  FormAdm,
  FormAdm3,
  Link,
  Main,
  Section,
  SectionTwo,
  TableContainer,
  Titulo,
} from "../../style/estilosAdm";
import { useGetDelete } from "../../hooks/useGetDelete";
import { ENDPOINTS } from "../../routes/enpoints";
import { convertirFecha } from "../../utils/dateformat";
import { Link as Likes } from "react-router-dom";
import { useFormUno } from "../../store/formUno";
import { toast } from "react-toastify";
const Convocatoria = () => {
  const { res, getData } = useGetDelete(ENDPOINTS.CONVOCATORIA.GET);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    departamento: "",
    modalidad: "",
    fechaPublicacion: "",
  });
  const { formUno, deleteUno } = useFormUno();
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editMode ? "PUT" : "POST";
      const url = editMode
        ? `http://localhost:5000/convocatoria/${editId}`
        : "http://localhost:5000/convocatoria";
      const fechaFormateada = new Date(form.fechaPublicacion).toISOString();

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre,
          descripcion: form.descripcion,
          departamento: form.departamento,
          modalidad: form.modalidad,
          fechaPublicacion: fechaFormateada,
          archivo: formUno,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      getData();
      setForm({
        nombre: "",
        descripcion: "",
        departamento: "",
        modalidad: "",
        fechaPublicacion: "",
      });
      deleteUno();
      setEditMode(false);
      setEditId(null);
      toast.success("Se creo la convocatoria");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeletes = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/convocatoria/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      getData();
      console.log(`Empresa con id ${id} eliminada con éxito`);
    } catch (error) {
      console.error(`Error al eliminar la empresa con id ${id}:`, error);
    }
  };
  useEffect(() => {
    if (formUno) {
      setForm({
        nombre: formUno.nombre,
        descripcion: formUno.descripcion,
        departamento: formUno.departamento,
        modalidad: formUno.modalidad,
        fechaPublicacion: formUno.fechaPublicacion,
      });
    }
  }, [formUno]);
  const handleEdit = (id) => {
    const convocatoria = res.find((v) => v.id === id);
    setForm({
      nombre:convocatoria.nombre,
      descripcion: convocatoria.descripcion,
      departamento: convocatoria.departamento,
      modalidad: convocatoria.modalidad,
      fechaPublicacion: convocatoria.fechaPublicacion,
    });
    setEditMode(true);
    setEditId(id);
  };
  return (
    <Container>
      <Titulo>
        <h1>Convocatoria</h1>
      </Titulo>
      <div>
        <Section className="registro">
          {formUno || editMode ? (
            <>
              <FormAdm3 action="#">
                <h2>Registro</h2>
                <label htmlFor="nombre">Nombre Convocatoria:</label>
                <input
                  type="text"
                  required
                  value={form.departamento}
                  onChange={(event) =>
                    setForm((old) => ({
                      ...old,
                      departamento: event.target.value,
                    }))
                  }
                />
                <label htmlFor="descripcion">Descripción:</label>
                <input
                  type="text"
                  required
                  value={form.descripcion}
                  onChange={(event) =>
                    setForm((old) => ({
                      ...old,
                      descripcion: event.target.value,
                    }))
                  }
                />
                <label htmlFor="departamento">Departamento:</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(event) =>
                    setForm((old) => ({ ...old, nombre: event.target.value }))
                  }
                />
                <label htmlFor="modalidad">Modalidad:</label>
                <input
                  type="text"
                  required
                  value={form.modalidad}
                  onChange={(event) =>
                    setForm((old) => ({
                      ...old,
                      modalidad: event.target.value,
                    }))
                  }
                />
                <label htmlFor="fechaPublicacion">Fecha Publicación:</label>
                <input
                  type="date"
                  required
                  value={form.fechaPublicacion}
                  onChange={(event) =>
                    setForm((old) => ({
                      ...old,
                      fechaPublicacion: event.target.value,
                    }))
                  }
                />
                <div>
                  <button type="submit" onClick={handleSubmit}>
                    {editMode ? "Actualizar" : "Registrar"}
                  </button>
                </div>
              </FormAdm3>
            </>
          ) : (
            <>
              <h1>Debe llenar primero el formulario</h1>
              <button>
                <Likes to="/dashboard/AdmUno">LLenar formulario</Likes>
              </button>
            </>
          )}
        </Section>
        <SectionTwo>
          <h1>Convocatoria</h1>
          <TableContainer>
            <Table>
              <thead>
                <Tr>
                  <th>Nombre Convocaatoria</th>
                  <th>Descripción</th>
                  <th>Departamento</th>
                  <th>Modalidad</th>
                  <th>Fecha Publicación</th>
                  <th>Accion</th>
                </Tr>
              </thead>
              <tbody>
                {res?.map((v, i) => (
                  <tr key={i}>
                    <th>{v.nombre}</th>
                    <th>{v.descripcion}</th>
                    <th>{v.departamento}</th>
                    <th>{v.modalidad}</th>
                    <th>{convertirFecha(v.fechaPublicacion)}</th>
                    <th>
                      <button onClick={() => handleDeletes(v.id)}>
                        Eliminar
                      </button>
                    </th>
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

export default Convocatoria;
