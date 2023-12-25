import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <div className="announce">
      <Container>Super Deal! Free Shipping on orders over $50</Container>
    </div>
  );
};

export default Announcements;
