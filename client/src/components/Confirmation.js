import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Confirmation = () => {
        const [order, setorder] = useState({});
        useEffect(() => {
        const id = localStorage.getItem("orderId");
        fetch(`/api/get-order/${id}`)
            .then((res) => {
            return res.json();
            })
            .then((json) => {
            setorder(json.data);
            });
        }, []);
    
        return (
        <>
            {order !== {} && (
            <MainContainer>
                <MessageConfirmed>Your order has been confirmed!</MessageConfirmed>
                <OrderConfirmed>
                <InfoContainer>
                    <Label>Order #: </Label>
                    <Info>{order._id}</Info>
                </InfoContainer>
                <InfoContainer>
                    <Label>Customer Name: </Label>
                    <Info>{order.name}</Info>
                </InfoContainer>
                <InfoContainer>
                    <Label>Shipping Address: </Label>
                    <Info>{order.address}</Info>
                </InfoContainer>
                {/* <InfoContainer>
                    <Label>Number of Items:</Label>
                    <Info>{order.total_quantity}</Info>
                </InfoContainer>
                <Line />
                <InfoContainer>
                    <Label>Total Price:</Label>
                    <Info>${order.total_price}</Info>
                </InfoContainer> */}
                </OrderConfirmed>
            </MainContainer>
            )}
        </>
        );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: grey;
`;

const MessageConfirmed = styled.h2``;

const OrderConfirmed = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: auto;
    width: 500px;
    border-radius: 7px;
    padding: 20px 50px 20px;
    
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.h2`
    font-weight: 800;
`;

const Info = styled.h2`
    font-weight: 200;
    color: grey;
    text-align: right;
`;

const Line = styled.hr`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;


export default Confirmation;