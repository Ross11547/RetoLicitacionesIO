import React from 'react';
import styled from 'styled-components';

const Itemsobras = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO B-1</label>
                    <label>PRESUPUESTO POR ÍTEMS Y GENERAL DE LA OBRA</label>
                    <label>(En bolivianos)</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th colspan={4}>Volúmenes de Obra requeridos por la entidad convocante
                                (Información que debe ser registrada por la entidad convocante)</th>
                            <th colspan={3}>Presupuesto
                                (Costo propuesto por el proponente según los ítems de Volumen de Obra requeridos)</th>
                        </tr>
                        <tr>
                            <th>Item</th>
                            <th>Descripción</th>
                            <th>Unidad</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario (Numeral)</th>
                            <th>Precio Unitario (Literal)</th>
                            <th>Precio Total (Numeral)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <th> {">"} </th>
                            <th>M01 - ESTRUCTURAS</th>
                            <th colSpan={5}></th>
                        </Tr>
                        <tr>
                            <th>1</th>
                            <Th>OG-HORMIGON ARMADO (COLUMNA R=210)</Th>
                            <th>m³</th>
                            <th>1,36</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <Th>OG-HORMIGON ARMADO (VIGA CADENA R=210)</Th>
                            <th>m³</th>
                            <th>4,72</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <Th>OG-HORMIGON ARMADO (ESCALERA R=210)</Th>
                            <th>m³</th>
                            <th>4,12</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <Th>OG-LOSA ENCASETONADA 2D-C/PLASTOFORM H=25 (R=210)</Th>
                            <th>m²</th>
                            <th>13,72</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <Th>OG-CERCHA METALICA INC/ANCLAJ</Th>
                            <th>pza</th>
                            <th>2,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>6</th>
                            <Th>OG-CORREA METALICA (PERFIL 80X40X15X2 MM)</Th>
                            <th>m</th>
                            <th>44,40</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>7</th>
                            <Th>OG-CUBIERTA CALAMINA PREPINTADA Nº26 (E=0.43 MM)</Th>
                            <th>m²</th>
                            <th>41,14</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>8</th>
                            <Th>OC-CUMBRERA CALAMINA PREPINTADA N°26</Th>
                            <th>m</th>
                            <th>3,70</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <th> {">"} </th>
                            <th>M02 - OBRA FINA PLANTA BAJA Y 1ER PISO</th>
                            <th colSpan={5}></th>
                        </Tr>
                        <tr>
                            <th>9</th>
                            <Th>OF-SOLADURA</Th>
                            <th>m²</th>
                            <th>41,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>10</th>
                            <Th>OF-CONTRAPISO DE CEMENTO SOBRE EMPEDRADO (E=5CM)</Th>
                            <th>m²</th>
                            <th>41,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>11</th>
                            <Th>OF-CONTRAPISO DE CEMENTO SOBRE LOSA (E=5CM)</Th>
                            <th>m²</th>
                            <th>43,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>12</th>
                            <Th>OG-MURO DE LADRILLO 6H E=15CM</Th>
                            <th>m²</th>
                            <th>78,15</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>13</th>
                            <Th>OG-MURO DE LADRILLO 6H E=10CM</Th>
                            <th>m²</th>
                            <th>91,88</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>14</th>
                            <Th>REVOQUE DE CEMENTO</Th>
                            <th>m²</th>
                            <th>290,53</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>15</th>
                            <Th>OF-JAMBA DE CEMENTO</Th>
                            <th>m</th>
                            <th>85,80</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>16</th>
                            <Th>OF-REVOQUE DE YESO (CIELO RASO SOBRE LOSA)</Th>
                            <th>m²</th>
                            <th>218,30</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>17</th>
                            <Th>OF-REVOQUE DE YESO SOBRE MURO DE LADRILLO</Th>
                            <th>m²</th>
                            <th>143,94</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>18</th>
                            <Th>PISO DE CERAMICA NACIONAL DE 1RA.</Th>
                            <th>m²</th>
                            <th>294,65</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>19</th>
                            <Th>OF-ZOCALO CERAMICO</Th>
                            <th>m</th>
                            <th>112,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>20</th>
                            <Th>IC-VENTANA DE CARPINT. ALUM.+V. COLOR(PROV./ COL.)</Th>
                            <th>m²</th>
                            <th>41,82</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>21</th>
                            <Th>IC-COLOCADO DE MARCO DE PUERTA</Th>
                            <th>pza</th>
                            <th>3,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>22</th>
                            <Th>MARCO DE MADERA DURA 2"X4" INCL./PINT.</Th>
                            <th>m</th>
                            <th>24,90</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>23</th>
                            <Th>OF-COLOCADO DE PUERTA</Th>
                            <th>pza</th>
                            <th>3,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>24</th>
                            <Th>PUERTA DE MADERA DURA (TABLERO 1,00X2,20)INCL. PINT.</Th>
                            <th>pza</th>
                            <th>3,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>25</th>
                            <Th>OF-PROV. Y COLOC. DE VIDRIO DE 4MM</Th>
                            <th>pie²</th>
                            <th>25,82</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>26</th>
                            <Th>QUINCALLERIA PUERTA EXTERIOR (BISAGRA 4")</Th>
                            <th>pza</th>
                            <th>3,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>27</th>
                            <Th>IC-BARANDA METALICA  (H=1.10 M)</Th>
                            <th>m</th>
                            <th>35,80</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <th> {">"}</th>
                            <th>M03 - OBRA GRUESA PISO 2</th>
                            <th colSpan={5}></th>
                        </Tr>
                        <tr>
                            <th>28</th>
                            <Th>OF-CONTRAPISO DE CEMENTO SOBRE LOSA (E=5CM)</Th>
                            <th>m²</th>
                            <th>155,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>29</th>
                            <Th>OG-MURO DE LADRILLO 6H E=15CM</Th>
                            <th>m²</th>
                            <th>76,80</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>30</th>
                            <Th>OG-MURO DE LADRILLO 6H E=10CM</Th>
                            <th>m²</th>
                            <th>47,77</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <th> {">"} </th>
                            <th>M04 - INST. ELECTRICO P1</th>
                            <th colSpan={5}></th>
                        </Tr>
                        <tr>
                            <th>31</th>
                            <Th>Elc - picado para  conduit</Th>
                            <th>m</th>
                            <th>13,15</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>32</th>
                            <Th>Elc - ducto conduit  d=3/4"</Th>
                            <th>m</th>
                            <th>10,65</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>33</th>
                            <Th>Elc - caja de derivacion circular pvc</Th>
                            <th>pza</th>
                            <th>16,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>34</th>
                            <Th>Elc - caja de derivacion rectangular pvc</Th>
                            <th>pza</th>
                            <th>14,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>35</th>
                            <Th>Elc- tablero de distribucion (inc.cableado 5 circ) T1</Th>
                            <th>pza</th>
                            <th>3,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>36</th>
                            <Th>Interruptor magnetotermico monopolar 1px16 a</Th>
                            <th>pza</th>
                            <th>1,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>37</th>
                            <Th>Interruptor magnetotermico monopolar 1px20 a</Th>
                            <th>pza</th>
                            <th>1,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>38</th>
                            <Th>Interruptor magnetotermico monopolar 1px30 a</Th>
                            <th>pza</th>
                            <th>1,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>39</th>
                            <Th>Elc - alambre de c.u. aislado 6 mm2 fn</Th>
                            <th>m</th>
                            <th>3,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>40</th>
                            <Th>Elc - alambre de c.u. aislado 3.31 mm2 fn-t</Th>
                            <th>m</th>
                            <th>47,15</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>41</th>
                            <Th>Elc - alambre de c.u. aislado de 2.081 mm2 fn</Th>
                            <th>m</th>
                            <th>95,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>42</th>
                            <Th>ELC - TOMACORRIENTE  DOBLE DE EMPOTRAR</Th>
                            <th>pza</th>
                            <th>9,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>43</th>
                            <Th>Elc - interruptor simple placa</Th>
                            <th>pza</th>
                            <th>5,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>44</th>
                            <Th>Elc - panel led cuadrada empotrar de 42 w</Th>
                            <th>pza</th>
                            <th>12,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>45</th>
                            <Th>Elc - panel led redonda empotrar de 24 w</Th>
                            <th>pza</th>
                            <th>4,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <th> {">"}</th>
                            <th>M05 - INST. ELECTRICO P2</th>
                            <th colSpan={5}></th>
                        </Tr>
                        <tr>
                            <th>46</th>
                            <Th>Elc - picado para  conduit</Th>
                            <th>m</th>
                            <th>7,40</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>47</th>
                            <Th>Elc - ducto conduit  d=1"</Th>
                            <th>m</th>
                            <th>13,05</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>48</th>
                            <Th>Elc - ducto conduit  d=3/4"</Th>
                            <th>m</th>
                            <th>109,90</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>49</th>
                            <Th>Elc - caja de derivacion de paso 20x20 cm</Th>
                            <th>pza</th>
                            <th>1,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>50</th>
                            <Th>Elc - caja de derivacion rectangular pvc</Th>
                            <th>pza</th>
                            <th>42,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>51</th>
                            <Th>DesElc- tablero de distribucion (inc.cableado 5 circ) T1cripción</Th>
                            <th>pza</th>
                            <th>1,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <th> {">"} </th>
                            <th>M06 - ITEMS FINALES</th>
                            <th colSpan={5}></th>
                        </Tr>
                        <tr>
                            <th>52</th>
                            <Th>OG-LIMPIEZA C/CARGUIO</Th>
                            <th>glb</th>
                            <th>1,00</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <Tht rowSpan={2} colSpan={4}></Tht>
                            <th colSpan={2}>PRECIO TOTAL (Numeral)</th>
                            <th><input type="number"></input></th>
                        </Tr>
                        <Tr>
                            <th colSpan={2}>PRECIO TOTAL (Literal)</th>
                            <th><input type="number"></input></th>
                        </Tr>
                    </tbody>
                </Table>
            </Form>
        </ContainerForm>
    );
}

export default Itemsobras;

const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: #C1CAD6;
`;

const Titulo = styled.div`
    width: 100%;  
    height: 120px;
    margin-bottom: 15px;
    background:#336699;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    gap:13px;
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

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border: 1px solid #336699;
        padding: 8px;
        height: 30px;
        
    }
    thead{
         background-color: #003366;
         color:#FFFFFF;
         font-size: 15px;
    }
    tbody{
        tr{
            height: 50px;
        }
    }
    input{
        background: #C1CAD6;
        border: none;
        outline: none;
    }
`;

const Tr = styled.tr`
    border: 1px solid #336699;
    background:#003366;
    color: #FFFFFF;
    input{
        background: #003366;
        border: none;
        outline: none;
        color: #FFFFFF;
    }
`;

const Th = styled.th`
    padding: 8px;
    height: 30px;
    text-align: start;
`;

const Tht = styled.th`
    background: #C1CAD6;
`;