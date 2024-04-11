import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <BodyF>
      <ContentFI>
        <ImgF
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvW9Xmn48A8ACmbvrD545Snb0Cr6uhiLuxzTkFUVqvA&s"
          alt="imagen"
        />
      </ContentFI>
      <ContentF>
        <DivContent>
          <h4>Infociscon</h4>
          <a href="/nosotros">Nosotros</a>
          <a href="/areapractica">Licitacciones</a>
        </DivContent>
        <DivContent>
          <h4>Contactos</h4>
          <a
            href={`https://api.whatsapp.com/send?phone=${+59170727383}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 1
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${+59170723161}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 2
          </a>
        </DivContent>
        <DivContent>
          <h4>Redes Sociales</h4>
          <a
            href={`https://www.facebook.com/belc.consortium?mibextid=ZbWKwL`}
          >
            Facebook1
          </a>
          <a href={``}>Facebool2</a>
        </DivContent>
      </ContentF>
    </BodyF>
  );
};

export default Footer;

export const BodyF = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: row;
  background: #024c96;
`;
export const ContentFI = styled.div`
  width: 35%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:50px;
`;

export const ImgF = styled.img`
  width: 200px;
  height :140px;
  border-radius: 10px;
`;

export const ContentF = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly;
  align-items: center;
`;

export const DivContent = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h4{
    color: #FFFFFF;
    font-size: 22px;
  }
`;
export const Links = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 15px;
  line-height: 30px;
`;
