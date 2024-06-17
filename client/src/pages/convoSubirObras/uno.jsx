import React, { useState } from "react";
import { ButtonSig, ContainerForm, DivButton, Form, FormGroup, Table, TextoTres, Th, Titulo, Titulo2 } from "../../style/formulariosStyleUno";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import { useFormUno } from "../../store/formUno";
const Uno = () => {
  const [form, setForm] = useState({
    //primera parte
    entidadConvocante: "",
    modalidadContratacion: "",
    codigoInterno: 0,
    cuce: uuidv4(),
    gestion: 2024,
    objetoContratacion: "",
    precioEvaluadoBajo: false,
    calidadPropuTecyCost: false,
    porTotal: false,
    porTramos: false,
    porPaquetes: false,
    precioReferencia: "",
    contratcionFormalizaraMediante: "",
    plazoEjecucionObra: "",
    garantiaSeriedad: "",
    garantiaCumplimiento: "",
    garantiaAdicional: "",
    presupuestodeGestion: false,
    pesupuestodeProximaGestion: false,
    nombreOrganismoFinanciador: "",
    financiamiento: 0,
    nombreOrganismoFinanciadorDos: "",
    financiamientoDos: 0,
    //segunda parte
    domicilioEntidadConvocante: "",
    horarioAtencion: "",
    horarioAtencionDos: "",
    nombreCompleto: "",
    cargo: "",
    dependencia: "",
    telefono: 0,
    fax: 0,
    correoElectronico: "",
    //tercera parte
    actividadUnoFecha: "",
    actividadUnoLugarDireccion: "",
    actividadDosFecha: "",
    actividadDosHora: "",
    actividadDosLugarDireccion: "",
    actividadTresFecha: "",
    actividadTresHora: "",
    actividadTresLugarDireccion: "",
    actividadCuatroFecha: "",
    actividadCuatroHora: "",
    actividadCuatroLugarDireccion: "",
    actividadCincooFecha: "",
    actividadCincoHoraIni: "",
    actividadCincoHoraFin: "",
    actividadCincroLugarDireccion: "",
    actividadSeisFecha: "",
    actividadSieteFecha: "",
    actividadOchoFecha: "",
    actividadNueveFecha: "",
    actividadDiezFecha: "",
  });
  const {setFormUno}=useFormUno();
  
  const handleSubmit = async () => {
/*       const response = await fetch("http://localhost:5000/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            descripcion: "Formulario1",
            archivo: form
          }
        ),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } */
      toast.success("Formulario Uno Enviado Correctamente");
      setFormUno(form);
      console.log(form);
  
  };
  return (
    <ContainerForm>
      <Form>
        <Titulo>
          <label>PARTE II</label>
          <label>INFORMACIÓN TÉCNICA DE LA CONTRATACIÓN</label>
          <label>25CONVOCATORIA Y DATOS GENERALES DE LA CONTRATACIÓN</label>
        </Titulo>
        <Titulo2>
          <label>1. DATOS DEL PROCESOS DE CONTRATACIÓN</label>
        </Titulo2>
        <Table>
          <Table>
            <tbody>
              <tr>
                <th colSpan={2}>Entidad Convocante</th>
                <th colSpan={6}>
                  <input type="text" required value={form.entidadConvocante} onChange={(event) => setForm((old) => ({ ...old, entidadConvocante: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <th colSpan={2}>Modalidad de contratación</th>
                <th colSpan={2}>
                  <input type="text" required value={form.modalidadContratacion} onChange={(event) => setForm((old) => ({ ...old, modalidadContratacion: event.target.value, }))} />
                </th>
                <th colSpan={2}>
                  Código Interno que la Entidad utiliza para identificar el proceso
                </th>
                <th colSpan={2}>
                  <input type="number" required value={form.codigoInterno} onChange={(event) => setForm((old) => ({ ...old, codigoInterno: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <th colSpan={2}>CUCE</th>
                <th colSpan={3}>
                  <input type="number" disabled value={form.cuce} />
                </th>
                <th colSpan={2}>Gestión</th>
                <th>
                  <input type="number" disabled value={form.gestion} onChange={(event) => setForm((old) => ({ ...old, gestion: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <th colSpan={2}>Objeto de la contratación</th>
                <th colSpan={6}>
                  <input type="text" required value={form.objetoContratacion} onChange={(event) => setForm((old) => ({ ...old, objetoContratacion: event.target.value, }))} />
                </th>
              </tr>
              <th colSpan={2} rowSpan={3}>
                Método de Selección y Adjudicación
              </th>
              <tr>
                <th colSpan={3}>Precio Evaluado más Bajo</th>
                <th colSpan={3}>Calidad Propuesta Técnica y Costo</th>
              </tr>
              <tr>
                <th colSpan={3}>
                  <input type="checkbox" checked={form.precioEvaluadoBajo} onChange={(event) => setForm((old) => ({ ...old, precioEvaluadoBajo: event.target.checked }))} />
                </th>
                <th colSpan={3}>
                  <input type="checkbox" checked={form.calidadPropuTecyCost} onChange={(event) => setForm((old) => ({ ...old, calidadPropuTecyCost: event.target.checked }))} />
                </th>
              </tr>
              <th colSpan={2} rowSpan={3}>
                Forma de Adjudicación
              </th>
              <tr>
                <th colSpan={2}>Por Total</th>
                <th colSpan={2}>Por Tramos</th>
                <th colSpan={2}>Por Paquetes</th>
              </tr>
              <tr>
                <th colSpan={2}>
                  <input type="checkbox" checked={form.porTotal} onChange={(event) => setForm((old) => ({ ...old, porTotal: event.target.checked }))} />
                </th>
                <th colSpan={2}>
                  <input type="checkbox" checked={form.porTramos} onChange={(event) => setForm((old) => ({ ...old, porTramos: event.target.checked }))} />
                </th>
                <th colSpan={2}>
                  <input type="checkbox" checked={form.por} onChange={(event) => setForm((old) => ({ ...old, porPaquetes: event.target.checked }))} />
                </th>
              </tr>
              <tr>
                <th colSpan={4}>Precio Referencia</th>
                <th colSpan={4}>La contratación se formalizará mediante</th>
              </tr>
              <tr>
                <th colSpan={4}>
                  <input type="text" required value={form.precioReferencia} onChange={(event) => setForm((old) => ({ ...old, precioReferencia: event.target.value, }))} />
                </th>
                <th colSpan={4}>
                  <input type="text" required value={form.contratcionFormalizaraMediante} onChange={(event) => setForm((old) => ({ ...old, contratcionFormalizaraMediante: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>
                  Plazo de Ejecución de Obra (en días calendario)
                </Th>
                <th colSpan={6}>
                  <input type="text" required value={form.plazoEjecucionObra} onChange={(event) => setForm((old) => ({ ...old, plazoEjecucionObra: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>
                  Garantía de Seriedad de Propuesta (Suprimir en caso de que no
                  se requiera)
                </Th>
                <th colSpan={6}>
                  <input type="text" value={form.garantiaSeriedad} onChange={(event) => setForm((old) => ({ ...old, garantiaSeriedad: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>Garantía de Cumplimiento de Contrato</Th>
                <th colSpan={6}>
                  <input type="text" required value={form.garantiaCumplimiento} onChange={(event) => setForm((old) => ({ ...old, garantiaCumplimiento: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>
                  Garantía Adicional a la de Cumplimiento de Contrato
                </Th>
                <th colSpan={6}>
                  <input type="text" required value={form.garantiaAdicional} onChange={(event) => setForm((old) => ({ ...old, garantiaAdicional: event.target.value, }))} />
                </th>
              </tr>
              <th colSpan={2} rowSpan={3}>
                Señalar con que presupuesto se inicia el proceso de contratación
              </th>
              <tr>
                <th>
                  <input type="checkbox" checked={form.presupuestodeGestion} onChange={(event) => setForm((old) => ({ ...old, presupuestodeGestion: event.target.checked }))} />
                </th>
                <Th colSpan={5}>Presupuesto de la gestión en curso</Th>
              </tr>
              <tr>
                <th>
                  <input type="checkbox" checked={form.pesupuestodeProximaGestion} onChange={(event) => setForm((old) => ({ ...old, pesupuestodeProximaGestion: event.target.checked }))} />
                </th>
                <Th colSpan={5}>
                  Presupuesto de la próxima gestión (el proceso se iniciará una
                  vez publicada la Ley del Presupuesto General del Estado de la
                  siguiente gestión)
                </Th>
              </tr>
              <th colSpan={2} rowSpan={4}>
                Organismos Financiadores
              </th>
              <tr>
                <th colSpan={3}>
                  Nombre del Organismo Financiador (de acuerdo al clasificador
                  vigente)
                </th>
                <th colSpan={3}>% de Financiamiento</th>
              </tr>
              <tr>
                <th colSpan={3}>
                  <input type="text" required value={form.nombreOrganismoFinanciador} onChange={(event) => setForm((old) => ({ ...old, nombreOrganismoFinanciador: event.target.value, }))} />
                </th>
                <th colSpan={3}>
                  <input type="number" required value={form.financiamiento} onChange={(event) => setForm((old) => ({ ...old, financiamiento: event.target.value, }))} />
                </th>
              </tr>
              <tr>
                <th colSpan={3}>
                  <input type="text" required value={form.nombreOrganismoFinanciadorDos} onChange={(event) => setForm((old) => ({ ...old, nombreOrganismoFinanciadorDos: event.target.value, }))} />
                </th>
                <th colSpan={3}>
                  <input type="number" required value={form.financiamientoDos} onChange={(event) => setForm((old) => ({ ...old, financiamientoDos: event.target.value, }))} />
                </th>
              </tr>
            </tbody>
          </Table>
        </Table>

        <Titulo2>
          <label>
            2.INFORMACIÓN DEL DOCUMENTO BASE DE CONTRATACIÓN (DBC) Los
            interesados podrán recabar el Documento Base de Contratación (DBC)
            en el sitio Web del SICOES y obtener información de la entidad de
            acuerdo con los siguientes datos:
          </label>
        </Titulo2>
        <Table>
          <tbody>
            <tr>
              <th colSpan={2} rowSpan={2}>
                Domicilio de la Entidad Convocante
              </th>
              <th rowSpan={3} colSpan={3}>
                <input type="text" required value={form.domicilioEntidadConvocante} onChange={(event) => setForm((old) => ({ ...old, domicilioEntidadConvocante: event.target.value, }))} />
              </th>
              <th rowSpan={2}>Horario de Atención de la Entidad</th>
              <th>
                <input type="time" required value={form.horarioAtencion} onChange={(event) => setForm((old) => ({ ...old, horarioAtencion: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th>
                <input type="time" required value={form.horarioAtencionDos} onChange={(event) => setForm((old) => ({ ...old, horarioAtencionDos: event.target.value, }))} />
              </th>
            </tr>
            <th rowSpan={3} colSpan={2}>
              Encargado de atender consultas
            </th>
            <tr>
              <th colSpan={3}>Nombre Completo</th>
              <th>Cargo</th>
              <th>Dependencia</th>
            </tr>
            <tr>
              <th colSpan={3}>
                <input type="text" required value={form.nombreCompleto} onChange={(event) => setForm((old) => ({ ...old, nombreCompleto: event.target.value, }))} />
              </th>
              <th>
                <input type="text" required value={form.cargo} onChange={(event) => setForm((old) => ({ ...old, cargo: event.target.value, }))} />
              </th>
              <th>
                <input type="text" required value={form.dependencia} onChange={(event) => setForm((old) => ({ ...old, dependencia: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th colSpan={2}>Teléfono</th>
              <th colSpan={2}>Fax</th>
              <th colSpan={3}>Correo Electrónico</th>
            </tr>
            <tr>
              <th colSpan={2}>
                <input type="number" required value={form.telefono} onChange={(event) => setForm((old) => ({ ...old, telefono: event.target.value, }))} />
              </th>
              <th colSpan={2}>
                <input type="number" required value={form.fax} onChange={(event) => setForm((old) => ({ ...old, fax: event.target.value, }))} />
              </th>
              <th colSpan={3}>
                <input type="email" required value={form.correoElectronico} onChange={(event) => setForm((old) => ({ ...old, correoElectronico: event.target.value, }))} />
              </th>
            </tr>
          </tbody>
        </Table>
        <Titulo2>
          <label>3. CRONOGRAMA DE PLAZOS:</label>
        </Titulo2>
        <FormGroup>
          <TextoTres>
            <label>
              De acuerdo con lo establecido en el Artículo 47 de las NB-SABS,
              los siguientes plazos son de cumplimiento obligatorio:
            </label>
            <label>1.Presentación de propuestas:</label>
            <div>
              <label>
                a)Para contrataciones hasta Bs.200.000.- (DOSCIENTOS MIL 00/100
                BOLIVIANOS), plazo mínimo cuatro (4) días hábiles.
                <br />
              </label>
              <label>
                b)Para contrataciones mayores a Bs.200.000.- (DOSCIENTOS MIL
                00/100 BOLIVIANOS) hasta Bs1.000.000.- (UN MILLÓN 00/100
                BOLIVIANOS), plazo mínimo ocho (8) días hábiles.
                <br />
              </label>
            </div>
            <label>
              Ambos computables a partir del día hábil siguiente de la
              publicación de la convocatoria;
            </label>
            <label>
              2.Presentación de documentos para la suscripción de contrato,
              plazo de entrega de documentos no menor a cuatro (4) días
              hábiles);
            </label>
            <label>
              3.Plazo para la presentación del Recurso Administrativo de
              Impugnación a la Resolución de Adjudicación o de Declaratoria
              Desierta, en contrataciones mayores a Bs200.000.- (DOSCIENTOS MIL
              00/100 BOLIVIANOS) hasta Bs1.000.000.- (UN MILLÓN 00/100
              BOLIVIANOS) (en cuyo caso el cronograma deberá considerar tres (3)
              días hábiles computables a partir del día siguiente hábil de la
              notificación de la Resolución Impugnable).
            </label>
            <label>
              El incumplimiento a los plazos señalados será considerado como
              inobservancia a la normativa
            </label>
          </TextoTres>
        </FormGroup>
        <Titulo2>
          <label>
            EL CRONOGRAMA DE PLAZOS PREVISTO PARA EL PROCESO DE CONTRATACIÓN EN
            EL SIGUIENTE:
          </label>
        </Titulo2>
        <Table>
          <thead>
            <tr>
              <th colSpan={2}>ACTIVIDAD</th>
              <th>FECHA</th>
              <th>HORA</th>
              <th>LUGAR Y DIRECCIÓN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <Th>
                Publicación del DBC en el SICOES y la Convocatoria en la Mesa de
                Partes (*)
              </Th>
              <th>
                <input type="date" required value={form.actividadUnoFecha} onChange={(event) => setForm((old) => ({ ...old, actividadUnoFecha: event.target.value, }))} />
              </th>
              <th></th>
              <th>
                <input type="text" required value={form.actividadUnoLugarDireccion} onChange={(event) => setForm((old) => ({ ...old, actividadUnoLugarDireccion: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th>2</th>
              <Th>Inspección previa</Th>
              <th>
                <input type="date" required value={form.actividadDosFecha} onChange={(event) => setForm((old) => ({ ...old, actividadDosFecha: event.target.value, }))} />
              </th>
              <th>
                <input type="time" required value={form.actividadDosHora} onChange={(event) => setForm((old) => ({ ...old, actividadDosHora: event.target.value, }))} />
              </th>
              <th>
                <input type="text" required value={form.actividadDosLugarDireccion} onChange={(event) => setForm((old) => ({ ...old, actividadDosLugarDireccion: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th>3</th>
              <Th>Consultas Escritas (No es obligatoria)</Th>
              <th>
                <input type="date" required value={form.actividadTresFecha} onChange={(event) => setForm((old) => ({ ...old, actividadTresFecha: event.target.value, }))} />
              </th>
              <th>
                <input type="time" required value={form.actividadTresHora} onChange={(event) => setForm((old) => ({ ...old, actividadTresHora: event.target.value, }))} />
              </th>
              <th>
                <input type="text" required value={form.actividadTresLugarDireccion} onChange={(event) => setForm((old) => ({ ...old, actividadTresLugarDireccion: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th>4</th>
              <Th>Reunión Informativa de aclaración (No es obligatoria)</Th>
              <th>
                <input type="date" required value={form.actividadCuatroFecha} onChange={(event) => setForm((old) => ({ ...old, actividadCuatroFecha: event.target.value, }))} />
              </th>
              <th>
                <input type="time" required value={form.actividadCuatroHora} onChange={(event) => setForm((old) => ({ ...old, actividadCuatroHora: event.target.value, }))} />
              </th>
              <th>
                <input type="text" required value={form.actividadCuatroLugarDireccion} onChange={(event) => setForm((old) => ({ ...old, actividadCuatroLugarDireccion: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th rowSpan={2}>5</th>
              <Th rowSpan={2}>
                Fecha límite de Presentación y Apertura de Propuestas
              </Th>
              <th rowSpan={2}>
                <input type="date"  value={form.actividadCincooFecha} onChange={(event) => setForm((old) => ({ ...old, financiaactividadCincooFechamientoDos: event.target.value, }))} />
              </th>
              <th>
                <input type="time" required value={form.actividadCincoHoraIni} onChange={(event) => setForm((old) => ({ ...old, actividadCincoHoraIni: event.target.value, }))} />
              </th>
              <th rowSpan={2}>
                <input type="text" required value={form.actividadCincroLugarDireccion} onChange={(event) => setForm((old) => ({ ...old, actividadCincroLugarDireccion: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th>
                <input type="time" required value={form.actividadCincoHoraFin} onChange={(event) => setForm((old) => ({ ...old, actividadCincoHoraFin: event.target.value, }))} />
              </th>
            </tr>
            <tr>
              <th>6</th>
              <Th>
                Presentación del Informe de Evaluación y Recomendación al RPA
              </Th>
              <th>
                <input type="date" required value={form.actividadSeisFecha} onChange={(event) => setForm((old) => ({ ...old, actividadSeisFecha: event.target.value, }))} />
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>7</th>
              <Th>Adjudicación o Declaratoria Desierta </Th>
              <th>
                <input type="date" required value={form.actividadSieteFecha} onChange={(event) => setForm((old) => ({ ...old, actividadSieteFecha: event.target.value, }))} />
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>8</th>
              <Th>
                Notificación de la adjudicación o Declaratoria Desierta (fecha
                límite)
              </Th>
              <th>
                <input type="date" required value={form.actividadOchoFecha} onChange={(event) => setForm((old) => ({ ...old, actividadOchoFecha: event.target.value, }))} />
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>9</th>
              <Th>
                Presentación de documentos para la formalización de la
                contratación.
              </Th>
              <th>
                <input type="date" required value={form.actividadNueveFecha} onChange={(event) => setForm((old) => ({ ...old, actividadNueveFecha: event.target.value, }))} />
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>10</th>
              <Th>Suscripción de contrato.</Th>
              <th>
                <input type="date" required value={form.actividadDiezFecha} onChange={(event) => setForm((old) => ({ ...old, actividadDiezFecha: event.target.value, }))} />
              </th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </Table>
        <Titulo2>
          <label></label>
        </Titulo2>
        <DivButton>
          <ButtonSig onClick={handleSubmit}><Link to="/dashboard/convocatorias">ENVIAR</Link> </ButtonSig>
        </DivButton>
      </Form>
    </ContainerForm>
  );
};

export default Uno;
