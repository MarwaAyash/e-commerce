import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    const reqBody = {
      firstName,
      lastName,
      email,
      address,
      city,
      province,
      country,
    };
    fetch("/api/add-user", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...reqBody }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setSuccess(true);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log("error", err);
        setError(true);
      });
  };

  const handleChange = (e, type) => {
    switch (true) {
      case type === "email":
        setEmail(e.target.value);
        break;
      case type === "firstName":
        setFirstName(e.target.value);
        break;
      case type === "lastName":
        setLastName(e.target.value);
        break;
      case type === "address":
        setAdress(e.target.value);
        break;
      case type === "city":
        setCity(e.target.value);
        break;
      case type === "province":
        setProvince(e.target.value);
        break;
      case type === "country":
        setCountry(e.target.value);
        break;
      default:
    }
  };

  return (
    <AllWrapper>
      {success ? (
        <>
          <SignUpWrapper>
            <div>successful sign up</div>
            <NavLink exact to="/signin">
              Go back to sign in
            </NavLink>
          </SignUpWrapper>
        </>
      ) : (
        <SignUpWrapper>
          <Title>Register</Title>
          {error && (
            <SignupErrorWrapper>Something went wrong</SignupErrorWrapper>
          )}
          <InputDiv>
            <Input
              className="email"
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => handleChange(e, "email")}
            />
          </InputDiv>
          <InputRow>
            <InputDiv>
              <Name
                className="name"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={(e) => {
                  handleChange(e, "firstName");
                }}
              />
            </InputDiv>
            <InputDiv>
              <LastName
                className="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={(e) => {
                  handleChange(e, "lastName");
                }}
              />
            </InputDiv>
          </InputRow>
          <Input
            className="address"
            type="text"
            name="address"
            placeholder="Adress"
            required
            onChange={(e) => {
              handleChange(e, "address");
            }}
          />
          <InputRow>
            <InputDiv>
              <CityProvince
                className="city"
                type="text"
                name="city"
                placeholder="City"
                required
                onChange={(e) => {
                  handleChange(e, "city");
                }}
              />
            </InputDiv>
            <InputDiv>
              <CityProvince
                className="province"
                type="text"
                name="province"
                placeholder="Province"
                required
                onChange={(e) => {
                  handleChange(e, "province");
                }}
              />
            </InputDiv>
            <InputDiv>
              <Country
                className="country"
                type="text"
                name="country"
                placeholder="Country"
                required
                onChange={(e) => {
                  handleChange(e, "country");
                }}
              />
            </InputDiv>
          </InputRow>
          <BtnWrapper onClick={handleClick}>
            <button className="accentBtn">Sign Up</button>
          </BtnWrapper>
        </SignUpWrapper>
      )}
    </AllWrapper>
  );
};

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55.4vh;
  background-color: #fff;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  font-size: 35px;
`;

const SignupErrorWrapper = styled.div`
  color: red;
  font-size: 14px;
`;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5px 0;
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

const Name = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  margin-right: 10px;
  &:focus {
    outline-color: black;
  }
`;

const LastName = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  &:focus {
    outline-color: black;
  }
`;

const Input = styled.input`
  font-size: 14px;
  width: 300px;
  height: 40px;
  &:focus {
    outline-color: black;
  }
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  margin: 10px 0;
`;

export default Signup;
