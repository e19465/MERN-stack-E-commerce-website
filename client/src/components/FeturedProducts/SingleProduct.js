import styled from "styled-components";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { xSmall } from "../../Responsiveness";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  border-radius: 10px;
`;

const Container = styled.div`
  flex: 1;
  min-width: 250px;
  height: 300px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: blue;
  margin: 40px;
  background-color: #f5f5f5;
  position: relative;
  transition: all 1s;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
  }

  ${xSmall({
    margin: "0 10px 10px",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;
  margin: 0 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:first-child {
    color: dodgerblue;
  }
  &:nth-child(2) {
    color: #333;
  }
  &:last-child {
    color: red;
  }
`;

const SingleProduct = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icon>
          <FaShoppingCart />
        </Icon>
        <Icon>
          <FaSearch />
        </Icon>
        <Icon>
          <FaHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default SingleProduct;
