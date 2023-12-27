import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { data } from "../../data";
import buttonPng from "../../assests/button.png";
import { xSmall } from "../../Responsiveness";
import GIRL from "../../assests/girl_shp_3.png";
/* Main Container */
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: coral;
  overflow: hidden;
  border-bottom: 1px solid #fff;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);

  ${xSmall({
    background: `radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${GIRL}) no-repeat center center/ cover`,
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    boxShadow: "none",
  })}
`;

const XsBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  font-size: 17px;
  color: #000;
  font-weight: 900;
  border: 2px solid #fff;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  display: none;
  align-items: center;
  justify-content: center;
  ${xSmall({
    display: "flex",
    // width: "100%",
    // backgroundColor: "black",
  })}
`;
/* Arrow component for slider */
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(240, 232, 232);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.5s;
  z-index: 100;

  &:hover {
    opacity: 1;
  }

  ${xSmall({
    display: "none",
  })}
`;

/* Wrapper for slide */
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 2s;
  ${xSmall({
    display: "none",
  })}
`;

/* Sliding component */
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  transition: all 1s;

  ${xSmall({
    display: "none",
  })}
`;

/* Sliding image container */
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  ${xSmall({
    display: "none",
  })}
`;

/* Sliding image */
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* Sliding info container */
const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  padding: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const STYLED_H1 = styled.h1`
  text-transform: uppercase;
  font-family: var(--URBANIST-FF);
  color: #555;
  font-size: 60px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const STYLED_P = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 40px;
`;
const STYLED_BUTTON = styled.button`
  background-image: url(${buttonPng});
  background-color: transparent;
  background-repeat: no-repeat;
  padding: 14px 80px 14px 65px;
  font-size: 17px;
  color: #088178;
  border: none;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleLeft = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : data.length - 1);
  };
  const handleRight = () => {
    setSlideIndex(slideIndex < data.length - 1 ? slideIndex + 1 : 0);
  };
  return (
    <>
      <Container>
        <XsBtn>shop now</XsBtn>
        <Arrow direction="left" onClick={() => handleLeft()}>
          <FaArrowLeft style={{ color: "#777" }} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {data.map((item) => (
            <Slide key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <STYLED_H1>{item.title}</STYLED_H1>
                <STYLED_P>{item.desc}</STYLED_P>
                <STYLED_BUTTON>shop now</STYLED_BUTTON>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleRight()}>
          <FaArrowRight style={{ color: "#777" }} />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
