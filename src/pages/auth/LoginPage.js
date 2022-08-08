import React from "react";

// styled
import styled from "styled-components";

// components
import Header from "../../components/Header";
import Form from "../../components/Form";

export default function RegisterPage() {
  return (
    <StyledLoginPage>
      <Header />
      <Main>
        <Form title="Login" isConnection email password />
      </Main>
    </StyledLoginPage>
  );
}

const StyledLoginPage = styled.div``;
const Main = styled.main`
  padding: 20px;
`;
