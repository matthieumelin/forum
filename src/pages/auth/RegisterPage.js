import React, { useState } from "react";

// styled
import styled from "styled-components";

// components
import Header from "../../components/Header";

// components
import Form from "../../components/Form";

export default function RegisterPage() {
  return (
    <StyledRegisterPage>
      <Header />
      <Main>
        <Form title="Register" isRegistration displayName email password />
      </Main>
    </StyledRegisterPage>
  );
}

const StyledRegisterPage = styled.div``;
const Main = styled.main`
  padding: 20px;
`;
