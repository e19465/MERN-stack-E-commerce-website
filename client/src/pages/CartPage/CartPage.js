import Navbar from "../../components/Navbar/Navbar";
import Announcements from "../../components/Announcements/Announcements";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { xSmall } from "../../Responsiveness";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../Redux/features/cart/cartSlice";

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

  ${xSmall({
    padding: "20px",
    flexDirection: "column",
  })}
`;

const CartHeaderLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${xSmall({
    flexDirection: "column",
    padding: "10px",
  })}
`;

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

  ${xSmall({
    width: "100%",
  })}
`;

const CartHeaderLinks = styled(Link)`
  margin-right: 20px;
  color: #333;

  ${xSmall({
    marginBottom: "10px",
  })}
`;

const OrderDetailsAndSummaryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;

  ${xSmall({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
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

  ${xSmall({
    margin: 0,
  })}
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

  ${xSmall({
    width: "95%",
    height: "auto",
    flexDirection: "column",
    paddingLeft: "0px",
    margin: "0 0 20px 0",
  })}
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

  ${xSmall({
    width: "100%",
    paddingLeft: "0px",
  })}
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
  border: 1px solid #088178;
  cursor: ${(props) => (props.delete === "delete" ? "pointer" : "auto")};
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  &:hover {
    background-color: ${(props) => props.delete === "delete" && "teal"};
    color: ${(props) => props.delete === "delete" && "#fff"};
  }
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
  background-color: ${(props) => (props.color ? props.color : "transparent")};
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

  ${xSmall({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  })}
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
  const { products, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
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
            {products.map((product, index) => (
              <OneOrder key={index}>
                <OrderImageContainer>
                  <OrderImage src={product.img} />
                </OrderImageContainer>
                <OrderDetails>
                  <ProductDetail>
                    <Detail>
                      <Bold>name:</Bold>
                      {product.title}
                    </Detail>
                  </ProductDetail>
                  <ProductDetail>
                    <Detail>
                      <Bold>id:</Bold>
                      {product._id}
                    </Detail>
                  </ProductDetail>
                  <ProductDetail>
                    <Detail>
                      <Bold>size:</Bold>
                      {product.chosenSize}
                    </Detail>
                  </ProductDetail>
                  <ProductDetail>
                    <Color color={product.chosenColor} />
                  </ProductDetail>
                </OrderDetails>
                <OrderQuantity>
                  <IconQuantity>
                    <Icon>{product.itemsQuantity}</Icon>
                    <Icon delete="delete">
                      <MdDeleteOutline
                        role="button"
                        onClick={() => dispatch(removeProduct(product))}
                      />
                    </Icon>
                  </IconQuantity>
                  <Price>$ {product.price * product.itemsQuantity}</Price>
                </OrderQuantity>
              </OneOrder>
            ))}
          </OrderDetailsContainer>
          <OrderSummaryConatiner>
            <OrderSummary>
              <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
              <OrderSummaryLine>
                <OrderSummaryItem>Subtotal</OrderSummaryItem>
                <OrderSummaryItem>$ {total}</OrderSummaryItem>
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
                <OrderSummaryItem>$ {total}</OrderSummaryItem>
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
