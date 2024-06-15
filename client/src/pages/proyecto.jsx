import React, { useState } from "react";
import { ButtonSig, ContainerForm, DivButton } from "../style/formulariosStyleUno";
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD } from "../style/formulariosStyleDosTres";
import { toast } from "react-toastify";
import Dos from "./proponenteObras/dos";
import Tres from "./proponenteObras/tres";
import Cuatro from "./proponenteObras/cuatro";
import Cinco from "./proponenteObras/cinco";
import Seis from "./proponenteObras/seis";
import Siete from "./proponenteObras/siete";
import { useUser } from "../store/user";
import { v4 as uuidv4 } from "uuid";


const Proyecto = ({ idConvocatoria }) => {
  const { user } = useUser();
  const [form, setForm] = useState({
    nombre: "",
    cuce: uuidv4(),
    entidad: "",
    departamento: "",
    contacto: "",
    telefono: "",
    tipoContratacion: "",
    modalidad: "",
  });

  const [step, setStep] = useState(1);

  const obtenerFechaActual = () => {
    const hoy = new Date();
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return hoy.toLocaleDateString("es-ES", opciones);
  };

  const handleNext = () => {
    if (form.nombre === "" || form.entidad === "" || form.departamento === "" || form.contacto === null || form.telefono === null || form.tipoContratacion === "" || form.modalidad === "")
    {
      toast.error(json.errorMessag);
    } else {
      setStep(step + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/proyecto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: user.id,
          idConvocatoria: idConvocatoria,
          ...form,
          estado: "En proceso",
          fechaPublicacion: obtenerFechaActual(),
          fechaPresentacion: obtenerFechaActual(),
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Proyecto enviado correctamente");
      const data = await response.json();
      console.log(data);
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
                <label>REGISTRO DE PROYECTO PARA POSTULARSE A CONVOCATORIA</label>
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
                      type="number"
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
                <ButtonSig onClick={handleNext}>SIGUIENTE</ButtonSig>
              </DivButton>
            </Form>
          </ContainerForm>
        );
      case 2:
        return <Dos setStep={setStep}/>;
      case 3:
        return <Tres setStep={setStep}/>;
      case 4:
        return <Cuatro  setStep={setStep}/>;
      case 5:
        return <Cinco  setStep={setStep}/>;
      case 6:
        return <Seis  setStep={setStep}/>;
      case 7:
        return <Siete setStep={setStep} handleSubmit={handleSubmit} />;
      default:
        return <div>Error: Paso desconocido</div>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Proyecto;
