import React, { useState } from "react";

// router
import { Link } from "react-router-dom";
import { Routes } from "../router/Router";

// styled
import styled from "styled-components";

// components
import Alert from "../components/Alert";

// utils
import { Colors } from "../utils/style/Colors";

export default function Form({
  isRegistration = false,
  isConnection = false,
  displayName = false,
  email = false,
  password = false,
  remember = false,
  title,
  axiosRequest,
}) {
  const [inputs, setInputs] = useState({
    displayName: "",
    email: "",
    password: "",
    remember: true,
  });
  const [errors, setErrors] = useState([]);

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.id]: event.target.id === "remember" ? !inputs.remember : event.target.value });
};

  const onSubmit = (event) => {
    event.preventDefault();

    let tempErrors = [];

    if (isRegistration) {
      if (!inputs.displayName) {
        tempErrors["displayName"] = "You must fill in the display name field.";
      }
    }
    if (isConnection) {
      if (!inputs.email) {
        tempErrors["email"] = "You must fill in the email field.";
      }
      if (!inputs.password) {
        tempErrors["password"] = "You must fill in the password field.";
      }
    }
    if (tempErrors) {
      setErrors(tempErrors);
    } else {
      axiosRequest();
    }
  };

  return (
    <StyledForm onSubmit={(event) => onSubmit(event)}>
      <FormTitle>{title}</FormTitle>
      {displayName ? (
        <FormGroup>
          <FormLabel htmlFor="displayName">Display name</FormLabel>
          <FormInput
            error={errors["displayName"]}
            type="text"
            id="displayName"
            value={inputs.displayName}
            onChange={(event) => handleInput(event)}
          />
          {errors["displayName"] ? (
            <Alert type="error" message={errors["displayName"]} />
          ) : null}
        </FormGroup>
      ) : null}
      {email ? (
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            error={errors["email"]}
            type="email"
            id="email"
            value={inputs.email}
            onChange={(event) => handleInput(event)}
          />
          {errors["email"] ? (
            <Alert type="error" message={errors["email"]} />
          ) : null}
        </FormGroup>
      ) : null}
      {password ? (
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            error={errors["password"]}
            type="password"
            id="password"
            value={inputs.password}
            onChange={(event) => handleInput(event)}
          />
          {errors["password"] ? (
            <Alert type="error" message={errors["password"]} />
          ) : null}
        </FormGroup>
      ) : null}
      {isConnection ? (
        <FormGroupWrapper>
          <FormInput
            error={errors["remember"]}
            type="checkbox"
            id="remember"
            value={inputs.remember}
            onChange={(event) => handleInput(event)}
          />
          <FormLabel htmlFor="remember">Remember me</FormLabel>
          {errors["remember"] ? (
            <Alert type="error" message={errors["remember"]} />
          ) : null}
        </FormGroupWrapper>
      ) : null}
      <FormGroup>
        {isRegistration ? (
          <FormLink to={Routes.Login}>I already have an account</FormLink>
        ) : isConnection ? (
          <FormLink to={Routes.Register}>Create my account</FormLink>
        ) : null}
        <FormButton type="submit">{title}</FormButton>
      </FormGroup>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FormTitle = styled.h2``;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FormLabel = styled.label`
  margin: 0 0 5px 0;
`;
const FormInput = styled.input`
  padding: 5px 10px;
  font-family: inherit;
  outline: none;
  border: ${(props) =>
    !props.error ? "1px solid rgba(0, 0, 0, 0.5)" : "1px solid red"};
  border-radius: 2px;
`;
const FormLink = styled(Link)`
  color: ${Colors.primary};
`;
const FormButton = styled.button`
  margin: 10px 0 0 0;
  padding: 10px;
  background-color: ${Colors.primary};
  color: white;
  border: none;
  border-radius: 2px;
  font-family: inherit;
`;
