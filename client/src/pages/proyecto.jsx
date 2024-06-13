import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th  } from '../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD} from '../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const Proyecto = () => {
    const [form, setForm] = useState({
        nombre: "",
        cuce: uuidv4(),
        entidad: "",
        departamento: "",
        contacto: 0,
        telefono:0,
        tipoContratacion: "",
        modalidad: "",

    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/formulario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                descripcion: "Formulario2",
                archivo: form
              }
            ),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          toast.success("Formularios Enviados Correctamente");
          const data = await response.json();
        } catch (error) {
          console.error("Error:", error);
        }
      };
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>REGISTRO DE LICITACIÓN PARA POSTULARSE A CONVOCATORIA</label>
                    <label>(Por favor llene todos los campos)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS DEL OBJETO DE LA CONTRATACIÓN</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>Nombre Licitación:</label>
                            <label>CUCE:</label>
                            <label>Entidad:</label>
                            <label>Departamento:</label>
                            <label>Contacto:</label>
                            <label>Teléfono:</label>
                            <label>Tipo Contratación:</label>
                            <label>Modalidad:</label>
                        </div>
                        <div>
                            <InputD type="text" required value={form.nombre} onChange={(event) => setForm((old) => ({...old, nombre:event.target.value }))} />
                            <InputD type="number" required value={form.cuce} onChange={(event) => setForm((old) => ({...old, cuce:event.target.value }))} />
                            <InputD type="text" required value={form.entidad} onChange={(event) => setForm((old) => ({...old, entidad:event.target.value}))}/>
                            <InputD type="text" required value={form.departamento} onChange={(event) => setForm((old) =>({...old, departamento:event.target.value}))}/>
                            <InputD type="text" required value={form.contacto} onChange={(event) => setForm((old) =>({...old, contacto:event.target.value}))}/>
                            <InputD type="number" required value={form.telefono} onChange={(event) => setForm((old) =>({...old, telefono:event.target.value}))}/>
                            <InputD type="text" required value={form.tipoContratacion} onChange={(event) => setForm((old) =>({...old, tipoContratacion:event.target.value}))}/>
                            <InputD type="text" required value={form.modalidad} onChange={(event) => setForm((old) =>({...old, modalidad:event.target.value}))}/>

                        </div>
                    </Cuce>
                </FormGroup>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig  onClick={handleSubmit}><Link to="/siguiente">SIGUIENTE</Link></ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Proyecto;


