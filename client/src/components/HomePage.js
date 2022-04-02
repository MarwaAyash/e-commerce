import React from "react";
import HomeBrands from './HomeBrands';
import styled from "styled-components";

const HomePage = () => {
    return <div>
        <MainCont>
        HomePage
        <Heading>Popular Brands</Heading>
        <HomeBrands />
        </MainCont>
        </div>;
};

const Heading = styled.h2`
text-align: center;
color: black;
margin-top: 130px;
margin-bottom: -25px;
`
const MainCont = styled.div`
background: white;

`

export default HomePage;