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
              <LinkTitles>About Us</LinkTitles>
              <FooterLink to="/">Lotta Info</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <LinkTitles>Customer Care</LinkTitles>
              <FooterLink to="/">Contact Us</FooterLink>
            </FooterLinkItems>
          </Wrapper>
          <Wrapper>
            <FooterLinkItems>
              <LinkTitles>My Account</LinkTitles>
              <FooterLink to="/">Profile</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <LinkTitles>Social Media</LinkTitles>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
            </FooterLinkItems>
          </Wrapper>
        </LinksMain>
        <Media>
          <MediaWrapper>
            <Logo onClick={handleClickScroll} to="/">
              <span>COOLSTUFF</span>
            </Logo>
            {/* <CopyRight>
              Copyright © {new Date().getFullYear()}. All Rights Reserved{" "}
            </CopyRight> */}
            <Icons>
              <IconLink href="/" target="_blank">
                <FaFacebook />
              </IconLink>
              <IconLink href="/" target="_blank">
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
  background-color: #4E545C;
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
  margin-bottom: 16px;
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
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family: ${theme.headingFont};
`;

// const CopyRight = styled.small`
//   color: #fff;
//   margin-bottom: 16px;
//   font-family: ${theme.contentFont};
//   line-height: 2;
// `;

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