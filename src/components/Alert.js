import React from "react";

// styled
import styled from "styled-components";

export default function Alert({ type, message }) {
  return <StyledAlert type={type}>{message}</StyledAlert>;
}

const StyledAlert = styled.div`
margin: 10px 0 0 0;
color: ${(props) => props.type === "error" ? "red" : "green"};
`;
