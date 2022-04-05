import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { FaLock } from "react-icons/fa";

const Checkout = () => {
  const [errMessage, setErrMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [disabled, setDisabled] = useState(true);
  const {
    selectedItems,
    setSelectedItems,
    formValue,
    setFormValue,
    purchased,
    setPurchased,
  } = useContext(AppContext);
  const history = useHistory();

  let itemsPurchased = [];
  selectedItems.forEach((item) => {
    itemsPurchased.push({
      itemId: item.product._id,
      numBought: item.quantityOfProduct,
    });
  });

  useEffect(() => {
    Object.values(formValue).includes("")
      ? setDisabled(true)
      : setDisabled(false);
  }, [formValue, setDisabled]);

  const handleFormChange = (value, name) => {
    setFormValue({ ...formValue, [name]: value, itemsPurchased });
    setErrMessage("");
  };

  const addOrderHandler = (ev) => {
    ev.preventDefault();
    setStatus("pending");

    console.log("FORMVALUE", formValue);

    fetch("/api/add-order", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const { status, error } = data;
        const { _id } = data.data;
        console.log("_id", _id);
        console.log("status", status);

        if (status === 200) {
          setStatus("confirmed");
          setPurchased(selectedItems);
          // updateInventory();
          setSelectedItems([]);
          setFormValue({ ...formValue, orderNum: _id });
          localStorage.clear();
          localStorage.setItem(formValue.orderNum, JSON.stringify(formValue));
          history.push("/confirmation");
        } else if (error) {
          setStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /////////////////////////////////////////////
  let count = 0;
  selectedItems.map((item) => {
    let price = item.product.price;
    let removeDollarSign = price.substr(1);
    return (count =
      count +
      Number(item.quantityOfProduct) * Number(removeDollarSign)).toFixed(2);
  });

  return (
    <AllWrapper>
      <PaymentContainer>
        <ContactWrapper>
          <TitleYes>Checkout</TitleYes>
          <H3>Contact Information</H3>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="email"
                placeholder="Email"
                required
                onChange={(ev) => handleFormChange(ev.target.value, "email")}
              />
            </OuterSpan>
          </InputDiv>
          <H3>Shipping Address</H3>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <NameAndCreditInput
                  className="inputText"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "firstName")
                  }
                />
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <ExpAndLastName
                  className="inputText"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "lastName")
                  }
                />
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="address"
                placeholder="Address"
                required
                onChange={(ev) => handleFormChange(ev.target.value, "address")}
              />
            </OuterSpan>
          </InputDiv>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <CityProvince
                  className="inputText"
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  onChange={(ev) => handleFormChange(ev.target.value, "city")}
                />
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <CityProvince
                  className="inputText"
                  type="text"
                  name="province"
                  placeholder="Province"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "province")
                  }
                />
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Country
                  className="inputText"
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "country")
                  }
                />
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={(ev) =>
                  handleFormChange(ev.target.value, "phoneNumber")
                }
              />
            </OuterSpan>
          </InputDiv>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <NameAndCreditInput
                  className="inputText"
                  type="text"
                  name="creditCardNumber"
                  placeholder="Credit Card Number"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "creditCardNum")
                  }
                />
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <ExpAndLastName
                  className="inputText"
                  type="text"
                  name="expiryDate"
                  placeholder="Expiration Date"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "expirationDate")
                  }
                />
              </OuterSpan>
            </InputDiv>
          </InputRow>
          {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}

          <BtnWrapper onClick={addOrderHandler}>
            <Btn className="accentBtn">Continue to Payment</Btn>
          </BtnWrapper>

          <SecurityWrap>
            <SecurityIcon>
              <FaLock />
            </SecurityIcon>
            <SecurityH2>Security and Privacy</SecurityH2>
            <SecurityText>
              Every transaction on YesBuy.ca is secure. Any personal information
              you give to us will be guarded by our team of vicious pugs.
            </SecurityText>
          </SecurityWrap>
        </ContactWrapper>
      </PaymentContainer>
      <ViewCartContainer>
        <CartContainer>
          <ItemsContainer>
            {selectedItems.map((item) => {
              return (
                <ItemContainer>
                  <ImageWrapper>
                    <ItemImage src={item.product.imageSrc} />
                  </ImageWrapper>
                  <Quantity>{item.quantityOfProduct}</Quantity>
                  <ItemName>{item.product.name}</ItemName>
                  <ItemPrice>{item.product.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </ItemsContainer>
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
          <Divider />
          <Total>
            <p>Total</p>
            <p>
              CAD ${Number(Number(count) + Number(count) * 0.13).toFixed(2)}
            </p>
          </Total>
        </CartContainer>
      </ViewCartContainer>
    </AllWrapper>
  );
};

const TitleYes = styled.div`
  display: flex;
  font-size: 35px;
`;
const ItemPrice = styled.p``;

const ItemName = styled.p`
  width: 300px;
  font-size: 15px;
  font-weight: 600;
`;

const SecurityWrap = styled.div``;

const SecurityH2 = styled.h2`
  display: flex;
  font-size: 18px;
  line-height: 0;
`;

const SecurityText = styled.p`
  font-size: 14px;
`;

const SecurityIcon = styled.div`
  color: black;
  font-size: 25px;
`;

const Quantity = styled.p`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 13px;
  transform: translate(-15px, -50px);
  background-color: #454e51;
  color: #fff;
  border-radius: 50%;
`;

const ItemImage = styled.img`
  width: 80px;
`;

const ImageWrapper = styled.div``;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const ItemsContainer = styled.div`
  height: 420px;
  overflow: scroll;
`;

const CartContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Btn = styled.button``;

const BtnWrapper = styled.div`
  margin: 50px 0;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CityProvince = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-right: 10px;
  font-size: 15px;
  &:focus {
    outline-color: black;
  }
`;

const Country = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;
  &:focus {
    outline-color: black;
  }
`;

const NameAndCreditInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  margin-right: 10px;
  &:focus {
    outline-color: black;
  }
`;

const ExpAndLastName = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  &:focus {
    outline-color: black;
  }
`;

const Input = styled.input`
  font-size: 14px;
  width: 500px;
  height: 40px;
  &:focus {
    outline-color: black;
  }
`;

const OuterSpan = styled.div``;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  margin-top: 20px;
  font-weight: 500;
`;

const ContactWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaymentContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 30px;
  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const ViewCartContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 30px;
  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`;

const Divider = styled.hr`
  border: 0.5px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -12px;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
`;

const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -30px;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
`;

export default Checkout;
