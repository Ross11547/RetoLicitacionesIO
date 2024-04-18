import React from 'react'
import styled from 'styled-components';

const Uno = () => {
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
                    <tbody>
                        <tr>
                            <th colSpan={2}>Entidad Convocante</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Modalidad de contratación</th>
                            <th ><input type="text"></input></th>
                            <th colSpan={2}>Código Interno que la Entidad utiliza para identificar el proceso</th>
                            <th colSpan={2}><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>CUCE</th>
                            <th colSpan={2}><input type="number"></input></th>
                            <th colSpan={2}>Gestión</th>
                            <th ><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Objeto de la contratación</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <th rowSpan={2} colSpan={2}>Método de Selección y Adjudicación</th>
                        <tr>
                            <th ><input type="checkbox"></input></th>
                            <th >Precio Evaluado más Bajo</th>
                            <th ><input type="checkbox"></input></th>
                            <th colSpan={3}>Calidad Propuesta Técnica y Costo</th>
                        </tr>
                        <th rowSpan={3} colSpan={2}>Forma de Adjudicación</th>
                        <tr>
                            <th >Por Total</th>
                            <th >Por Tramos</th>
                            <th colSpan={3}>Por Paquetes</th>
                        </tr>
                        <tr>
                            <th ><input type="checkbox"></input></th>
                            <th ><input type="checkbox"></input></th>
                            <th colSpan={3}><input type="checkbox"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Precio Referencia</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>La contratación se formalizará mediante</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Plazo de Ejecución de Obra (en días calendario)</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Garantía de Seriedad de Propuesta (Suprimir en caso de que no se requiera)</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Garantía de Cumplimiento de Contrato</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Garantía Adicional a la de Cumplimiento de Contrato</th>
                            <th colSpan={5}><input type="text"></input></th>
                        </tr>
                        <th rowSpan={3} colSpan={2}>Señalar con que presupuesto se inicia el proceso de contratación</th>
                        <tr>
                            <th ><input type="checkbox"></input></th>
                            <th colSpan={4}>Presupuesto de la gestión en curso</th>
                        </tr>
                        <tr>
                            <th ><input type="checkbox"></input></th>
                            <th colSpan={4}>Presupuesto de la próxima gestión (el proceso se  iniciará una vez publicada la Ley del Presupuesto General del Estado de la siguiente gestión)</th>
                        </tr>
                        <th rowSpan={4} colSpan={2}>Organismos Financiadores</th>
                        <tr>
                            <th >#</th>
                            <th colSpan={3}>Nombre del Organismo Financiador (de acuerdo al clasificador vigente)</th>
                            <th >% de Financiamiento</th>
                        </tr>
                        <tr>
                            <th ></th>
                            <th colSpan={3}><input type="text"></input></th>
                            <th ><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th ></th>
                            <th colSpan={3}><input type="text"></input></th>
                            <th ><input type="number"></input></th>
                        </tr>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>2.INFORMACIÓN DEL DOCUMENTO BASE DE CONTRATACIÓN (DBC)
                        Los interesados podrán recabar el Documento Base de Contratación (DBC) en el sitio Web del SICOES y obtener información de la entidad de acuerdo con los siguientes datos:</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <tr>
                            <Th colSpan={2}>Domicilio de la Entidad Convocante</Th>
                            <th><input type="text"></input></th>
                            <Th colSpan={2}>Horario de Atención de la Entidad</Th>
                            <th><input type="time"></input></th>
                        </tr>
                        <Th rowSpan={3} colSpan={2}>Encargado de atender consultas</Th>
                        <tr>
                            <Th colSpan={2}>Nombre Completo</Th>
                            <Th>Cargo</Th>
                            <Th>Dependencia</Th>
                        </tr>
                        <tr>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <Th>Teléfono</Th>
                            <th><input type="number"></input></th>
                            <Th>Fax</Th>
                            <th><input type="number"></input></th>
                            <Th>Correo Electrónico</Th>
                            <th><input type="email"></input></th>
                        </tr>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>3. CRONOGRAMA DE PLAZOS:</label>
                </Titulo2>
                <FormGroup>
                    <TextoTres>
                        <label>De acuerdo con lo establecido en el Artículo 47 de las NB-SABS, los siguientes plazos son de cumplimiento obligatorio:</label>
                        <label>1.Presentación de propuestas:</label>
                        <div>
                            <label>a)Para contrataciones hasta Bs.200.000.- (DOSCIENTOS MIL 00/100 BOLIVIANOS), plazo mínimo cuatro (4) días hábiles.</label>
                            <label>b)Para contrataciones mayores a Bs.200.000.- (DOSCIENTOS MIL 00/100 BOLIVIANOS) hasta Bs1.000.000.- (UN MILLÓN 00/100 BOLIVIANOS), plazo mínimo ocho (8) días hábiles.</label>
                        </div>
                        <label>Ambos computables a partir del día hábil siguiente de la publicación de la convocatoria;</label>
                        <label>2.Presentación de documentos para la suscripción de contrato, plazo de entrega de documentos no menor a cuatro (4) días hábiles);</label>
                        <label>3.Plazo para la presentación del Recurso Administrativo de Impugnación a la Resolución de Adjudicación o de Declaratoria Desierta, en contrataciones mayores a Bs200.000.- (DOSCIENTOS MIL 00/100 BOLIVIANOS) hasta Bs1.000.000.- (UN MILLÓN 00/100 BOLIVIANOS) (en cuyo caso el cronograma deberá considerar tres (3) días hábiles computables a partir del día siguiente hábil de la notificación de la Resolución Impugnable).</label>
                        <label>El incumplimiento a los plazos señalados será considerado como inobservancia a la normativa</label>
                    </TextoTres>
                </FormGroup>
                <Titulo2>
                    <label>EL CRONOGRAMA DE PLAZOS PREVISTO PARA EL PROCESO DE CONTRATACIÓN EN EL SIGUIENTE:</label>
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
                            <Th>Publicación del DBC en el SICOES y la Convocatoria en la Mesa de Partes (*)</Th>
                            <th><input type="date"></input></th>
                            <th></th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <Th>Inspección previa</Th>
                            <th><input type="date"></input></th>
                            <th><input type="time"></input></th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <Th>Consultas Escritas (No es obligatoria)</Th>
                            <th><input type="date"></input></th>
                            <th><input type="time"></input></th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <Th>Reunión Informativa de aclaración (No es obligatoria)</Th>
                            <th><input type="date"></input></th>
                            <th><input type="time"></input></th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th rowSpan={2}>5</th>
                            <Th rowSpan={2}>Fecha límite de Presentación y Apertura de Propuestas</Th>
                            <th rowSpan={2}><input type="date"></input></th>
                            <th><input type="time"></input></th>
                            <th rowSpan={2}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th><input type="time"></input></th>
                        </tr>
                        <tr>
                            <th>6</th>
                            <Th>Presentación del Informe de Evaluación y Recomendación al RPA</Th>
                            <th><input type="date"></input></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>7</th>
                            <Th>Adjudicación o Declaratoria Desierta </Th>
                            <th><input type="date"></input></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>8</th>
                            <Th>Notificación de la adjudicación o Declaratoria Desierta (fecha límite)</Th>
                            <th><input type="date"></input></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>9</th>
                            <Th>Presentación de documentos para la formalización de la contratación.</Th>
                            <th><input type="date"></input></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>10</th>
                            <Th>Suscripción de contrato.</Th>
                            <th><input type="date"></input></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
            </Form>
        </ContainerForm>
    )
}

export default Uno

const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: #ffffff;
`;

const Titulo = styled.div`
    width: 100%;  
    height: 130px;
    margin-bottom: 5px;
    background:#336699;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    gap:10px;
    border-radius: 5px;
    label{
        color: #FFFFFF;
    }
`;
const Titulo2 = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    padding: 15px;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: #003366;
    border-radius: 5px;
    label{
        color: #FFFFFF;
    }
`;
const Form = styled.form`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 10px;
    background: #C1CAD6;
    border-radius: 4px solid #003366;
    padding: 10px;
    border-radius: 5px;
    text-align: end;
`;

const InputD = styled.input`
    width: 500px;
    margin-left: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
`;

const Cuce = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    gap: 15px;
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        text-align: end;
    }
`;
const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CheckboxInput = styled.input`
    margin-right: 5px;
`;

const CheckboxLabel = styled.label`
    margin-right: 10px;
`;
const FechaLugar = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    gap: 10px;
`;

const FechaDireccion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: bold;
    gap: 15px;
    color: #FFFFFF;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-block-end: 12px;

    th, tr {
        border: 1px solid #336699;
        padding: 8px;
        height: 20px;
        
    }
    thead{
         background-color: #003366;
         color:#fff;
         font-size: 15px;
    }
    tbody{
        tr{
            height: 50px;
        }
    }
    input{
        background: #ffffff;
        border: none;
        outline: none;
        text-align:center;
    }
`;
const Tr = styled.tr`
    background-color: #003366;
    color:#fff;
    font-size: 15px;
`;
const Th = styled.th`
    border: 1px solid #336699;
    text-align: left;
`;

const Abbreviation = styled.th`
width:100%;
padding:none;
`;

const TextoTres = styled.div`
text-align:start;
`;