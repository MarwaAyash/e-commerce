import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Account = () => {
  const { currentUser } = useContext(AppContext);
  let history = useHistory();
  return (
    <>
      {!!currentUser ? (
        <Wrapper>
          <h1>Account Information</h1>
          <CustomerInformation>
            <RowDiv>
              <strong>Name:</strong> {currentUser.firstName}{" "}
              {currentUser.lastName}
            </RowDiv>
            <RowDiv>
              <strong>Email:</strong> {currentUser.email}
            </RowDiv>
            <RowDiv>
              <strong>Address: </strong> {currentUser.address},{" "}
              {currentUser.city}. {currentUser.province}, {currentUser.country}
            </RowDiv>
          </CustomerInformation>
        </Wrapper>
      ) : (
        history.push("/")
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowDiv = styled.div`
  margin: 2px 0px;
`;

const CustomerInformation = styled.div`
  font-size: 20px;
  margin-top: 5px;
`;

export default Account;
