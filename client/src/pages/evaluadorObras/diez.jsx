import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Table, Th, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD } from '../../style/formulariosStyleDosTres';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Diez = () => {
    const [form, setForm] = useState({
        cuce: uuidv4(),
        objetoContrato: "",
        nombreProponente: "",
        propuestaEconomica: "",
        unoSi: false,
        unoNo: false,
        unoContinua: false,
        unoDesaclificada: false,
        dosSi: false,
        dosNo: false,
        dosContinua: false,
        dosDesaclificada: false,
        tresSi: false,
        tresNo: false,
        tresContinua: false,
        tresDesaclificada: false,
        cuatroSi: false,
        cuatroNo: false,
        cuatroContinua: false,
        cuatroDesaclificada: false,
        cincoSi: false,
        cincoNo: false,
        cincoContinua: false,
        cincoDesaclificada: false,
        seisSi: false,
        seisNo: false,
        seisContinua: false,
        seisDesaclificada: false,
        sieteSi: false,
        sieteNo: false,
        sieteContinua: false,
        sieteDesaclificada: false,
        ochoSi: false,
        ochoNo: false,
        ochoContinua: false,
        ochoDesaclificada: false,
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
                body: JSON.stringify(
                    {
                        descripcion: "Formulario2",
                        archivo: form
                    }
                ),
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
                    <label>FORMULARIO V-1b</label>
                    <label>EVALUACIÓN PRELIMINAR</label>
                    <label>(Para Asociaciones Accidentales)</label>
                </Titulo>
                <Titulo2>
                    <label>DATOS GENERALES DEL PROCESO</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>CUCE:</label>
                            <label>Objeto de la contratación:</label>
                            <label>Nombre del Proponente:</label>
                            <label>Propuesta Económica:</label>
                        </div>
                        <div>
                            <InputD type="number" value={form.cuce} onChange={(event) => setForm((old) => ({ ...old, cuce: event.target.value }))} />
                            <InputD type="text" value={form.objetoContrato} onChange={(event) => setForm((old) => ({ ...old, objetoContrato: event.target.value }))} placeholder />
                            <InputD type="text" value={form.nombreProponente} onChange={(event) => setForm((old) => ({ ...old, nombreProponente: event.target.value }))} placeholder />
                            <InputD type="text" value={form.propuestaEconomica} onChange={(event) => setForm((old) => ({ ...old, propuestaEconomica: event.target.value }))} placeholder />

                        </div>
                    </Cuce>
                </FormGroup>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>REQUISITOS EVALUADOS</th>
                            <th colSpan={2}> Verificación (Acto de Apertura)</th>
                            <th rowSpan={2} colSpan={2}>Evaluación Preliminar (Sesión Reservada)</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>PRESENTÓ</th>
                        </tr>
                        <tr>
                            <th>SI</th>
                            <th>NO</th>
                            <th>CONTINUA</th>
                            <th>DESCALIFICADA</th>
                        </tr>
                        <tr>
                            <th colSpan={1}>DOCUMENTOS LEGALES Y ADMINISTRATIVOS</th>
                            <th colSpan={4}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <Th>1. FORMULARIO A-1 Presentación de Propuesta.</Th>
                            <th><input type="checkbox" checked={form.unoSi} onChange={(event) => setForm((old) => ({ ...old, unoSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.unoNo} onChange={(event) => setForm((old) => ({ ...old, unoNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.unoContinua} onChange={(event) => setForm((old) => ({ ...old, unoContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.unoNo} onChange={(event) => setForm((old) => ({ ...old, unoNo: event.target.checked }))} /></th>

                        </Tra>
                        <Tra>
                            <Th>2. FORMULARIO A-2c. Identificación del Proponente, según corresponda.</Th>
                            <th><input type="checkbox" checked={form.dosSi} onChange={(event) => setForm((old) => ({ ...old, dosSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.dosNo} onChange={(event) => setForm((old) => ({ ...old, dosNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.dosContinua} onChange={(event) => setForm((old) => ({ ...old, dosContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.dosDesaclificada} onChange={(event) => setForm((old) => ({ ...old, dosDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>3. Además, cada socio en forma independiente presentará:
                                FORMULARIO A-2d Identificación de Integrantes de la Asociación Accidental.</Th>
                            <th><input type="checkbox" checked={form.tresSi} onChange={(event) => setForm((old) => ({ ...old, tresSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.tresNo} onChange={(event) => setForm((old) => ({ ...old, tresNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.tresContinua} onChange={(event) => setForm((old) => ({ ...old, tresContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.tresDesaclificada} onChange={(event) => setForm((old) => ({ ...old, tresDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>4. Garantía de Seriedad de Propuesta o Depósito.</Th>
                            <th><input type="checkbox" checked={form.cuatroSi} onChange={(event) => setForm((old) => ({ ...old, cuatroSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.cuatroNo} onChange={(event) => setForm((old) => ({ ...old, cuatroNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.cuatroContinua} onChange={(event) => setForm((old) => ({ ...old, cuatroContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.cuatroDesaclificada} onChange={(event) => setForm((old) => ({ ...old, cuatroDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                        <Tr>
                            <th colSpan={1}>PROPUESTA TÉCNICA</th>
                            <th colSpan={4}></th>
                        </Tr>
                        <Tra>
                            <Th>5. FORMULARIO C-1.
                                Señalar (Por ej.: Organigrama, Métodos Constructivos, Número de frentes a utilizar, otros).</Th>
                            <th><input type="checkbox" checked={form.cincoSi} onChange={(event) => setForm((old) => ({ ...old, cincoSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.cincoNo} onChange={(event) => setForm((old) => ({ ...old, cincoNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.cincoContinua} onChange={(event) => setForm((old) => ({ ...old, cincoContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.cincoDesaclificada} onChange={(event) => setForm((old) => ({ ...old, cincoDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>6. FORMULARIO C-2. Condiciones Adicionales (cuando corresponda)</Th>
                            <th><input type="checkbox" checked={form.seisSi} onChange={(event) => setForm((old) => ({ ...old, seisSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.seisNo} onChange={(event) => setForm((old) => ({ ...old, seisNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.seisContinua} onChange={(event) => setForm((old) => ({ ...old, seisContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.seisDesaclificada} onChange={(event) => setForm((old) => ({ ...old, seisDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                        <Tr>
                            <th colSpan={1}>PROPUESTA ECONÓMICA</th>
                            <th colSpan={4}></th>
                        </Tr>
                        <Tra>
                            <Th>7. FORMULARIO B-1. Presupuesto por Ítems y General de la Obra</Th>
                            <th><input type="checkbox" checked={form.sieteSi} onChange={(event) => setForm((old) => ({ ...old, sieteSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.sieteNo} onChange={(event) => setForm((old) => ({ ...old, sieteNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.sieteContinua} onChange={(event) => setForm((old) => ({ ...old, sieteContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.sieteDesaclificada} onChange={(event) => setForm((old) => ({ ...old, sieteDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>8. Otros (señalar/añadir).</Th>
                            <th><input type="checkbox" checked={form.ochoSi} onChange={(event) => setForm((old) => ({ ...old, ochoSi: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.ochoNo} onChange={(event) => setForm((old) => ({ ...old, ochoNo: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.ochoContinua} onChange={(event) => setForm((old) => ({ ...old, ochoContinua: event.target.checked }))} /></th>
                            <th><input type="checkbox" checked={form.ochoDesaclificada} onChange={(event) => setForm((old) => ({ ...old, ochoDesaclificada: event.target.checked }))} /></th>
                        </Tra>
                    </tbody>
                </Table>
                <Table>
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
                            <td colSpan={5}>
                                <button type="button" onClick={addRow}>Agregar Fila</button>
                            </td>
                </Titulo2>
                <DivButton>
                    <ButtonSig onClick={handleSubmit}><Link to="/diez">ENVIAR</Link></ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Diez
