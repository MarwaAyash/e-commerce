import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./GlobalStyles";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleClickScroll = () => {
    window.scrollTo(0,0)
  };

  return (
    <Container>
      <FooterWrap>
        <LinksMain>
          <Wrapper>
            <FooterLinkItems>
              <LinkTitles>Get To Know Us</LinkTitles>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investor Relations</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
            </FooterLinkItems>
          </Wrapper>
          <Wrapper>
            <FooterLinkItems>
              <LinkTitles>Let Us Help You</LinkTitles>
              <FooterLink to="/">My Profile</FooterLink>
              <FooterLink to="/">My Account</FooterLink>
              <FooterLink to="/">Customer Service</FooterLink>
              <FooterLink to="/">Shipping Rates and Policies</FooterLink>
            </FooterLinkItems>
          </Wrapper>
        </LinksMain>
        <Media>
          <MediaWrapper>
            <Logo onClick={handleClickScroll} to="/">
              <span>COOLSTUFF</span>
            </Logo>
            <Icons>
              <IconLink href="/">
                <FaFacebook />
              </IconLink>
              <IconLink href="/">
                <FaInstagram />
              </IconLink>
            </Icons>
          </MediaWrapper>
        </Media>
      </FooterWrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: #232F3E;
  color: #fff;
  
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const LinksMain = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  font-family: ${theme.headingFont};
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const LinkTitles = styled.h1`
  font-size: 14px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #fff;
  transition: 0.3s ease-out;
  &:hover {
    color: ${theme.accentColor};
  }
`;

const Media = styled.section`
  max-width: 1100px;
  width: 100%;
`;

const MediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 28px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: ${theme.headingFont};
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: 0.8s ease-out;
  &:hover {
    color: ${theme.accentColor};
  }
`;

export default Footer;