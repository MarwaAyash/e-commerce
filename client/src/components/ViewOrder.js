// import React from 'react'

// const ViewOrder = () => {
//   return (
//     <div>ViewOrder</div>
//   )
// }

// export default ViewOrder
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ViewOrder = ({ modalOpen, setModalOpen }) => {
    const cart = useSelector((state) => state.cart);
    return (
        <>
        <Wrapper>
            <SubTotalDiv>
            <Sub>Subtotal ({cart.numberOfItems} item):</Sub>
            <Strong>${cart.totalPrice.toFixed(2)}</Strong>
            </SubTotalDiv>
            <Button
            onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
            >
            Proceed to Checkout
            </Button>
        </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SubTotalDiv = styled.div`
    padding-bottom: 29px;
    display: flex;
    justify-content: space-between;
`;

const Sub = styled.div``;

const Strong = styled.div`
    font-weight: bold;
`;

const Button = styled.button`
    padding: 10px 0px;
    font-family: "Poppins", sans-serif;
    color: white;
    background-color: blue;
    border-radius: 5px;
    border: none;
    box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
    cursor: pointer;
`;

export default ViewOrder;
