import styled from "styled-components";
import { featured } from "../../data";
import SingleFeatured from "./SingleFeatured";
import { xSmall } from "../../Responsiveness";

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  ${xSmall({
    flexWrap: "wrap",
  })}
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
