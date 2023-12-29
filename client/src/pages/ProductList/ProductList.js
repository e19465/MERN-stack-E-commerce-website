import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcements from "../../components/Announcements/Announcements";
import Products from "../../components/FeturedProducts/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { xSmall } from "../../Responsiveness";

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
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterProducts>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option selected disabled>
              color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option selected disabled>
              size
            </Option>
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
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc) </Option>
            <Option>Price (desc) </Option>
          </Select>
        </Filter>
      </FilterProducts>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
