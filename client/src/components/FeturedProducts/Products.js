import styled from "styled-components";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import { xSmall } from "../../Responsiveness";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;

  ${xSmall({
    padding: "0",
    alignItems: "center",
    justifyContent: "flex-start",
  })}
`;

const Desc = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;

  ${xSmall({
    justifyContent: "center",
    height: "100px",
    padding: "20px 0 10px",
  })}
`;

const H1 = styled.h1`
  font-size: 50px;
  font-family: var(--URBANIST-FF);
  letter-spacing: 2px;

  ${xSmall({
    fontSize: "30px",
  })}
`;

const P = styled.p`
  font-size: 18px;

  ${xSmall({
    textAlign: "center",
    fontSize: "15px",
    padding: "10px 20px",
  })}
`;

const Products = () => {
  return (
    <>
      <Desc>
        <H1>Featured Products</H1>
        <P>"Discover your style, one outfit at a time."</P>
      </Desc>
      <Container>
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
