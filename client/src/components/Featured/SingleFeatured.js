import styled from "styled-components";
import { xSmall } from "../../Responsiveness";

const Contaier = styled.div`
  border: 1px solid #bcefe9;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${xSmall({
    width: "300px",
    marginBottom: "10px",
  })}
`;

const IMG_CONTAINER = styled.div``;

const IMG = styled.img``;

const P_IMG = styled.p`
  text-align: center;
  padding: 5px 5px;
  font-size: 13px;
  margin-top: 20px;
  background-color: ${(props) => props.color};
  font-weight: 700;
  color: #088178;
  border-radius: 5px;
`;

const SingleFeatured = ({ item }) => {
  return (
    <Contaier>
      <IMG_CONTAINER>
        <IMG src={item.img} />
        <P_IMG color={item.color}>{item.desc}</P_IMG>
      </IMG_CONTAINER>
    </Contaier>
  );
};

export default SingleFeatured;
