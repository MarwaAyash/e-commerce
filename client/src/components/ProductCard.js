import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Styled, { keyframes } from "styled-components";
// import { theme } from "./GlobalStyles";
import { AppContext } from "./AppContext";

let initialState = { product: "", quantityOfProduct: "" };

const ProductCard = ({ product, handleClickOnCartIcon }) => {
  const {
    name,
    price,
    body_location,
    category,
    _id,
    imageSrc,
    numInStock,
    companyId,
  } = product;

  const { selectedItems, setSelectedItems } = useContext(AppContext);
  const [itemInCart, setItemInCart] = useState(initialState);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const addToCart = () => {
    setSelectedItems((value) => {
      return [...value, { product: product, quantityOfProduct: 1 }];
    });
    if (itemInCart.quantityOfProduct < 1) {
      setQuantityInCart((selectedQuantity) => quantityInCart + 1);
      setItemInCart({
        ...itemInCart,
        product: product,
        quantityOfProduct: 1,
      });
    }
    if (itemInCart.quantityOfProduct !== 0) {
      setQuantityInCart((selectedQuantity) => quantityInCart + 1);
      setItemInCart({
        ...itemInCart,
        product: product,
        quantityOfProduct: quantityInCart + 1,
      });
    }
  };

  if (itemInCart !== initialState) {
    localStorage.setItem(product._id, JSON.stringify(itemInCart));
  }

  return (
    <Div className="card-body">
      <Link to={"/products/" + _id}>
        <div className="image-wrapper">
          <img className="product-image" src={imageSrc} alt="product image" />
        </div>
      </Link>
      <Link to={"/products/" + _id}>
        <p className="title">{name}</p>
      </Link>
      <div className="tags">
      </div>
      <button
        className="add-to-card-btn"
        onClick={addToCart}
        disabled={!numInStock}
      >
        {numInStock ? `${price} - Add to Cart` : "Out of Stock"}
      </button>
    </Div>
  );
};

export default ProductCard;

const scaleIn = keyframes`
  from {
    transform: scale(0.8)
  }
  to {
    transform: scale(1);
  }
`;

const Div = Styled.div`
max-width: 400px;
background: #454e51;
width: 100%;
border-radius: 20px;
overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
&:hover {
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
}
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: 350px;
  }
.product-image {
  background: yellow;
  object-fit: cover;
}
.card-body {
  padding: 24;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 15px;
  color: white;
  margin: 16px;
  line-height: 24px;
  font-size: 24px;
}
p {
  margin: 16px;
  margin: 0;
  color: white;
}
.tag {
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 16px;
  margin-top: auto;
  border-radius: 5px;
  border: 2px solid lightgray;
  color: lightgray;
  font-size: 1.1em;
  display: inline;
  flex: 0;
}
.add-to-card-btn {
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  margin: 16px;
  margin-top: auto;
  display: block;
  border: none;
  /* color: black; */
  /* background-color: #FFCE00; */
  &:active {
    animation: scaleIn 0.3s ease-in-out forwards;
  }
  &:hover {
    /* background-color: #FFF200; */
    cursor: pointer;
  }
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
}
`;
