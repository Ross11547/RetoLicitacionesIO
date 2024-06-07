import React, { useState } from 'react';
import { ButtonSig, ContainerForm, DivButton, Table, Tra } from '../../style/formulariosStyleUno';
import {Form, Titulo, Titulo2, FormGroup, Cuce, InputD} from '../../style/formulariosStyleDosTres';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Once = () => {
    const [form, setForm] = useState({
        cuce: uuidv4(),
        objetoContrato: "",
        fechaLugarApertura:"",
        direccion:""
    });
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO V-2</label>
                    <label>EVALUACIÓN DE LA PROPUESTA ECONÓMICA</label>
                </Titulo>
                <Titulo2>
                    <label>DATOS DEL PROCESO</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>CUCE:</label>
                            <label>Objeto de la contratación:</label>
                            <label>Fecha y lugar del Acto de Apertura:</label>
                            <label>Dirección:</label>
                        </div>
                        <div>
                            <InputD type="number" value={form.cuce} onChange={(event) => setForm((old) =>({...old, cuce:event.target.value}))} />
                            <InputD type="text" value={form.objetoContrato} onChange={(event) => setForm((old) =>({...old, objetoContrato:event.target.value}))} />
                            <InputD type="date" value={form.fechaLugarApertura} onChange={(event) => setForm((old) =>({...old, fechaLugarApertura:event.target.value}))} />
                            <InputD type="text" value={form.direccion} onChange={(event) => setForm((old) =>({...old, direccion:event.target.value}))} />
                        </div>
                    </Cuce>
                </FormGroup>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>N</th>
                            <th rowSpan={3}>NOMBRE DE PROPONENTE</th>
                            <th >VALOR LEÍDO DE LA PROPUESTA</th>
                            <th>MONTO AJUSTADO POR REVISIÓN ARITMÉTICA</th>
                            <th>FACTOR DE AJUSTE POR MARGEN DE PREFERENCIA</th>
                            <th>PRECIO AJUSTADO</th>

                        </tr>
                        <tr>
                            <th>PP</th>
                            <th>MAPRA(*)</th>
                            <th>(fx)</th>
                            <th>(PA = MAPRA * fa)</th>
                        </tr>
                        <tr>
                            <th>(a)</th>
                            <th>(b)</th>
                            <th>(c)</th>
                            <th>(b)*(c)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <th>1</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>

                        </Tra>
                        <Tra>
                            <th>2</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>3</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>4</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>5</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>6</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>7</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>8</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>9</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>10</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th>n...</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                </Titulo2>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    );
};

export default Once;


