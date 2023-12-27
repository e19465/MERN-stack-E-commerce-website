import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { xSmall } from "../../Responsiveness";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  padding: 10px 50px;

  ${xSmall({
    gridTemplateColumns: "1fr",
    padding: "10px",
    gap: "20px",
  })}
`;

const Desc = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  margin: 10px 0px 20px;

  ${xSmall({
    justifyContent: "center",
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
