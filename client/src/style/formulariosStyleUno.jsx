import styled from 'styled-components';
import { Colors } from './colores';

export const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
`;

export const Titulo = styled.div`
    width: 100%;  
    height: 100%;
    margin-bottom: 5px;
    background:${Colors.primary100};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    gap:10px;
    border-radius: 5px;
    label{
        color: ${Colors.primary500};
    }
`;
export const Titulo2 = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    padding: 15px;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: ${Colors.primary100};
    border-radius: 5px;
    label{
        color: ${Colors.primary500};
    }
`;
export const Form = styled.div`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    margin-bottom: 10px;
    background: ${Colors.primary400};
    border-radius: 4px solid #000000;
    padding: 10px;
    border-radius: 5px;
    text-align: end;
`;

export const Cuce = styled.div`
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
export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: ${Colors.primary400};
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CheckboxInput = styled.input`
    margin-right: 5px;
`;

export const CheckboxLabel = styled.label`
    margin-right: 10px;
`;
export const FechaLugar = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    gap: 10px;
`;

export const FechaDireccion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: bold;
    gap: 15px;
    color: #FFFFFF;
`;


export const Abbreviation = styled.th`
width:100%;
padding:none;
`;

export const TextoTres = styled.div`
text-align:start;
`;

export const DivButton = styled.div`
width: 100%;
height:100%;
display: flex;
justify-content: end;
`;

export const ButtonSig = styled.button`
    width: 140px;
    height: 40px;
    font-size: 13px;
    font-weight: bold;
    background: ${Colors.primary200};
    border-radius: 5px;
    border: none;
    color: ${Colors.primary500};
    cursor: pointer;
    a{
        text-decoration:none;
        color: ${Colors.primary500}
    }
    `;

export const Form1 = styled.form`
    width: 1160px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    `;

export const Titulo3 = styled.button`
    width: 20.6%;
    height: 50px;
    margin-bottom: 10px;
    border: none;
    button{
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${Colors.primary200};
        width: 260px;
        height: 50px;
        font-weight: bold;
        font-size: 17px;
        color: ${Colors.primary500};
        border:none;
        cursor: pointer;
        
    }
    a{
        text-decoration: none;
        color: ${Colors.primary500};
    }
    `;

export const ButtonD = styled.button`
    width: 100px;
    height: 30px;
    font-size: 12px;
    font-weight: bold;
    background: ${Colors.primary200};
    border-radius: 5px;
    border: none;
    color: ${Colors.primary500};
    cursor: pointer;
    a{
        text-decoration: none;
        color: ${Colors.primary500};
    }
    `;

export const Table = styled.table`
    background-color: ${Colors.primary400};
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    th, td {
        padding: 15px;
        border-bottom: 1px solid ${Colors.primary100};
        
    }
    thead{
        background-color: ${Colors.primary100};
        color:${Colors.primary500};
        font-size: 15px;
    }
    tbody{
        
    }
    input{
        background: ${Colors.primary400};
        border: none;
        outline: none;
        text-align:center;
        width:90%;
    }
    `;
export const Tra = styled.tr`
    height: 50px;
    :hover {
        background-color: #f5f5f5;
    }
`;
export const Tr = styled.tr`
        background-color: ${Colors.primary100};
        color:#fff;
        font-size: 15px;
    `;
export const Th = styled.th`
        text-align: left;
        button{
            width:80px;
            height:30px;
            border: none;
            background: ${Colors.primary200};
            border-radius:10px;
            font-size: 12px;
            color: ${Colors.primary500};
            cursor: pointer;
        }
    `;

export const TableAdm = styled.table`
    width: 100%;
    background-color: ${Colors.primary400};
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    th, td {
        padding: 15px;
        border-bottom: 1px solid ${Colors.primary100};
        
    }
    thead{
        background-color: ${Colors.primary100};
        color:${Colors.primary500};
        font-size: 15px;
    }
    tbody{
        
    }
    input{
        background: ${Colors.primary400};
        border: none;
        outline: none;
        text-align:center;
        width:90%;
    }
    `;

