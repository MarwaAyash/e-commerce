import React from "react";
import styled from "styled-components";

import background from "../assets/background.png"


const AboutUs = () => {
    return(
        <Wrapper>

            <Image src={background} />
            <TextWrapper>
                <MainDiv>About Us</MainDiv>
                <LilText>Here is an incredibly heartfelt and inspiring</LilText>
                <LilText>  story about our genius founder.</LilText>
            </TextWrapper>
        </Wrapper>
    )
};


const Wrapper = styled.div``

const MainDiv = styled.h1`
display: flex;
justify-content: center;

color: white;
`
const TextWrapper = styled.div`
position: absolute;
top: 50%;
left: 20%;
transform: translate(-50%, -50%);
`;

`


const LilText = styled.div`
display: flex;
justify-content: center;
font-size: 25px;

color: white;
`

const Image = styled.img`
height: 100vh;
width: 100vw;
`;
=======
`




export default AboutUs;