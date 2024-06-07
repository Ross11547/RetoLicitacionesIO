import React from 'react';
import styled from 'styled-components';
import { Colors } from '../style/colores';
import Logos from '../assets/klipartz.png'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo src={Logos} />
      <FooterContent>
        <FooterSection>
          <FooterHeading>ALCANDÍA</FooterHeading>
          <FooterLink href="/nosotros">ACERCA DE NOSTROS</FooterLink>
          <FooterLink href="">LICITACIONES</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterHeading>CONTACTO</FooterHeading>
          <FooterLink href="https://api.whatsapp.com/send?phone=+59170727383" target="_blank" rel="noopener noreferrer">WHATSAPP 1</FooterLink>
          <FooterLink href="https://api.whatsapp.com/send?phone=+59170723161" target="_blank" rel="noopener noreferrer">WHATSAPP 2</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterHeading>REDES SOCIALES</FooterHeading>
          <FooterLink href="https://www.facebook.com/belc.consortium?mibextid=ZbWKwL">FACEBOOK 1</FooterLink>
          <FooterLink href="#">FACEBOOK 2</FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: ${Colors.primary100};
  color: ${Colors.primary500};
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterLogo = styled.img`
  width: 200px;
  height: 90px;
  margin-left: 100px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 90px; 
  margin-right: 200px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FooterHeading = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;

const FooterLink = styled.a`
  color: ${Colors.primary200};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${Colors.primary500};
  }
`;
