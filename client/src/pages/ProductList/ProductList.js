import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcements from "../../components/Announcements/Announcements";
import Products from "../../components/FeturedProducts/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { xSmall } from "../../Responsiveness";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin: 20px;
  font-family: var(--VARELA_ROUND-FF);
`;

const FilterProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${xSmall({
    padding: "10px",
  })}
`;
const Filter = styled.div`
  margin: 20px 200px;
  ${xSmall({
    margin: "0px",
  })}
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--VARELA_ROUND-FF);

  ${xSmall({
    marginBottom: "10px",
  })}
`;

const Select = styled.select`
  outline: none;
  padding: 5px;
  margin-left: 5px;
  cursor: pointer;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{category}</Title>
      <FilterProducts>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
            <Option>xxl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select name="sort" onChange={handleSort}>
            <Option value="new">Newest</Option>
            <Option value="asc">Price(asc) </Option>
            <Option value="desc">Price(desc) </Option>
          </Select>
        </Filter>
      </FilterProducts>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
