import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return(
        <Wrapper>
        <MainDiv>About Us</MainDiv>
        <LilText>Here is an incredibly heartfelt and inspiring story about our genius founder.</LilText>
        </Wrapper>
    )
};


const Wrapper = styled.div``

const MainDiv = styled.h1`
display: flex;
justify-content: center;
`

const LilText = styled.div`
display: flex;
justify-content: center;
font-size: 25px;
`



export default AboutUs;