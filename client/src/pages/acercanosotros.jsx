import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from "../style/colores";

const Acercanosotros = () => {
  return (
    <Contacto>
      <MovingBackground />
      <Dtitulo>
        <h2>CONOCE MÁS DE NOSOTROS</h2>
      </Dtitulo>
      <Padrecuadro>
        <div>
          <Cuadros>
            <label>¿POR QUÉ CONFIAR EN NOSOTROS?</label>
            <img src="https://i.pinimg.com/564x/0c/bb/b1/0cbbb1886bb98a05d97cf4fc7d6b8b2f.jpg" alt="Por qué confiar en nosotros" />
            <p>
              LicitaFranz es un avanzado sistema de gestión de licitaciones, desarrollado por estudiantes de cuarto semestre de Ingeniería de Sistemas en Unifranz, específicamente para la región de Cochabamba. Nos especializamos en el sector de obras, proporcionando un servicio imparcial y de alta calidad que facilita a las empresas la gestión eficiente y efectiva de sus procesos de licitación. Con LicitaFranz, obtendrás una herramienta confiable y profesional que optimiza cada etapa del ciclo de licitación en el área de construcción, asegurando transparencia y eficacia en todas tus operaciones.            </p>
          </Cuadros>
          <Cuadros>
            <label>¿QUIÉNES SOMOS?</label>
            <img src="https://i.pinimg.com/564x/b4/58/91/b458918090b52082d308d5aa184ef880.jpg" alt="Quiénes somos" />
            <p>
              LicitaFranz es un innovador sistema de gestión de licitaciones, creado gracias al esfuerzo conjunto de estudiantes y profesionales comprometidos de Unifranz. Nuestro equipo combina la energía y creatividad de los estudiantes con la experiencia y conocimientos de ingenieros expertos, garantizando una solución eficiente y confiable para la gestión de licitaciones en el sector de obras.            </p>
          </Cuadros>
        </div>
        <Cuadritos>
          <label>CARACTERÍSTICAS DEL SERVICIO</label>
          <Columnas>
            <div>
              <img src="https://i.pinimg.com/236x/74/ae/8a/74ae8aa993c1d0e263c9d4faec868bba.jpg" alt="Monitoreo constante" />
              <p>
                Monitoreo constante de todas las licitaciones vigentes.
              </p>
            </div>
            <div>
              <img src="https://i.pinimg.com/236x/7a/24/d6/7a24d6d6d9b25efb7a35741fc47acfb1.jpg" alt="Historial propio por empresa" />
              <p>
                Historial propio por empresa.
              </p>
            </div>
            <div>
              <img src="https://i.pinimg.com/236x/b1/b6/a9/b1b6a919bda30317e55a6e9cf16ba7b6.jpg" alt="Envío de notificaciones" />
              <p>
                Opción de filtrado de licitaciones de interés.
              </p>
            </div>
            <div>
              <img src="https://i.pinimg.com/564x/0d/22/26/0d222676c1eafbb40a117dfdcd216702.jpg" alt="Filtrado de licitaciones" />
              <p>
                Llenado directo de formularios del 'Proponente' y demás adjuntos.
              </p>
            </div>
            <div>
              <img src="https://i.pinimg.com/564x/79/60/dd/7960dd6826e691aa97d8d2490882c742.jpg" alt="Envío de notificaciones" />
              <p>
                Envío de convocatoria con los requisitos necesarios.
              </p>
            </div>
          </Columnas>
        </Cuadritos>
        <Cuadritos>
          <label> TIPOS DE LICITACIONES</label>
          <Columnas>
            <Cuadros>
              <label>OBRAS</label>
              <img src="https://blog.structuralia.com/hubfs/Imported_Blog_Media/puente1-5.jpg#keepProtocol" alt="Por qué confiar en nosotros" />
              <p>
                Es el proceso mediante el cual una entidad contrata la ejecución de proyectos de construcción, reparación, mantenimiento o remodelación de infraestructuras. Incluye la presentación de propuestas por parte de contratistas interesados, que son evaluadas en función de criterios técnicos y económicos para seleccionar la oferta más conveniente.
              </p>
            </Cuadros>
            <Cuadros>
              <label>BIENES</label>
              <img src="https://www.vercettipropiedades.cl/images/bienes-raices.webp" alt="Por qué confiar en nosotros" />
              <p>
                Este tipo de licitación se refiere a la adquisición de productos tangibles necesarios para el funcionamiento de una entidad o para la ejecución de un proyecto específico. Los proveedores presentan sus ofertas para suministrar los bienes solicitados, y se selecciona la oferta que mejor cumpla con los requisitos de calidad, precio y condiciones de entrega.
              </p>
            </Cuadros>
            <Cuadros>
              <label>SERVICIOS GENERALES</label>
              <img src="https://serviciosgeneralesacr.com/images/empresa-servicios-generales.jpg" alt="Por qué confiar en nosotros" />
              <p>
                Involucra la contratación de servicios no relacionados con la construcción, como servicios de limpieza, seguridad, mantenimiento, transporte, entre otros. Las propuestas son evaluadas según la capacidad del proveedor para cumplir con las especificaciones del servicio, su experiencia y el costo.
              </p>
            </Cuadros>
            <Cuadros>
              <label>SERVICIOS CONSULTORIA</label>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-teJRzY9E5ybSFHpN5e2wvCK3LLKKqnz25YrGJ8Ba712g_1YT1vnlLfeF7iWMW-nUWS4&usqp=CAU" alt="Por qué confiar en nosotros" />
              <p>
                Este proceso se utiliza para contratar a profesionales o empresas que brindan asesoramiento especializado, estudios, diseños, supervisión de proyectos, entre otros servicios intelectuales. La evaluación se basa en la experiencia y competencias técnicas de los consultores, así como en el costo de sus servicios.
              </p>
              
            </Cuadros>
          </Columnas>
        </Cuadritos>
      </Padrecuadro>
    </Contacto>
  );
};

export default Acercanosotros;

const Contacto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 100px;
  position: relative;
  overflow: hidden; /* Ensure children are clipped if they overflow this element */
`;

const Dtitulo = styled.div`
  text-align: center;
  width: 100%;
  height: 60px;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: 500;
    color:${Colors.primary500};
  }
`;

const Padrecuadro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
  }
`;

const Cuadros = styled.div`
  width: 80%;
  max-width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
  
  label {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    color:${Colors.primary500}
  }
  
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  p {
    width: 100%;
    font-size: 14px;
    text-align: justify;
    margin: 10px 0;
    color: ${Colors.primary500}
  }
`;

const Cuadritos = styled.div`
  width: 1420px;
  height: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
  
  label {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    color:${Colors.primary500}
  }
  `;

const Columnas = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap: 50px;
div{
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: 20px;
    img {
      width: 200px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }
    p {
      width: 100%;
      font-size: 14px;
      color: ${Colors.primary500}
    }
  }
`;

const moveBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;

const MovingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://cdn.corporate.walmart.com/3c/ba/b944cfac494b85660220911f1163/istock-6675793-large.jpg') repeat;
  background-size:cover;
  animation: ${moveBackground} 80s linear infinite;
  z-index: -2;
`;
