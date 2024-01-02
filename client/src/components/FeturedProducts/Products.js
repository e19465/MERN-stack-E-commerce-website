import styled from "styled-components";
import SingleProduct from "./SingleProduct";
import { xSmall } from "../../Responsiveness";
import axios from "axios";
import { useEffect, useState } from "react";

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

const Products = ({ category, filters, sort }) => {
  const [databaseProducts, setDatabaseProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5000/api/products/allproducts?category=${category}`
            : "http://localhost:5000/api/products/allproducts"
        );
        setDatabaseProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        databaseProducts.filter((product) =>
          Object.entries(filters).every(([key, value]) =>
            product[key].includes(value)
          )
        )
      );
  }, [category, databaseProducts, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setDatabaseProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Desc>
        <H1>Featured Products</H1>
        <P>"Discover your style, one outfit at a time."</P>
      </Desc>
      <Container>
        {category
          ? filteredProducts.map((product) => (
              <SingleProduct product={product} key={product._id} />
            ))
          : databaseProducts
              .slice(0, 10)
              .map((product) => (
                <SingleProduct product={product} key={product._id} />
              ))}
      </Container>
    </>
  );
};

export default Products;
