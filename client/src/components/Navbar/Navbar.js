import React from "react";
import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { xSmall } from "../../Responsiveness";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  /* extra-small devices width <= 576px*/
  ${xSmall({
    height: "auto",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    padding: "0px",
  })}
`;

/* Left side of the Nav Bar */
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    flex: 1,
    aligntems: "flex-start",
    justifyContent: "flex-start",
    padding: "5px",
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    display: "none",
  })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: #444;
  padding: 0 5px;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    width: "50px",
    marginRight: "5px",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    margin: 0,
  })}
`;

/* Center of the Navbar */
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    flex: 1,
    padding: "0px 5px",
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    fontSize: "13px",
  })}
`;

/* Right of the Navbar */
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* extra-small devices width <= 576px*/
  ${xSmall({
    flex: 2,
    justifyContent: "space-around",
    padding: "0px 5px",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${xSmall({
    margin: 0,
    fontSize: "10px",
    fontWeight: 500,
  })}
`;

const CartContainer = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 20px;
  text-transform: uppercase;
  position: relative;
`;

const CartQuantity = styled.div`
  width: 20px;
  height: 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid midnightblue;
  background-color: lightblue;
  color: midnightblue;
  position: absolute;
  top: -10px;
  right: -10px;
  font-weight: bolder;
  z-index: -1;
`;

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search..." />
            <FaSearch style={{ cursor: "pointer", color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>triumph.</Logo>
        </Center>
        <Right>
          <MenuItem>register</MenuItem>
          <MenuItem>login</MenuItem>
          <Link to="/cart">
            <CartContainer>
              <CartQuantity>{quantity}</CartQuantity>
              <FaShoppingCart
                style={{ color: "dodgerblue", fontSize: "1.3rem", zIndex: 5 }}
              />
            </CartContainer>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
