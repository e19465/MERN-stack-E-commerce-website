import Navbar from "../../components/Navbar/Navbar";
import Announcements from "../../components/Announcements/Announcements";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SHOE from "../../assests/shoe.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.h1`
  padding: 30px 0px 20px;
  text-align: center;
`;

const CartHeader = styled.div`
  width: 100%;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CartHeaderLinksContainer = styled.div``;

const CartButton = styled.button`
  padding: 10px;
  outline: none;
  cursor: pointer;
  letter-spacing: 1px;
  background-color: ${(props) =>
    props.filled === "filled" ? "#000" : "transparent"};

  color: ${(props) => (props.filled === "filled" ? "#fff" : "#000")};
  border: 1px ${(props) => (props.filled === "filled" ? "solid" : "groove")}
    #000;
`;

const CartHeaderLinks = styled(Link)`
  margin-right: 20px;
  color: #333;
`;

const OrderDetailsAndSummaryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

/* Order details => left side */
const OrderDetailsContainer = styled.div`
  flex: 3;
  height: 400px;
  margin-left: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const OneOrder = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 0.5px solid lightgray;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const OrderImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const OrderImage = styled.img`
  width: 100%;
  height: 100%;
`;
const OrderDetails = styled.div`
  flex: 2;
  height: 100%;
  padding-left: 50px;
  padding-top: 20px;
  letter-spacing: 1px;
`;

/* Order quantity container */
const OrderQuantity = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconQuantity = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: ${(props) =>
    props.border === "border" ? "1px solid #088178" : "none"};
  cursor: ${(props) => (props.border === "border" ? "auto" : "pointer")};
  font-size: ${(props) => (props.border === "border" ? "20px" : "18px")};
  font-weight: ${(props) => (props.border === "border" ? 700 : 500)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 30px;
  color: #666;
  font-weight: bold;
`;

const ProductDetail = styled.div`
  width: 100%;
  padding: 10px;
`;
const Detail = styled.div``;
const Color = styled.div`
  width: 25px;
  height: 25px;
  padding: 10px;
  border-radius: 50%;
  background-color: midnightblue;
`;
const Bold = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

/* Order summary => right side */
const OrderSummaryConatiner = styled.div`
  flex: 1;
  height: 430px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 20px 20px;
`;

const OrderSummary = styled.div`
  width: 95%;
  height: 95%;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 10px;
`;

const OrderSummaryTitle = styled.h1`
  text-align: center;
  padding: 20px 0 30px;
  color: #555;
  font-size: 30px;
`;

const OrderSummaryLine = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #555;
  font-size: ${(props) => (props.big === "big" ? "23px" : "17px")};
  font-weight: ${(props) => (props.big === "big" ? 700 : 400)};
  border-top: ${(props) =>
    props.big === "big" ? "1px solid lightgray" : "none"};
  padding-top: ${(props) => (props.big === "big" ? "30px" : "20px")};
`;
const OrderSummaryItem = styled.span``;

const OrderSummaryBtn = styled.button`
  width: 100%;
  height: 30px;
  font-weight: bolder;
  color: #fff;
  background-color: #000;
  border: none;
  outline: none;
  letter-spacing: 1px;
  margin: 0 auto;
  cursor: pointer;
`;

const CartPage = () => {
  const [orderQuantity, setOrderQuantity] = useState(1);

  const handleIncrease = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  const handleDecrease = () => {
    if (orderQuantity > 0) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Your Bag</Title>
        <CartHeader>
          <CartButton filled="notfilled">Continue Shopping</CartButton>
          <CartHeaderLinksContainer>
            <CartHeaderLinks>Shopping Bag(2)</CartHeaderLinks>
            <CartHeaderLinks>Your Wishlist(0)</CartHeaderLinks>
          </CartHeaderLinksContainer>
          <CartButton filled="filled">checkout now</CartButton>
        </CartHeader>
        <OrderDetailsAndSummaryContainer>
          <OrderDetailsContainer>
            <OneOrder>
              <OrderImageContainer>
                <OrderImage src={SHOE} />
              </OrderImageContainer>
              <OrderDetails>
                <ProductDetail>
                  <Detail>
                    <Bold>name:</Bold>Jessie Thunder Shoes
                  </Detail>
                </ProductDetail>
                <ProductDetail>
                  <Detail>
                    <Bold>size:</Bold>145879932
                  </Detail>
                </ProductDetail>
                <ProductDetail>
                  <Detail>
                    <Bold>size:</Bold>38
                  </Detail>
                </ProductDetail>
                <ProductDetail>
                  <Color />
                </ProductDetail>
              </OrderDetails>
              <OrderQuantity>
                <IconQuantity>
                  <Icon>
                    <FaMinus role="button" onClick={handleDecrease} />
                  </Icon>
                  <Icon border="border">{orderQuantity}</Icon>
                  <Icon>
                    <FaPlus role="button" onClick={handleIncrease} />
                  </Icon>
                </IconQuantity>
                <Price>$ 30</Price>
              </OrderQuantity>
            </OneOrder>
          </OrderDetailsContainer>
          <OrderSummaryConatiner>
            <OrderSummary>
              <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
              <OrderSummaryLine>
                <OrderSummaryItem>Subtotal</OrderSummaryItem>
                <OrderSummaryItem>$ 80</OrderSummaryItem>
              </OrderSummaryLine>
              <OrderSummaryLine>
                <OrderSummaryItem>Estimated Shipping</OrderSummaryItem>
                <OrderSummaryItem>$ 5.90</OrderSummaryItem>
              </OrderSummaryLine>
              <OrderSummaryLine>
                <OrderSummaryItem>Shipping Discount</OrderSummaryItem>
                <OrderSummaryItem>$ -5.90</OrderSummaryItem>
              </OrderSummaryLine>
              <OrderSummaryLine big="big">
                <OrderSummaryItem>Total</OrderSummaryItem>
                <OrderSummaryItem>$ 80</OrderSummaryItem>
              </OrderSummaryLine>
              <OrderSummaryLine>
                <OrderSummaryBtn>checkout now</OrderSummaryBtn>
              </OrderSummaryLine>
            </OrderSummary>
          </OrderSummaryConatiner>
        </OrderDetailsAndSummaryContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default CartPage;
