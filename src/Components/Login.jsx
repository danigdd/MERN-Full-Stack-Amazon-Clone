import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Logo>
        <img src="./amazon-logo.png"></img>
      </Logo>
      <FormContainer>
        <h3>Sign-In</h3>
        <InputContainer></InputContainer>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div``;
export default Login;
