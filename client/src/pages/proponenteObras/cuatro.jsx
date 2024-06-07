import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Table,Th, Tra } from '../../style/formulariosStyleUno';
import {Form, Titulo, Titulo2} from '../../style/formulariosStyleDosTres';

const Cuatro = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>PFORMULARIO A-2b</label>
                    <label>IDENTIFICACIÓN DEL PROPONENTE</label>
                    <label>(Para Empresas Nacionales y Asociaciones sin fines de Lucro)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS GENERALES DEL PROPONENTE</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Tra>
                            <th >Nombre del proponente o Razón Social</th>
                            <th colSpan={4}><input type="text"></input></th>
                        </Tra>
                        <th rowSpan={2}>Proponente</th>
                        <Tra>
                            <th ><input type="checkbox"></input></th>
                            <th>Empresa Nacional</th>
                            <th ><input type="checkbox"></input></th>
                            <th>Asociación sin fines de lucro</th>
                        </Tra>
                        <th rowSpan={3} colSpan={2}>Domicilio Principal</th>
                        <Tra>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Dirección</th>
                        </Tra>
                        <Tra>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th ><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <th >Teléfono</th>
                            <th ><input type="number"></input></th>
                            <th colSpan={2}>Número de Identificación Tributaria</th>
                            <th ><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={3} colSpan={2}>Matrícula de Comercio</th>
                        <Tra>
                            <th colSpan={2}>Número de Matricula</th>
                            <th>Fecha de Registro</th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="number"></input></th>
                            <th><input type="date"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>2. INFORMACIÓN DEL REPRESENTANTE LEGAL (Cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal no será necesario el llenado de la información del numeral 2 del presente formulario).</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <th rowSpan={3} colSpan={2}>Domicilio Principal</th>
                        <Tra>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Dirección</th>
                        </Tra>
                        <Tra>
                            <th><input type="number"></input></th>
                            <th><input type="text"></input></th>
                            <th ><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <th >Nombre del proponente o Razón Social</th>
                            <th colSpan={4}><input type="text"></input></th>
                        </Tra>
                        <th rowSpan={3} colSpan={2}>Poder del Representante Legal</th>
                        <Tra>
                            <th>Número de Testimonio</th>
                            <th>Lugar de Emisión</th>
                            <th>Fecha de Inscripción</th>
                        </Tra>
                        <Tra>
                            <th><input type="number"></input></th>
                            <th><input type="text"></input></th>
                            <th ><input type="date"></input></th>
                        </Tra>
                        <Tra>
                            <th colSpan={5}>{">"} Declaro en calidad de Representante Legal contar con un poder general amplio y suficiente con facultades para presentar propuestas y suscribir Contratos. </th>
                        </Tra>
                        <Tra>
                            <th colSpan={5}>{">"} Declaro que el poder del Representante Legal se encuentra inscrito en el Registro de Comercio. (Suprimir este texto cuando por la naturaleza jurídica del proponente no se requiera la inscripción en el Registro de Comercio de Bolivia y cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal). </th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>3. INFORMACIÓN SOBRE NOTIFICACIONES</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={3}>Solicito que las notificaciones/comunicaciones me sean remitidas vía</Th>
                        <Tra>
                            <Th>Fax:</Th>
                            <th><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th><input type="text"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Cuatro

