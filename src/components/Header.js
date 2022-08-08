import React from "react";

// router
import { NavLink } from "react-router-dom";
import { Routes } from "../router/Router";

// styled
import styled from "styled-components";

// assets
import Logo from "../logo.svg";

export default function Header() {
  return (
    <StyledHeader>
      <Navbar>
        <NavbarBrand src={Logo} />
        <NavbarSearchInput placeholder="Search for Topics" />
        <NavLink to={Routes.Register}>
          <NavbarProfile
            src="https://i.pravatar.cc/300"
            alt="Photo de profil"
          />
        </NavLink>
      </Navbar>
    </StyledHeader>
  );
}

const StyledHeader = styled.header``;
const Navbar = styled.nav`
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    position: relative;
  }
`;
const NavbarBrand = styled.img`
  max-width: 100%;
  width: 200px;
`;
const NavbarSearchInput = styled.input`
  font-family: inherit;
  background-color: #e4e4e4;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0 0 0;
  outline: none;
  width: 100%;
  max-width: 425px;

  @media screen and (min-width: 1024px) {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
const NavbarProfile = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 100px;
  width: 35px;
  height: 35px;
  margin: 20px 0 0 0;

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;
