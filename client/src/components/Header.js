import React, {useContext} from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaStar } from "react-icons/fa";
import { theme } from "./GlobalStyles";


const Header = () => {
// const { selectedItems } = useContext(AllContext);
// const { selectedItems } = useContext('');

const location = useLocation();
return (
    <div
    style={{
        background: location.pathname !== "/" && "#F061A8",
        paddingBottom: "16px",
    }}
>
    <LogoRow>
        <HomeNavLink exact to="/">
            <Title>
                <span>COOLSTUFF</span>
            </Title>
        </HomeNavLink>
        {location.pathname === "/" ||
        location.pathname === "/confirmation" ||
        location.pathname === "/view-order" ||
        location.pathname === "/brands" ||
        location.pathname.includes("/products") ? (
            <MobileIcon>
                            {/* <MobileIcon onClick={handleClickOnHamburger}> */}

                <FaBars />
            </MobileIcon>
        ) : (
            <></>
        )}
        </LogoRow>
        {location.pathname === "/" ||
        location.pathname === "/confirmation" ||
        location.pathname === "/view-order" ||
        location.pathname === "/brands" ||
        location.pathname.includes("/products") ? (
            <NavMenu>
                {/* //dropdowns below?// */}
                <StyledNavLink exact to="/">
                    Categories
                </StyledNavLink>

                <StyledNavLink exact to="/">
                    Brands
                    </StyledNavLink>

                <StyledNavLink exact to="/">
                    Body
                    </StyledNavLink>

                <StyledNavLink exact to="/products">
                    <li>Shop Everything!</li>
                </StyledNavLink>

                <StyledNavLink exact to="/view-order">
                    <li>Your Order</li>
                </StyledNavLink>

                <StyledNavLink exact to="/signin">
                    <li>Sign In</li>
                </StyledNavLink>
                <li>
                    {/* <StyledCartIcon onClick={handleClickOnCartIcon} /> */}
                    <StyledCartIcon />

                    {/* <ItemInCart selectedItems={selectedItems} /> */}
                </li>
            </NavMenu>
        ) : (
            <></>
            )}
            </div>
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
`    
const LogoRow = styled.div`
display: flex;
justify-content: center;
`

const Title = styled.h1`
color: #ffffff;
font-weight: bold;
font-size: 2.5em;
/* letter-spacing: -3px; */
`
const NavMenu = styled.ul`
display: flex;
justify-content: space-around;
color: #ffffff;
text-transform: uppercase;

@media screen and (max-width: 820px) {
    display: none !important;
} 
`
const HomeNavLink = styled(NavLink)`
cursor: pointer;
text-decoration: none;
`

const StyledNavLink = styled(NavLink)`
cursor: pointer;
color: #ffffff;

&:hover {
    color: ${theme.accentColor};
}
&:visited {
    color: none;
}
`

// const ItemInCart = styled(FaStar)`
// visibility: ${({ selectedItems }) => selectedItems[0] ? "visible" : "hidden"};
// transform: translate(-4px, -20px);
// fill: ${theme.accentColor};
// `

const StyledCartIcon = styled(FaShoppingCart)`
fill: white;
cursor: pointer;
font-size: 18px;

&:hover {
    fill: ${theme.accentColor};
    transition: 0.8s ease-out;
}
`;


export default Header;