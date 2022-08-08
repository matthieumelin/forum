import React from "react";

// router
import { Navigate } from "react-router-dom";

// styled
import styled from "styled-components";

// components
import Header from "../../components/Header";
import Form from "../../components/Form";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setDisplayName, setEmail, setToken } from "../../redux/reducers";

// axios
import axios from "axios";

export default function LoginPage() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  if (token) return <Navigate to="/" />;

  const request = async (inputs, setErrors) => {
    let tempErrors = [];

    const data = { email: inputs.email, password: inputs.password };
    
    await axios
      .post("http://localhost:3030/api/v1/users/login", data)
      .then((response) => {
        const jwt = response.data.token;

        sessionStorage.setItem("token", jwt);

        dispatch(setDisplayName(inputs.displayName));
        dispatch(setEmail(inputs.email));
        dispatch(setToken(jwt));
      })
      .catch((error) => {
        tempErrors["email"] = error.response.data.message;
        setErrors(tempErrors);
      });
  };

  return (
    <StyledLoginPage>
      <Header />
      <Main>
        <Form title="Login" isConnection email password request={request}/>
      </Main>
    </StyledLoginPage>
  );
}

const StyledLoginPage = styled.div``;
const Main = styled.main`
  padding: 20px;
`;
