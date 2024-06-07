import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../style/colores';
import Logos from '../../assets/klipartz.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <LogoContainer>
            <Logo src={Logos} alt="" />
          </LogoContainer>
          <LinksContainer>
            <LinksGroup>
              <GroupTitle>About</GroupTitle>
              <StyledLink to="#">Flowbite</StyledLink>
              <StyledLink to="#">Tailwind CSS</StyledLink>
            </LinksGroup>
            <LinksGroup>
              <GroupTitle>Follow us</GroupTitle>
              <StyledLink to="#">Github</StyledLink>
              <StyledLink to="#">Discord</StyledLink>
            </LinksGroup>
            <LinksGroup>
              <GroupTitle>Legal</GroupTitle>
              <StyledLink to="#">Privacy Policy</StyledLink>
              <StyledLink to="#">Terms & Conditions</StyledLink>
            </LinksGroup>
          </LinksContainer>
        </FooterTop>
        <FooterBottom>
          <Copyright>&copy; 2024 LicitaFranz™</Copyright>
          <IconContainer>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </IconContainer>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FacebookIcon = (props) => (
  <Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Icon>
);

const InstagramIcon = (props) => (
  <Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Icon>
);

const TwitterIcon = (props) => (
  <Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </Icon>
);

export default Footer;
const FooterContainer = styled.footer`
  background-color: ${Colors.primary500};
  padding: 1.5rem 0;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const FooterWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  margin-left: 0.5rem;
  color: ${Colors.primary100};
  
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const GroupTitle = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.primary200};
`;

const StyledLink = styled(Link)`
  color: ${Colors.primary100};
  text-decoration: none;
  &:hover {
    color: ${Colors.primary200};

  }
`;

const FooterBottom = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid ${Colors.primary200};
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.span`
  font-size: 0.875rem;
  color: ${Colors.primary100};
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color:${Colors.primary100};
  cursor: pointer;
  &:hover {
    color: ${Colors.primary200};
  }
`;

