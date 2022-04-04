import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./GlobalStyles";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import LogoWow from "../assets/best buy4.svg";

const Footer = () => {
  const handleClickScroll = () => {
    window.scrollTo(0,0)
  };

  return (

  <Wrapper style={{
    background: "#0046BE",
    paddingBottom: "16px",
}}>
      <div>
        <CompanyInfoContainer>
        <HomeNavLink exact to="/">
            <Logo src={LogoWow}/>
        </HomeNavLink>
          <li>support@yesbuy.ca</li>
          
          <Icons>
            <IconLink href="/" target="_blank">
                <FaFacebook />
              </IconLink>
              <IconLink href="/">
                <FaInstagram />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaTwitter />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaYoutube />
              </IconLink>
          </Icons>
        </CompanyInfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>CUSTOMER SERVICE</Title>
          <li>FAQ</li>
          <li>Returns</li>
          <li>Contact us</li>
          <li>Reviews</li>
        </InfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>#YesBuy</Title>
          <li>Our Blog</li>
          <li>Contact</li>
          <li>Our Story</li>
          
        </InfoContainer>
      </div>
    </Wrapper> 
  );
};

const Container = styled.div`
  background-color: #0046BE;
  color: #fff;
  
`;

const HomeNavLink = styled(NavLink)`
cursor: pointer;
text-decoration: none;
`

const FooterWrap = styled.div`
  padding: 8px 24px;
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
  flex-direction: row;
  justify-content: space-around;
  background-color: #4E545C;
`;

const CompanyInfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: white;
  }
  li:hover {
    cursor: default;
  }
`;

const InfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: white;
  }
  li:hover {
    cursor: pointer;}
`;

const LinkTitles = styled.h1`
  font-size: 14px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  transition: 0.3s ease-out;
  &:hover {
    color: ${theme.accentColor};
  }
`;

const Title = styled.div`
  list-style: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  :hover {
    cursor: default;
  }
`;
const Logo = styled.img`
height: 130px;
`


const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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