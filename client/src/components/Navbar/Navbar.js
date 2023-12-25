import React from "react";
import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
`;

/* Left side of the Nav Bar */
const Left = styled.div`
  flex: 1;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: #444;
  padding: 0 5px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

/* Center of the Navbar */
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  /* background-color: yellowgreen; */
`;

const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

/* Right of the Navbar */
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* background-color: red; */
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <FaSearch style={{ cursor: "pointer", color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>triumph.</Logo>
        </Center>
        <Right>
          <MenuItem>register</MenuItem>
          <MenuItem>login</MenuItem>
          <MenuItem>
            <FaShoppingCart style={{ color: "#222", fontSize: "1rem" }} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
