import styled, { keyframes } from "styled-components";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: radial-gradient(#c1ffc1, #006400);
  color: #000080;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

/* icon animation */
const IconAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  animation: ${IconAnimation} 1s ease-in-out 0s infinite alternate forwards;
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > 1500); // Show the link when scrolled down 500px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    isVisible && (
      <Container title="Back to Top" onClick={() => window.scrollTo(0, 0)}>
        <Icon>
          <FaLongArrowAltUp />
        </Icon>
      </Container>
    )
  );
};

export default BackToTop;
