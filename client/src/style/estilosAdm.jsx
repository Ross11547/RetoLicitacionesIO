import styled from 'styled-components';
import { Colors } from './colores';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    position: relative;
    background: ${Colors.primary500};
`;

export const Titulo = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 50px;
    padding-top: 20px;
    h1{
      font-size: 30px;
      font-weight: bold;
      &::first-letter {
          color: ${Colors.primary200};
          font-size: 1.5em;
          font-weight: 600;
      }
    }
`;
export const Titulo2 = styled.div`
    width:1470px;
    height: 100px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:10px;
    background:${Colors.primary400};
    box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
    border-radius: 7px;
    h1{
      font-size: 25px;
      font-weight: bold;
      padding-left: 20px;
      color:${Colors.primary100};
      &::first-letter {
          color: ${Colors.primary200};
          font-size: 1.5em;
          font-weight: 600;
      }
    }
    div{
      display: flex;
      justify-content:space-evenly;
      align-items:center;
      gap:50px;
      width: 500px;
      height: 100px;
      button{
        width: 140px;
        height:40px;
        background:${Colors.primary200};
        color:${Colors.primary500};
        border: none;
        font-size: 17px;
        border-radius: 10px;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
        cursor: pointer;
        &:hover{
          opacity: 0.8;
        }
      }
    }
`;

export const TableContainer = styled.div`
  width: 1470px;
  height: 950px; 
  overflow-y: scroll;
  `;
  export const FormAdm2 = styled.form`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const FormAdm = styled.form`
    width: 700px;
    height: 810px;
    background-color: ${Colors.primary400};
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    div {
        width: 100%;
        height:90px;
        display: flex;
        justify-content: center; 
        align-items: center;
        margin-bottom: 20px;
        button {
            width: 140px;
            height: 40px;
            font-size: 13px;
            font-weight: bold;
            background: ${Colors.primary200};
            border-radius: 5px;
            border: none;
            color: ${Colors.primary500};
            cursor: pointer;
        }
    }
`;

export const FormAdm3 = styled.form`
    width: 700px;
    height: 610px;
    background-color: ${Colors.primary400};
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    div {
        width: 100%;
        height:90px;
        display: flex;
        justify-content: center; 
        align-items: center;
        margin-bottom: 20px;
        button {
            width: 140px;
            height: 40px;
            font-size: 13px;
            font-weight: bold;
            background: ${Colors.primary200};
            border-radius: 5px;
            border: none;
            color: ${Colors.primary500};
            cursor: pointer;
        }
    }
`;

export const Main = styled.main`
  padding: 20px;
  display:flex;
`;

export const Section = styled.section`
  width: 100%;
  padding: 33px;
  display: flex;
  justify-content:center;
  
  h1 {
    padding-block-end: 15px;
    font-size: 25px;
    font-weight: bold;

    &::first-letter {
      color: ${Colors.primary200};
      font-size: 1.5em;
      font-weight: 600;
    }
  }

  h2 {
    padding-block-end: 25px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;

    &::first-letter {
      color: ${Colors.primary200};
      font-size: 1.5em;
      font-weight: 600;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="number"],
    input[type="date"]{
      width: 350px;
      padding: 8px;
      margin-bottom: 10px;
      border: none;
      border-radius: 5px;
      box-sizing: border-box;
    }

    label {
      display: block;
      margin-bottom: 10px;
      text-align: left; 
      width: 350px;
      font-weight: bold;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${Colors.primary100};
  :hover {
    cursor: pointer;
    color: ${Colors.primary200};
    text-decoration: underline orange;
  }
`;


export const SectionTwo = styled.section`
  padding: 20px;
  h1 {
    padding-block-end: 15px;
    font-size: 25px;
    font-weight: bold;

    &::first-letter {
      color: ${Colors.primary200};
      font-size: 1.5em;
      font-weight: 600;
    }
  }
`

export const ThAccion = styled.th`
display: flex;
flex-direction:column;
`;
