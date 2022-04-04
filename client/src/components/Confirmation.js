// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import styled from "styled-components";

// const Confirmation = () => {
//     return <div>Confirmation</div>;
// };

// export default Confirmation;


import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './AppContext';
import { useHistory } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

const Confirmation = () => {
    const { purchased, formValue, setFormValue } = useContext(AppContext)

    const history = useHistory();

    let count = 0;
    purchased.map((item) => {
        let price = item.product.price;
        let removeDollarSign = price.substr(1)
        return (count =
            count + Number(item.quantityOfProduct) * Number(removeDollarSign)).toFixed(2)
    });

    return (
        <Wrapper>
            {" "}
            {formValue.firstName === "" && history.push("/confirmation")}
            <BodyBody>
      
                <OrderHeader>Order Confirmed</OrderHeader>
                <SexyIcon><FaCheck/></SexyIcon>
                <FurtherDetails>
                    {" "}
                    <p>Thank you for your purchase!</p>
                    <p>We will be sending a confirmation email to {" "}
                    <ItemsInfo>{formValue.email}</ItemsInfo>verrrry soon.</p>
                    </FurtherDetails>
                    <Divider/>
                    <p>
                        <MoarDeets>Order Number: </MoarDeets>
                        <span>{formValue.orderNum}</span></p>
                        <p>
                            {" "}
                            <MoarDeets>Date: </MoarDeets> <span>{formValue.date}</span></p>
                            <p>
                                <strong>Name</strong>: {formValue.firstName} {formValue.lastName}
                            </p>
                            <MoarDeets>Shipping Address: </MoarDeets>
                            <ShippingAddress>
                                {formValue.address}, {formValue.city}, {formValue.province}, {" "}
                                {formValue.country}
                            </ShippingAddress>
                            <p>
                                <MoarDeets>
                                    Credit Card Ending With {" "}
                                    <span>
                                        {formValue.creditCardNum.slice(
                                            formValue.creditCardNum.length - 4
                                        )}
                                    </span>
                                </MoarDeets>
                            </p>

                            <Products>
                                <ul>
                                    {purchased.map((item) => {
                                        <Item>
                                            <p>
                                                <ItemsInfo>{item.quantityOfProduct}</ItemsInfo> {item.product.name}
                                            </p>
                                            <p>{item.product.price}</p>
                                        </Item>
                                    })}
                                </ul>
                            </Products>
                            <Divider />
                            <SubTotal>
                                <p>Subtotal</p>
                                <p>CAD ${Number(count).toFixed(2)}</p>
                            </SubTotal>
                            <SubTotal>
                                <p>Shipping</p>
                                <p>Expensive</p>
                            </SubTotal>
                            <SubTotal>
                                <p>Tax</p>
                                <p>CAD ${Number(count * 0.13).toFixed(2)}</p>
                            </SubTotal>
                            <Divider/>
                            <Total>
                        <p>Total</p>
                    <p>CAD ${Number(Number(count) + Number(count) * 0.13).toFixed(2)}</p>
                </Total>
            </BodyBody>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  background-color: white;
  margin: -20px 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  min-height: 300px;
  font-size: 14px;
`;

const SexyIcon = styled.div`
display: flex;
justify-content: center;
font-size: 50px;
`
const OrderHeader = styled.h2`
  font-size: 34px;
  text-align: center;
  margin-top: -10px;
`;

const FurtherDetails = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
`;

const Products = styled.div`
  font-size: 14px;
`;

const ShippingAddress = styled.p`
  font-weight: 700;
`;

const ItemsInfo = styled.span`
  font-weight: 700;
  color: black;
  font-size: 14px;
`;

const MoarDeets = styled.span`
  font-weight: 700;
`;

const BodyBody = styled.div`
  flex: 1;
  margin-left: 10px;
  padding: 80px;
`;

const Divider = styled.hr`
  border: 0.5px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -12px;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -30px;
  padding: 0;
  font-size: 15px;
`;





export default Confirmation;