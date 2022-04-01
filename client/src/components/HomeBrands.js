import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import garmin from "../assets/garmin logo.png";
import samsung from "../assets/samsung logo.png";
import tomtom from "../assets/tomtom logo.png";
import fitbit from "../assets/fitbit logo.png";
import casio from "../assets/casio logo.png";
import nike from "../assets/nike logo.png";

const Brands = () => {
  return (
    <Wrapper>
      <Row>
        <Link to="/products?brand=Garmin">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={garmin}
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Samsung">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={samsung}
              alt="samsung"
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Tomtom">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={tomtom}
            />
          </ImgDiv>
        </Link>
      </Row>
      <Row>
        <Link to="/products?brand=Fitbit">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={fitbit}
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Casio">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={casio}
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Coleman">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={nike}
            />
          </ImgDiv>
        </Link>
      </Row>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 100px 100px 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 250px;
  margin: 20px 0px;
`;
const Img = styled.img`
`;

export default Brands;