import React, { useState } from 'react';
import { ButtonSig, ContainerForm, DivButton, Table, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD } from '../../style/formulariosStyleDosTres';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Once = () => {
    const [form, setForm] = useState({
        cuce: uuidv4(),
        objetoContrato: "",
        fechaLugarApertura: "",
        direccion: ""
    });
    const [table, setTable] = useState({
        rows: [{ values: ["", false, false, false, false] }]
    });
    const addRow = (e) => {
        e.preventDefault();
        setTable((prevTable) => ({
            ...prevTable,
            rows: [...prevTable.rows, { values: ["", false, false, false, false] }],
        }));
    };

    const removeRow = (e, rowIndex) => {
        e.preventDefault();
        setTable((prevTable) => {
            const newRows = prevTable.rows.filter((_, index) => index !== rowIndex);
            return { ...prevTable, rows: newRows };
        });
    };

    const jsonData = {
        tableData: table.rows.map((row) => row.values),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/formulario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    descripcion: "Formulario2",
                    archivo: jsonData
                }),
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
                            <InputD type="number" value={form.cuce} onChange={(event) => setForm((old) => ({ ...old, cuce: event.target.value }))} />
                            <InputD type="text" value={form.objetoContrato} onChange={(event) => setForm((old) => ({ ...old, objetoContrato: event.target.value }))} />
                            <InputD type="date" value={form.fechaLugarApertura} onChange={(event) => setForm((old) => ({ ...old, fechaLugarApertura: event.target.value }))} />
                            <InputD type="text" value={form.direccion} onChange={(event) => setForm((old) => ({ ...old, direccion: event.target.value }))} />
                        </div>
                    </Cuce>
                </FormGroup>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>N°</th>
                            <th rowSpan={3}>NOMBRE DE PROPONENTE</th>
                            <th >VALOR LEÍDO DE LA PROPUESTA</th>
                            <th>MONTO AJUSTADO POR REVISIÓN ARITMÉTICA</th>
                            <th>FACTOR DE AJUSTE POR MARGEN DE PREFERENCIA</th>
                            <th>PRECIO AJUSTADO</th>
                            <th rowSpan={3}>ACCION</th>

                        </tr>
                        <tr>
                            <th>PP</th>
                            <th>MAPRA(*)</th>
                            <th>(fa)</th>
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
                        {table.rows.map((row, rowIndex) => (
                            <Tra key={rowIndex}>
                                <th>{rowIndex + 1}</th>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        {colIndex === 0 ? (
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                            />
                                        ) : (
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                            />
                                        )}
                                    </td>
                                ))}
                                <td>
                                    <button type="button" onClick={(event) => removeRow(event, rowIndex)}>x</button>
                                </td>
                            </Tra>
                        ))}
                    </tbody>
                </Table>
                <Titulo2>
                </Titulo2>
                <th>
                    <button type="button" onClick={addRow}>+</button>
                </th>
                <DivButton>
                    <ButtonSig onClick={handleSubmit}>GUARDAR</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    );
};

export default Once;


