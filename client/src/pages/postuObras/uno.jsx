import React, { useState } from "react";
import {
  ButtonSig,
  ContainerForm,
  DivButton,
  Form,
  FormGroup,
  Table,
  TextoTres,
  Th,
  Titulo,
  Titulo2,
  Titulo3,
} from "../../style/formulariosStyleUno";
import { Link, Navigate } from "react-router-dom";
import { useFormUno } from "../../store/formUno";
import { toast } from "react-toastify";
const Uno = () => {
  const [form, setForm] = useState({
    entidadConvocante: "",
    modalidadContratacion: "",
    codigoInterno: "",
    cuce: "",
    gestion: "",
    objetoContratacion: "",
  });
  const { setFormUno } = useFormUno();
  const handleFormUno = () => {
    setFormUno(form);
    toast.success("Se registro el formulario")
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
                  <input
                    type="text"
                    value={form.entidadConvocante}
                    onChange={(event) =>
                      setForm((old) => ({
                        ...old,
                        entidadConvocante: event.target.value,
                      }))
                    }
                  ></input>
                </th>
              </tr>
              <tr>
                <th colSpan={2}>Modalidad de contratación</th>
                <th colSpan={2}>
                  <input type="text"></input>
                </th>
                <th colSpan={2}>
                  Código Interno que la Entidad utiliza para identificar el
                  proceso
                </th>
                <th colSpan={2}>
                  <input type="number"></input>
                </th>
              </tr>
              <tr>
                <th colSpan={2}>CUCE</th>
                <th colSpan={3}>
                  <input type="number"></input>
                </th>
                <th colSpan={2}>Gestión</th>
                <th>
                  <input type="number"></input>
                </th>
              </tr>
              <tr>
                <th colSpan={2}>Objeto de la contratación</th>
                <th colSpan={6}>
                  <input type="text"></input>
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
                  <input type="checkbox"></input>
                </th>
                <th colSpan={3}>
                  <input type="checkbox"></input>
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
                  <input type="checkbox"></input>
                </th>
                <th colSpan={2}>
                  <input type="checkbox"></input>
                </th>
                <th colSpan={2}>
                  <input type="checkbox"></input>
                </th>
              </tr>
              <tr>
                <th colSpan={4}>Precio Referencia</th>
                <th colSpan={4}>La contratación se formalizará mediante</th>
              </tr>
              <tr>
                <th colSpan={4}>
                  <input type="text"></input>
                </th>
                <th colSpan={4}>
                  <input type="text"></input>
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>
                  Plazo de Ejecución de Obra (en días calendario)
                </Th>
                <th colSpan={6}>
                  <input type="text"></input>
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>
                  Garantía de Seriedad de Propuesta (Suprimir en caso de que no
                  se requiera)
                </Th>
                <th colSpan={6}>
                  <input type="text"></input>
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>Garantía de Cumplimiento de Contrato</Th>
                <th colSpan={6}>
                  <input type="text"></input>
                </th>
              </tr>
              <tr>
                <Th colSpan={2}>
                  Garantía Adicional a la de Cumplimiento de Contrato
                </Th>
                <th colSpan={6}>
                  <input type="text"></input>
                </th>
              </tr>
              <th colSpan={2} rowSpan={3}>
                Señalar con que presupuesto se inicia el proceso de contratación
              </th>
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <Th colSpan={5}>Presupuesto de la gestión en curso</Th>
              </tr>
              <tr>
                <th>
                  <input type="checkbox"></input>
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
                  <input type="text"></input>
                </th>
                <th colSpan={3}>
                  <input type="number"></input>
                </th>
              </tr>
              <tr>
                <th colSpan={3}>
                  <input type="text"></input>
                </th>
                <th colSpan={3}>
                  <input type="number"></input>
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
                <input type="text"></input>
              </th>
              <th rowSpan={2}>Horario de Atención de la Entidad</th>
              <th>
                <input type="time"></input>
              </th>
            </tr>
            <tr>
              <th>
                <input type="time"></input>
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
                <input type="text"></input>
              </th>
              <th>
                <input type="text"></input>
              </th>
              <th>
                <input type="text"></input>
              </th>
            </tr>
            <tr>
              <th colSpan={2}>Teléfono</th>
              <th colSpan={2}>Fax</th>
              <th colSpan={3}>Correo Electrónico</th>
            </tr>
            <tr>
              <th colSpan={2}>
                <input type="number"></input>
              </th>
              <th colSpan={2}>
                <input type="number"></input>
              </th>
              <th colSpan={3}>
                <input type="email"></input>
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
                <input type="date"></input>
              </th>
              <th></th>
              <th>
                <input type="text"></input>
              </th>
            </tr>
            <tr>
              <th>2</th>
              <Th>Inspección previa</Th>
              <th>
                <input type="date"></input>
              </th>
              <th>
                <input type="time"></input>
              </th>
              <th>
                <input type="text"></input>
              </th>
            </tr>
            <tr>
              <th>3</th>
              <Th>Consultas Escritas (No es obligatoria)</Th>
              <th>
                <input type="date"></input>
              </th>
              <th>
                <input type="time"></input>
              </th>
              <th>
                <input type="text"></input>
              </th>
            </tr>
            <tr>
              <th>4</th>
              <Th>Reunión Informativa de aclaración (No es obligatoria)</Th>
              <th>
                <input type="date"></input>
              </th>
              <th>
                <input type="time"></input>
              </th>
              <th>
                <input type="text"></input>
              </th>
            </tr>
            <tr>
              <th rowSpan={2}>5</th>
              <Th rowSpan={2}>
                Fecha límite de Presentación y Apertura de Propuestas
              </Th>
              <th rowSpan={2}>
                <input type="date"></input>
              </th>
              <th>
                <input type="time"></input>
              </th>
              <th rowSpan={2}>
                <input type="text"></input>
              </th>
            </tr>
            <tr>
              <th>
                <input type="time"></input>
              </th>
            </tr>
            <tr>
              <th>6</th>
              <Th>
                Presentación del Informe de Evaluación y Recomendación al RPA
              </Th>
              <th>
                <input type="date"></input>
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>7</th>
              <Th>Adjudicación o Declaratoria Desierta </Th>
              <th>
                <input type="date"></input>
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
                <input type="date"></input>
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
                <input type="date"></input>
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>10</th>
              <Th>Suscripción de contrato.</Th>
              <th>
                <input type="date"></input>
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
          <ButtonSig onClick={handleFormUno}>
            <Link to="/dashboard/convocatorias">Llenar convocatoria</Link>
          </ButtonSig>
        </DivButton>
      </Form>
    </ContainerForm>
  );
};

export default Uno;
