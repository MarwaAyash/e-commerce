import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaStar } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import { AppContext } from "./AppContext";
import LogoWow from "../assets/best buy4.svg";

const Header = ({ handleClickOnCartIcon }) => {
  const { currentUser, selectedItems } = useContext(AppContext);
  // const { selectedItems } = useContext('');

  const location = useLocation();
  return (
    <Wrapper
      style={{
        background: "#0046BE",
        paddingBottom: "4px",
      }}
    >
      <LogoRow>
        <HomeNavLink exact to="/">
          {/* <Title>
                <span>COOLSTUFF</span>
            </Title> */}
          <Logo src={LogoWow} />
        </HomeNavLink>
        {location.pathname === "/" ||
        location.pathname === "/confirmation" ||
        location.pathname === "/view-order" ||
        location.pathname === "/account" ||
        // location.pathname === "/brands" ||
        location.pathname === "/checkout" ||
        location.pathname === "/aboutus" ||
        location.pathname.includes("/products") ? (
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        ) : (
          <></>
        )}
      </LogoRow>
      {location.pathname === "/" ||
      location.pathname === "/confirmation" ||
      location.pathname === "/view-order" ||
      // location.pathname === "/brands" ||
      location.pathname === "/account" ||
      location.pathname === "/checkout" ||
      location.pathname === "/aboutus" ||
      location.pathname.includes("/products") ? (
        <NavMenu>
          <StyledNavLink exact to="/aboutus">
            About Us
          </StyledNavLink>

          <StyledNavLink exact to="/">
            Body
          </StyledNavLink>

          <StyledNavLink exact to="/products">
            <li>Shop All</li>
          </StyledNavLink>

          <StyledNavLink exact to="/view-order">
            <li>Your Order</li>
          </StyledNavLink>
          {currentUser === null ? (
            <StyledNavLink exact to="/signin">
              <li>Sign in</li>
            </StyledNavLink>
          ) : (
            <StyledNavLink exact to="/account">
              <li>My account</li>
            </StyledNavLink>
          )}

          <li>
            <StyledCartIcon onClick={handleClickOnCartIcon} />

            <ItemInCartAnimation>
              <ItemInCart selectedItems={selectedItems} />
            </ItemInCartAnimation>
          </li>
        </NavMenu>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5em;
    cursor: pointer;
    color: #ffffff;
  }
`;
const Logo = styled.img`
  height: 130px;
`;

const Wrapper = styled.div`
  background-color: #4e545c;
  color: #fff;
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 2.5em;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  text-transform: uppercase;
  @media screen and (max-width: 820px) {
    display: none !important;
  }
`;
const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: ${theme.accentColor};
  }
  &:visited {
    color: none;
  }
`;

const StyledCartIcon = styled(FaShoppingCart)`
  fill: white;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    fill: ${theme.accentColor};
    transition: 0.8s ease-out;
  }
`;

const SpinningStar = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(359deg);}
`;
const ItemInCart = styled(FaStar)`
  font-size: 20px;
  visibility: ${({ selectedItems }) =>
    selectedItems[0] ? "visible" : "hidden"};
  fill: ${theme.accentColor};
  animation-name: ${SpinningStar};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const ItemInCartAnimation = styled.div`
  display: flex;
  transform: translate(0px, -51px);
`;

/* animation: rotation 2s infinite linear;
@keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  } */

// const ItemInCartAnimation = styled.div`
/* animation: rotation 2s infinite linear;
@keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  } */
// `
export default Header;
