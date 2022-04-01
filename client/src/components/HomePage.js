import React from "react";
import HomeBrands from './HomeBrands';
import styled from "styled-components";

const HomePage = () => {
    return <div>
        HomePage
        <Heading>Popular Brands</Heading>
        <HomeBrands />
        </div>;
};

const Heading = styled.h2`
text-align: center;
color: white;
margin-top: 130px;
margin-bottom: -25px;
`


export default HomePage;