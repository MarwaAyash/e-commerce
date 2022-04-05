import React from "react";

import styled from "styled-components";
import { AppContext } from "./AppContext";
import { useState, useContext } from "react";

const ViewOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState(false);
  const { formValue, setFormValue, userOrder, setUserOrder } = useContext(AppContext);
  console.log("formValue.orderNum", formValue.orderNum);
  
  return (
      <>
      <Wrapper>
          <form
          onSubmit={(ev) => {
              ev.preventDefault();
              fetch(`/api/get-order/${orderId}`)
              .then((res) => res.json())
              .then((data) => {console.log("data", data);
                  console.log("user order", userOrder);
                  if (data.status === 200) {
                  setError(false);
                  setUserOrder(data.data);
                  
                  } else {
                  setError(true);
                  }
              });
          }}
          >
          <input
              type="text"
              name="orderId"
              value={orderId}
              onChange={(ev) => {
              setOrderId(ev.target.value);
              }}
          />
          
          <Button type="submit">Submit</Button>
          </form>
      </Wrapper>
      <Wrapper>
          <Container>
          <Notice>Your Order:</Notice>
          
          {error ? (
              "The order ID that you requested is invalid."
          ) : (
              
              <>
              <CustomerInformation>
                  <strong>Order #:</strong> {userOrder._id}
              </CustomerInformation>
              <CustomerInformation>
                  <strong> Name:</strong> {userOrder.firstName} {userOrder.lastName}
              </CustomerInformation>
              
              <CustomerInformation>
                  <strong>Address:</strong> {userOrder.address} {userOrder.city} {userOrder.province} {userOrder.country}
              </CustomerInformation>
              <CustomerInformation>
                  <strong>Email:</strong> {userOrder.email}
              </CustomerInformation>
              </>
          )}
          </Container>
      </Wrapper>
      </>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Button = styled.button`
  background-color: var(--color-alabama-crimson);
  border: none;
  border-radius: 5px;
  margin-left: 10px;
`;

const Container = styled.div`
  border: 2px solid var(--color-alabama-crimson);
  border-radius: 5px;
  padding: 20px;
`;

const Notice = styled.p`
  color: var(--color-alabama-crimson);
  font-family: var(--font-heading);
  font-size: 40px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;

const CustomerInformation = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
export default ViewOrder;