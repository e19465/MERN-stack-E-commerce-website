import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  padding: 50px;
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
  letter-spacing: 2px;
`;

const P = styled.p`
  font-size: 18px;
`;

const Categories = () => {
  return (
    <>
      <Desc>
        <H1>Style Haven</H1>
        <P>"Discover Fashion Bliss with Our Trendy Cloth Collection!"</P>
      </Desc>
      <Container>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
