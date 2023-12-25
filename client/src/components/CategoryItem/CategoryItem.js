import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  flex: 1;
  border-radius: 20px;
  position: relative;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  border: 1px solid #fff;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  object-fit: cover;
`;
const Info = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  position: absolute;
  bottom: 50px;
  padding: 10px;
  padding-left: 30px;
`;
const Title = styled.p`
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: bold;
  &::first-letter {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 25px;
    color: red;
    font-style: italic;
    text-transform: capitalize;
  }
`;
const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid darkgoldenrod;
  background-color: teal;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.5s;
  font-weight: bolder;
  letter-spacing: 2px;

  &:hover {
    background-color: #07645a;
  }
`;

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>shop</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
