

  import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

let initialState = { product: "", quantityOfProduct: "" };

const ProductDetails = ({ handleClickOnCartIcon }) => {
    
  const { selectedItems, setSelectedItems } = useContext(AppContext);

//   const {selectedItems, setSelectedItems} = useContext(AppContext) || {}

  const [currentItem, setCurrentItem] = useState([]);
  const [itemInCart, setItemInCart] = useState(initialState);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [message, setMessage] = useState("");

  let { _id } = useParams();

  useEffect(() => {
    fetch(`/api/get-item/${_id}`)
      .then((rest) => rest.json())
      .then((json) => {
        setCurrentItem(json.data);
      });
  }, []);


  const substractQtyHandler = () => {
    if (selectedQuantity === 1) {
      return;
    }
    setSelectedQuantity(selectedQuantity - 1);
    setMessage("");
  };

  const addQtyHandler = () => {
    if (selectedQuantity === currentItem.numInStock) {
      setMessage(`Only ${currentItem.numInStock} left in stock`);
      return;
    }
    setSelectedQuantity(selectedQuantity + 1);
  };

  const addToCart = () => {
    setSelectedItems((value) => {
      return [
        ...value,
        { product: currentItem, quantityOfProduct: selectedQuantity },
      ];
    });
    if (itemInCart.quantityOfProduct < 1) {
      setQuantityInCart(quantityInCart + selectedQuantity);
      setItemInCart({
        ...itemInCart,
        product: currentItem,
        quantityOfProduct: selectedQuantity,
      });
    }
    if (itemInCart.quantityOfProduct !== 0) {
      setQuantityInCart(quantityInCart + selectedQuantity);
      setItemInCart({
        ...itemInCart,
        product: currentItem,
        quantityOfProduct: quantityInCart + selectedQuantity,
      });
    }
  };


  return (
    <Container>
      <Wrapper>
        <ItemCont>
          <ItemImg src={currentItem.imageSrc} alt={currentItem.name} />
        </ItemCont>
        <ProductDeets>
          <ItemTitle>{currentItem.name}</ItemTitle>
          <Price>CAD {currentItem.price}</Price>
    
          <AddToCartRow>
            <QuantityContainer>
              <SubtractBtn onClick={substractQtyHandler}>-</SubtractBtn>
              <Quantity>
                {currentItem.numInStock > 0 ? selectedQuantity : 0}
              </Quantity>
              <AddBtn onClick={addQtyHandler}>+</AddBtn>
            </QuantityContainer>
            <Button
              className="accentBtn"
              onClick={currentItem.numInStock > 0 ? addToCart : ""}
              currentItem={currentItem.numInStock}
            >
              {currentItem.numInStock > 0
                ? `Add To Cart - ${currentItem.price}`
                : "Out of Stock"}
            </Button>
          </AddToCartRow>
          {message && <p>{message}</p>}

        </ProductDeets>
      </Wrapper>
    </Container>
  );
};

const Button = styled.button`
  cursor: ${({ currentItem }) =>
    currentItem > 0 ? "pointer" : "not-allowed !important"};
  background-color: ${({ currentItem }) =>
    currentItem > 0 ? "" : "gray !important"};
`;

const Container = styled.div`
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 50px;
  flex-wrap: wrap;
  border-radius: 50px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const ItemCont = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: white;
`;

const ItemImg = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 300px;
`;

const ProductDeets = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ItemTitle = styled.h1`
  font-size: 22px;
  color: black;
`;

const Price = styled.p`
  font-size: 22px;
  color: price;
  margin-top: -10px;
`;

const AddToCartRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const SubtractBtn = styled.button`
  width: 60px;
  height: 33px;
  font-weight: 500;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

const Quantity = styled.p`
  border: 1px solid #000000;
  padding: 3px 20px;
  font-size: 12px;
`;

const AddBtn = styled.button`
  width: 60px;
  height: 33px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

export default ProductDetails;