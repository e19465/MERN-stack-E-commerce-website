import styled from "styled-components";
import { featured } from "../../data";
import SingleFeatured from "./SingleFeatured";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  /* background-color: red; */
  /* background-color: red; */
`;

const Featured = () => {
  return (
    <Container>
      {featured.map((item) => (
        <SingleFeatured key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Featured;
