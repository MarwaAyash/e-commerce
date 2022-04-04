import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Signin = ({}) => {
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { setCurrentUser } = useContext(AppContext);

  let history = useHistory();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch("/api/get-user", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem("currentUser", JSON.stringify(data.data.email));
          setCurrentUser(data.data.user);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoginError(true);
      });
  };

  return (
    <>
      <AllWrapper>
        <SignInWrapper>
          <Title>Please sign in</Title>
          {loginError && <LoginErrorWrapper>Email not found</LoginErrorWrapper>}
          <InputDiv>
            <Input
              className="inputText"
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </InputDiv>
          <RegLinkWrapper>
            <NavLink exact to={"/register"}>
              New user? Register now!
            </NavLink>
          </RegLinkWrapper>

          <BtnWrapper onClick={handleClick}>
            <button className="accentBtn">Sign In</button>
          </BtnWrapper>
        </SignInWrapper>
      </AllWrapper>
    </>
  );
};

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55.4vh;
  background-color: #fff;
`;

const SignInWrapper = styled.div`
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

const LoginErrorWrapper = styled.div`
  color: red;
  font-size: 14px;
`;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 14px;
  width: 300px;
  height: 40px;
  &:focus {
    outline-color: black;
  }
`;

const RegLinkWrapper = styled.div`
  font-size: 12px;
`;

const BtnWrapper = styled.div`
  margin: 10px 0;
`;

export default Signin;
