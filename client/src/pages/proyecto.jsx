import React, { useState } from "react";
import {
  ButtonSig,
  ContainerForm,
  DivButton,
  Table,
  Th,
} from "../style/formulariosStyleUno";
import {
  Form,
  Titulo,
  Titulo2,
  FormGroup,
  Cuce,
  InputD,
} from "../style/formulariosStyleDosTres";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import Dos from "./proponenteObras/dos";
import Tres from "./proponenteObras/tres";
import Cuatro from "./proponenteObras/cuatro";
import Cinco from "./proponenteObras/cinco";
import Seis from "./proponenteObras/seis";
import Siete from "./proponenteObras/siete";
import { useUser } from "../store/user";

const Proyecto = ({ idConvocatoria }) => {
  const { user } = useUser();
  const [form, setForm] = useState({
    nombre: "",
    cuce: uuidv4(),
    entidad: "",
    departamento: "",
    contacto: 0,
    telefono: 0,
    tipoContratacion: "",
    modalidad: "",
  });

  const [step, setStep] = useState(1);

  const obtenerFechaActual = () => {
    const hoy = new Date();
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return hoy.toLocaleDateString("es-ES", opciones);
  };
  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/proyecto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: user.id,
          idConvocatoria: idConvocatoria,
          nombre: form.nombre,
          cuce: form.cuce,
          estado: "En proceso",
          entidad: form.entidad,
          departamento: form.departamento,
          fechaPublicacion: obtenerFechaActual(),
          fechaPresentacion: obtenerFechaActual(),
          contacto: form.contacto,
          telefono: form.telefono,
          tipoContratacion: form.tipoContratacion,
          modalidad: form.modalidad,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Proyecto enviado correctamente");
      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ContainerForm>
            <Form>
              <Titulo>
                <label>
                  REGISTRO DE LICITACIÓN PARA POSTULARSE A CONVOCATORIA
                </label>
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
                    <InputD
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(event) =>
                        setForm((old) => ({
                          ...old,
                          nombre: event.target.value,
                        }))
                      }
                    />
                    <InputD
                      type="text"
                      required
                      value={form.cuce}
                      onChange={(event) =>
                        setForm((old) => ({ ...old, cuce: event.target.value }))
                      }
                      disabled
                    />
                    <InputD
                      type="text"
                      required
                      value={form.entidad}
                      onChange={(event) =>
                        setForm((old) => ({
                          ...old,
                          entidad: event.target.value,
                        }))
                      }
                    />
                    <InputD
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
                    <InputD
                      type="text"
                      required
                      value={form.contacto}
                      onChange={(event) =>
                        setForm((old) => ({
                          ...old,
                          contacto: event.target.value,
                        }))
                      }
                    />
                    <InputD
                      type="number"
                      required
                      value={form.telefono}
                      onChange={(event) =>
                        setForm((old) => ({
                          ...old,
                          telefono: event.target.value,
                        }))
                      }
                    />
                    <InputD
                      type="text"
                      required
                      value={form.tipoContratacion}
                      onChange={(event) =>
                        setForm((old) => ({
                          ...old,
                          tipoContratacion: event.target.value,
                        }))
                      }
                    />
                    <InputD
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
                  </div>
                </Cuce>
              </FormGroup>
              <DivButton>
                <ButtonSig onClick={() => setStep(2)}>SIGUIENTE</ButtonSig>
              </DivButton>
            </Form>
          </ContainerForm>
        );
      case 2:
        return <Dos setStep={setStep} cuce={form.cuce} />;
      case 3:
        return <Tres setStep={setStep} />;
      case 4:
        return <Cuatro setStep={setStep} />;
      case 5:
        return <Cinco setStep={setStep} />;
      case 6:
        return <Seis setStep={setStep} />;
      case 7:
        return <Siete setStefp={setStep} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Proyecto;
