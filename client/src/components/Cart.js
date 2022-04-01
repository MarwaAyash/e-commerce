import React from 'react';
import styled from 'styled-components';
import Checkout from './Checkout';
import ViewOrder from './ViewOrder';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Cart = () => {
  const [modalOpen, setModalOpen] = useState();
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  return (
    <>
      <Div>
        <Wrapper>
          <Main>
            <HeaderWrapper>
              
              <Title>Your Cart</Title>
              <HeaderSecDiv>
                <Item>Item</Item>
                <Price>Price</Price>
              </HeaderSecDiv>
            </HeaderWrapper>
            <ItemWrapper>
              {cart.items.map((item) => {
                return <CartItem itemObj={item} key={item.item._id} />;
              })}
              <TotalContainer>
                <Total>Total: ${cart.totalPrice.toFixed(2)}</Total>
              </TotalContainer>
            </ItemWrapper>
            <Checkout
              cart={cart}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </Main>
          <Secondary>
            
            <ViewOrder modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </Secondary>
        </Wrapper>
      </Div>
    </>
  );
};

const Div = styled.div`
  background-color: #eaedec;
  min-height: calc(100vh - 75px - 50px);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: #eaedec;
  max-width: 1300px;
  margin: 0px auto;
`;

const Main = styled.div`
  width: 100vw;
  background-color: #ffffff;
  padding: 10px 15px;
`;

const Secondary = styled.div`
  width: 400px;
  height: 100px;
  margin-left: 25px;
  background-color: #ffffff;
  padding: 10px 15px;
`;

const HeaderWrapper = styled.div``;

const Title = styled.h1``;

const HeaderSecDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  color: grey;
  font-size: 10pt;
  padding: 10px 0px 5px 0px;
  border-bottom: 2px solid #eaedec;
`;

const Item = styled.div``;

const Price = styled.div``;

const ItemWrapper = styled.div``;

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Total = styled.h3`
  font-weight: 800;
`;

export default Cart;