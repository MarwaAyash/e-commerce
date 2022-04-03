
import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { theme } from './GlobalStyles';
import { FaTimes } from "react-icons/fa";

const Cart = ({ isCartVisible, handleClickOnCartIcon }) => {
  const { selectedItems, setSelectedItems } = useContext(AppContext);

  let valuesInStorage = Object.entries(localStorage)
  .filter((entry) => entry[0] === "product")
  .map((entry) => entry[1]);

  useEffect(() => {
    if (valuesInStorage.length > 0) {
      valuesInStorage.forEach((item) => {
        let parsedValues = JSON.parse(item)
        selectedItems.push(parsedValues);
        setSelectedItems(selectedItems);
      });
    }
  }, []);

/////////////////////////////
  const handleSubtract = (item) => {
    if (item.quantityOfProduct >= 2) {
      const updatedItem = {
        ...item,
        quantityOfProduct: item.quantityOfProduct - 1,
      };
      localStorage.setItem(item.product._id, JSON.stringify(updatedItem));

      let itemsTally = [];
      selectedItems.forEach((e) => {
        if (e.product._id === item.product._id) {
          itemsTally.push(updatedItem);
        } else {
          itemsTally.push(e)
        }
      });
      setSelectedItems(itemsTally);
    }
  };
///////////////////
const handleAdd = (item) => {
  if (item.quantityOfProduct < item.product.numInStock) {
    const updatedItem = {
      ...item,
      quantityOfProduct: item.quantityOfProduct + 1,
    };
    localStorage.setItem(item.product._id, JSON.stringify(updatedItem));
    let itemsTally = [];
    selectedItems.forEach((e) => {
      if (e.product._id === item.product._id) {
        itemsTally.push(updatedItem);
      } else {
        itemsTally.push(e);
      }
    });
    setSelectedItems(itemsTally);
    }
  };

  let count = 0;
  selectedItems.map((item) => {
    let price = item.product.price;
    let removeDollarSign = price.substr(1);
    return (count =
      count +
      Number(item.quantityOfProduct) * Number(removeDollarSign).toFixed(2));
  });

  return (
    <CartBody isCartVisible={isCartVisible}>
      <CartTitle>Your Cart</CartTitle>
      <Icon onClick={handleClickOnCartIcon}>
        <CloseModal />
      </Icon>
      <Hr />
      <ItemContainer>
        {selectedItems.map((item) => {
          return (
            <ItemWrap key={item.product._id}>
              <ImageMain>
                <ProductImage src={item.product.imageSrc} />
              </ImageMain>
              <AnotherWrapper>
                <Name>{item.product.name}</Name>
                <Price>{item.product.price}</Price>
                <QuantityContainer>
                  <SubtractButton onClick={() => handleSubtract(item)}>-</SubtractButton>
                  <Quantity>{item.quantityOfProduct}</Quantity>
                  <AddButton onClick={() => handleAdd(item)}>+</AddButton>
                </QuantityContainer>
              </AnotherWrapper>
            </ItemWrap>
          );
        })}
      </ItemContainer>
      <CheckoutHere
      to={selectedItems[0] && "/checkout"}
      onClick={handleClickOnCartIcon}>
        <CheckoutButton>
        {selectedItems[0]
        ? `Continue to Checkout - $${Number(count).toFixed(2)}`
        : "Your Cart is Empty"}
        </CheckoutButton>
      </CheckoutHere>
    </CartBody>
  );
};

const ItemContainer = styled.div`
padding-bottom: 30px;
position: absolute;
top: 80px;
left: 24px;
width: 476px;
height: 85%;
overflow-y: scroll;
`
const ItemWrap = styled.div`
display: flex;
margin: 20px 0;
width: 100%;
position: relative;
`

const AnotherWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 30px;
width: 200px;
`

const ImageMain = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: white;
width: 180px;
`

const ProductImage = styled.img`
float: left;
object-fit: cover;
`

const Name = styled.p`
font-size: 18px;
font-weight: 700;
`

const QuantityContainer = styled.div`
display: flex;
align-items: center;
margin-top: -20px;
`

const SubtractButton = styled.button`
width: 60px;
height: 36px;
font-size: 30px;
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: #ffffff;
padding: 0;

&:hover {
  background-color: #ced0d0;
  cursor: pointer;
  transition: 0.3s ease-out;

}
`
const Quantity = styled.p`
border: 1px solid #000000;
padding: 3px 20px;
font-size: 19px;
`

const AddButton = styled.button`
width: 60px;
height: 36px;
font-size: 30px;
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: #ffffff;
padding: 0;

&:hover {
  background-color: #ced0d0;
  cursor: pointer;
  transition: 0.3s ease-out;

}
`

const Price = styled.p`
margin-top: -5px;
font-weight: 500;
font-size: 15px;
`

const CheckoutButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  font-size: 20px;
  font-weight: 600;
  background-color: #FFCE00;
  color: black;
  border: none;
  transition: 0.3s ease-out;
  &:hover {
    background-color: #FFF200;
    cursor: pointer;
  }
`;

const CartBody = styled.aside`
  position: fixed;
  z-index: 999;
  width: 500px;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: flex-start;
  top: 0;
  right: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isCartVisible }) => (isCartVisible ? "100%" : "0")};
  right: ${({ isCartVisible }) => (isCartVisible ? "0" : "-100%")};
  box-shadow: ${({ isCartVisible }) =>
    isCartVisible ? "0 0 0 2000px rgb(0,0,0, 0.6)" : "0"};
`;

const CartTitle = styled.h1`
  font-size: 22px;
  position: absolute;
  top: 12px;
  left: 24px;
  font-weight: bold;
`;

const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
`;

const CloseModal = styled(FaTimes)`
  color: black;
  &:hover {
    color: #808080;
    transition: 0.3s ease-out;
  }
`;

const Hr = styled.hr`
  border-top: 1px solid #ced0d0;
  width: 300px;
  position: absolute;
  top: 80px;
  left: 5%;
  margin: 0 auto;
  width: 90%;
`;

const CheckoutHere = styled(Link)``;

export default Cart;

