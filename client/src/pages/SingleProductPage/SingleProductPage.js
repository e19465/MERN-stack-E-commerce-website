import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Announcements from "../../components/Announcements/Announcements";
import { singleProductImages } from "../../data";
import { FaMinus, FaPlus } from "react-icons/fa";
/* images */
import PATTERN from "../../assests/pattern.png";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

/* Left Side */
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px 10px 10px;
`;

/* left side main container*/
const ImagesContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

/* right side main container */
const DescContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${PATTERN});
  background-color: #041e42;
  ${Image} {
    width: 70%;
  }
`;

const OtherImagesAllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  margin-top: 10px;
`;

const OtherImage = styled.div`
  border: 1px solid #088178;
  width: 23%;
  height: 100%;
  cursor: pointer;
`;

/* Right side */

const Title = styled.h1`
  width: 100%;
  text-align: left;
  letter-spacing: 1px;
`;

const Description = styled.p`
  padding: 10px 0px;
  line-height: 22px;
  font-size: 15px;
  margin-top: 10px;
  letter-spacing: 1px;
  width: 90%;
  align-self: flex-start;
`;

const Price = styled.p`
  width: 100%;
  padding: 20px 0;
  font-size: 25px;
  font-weight: 700;
`;

const ColorAndSizeCOntainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ColorSize = styled.span`
  font-weight: 400;
  font-size: 18px;
`;

const ColorContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Color = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin-left: 5px;
`;

const SizeContainer = styled.div`
  flex: 2;
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
`;

const Option = styled.option``;

const QuantityContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Quantity = styled.div`
  width: 40px;
  height: 40px;
  font-weight: 700;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 0px 10px;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
`;

const AddToCartButton = styled.button`
  margin-left: 50px;
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: teal;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: all 1s;
  letter-spacing: 1px;
  &:hover {
    filter: brightness(1.3);
  }
`;

const SingleProductPage = () => {
  const [itemsQuantity, setItemsQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    singleProductImages[0].img
  );

  const handleImageExchange = (e) => {
    setSelectedImage(e.target.src);
  };

  const handleDecrease = () => {
    if (itemsQuantity > 0) {
      setItemsQuantity(itemsQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setItemsQuantity(itemsQuantity + 1);
  };

  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <ImagesContainer>
          <MainImageContainer>
            <Image src={selectedImage} />
          </MainImageContainer>
          <OtherImagesAllContainer>
            {singleProductImages.map((image) => (
              <OtherImage key={image.id}>
                <Image src={image.img} onClick={handleImageExchange} />
              </OtherImage>
            ))}
          </OtherImagesAllContainer>
        </ImagesContainer>

        <DescContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Discover the epitome of fashion and comfort with Triumph's Denim
            Jumpsuit. Meticulously crafted from high-quality denim, this
            jumpsuit seamlessly combines style and ease. Its versatile design
            ensures a trendy look for any occasion. Elevate your wardrobe with
            this chic and timeless piece, reflecting Triumph's commitment to
            fashion-forward, quality attire. Dress up or down, Triumph's Denim
            Jumpsuit is a must-have for contemporary, confident style.
          </Description>
          <Price>$ 20</Price>
          <ColorAndSizeCOntainer>
            <ColorContainer>
              <ColorSize>Color: </ColorSize>
              <Color color="blue" />
              <Color color="red" />
              <Color color="green" />
            </ColorContainer>
            <SizeContainer>
              <ColorSize>Size: </ColorSize>
              <Select>
                <Option selected disabled>
                  select
                </Option>
                <Option>xs</Option>
                <Option>s</Option>
                <Option>m</Option>
                <Option>l</Option>
                <Option>xl</Option>
                <Option>xxl</Option>
              </Select>
            </SizeContainer>
          </ColorAndSizeCOntainer>
          <QuantityContainer>
            <Icon>
              <FaMinus role="button" onClick={handleDecrease} />
            </Icon>
            <Quantity>{itemsQuantity}</Quantity>
            <Icon>
              <FaPlus role="button" onClick={handleIncrease} />
            </Icon>
            <AddToCartButton>Add to cart</AddToCartButton>
          </QuantityContainer>
        </DescContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProductPage;
