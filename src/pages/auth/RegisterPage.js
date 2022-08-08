import React from "react";

// router
import { Navigate } from "react-router-dom";

// styled
import styled from "styled-components";

// components
import Header from "../../components/Header";

// components
import Form from "../../components/Form";

// redux
import { useSelector } from "react-redux";

export default function RegisterPage() {
  const token = useSelector((state) => state.user.token);

  if (token) return <Navigate to="/" />

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
