import styled from "styled-components";
import { products } from "../../data";
import SingleProduct from "../SingleProduct/SingleProduct";

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row wrap;
`;

const Desc = styled.div`
  width: 100%;
  height: 200px;
  background-color: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 80px 0px 40px;
`;

const H1 = styled.h1`
  font-size: 50px;
  font-family: var(--URBANIST-FF);
`;

const P = styled.p`
  font-size: 18px;
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
