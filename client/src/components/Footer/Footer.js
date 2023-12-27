import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import APP from "../../assests/app.jpg";
import PLAY from "../../assests/play.jpg";
import PAY from "../../assests/pay.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { listItems } from "../../data";
import LineItem from "./LineItem";
import { xSmall } from "../../Responsiveness";

/* MAin footer container */
const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;

  ${xSmall({
    flexDirection: "column",
  })}
`;

/* left side */
const Left = styled.div`
  flex: 1;
  /* background-color: lightblue; */
  padding: 20px;
`;

const Title = styled.h1`
  font-family: var(--URBANIST-FF);
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-family: var(--VARELA_ROUND-FF);
  line-height: 25px;
  font-size: 14px;
  color: #444;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  margin-top: 20px;
`;

const Icon = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
`;

/* center */
const Center = styled.div`
  flex: 1;
  /* background-color: lightgreen; */
  padding: 20px;
`;
const C_H2 = styled.h2`
  font-family: var(--URBANIST-FF);
  margin-bottom: 20px;
`;
const C_UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

/* right */
const Right = styled.div`
  flex: 1;
  /* background-color: lightgray; */
  padding: 20px;
`;

const R_P = styled.p`
  padding: 10px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const IMG_CONTAINER = styled.div`
  margin-top: 20px;
`;
const IMG = styled.img`
  margin-top: 5px;
`;
const IMGP = styled.img`
  border: 1px solid #333;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 5px;
`;

const ICON = styled.span`
  /* background-color: blue; */
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>triumph.</Title>
        <Desc>
          Triumph. Elevate your style with our trendy and timeless clothing
          collection. Discover fashion-forward designs, quality fabrics, and
          curated ensembles for every occasion. Unleash your confidence through
          Triumph's chic and diverse apparel, blending comfort and
          sophistication effortlessly. Experience fashion that triumphs in both
          elegance and versatility.
        </Desc>
        <IconContainer>
          <Icon color="#1e90ff">
            <FaFacebookF />
          </Icon>
          <Icon color="#8B008B">
            <FaInstagram />
          </Icon>
          <Icon color="#00008B">
            <FaTwitter />
          </Icon>
          <Icon color="#b22222">
            <FaPinterestP />
          </Icon>
        </IconContainer>
      </Left>
      <Center>
        <C_H2>Useful Links</C_H2>
        <C_UL>
          {listItems.map((item) => (
            <LineItem name={item.name} key={item.id} />
          ))}
        </C_UL>
      </Center>
      <Right>
        <C_H2>Contact</C_H2>
        <R_P>
          <ICON>
            <MdLocationPin />
          </ICON>
          355, colombo 07, colombo.
        </R_P>
        <R_P>
          <ICON>
            <BsTelephoneFill />
          </ICON>
          +94778966377
        </R_P>
        <R_P>
          <ICON>
            <MdEmail />
          </ICON>
          Triumph@gmail.com
        </R_P>
        <IMG_CONTAINER>
          <R_P>Secured payment gateways</R_P>
          <IMG src={PAY} />
        </IMG_CONTAINER>
        <IMG_CONTAINER>
          <R_P>Install our app</R_P>
          <IMGP src={PLAY} />
          <IMGP src={APP} />
        </IMG_CONTAINER>
      </Right>
    </Container>
  );
};

export default Footer;
