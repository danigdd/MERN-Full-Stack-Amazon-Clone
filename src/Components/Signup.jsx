import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <img src="./amazon-logo.png"></img>
      </Logo>
      <FormContainer>
        <h3>Sign up to Amazon</h3>
        <InputContainer>
          <p>Full Name</p>
          <input type="text" placeholder="John Doe"></input>
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input type="email" placeholder="example@example.com"></input>
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" placeholder="******"></input>
        </InputContainer>
        <SignUpButton>Sign up</SignUpButton>
        <InfoText>
          By continuing with the creation of the account, you agree to Amazon's{" "}
          <span>Conditions of Use</span> and <span>Privacy Notice</span>.
        </InfoText>
        <InfoText>
          <span id="need_help">Need help?</span>
        </InfoText>
      </FormContainer>
      <BackToLogin onClick={() => navigate("/login")}>
        Back to Login
      </BackToLogin>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  height: fit-content;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin: auto;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600px;
  }

  input {
    width: 100%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const SignUpButton = styled.button`
  width: 70%;
  height: 30px;
  background-color: #ffce12;
  color: #464848;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;

  &:hover {
    background-color: #e7bc11;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const BackToLogin = styled.button`
  width: 70%;
  height: 30px;
  background-color: #ffce12;
  color: #464848;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;

  &:hover {
    background-color: #e7bc11;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const InfoText = styled.p`
  width: 100%;
  overflow-wrap: break-word;
  word-break: normal;
  margin-top: 20px;
  font-size: 12px;

  span {
    color: #426bc0;
    cursor: pointer;
  }

  #need_help {
    font-size: 15px;
  }
`;

export default Signup;
