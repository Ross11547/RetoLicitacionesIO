import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Th, Table, Tra, Titulo2 } from '../../style/formulariosStyleUno';
import { Form, Titulo } from '../../style/formulariosStyleDosTres';
import { v4 as uuidv4 } from 'uuid';

const Trece = () => {
    const [table, setTable] = useState({
        headers: ["N°", "CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)", "Puntaje Asignado", "PROPONENTES", "ACCION"],
        rows: [{ values: ["", "", false] }],
    });

    const handleInputChange = (event, rowIndex, colIndex) => {
        const { type, checked, value } = event.target;
        setTable((prevTable) => {
            const newRows = [...prevTable.rows];
            newRows[rowIndex].values[colIndex] = type === "checkbox" ? checked : value;
            return { ...prevTable, rows: newRows };
        });
    };

    const addRow = (e) => {
        e.preventDefault();
        setTable((prevTable) => ({
            ...prevTable,
            rows: [...prevTable.rows, { values: ["", "", false, false, false, false] }],
        }));
    };

    const removeRow = (e, rowIndex) => {
        e.preventDefault();
        setTable((prevTable) => {
            const newRows = prevTable.rows.filter((_, index) => index !== rowIndex);
            return { ...prevTable, rows: newRows };
        });
    };

    const addColumn = () => {
        setTable(prevTable => {
            const newHeaders = [...prevTable.headers, `Columna ${prevTable.headers.length + 1}`];
            const newRows = prevTable.rows.map(row => {
                const newRowValues = [...row.values, ""];
                return { values: newRowValues };
            });
            return { headers: newHeaders, rows: newRows };
        });
    };

    const removeColumn = colIndex => {
        setTable(prevTable => {
            const newHeaders = prevTable.headers.filter((_, index) => index !== colIndex);
            const newRows = prevTable.rows.map(row => {
                const newRowValues = row.values.filter((_, index) => index !== colIndex);
                return { values: newRowValues };
            });
            return { headers: newHeaders, rows: newRows };
        });
    };

    const generateJSON = (e) => {
        e.preventDefault();
        const jsonData = {
            ...form,
            tableData: table.rows.map((row) => row.values),
        };
        console.log(JSON.stringify(jsonData, null, 2));
    };
    return (
        <ContainerForm>
            <Form onSubmit={generateJSON}>
                <Titulo>
                    <label>CONDICIONES ADICIONALES</label>
                    <label>FORMULARIO C-2</label>
                    <label>(Llenado por la entidad)</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>N°</th>
                            <th rowSpan={3}>CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)</th>
                            <th rowSpan={3}>Puntaje Asignado</th>
                            <th colSpan={5}>PROPONENTES</th>
                        </tr>
                        <tr>
                            {table.headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                            <th rowSpan={2}>ACCION</th>
                        </tr>
                        <tr>
                            <th>Puntaje Obtenido</th>
                            <th>Puntaje Obtenido</th>
                            <th>Puntaje Obtenido</th>
                            <th>Puntaje Obtenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.rows.map((row, rowIndex) => (
                            <Tra key={row.id}>
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
                                            colIndex === 1 ? (
                                                <input
                                                    type="number"
                                                    value={value}
                                                    onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                                />
                                            ) : (
                                                <input
                                                    type="checkbox"
                                                    checked={value}
                                                    onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                                />
                                            )
                                        )}
                                    </td>
                                ))}
                                <td>
                                    <button type="button" onClick={(event) => removeRow(event, rowIndex)}>x</button>
                                </td>
                            </Tra>
                        ))}
                        <Tr>
                            <th></th>
                            <th>METODOLOGÍA CUMPLE/NO CUMPLE</th>
                            <th>0 al 5</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>
                                <button type="button" onClick={addRow}>(+)Fila</button>
                                <button type="button" onClick={addColumn}>(+)Columna</button>
                            </th>
                        </Tr>
                    </tbody>
                </Table>

                <button type="button" onClick={generateJSON}>Guardar</button>
                <Titulo2>
                </Titulo2>
                <Table>
                    <thead>
                        <tr>
                            <th>RESUMEN DE LA EVALUACION TÉCNICA</th>
                            <th>Puntaje Asignado</th>
                            <th>PROPONENTE A</th>
                            <th>PROPONENTE B</th>
                            <th>PROPONENTE C</th>
                            <th>PROPONENTE n</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <th> PUNTAJE DE LA EVALUACIÓN CUMPLE/NO CUMPLE</th>
                            <th>30</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>

                        </Tra>
                        <Tra>
                            <th> PUNTAJE DE LAS CONDICIONES ADICIONALES </th>
                            <th>50</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tr>
                            <th>PUNTAJE TOTAL DE LA EVALUACIÓN DE LA PROPUESTA TÉCNICA (PT)</th>
                            <th>80</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tr>
                    </tbody>
                </Table>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Trece;