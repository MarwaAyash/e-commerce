import React from 'react'

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

export default Checkout

// import React from "react";
// import { useHistory } from "react-router";
// import { useEffect } from "react";
// import styled from "styled-components";
// import {v4 as uuidv4} from "uuid";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     createOrder,
//     updateOrderBillingAddress,
//     updateOrderCardExpirationDate,
//     updateOrderCardNumber,
//     updateOrderName,
//     updateOrderNameOnCard,
//     updateOrderShippingAddress,
// } from "../Reducers/Action";

// const Checkout = ({ cart, modalOpen, setModalOpen }) => {
//         const dispatch = useDispatch();
//         const history = useHistory();
//         const order = useSelector((state) => state.order);

//         useEffect(() => {
//             console.log(cart);
//             const orderItems = cart.items.map((item) => {
//             return {
//                 _id: item.item._id,
//                 quantity: item.quantity,
//                 price: item.price,
//                 item: item,
//             };
//             });
//             dispatch(
//                 createOrder({
//                     createdAt: Date.now(),
//                     id: uuidv4(),
//                     totalPrice: cart.totalPrice,
//                     quantity: cart.numberOfItems,
//                     items: orderItems,
//                 })
//             );
//         }, [modalOpen]);

//     const handleCreateOrder = () => {
//         console.log(order);
//         fetch("/orders", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(order),
//         });
//     };

//     return (
//         <>
//         <BackgroundModal modalOpen={modalOpen}>
//             <ModalContainer modalOpen={modalOpen}>
//             <ButtonContainer>
//                 <CloseButton onClick={() => setModalOpen(false)}>✕</CloseButton>
//             </ButtonContainer>
//             <ContentContainer>
//                 <Title>Order Checkout</Title>
//                 <OrderSummaryModal>
//                 <SmallTitle>Order Summary</SmallTitle>
//                 {cart.items.map((item) => {
//                     return (
//                     <>
//                         <Item>
//                         <ItemPicture src={item.item.imageSrc} />
//                         <ItemName>{item.item.name}</ItemName>
//                         <RightContainer>
//                             <Quantity>Quantity: {item.quantity}</Quantity>
//                             <Price>{item.item.price}</Price>
//                         </RightContainer>
//                         </Item>

//                         <Line />
//                     </>
//                     );
//                 })}
//                 <TotalContainer>
//                     <Total>Total: ${cart.totalPrice.toFixed(2)}</Total>
//                 </TotalContainer>
//                 </OrderSummaryModal>
//                 <ContainerInfo>
//                 <SmallTitle>Customer Information</SmallTitle>
//                 <LabelInput htmlFor="customer-name">Name</LabelInput>
//                 <Input
//                     id="customer-name"
//                     onChange={(e) => dispatch(updateOrderName(e.target.value))}
//                 />
//                 <LabelInput htmlFor="shipping-address">
//                     Shipping Address
//                 </LabelInput>
//                 <Input
//                     id="shipping-address"
//                     onChange={(e) =>
//                     dispatch(updateOrderShippingAddress(e.target.value))
//                     }
//                 />
//                 </ContainerInfo>

//                 <Line />
//                 <ContainerInfo>
//                 <SmallTitle>Payment Information</SmallTitle>
//                 <LabelInput htmlFor="card-name">Name on credit card</LabelInput>
//                 <Input
//                     id="card-name"
//                     onChange={(e) =>
//                     dispatch(updateOrderNameOnCard(e.target.value))
//                     }
//                 />
//                 <LabelInput htmlFor="card-number">Card Number</LabelInput>
//                 <Input
//                     id="card-number"
//                     onChange={(e) =>
//                     dispatch(updateOrderCardNumber(e.target.value))
//                     }
//                 />
//                 <LabelInput htmlFor="card-expiration-date">
//                     Expiration Date
//                 </LabelInput>
//                 <Input
//                     id="card-expiration-date"
//                     type="date"
//                     onChange={(e) =>
//                     dispatch(updateOrderCardExpirationDate(e.target.value))
//                     }
//                 />
//                 <LabelInput htmlFor="billing-address">Billing Address</LabelInput>
//                 <Input
//                     id="billing-address"
//                     onChange={(e) =>
//                     dispatch(updateOrderBillingAddress(e.target.value))
//                     }
//                 />
//                 </ContainerInfo>
//                 <ProceedPaymentButton
//                 onClick={(e) => {
//                     handleCreateOrder();
//                     history.push("/confirmed-order");
//                     localStorage.setItem("orderId", order._id);
//                 }}
//                 >
//                 Proceed to Payment
//                 </ProceedPaymentButton>
//             </ContentContainer>
//             </ModalContainer>
//         </BackgroundModal>
//         </>
//     );
// };

// const BackgroundModal = styled.div`
//     display: ${(props) => (props.modalOpen ? "flex" : "none")};
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     width: 100%;
//     height: 105vh;
//     background-color: rgba(0, 0, 0, 0.6);
//     top: 0;
//     left: 0;
//     bottom: 0;
// `;

// const ModalContainer = styled.div`
//     display: ${(props) => (props.modalOpen ? "block" : "none")};
//     width: 600px;
//     height: 550px;
//     background-color: white;
//     overflow: scroll;
// `;

// const ContentContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 0px 50px 50px 50px;
// `;

// const Title = styled.h2`
//     color: back;
// `;

// const OrderSummaryModal = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const Item = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 20px;
// `;

// const ItemPicture = styled.img`
//     border-radius: 100px;
//     height: 80px;
//     margin-right: 20px;
// `;

// const RightContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `;

// const ItemName = styled.h6``;

// const Quantity = styled.h5``;

// const Price = styled.h5``;

// const SmallTitle = styled.h4``;

// const Line = styled.hr`
//     width: 100%;
//     color: rgba(0, 0, 0, 0.5);
//     border-style: solid;
//     border: 0;
//     height: 0;
//     border-top: 1px solid rgba(0, 0, 0, 0.1);
//     border-bottom: 1px solid rgba(255, 255, 255, 0.3);
// `;

// const ContainerInfo = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const LabelInput = styled.label``;

// const Input = styled.input`
//     border-color: blue;
//     border-style: solid;
//     border-radius: 7px;
//     border-width: 1px;
//     height: 30px;
//     width: 70%;
//     margin: 10px;
// `;

// const ProceedPaymentButton = styled.button`
//     margin-top: 50px;
//     background-color: blue;
//     border-style: solid;
//     border-color: blue;
//     border-width: 1px;
//     border-radius: 7px;
//     height: 50px;
//     color: white;
//     cursor: pointer;
//     transition: 0.2s;
//     box-shadow: 0 0 10px;
//     &:hover {
//         background-color: white;
//         color: black;
//         box-shadow: none;
//     }
// `;

// const CloseButton = styled.button`
//     border-style: none;
//     background-color: white;
//     width: 50px;
//     cursor: pointer;
//     margin-top: 40px;
//     margin-right: 20px;
// `;

// const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     height: 40px;
// `;

// const TotalContainer = styled.div`
//     display: flex;
//     justify-content: flex-end;
// `;

// const Total = styled.h3`
//     font-weight: 800;
// `;
// export default Checkout;