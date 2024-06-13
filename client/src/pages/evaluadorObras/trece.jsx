import React, { useState } from 'react';
import { ButtonSig, ContainerForm, DivButton, Tr, Th, Table, Tra, Titulo2 } from '../../style/formulariosStyleUno';
import { Form, Titulo } from '../../style/formulariosStyleDosTres';
import { toast } from 'react-toastify';

const Trece = () => {
    const [form, setForm] = useState({
        condicionesAdicionales: "",
    });

    const [table, setTable] = useState({
        rows: [{ values: ["", "", false, false, false, false] }],
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

    const generateJSON = (e) => {
        e.preventDefault();
        const jsonData = {
            ...form,
            tableData: table.rows.map((row) => row.values),
        };
        console.log(JSON.stringify(jsonData, null, 2));
    };

    const [columns, setColumns] = useState([
        "PROPONENTE A",
        "PROPONENTE B",
        "PROPONENTE C",
        "PROPONENTE D"
    ]);

    const [data, setData] = useState([
        { description: "PUNTAJE DE LA EVALUACIÓN CUMPLE/NO CUMPLE", score: 30, values: Array(columns.length).fill("") },
        { description: "PUNTAJE DE LAS CONDICIONES ADICIONALES", score: 50, values: Array(columns.length).fill("") },
    ]);
    const [datas, setDatas] = useState([
        { description: "PUNTAJE TOTAL DE LA EVALUACIÓN DE LA PROPUESTA TÉCNICA (PT)", score: 80, values: Array(columns.length).fill("") },
    ]);

    const handleInputChangeDos = (event, rowIndex, colIndex) => {
        const { value } = event.target;
        const newData = [...data];
        newData[rowIndex].values[colIndex] = value;
        setData(newData);
    };

    const addColumn = (e) => {
        e.preventDefault();
        const newColumn = `PROPONENTE ${String.fromCharCode(65 + columns.length)}`;
        setColumns([...columns, newColumn]);
        setData(data.map(row => ({
            ...row,
            values: [...row.values, ""]
        })));
        setDatas(datas.map(row => ({
            ...row,
            values: [...row.values, ""]
        })));
    };

    const removeColumn = (e) => {
        e.preventDefault();
        if (columns.length > 1) { // Ensure at least one column remains
            setColumns(columns.slice(0, -1));
            setData(data.map(row => ({
                ...row,
                values: row.values.slice(0, -1)
            })));
            setDatas(datas.map(row => ({
                ...row,
                values: row.values.slice(0, -1)
            })));
        }
    };

    const jsonData = {
        columns,
        data
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
                    <label>CONDICIONES ADICIONALES</label>
                    <label>FORMULARIO C-2</label>
                    <label>(Llenado por la entidad)</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)</th>
                            <th rowSpan={3}> PUNTAJE ASIGNADO</th>
                            <th colSpan={4}>PROPONENTES</th>
                            <th rowSpan={3}>ACCION</th>
                        </tr>
                        <tr>
                            <th>PROPONENTE A</th>
                            <th>PROPONENTE B</th>
                            <th>PROPONENTE C</th>
                            <th>PROPONENTE D</th>
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
                            <Tra key={rowIndex}>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        {colIndex === 0 ? (
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                            />
                                        ) : colIndex === 1 ? (
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
                                        )}
                                    </td>
                                ))}
                                <td>
                                    <button type="button" onClick={(event) => removeRow(event, rowIndex)}>x</button>
                                </td>
                            </Tra>
                        ))}
                        <Tr>
                            <th>METODOLOGÍA CUMPLE/NO CUMPLE</th>
                            <th>0 al 5</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>
                                <button type="button" onClick={addRow}>+</button>
                            </th>
                        </Tr>
                    </tbody>
                </Table>
                {/*<button type="button" onClick={generateJSON}>Guardar</button>*/}
                <Titulo2></Titulo2>
                <Table>
                    <thead>
                        <Tr>
                            <th rowSpan={2}>CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)</th>
                            <th rowSpan={2}>PUNTAJE ASIGNADO</th>
                            <th colSpan={columns.length}>PROPONENTES</th>
                        </Tr>
                        <Tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </Tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <Tra key={rowIndex}>
                                <th>{row.description}</th>
                                <th>{row.score}</th>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(event) => handleInputChangeDos(event, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </Tra>
                        ))}
                        {datas.map((row, rowIndex) => (
                            <Tr key={rowIndex}>
                                <th>{row.description}</th>
                                <th>{row.score}</th>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(event) => handleInputChangeDos(event, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </Table>
                <button onClick={addColumn}>Agregar Columna</button>
                <button onClick={removeColumn}>Eliminar Columna</button>
                <DivButton>
                    <ButtonSig onClick={handleSubmit}>GUARDAR</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    );
};

export default Trece;
