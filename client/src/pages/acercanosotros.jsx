import React from 'react'
import styled from 'styled-components'


const Acercanosotros = () => {
  return (
      <Contacto>
        <Dtitulo>
          <h2>CONOCE MÁS DE NOSOTROS</h2>
        </Dtitulo>
        <Padrecuadro>
          <Cuadros>
            <label>1977 - FUNDACIÓN</label>

            <img src="" alt=""/>
            <p>
              5 de febrero de 1977 se fundó la cooperativa bajo una estricta regla interna, desde entonces dirige sus esfuerzos hacia el fortalecimiento de la producción, procesamiento, comercialización del cacao orgánico y derivados.
            </p>
          </Cuadros>
          <Cuadros>
            <label>1981 - TRANSFORMACIÓN</label>
            <img src="" alt=""/>
            <p>
              Incursión en la transformación del cacao pasta de cacao y bollos a nivel nacional.
            </p>
          </Cuadros>
          <Cuadros>
            <label>1985 - RIO SECO PARA LA EXPORTACIÓN</label>
            <img src="" alt=""/>
            <p>
              Incursión en la transformación de cacao y obtención de manteca y cocoa en la ubicación Rio Seco para exportación.
            </p>
          </Cuadros>
        </Padrecuadro>
        <Padrecuadro>
          <Cuadros>
            <label>1985 - CREACIÓN DEL CEIBOLITO</label>
            <img src="" alt=""/>
            <p>
              Creación del ceibolito, nombre y producto bajo un concurso a nivel personal.
            </p>
          </Cuadros>
          <Cuadros>
            <label>1987 - EXPORTACIÓN A EEUU</label>
            <img src="" alt=""/>
            <p>
              Primera exportación de cacao orgánico con certificación orgánica a Estados Unidos.
            </p>
          </Cuadros>
          <Cuadros>
            <label>1987 - NUEVA PLANTA EN EL ALTO</label>
            <img src="" alt=""/>
            <p>
              Nueva planta en la ceja, el alto, con una capacidad de 500 kilos de cacao a procesar envasado de cocoa y desarrollo de chocolates Ceibolitos.
            </p>
          </Cuadros>
        </Padrecuadro>
        <Dtitulo>
          <h2 className="titulo">SOBRE NOSOTROS</h2>
        </Dtitulo>
        <Padrecuadro>
          <Cuadros>
            <label>ANTECEDENTES</label>
            <img src="" alt=""/>
            <p>
              En 1977, El Ceibo se creó para mejorar la comercialización del cacao con asistencia técnica y tiendas cooperativas, experimentando un notable crecimiento en personas y tecnología desde entonces.
            </p>
          </Cuadros>
          <Cuadros>
            <label>MISIÓN</label>
            <img src="" alt=""/>
            <p>
              El objetivo es gestionar eficientemente la cadena de cacao orgánico con transparencia y principios cooperativos, atendiendo las necesidades de las cooperativas y contribuyendo al desarrollo a nivel regional y nacional.
            </p>
          </Cuadros>
          <Cuadros>
            <label>VISIÓN</label>
            <img src="" alt=""/>
            <p>
              El Ceibo busca destacarse nacionalmente en la cadena del cacao orgánico con prácticas sostenibles, satisfaciendo las necesidades de asociados y productores mediante autogestión cooperativa.
            </p>
          </Cuadros>
        </Padrecuadro>
      </Contacto>
  )
}

export default Acercanosotros

const Contacto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 100px;
`;

const Dtitulo = styled.div`
  text-align: center;
  font-size: 40px;
  h2 {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Padrecuadro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Cuadros = styled.div`
  width: 30vw;
  height: 350px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  margin: 10px 30px 15px 10px;
  box-shadow: 0 1px 5px rgba(255, 255, 255, 0.075);
  padding: 15px;
  text-align: center;
  p {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 13px;
  padding: 10px;
  height: calc(100% - 40px);
  overflow: auto;
}
   label {
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: 500;
}
 img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

`;

