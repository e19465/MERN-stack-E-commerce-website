import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Announcements from "../../components/Announcements/Announcements";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { xSmall } from "../../Responsiveness";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import {
  addProduct,
  increaseQuantity,
} from "../../Redux/features/cart/cartSlice";
/* images */
import PATTERN from "../../assests/pattern.png";
import PT1 from "../../assests/PT1.png";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

/* Left Side */
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;

  ${xSmall({
    flexDirection: "column",
    padding: "0px 5px",
    margin: "10px 0px",
  })}
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
  text-transform: capitalize;
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
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
`;

const ColorSize = styled.span`
  font-weight: 400;
  font-size: 18px;
`;

const ColorContainer = styled.div`
  flex: 1;
  min-height: 100%;
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const Color = styled.div`
  width: 15px;
  height: 15px;
  border-radius: ${(props) => (props.choosed === props.color ? "50%" : "0%")};
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 5px;
`;

const SizeContainer = styled.div`
  flex: 2;
  padding-left: 100px;
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
  border: 1px solid teal;
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
  &:disabled {
    cursor: not-allowed;
    background-color: lightgray;
    color: #333;
    border: 1px solid #000;
  }
`;

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const [itemsQuantity, setItemsQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(PT1);
  const [chosenColor, setChosenColor] = useState("");
  const [chosenSize, setChosenSize] = useState("");

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await publicRequest.get(
          `products/getproduct/${productId}`
        );
        setProduct(response.data);
        setSelectedImage(response.data.img);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [productId]);

  /* Functions */

  const handleImageExchange = (e) => {
    setSelectedImage(e.target.src);
  };

  const handleQuantity = (type) => {
    if (type === "inc") {
      setItemsQuantity(itemsQuantity + 1);
    } else {
      if (itemsQuantity > 1) {
        setItemsQuantity(itemsQuantity - 1);
      }
    }
  };

  const handleAddToCart = () => {
    const uniqueId = uuidv4();
    dispatch(increaseQuantity({ itemsQuantity, price: product.price }));
    dispatch(
      addProduct({
        ...product,
        chosenColor,
        chosenSize,
        itemsQuantity,
        uniqueId,
      })
    );
    setItemsQuantity(1);
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
            {product.otherImg?.map((url, index) => (
              <OtherImage key={index}>
                <Image src={url} onClick={handleImageExchange} />
              </OtherImage>
            ))}
          </OtherImagesAllContainer>
        </ImagesContainer>

        <DescContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>$ {product.price}</Price>
          <ColorAndSizeCOntainer>
            <ColorContainer>
              <ColorSize>Color: </ColorSize>
              {product.color?.map((color) => (
                <Color
                  choosed={chosenColor}
                  color={color}
                  key={color}
                  onClick={() =>
                    setChosenColor((prevColor) =>
                      prevColor === color ? null : color
                    )
                  }
                />
              ))}
            </ColorContainer>
            <SizeContainer>
              <ColorSize>Size: </ColorSize>
              <Select
                defaultValue="select"
                onChange={(e) =>
                  setChosenSize((prevSize) =>
                    prevSize === e.target.value ? null : e.target.value
                  )
                }
              >
                <Option disabled>select</Option>
                {product.size?.map((size) => (
                  <Option key={size}>{size}</Option>
                ))}
              </Select>
            </SizeContainer>
          </ColorAndSizeCOntainer>
          <QuantityContainer>
            <Icon>
              <FaMinus role="button" onClick={() => handleQuantity("dec")} />
            </Icon>
            <Quantity>{itemsQuantity}</Quantity>
            <Icon>
              <FaPlus role="button" onClick={() => handleQuantity("inc")} />
            </Icon>
            <AddToCartButton
              onClick={handleAddToCart}
              disabled={chosenColor && chosenSize ? false : true}
            >
              Add to cart
            </AddToCartButton>
          </QuantityContainer>
        </DescContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProductPage;
