import styled from "styled-components";
import BANNER from "../../assests/b14.png";
import { IoMdSend } from "react-icons/io";
import { xSmall } from "../../Responsiveness";

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background-image: url(${BANNER});
  background-color: #041e42;
  margin-bottom: 20px;
  background-position: 20% 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
  font-family: var(--VARELA_ROUND-FF);

  ${xSmall({
    padding: "20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  })}
`;

const Text = styled.div`
  /* background-color: blue; */
  padding: 20px;
  line-height: 30px;
`;

const P1 = styled.p`
  color: #fff;
  font-size: 25px;

  ${xSmall({
    fontSize: "18px",
  })}
`;

const P2 = styled.p`
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;

  ${xSmall({
    fontSize: "10px",
  })}
`;

const Span = styled.span`
  font-size: 17px;
  letter-spacing: 1px;
  color: rgb(243, 181, 25);

  ${xSmall({
    fontSize: "12px",
  })}
`;

const Form = styled.form`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  border: none;
  padding: 10px 20px 10px 10px;
  border: 1px solid #fff;
  font-family: var(--VARELA_ROUND-FF);

  ${xSmall({
    width: "200px",
    height: "30px",
  })}
`;

const Button = styled.button`
  height: 40px;
  width: 70px;
  border: none;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #088178;
  cursor: pointer;
  transition: all 0.5s;
  border: 1px solid #fff;
  &:hover {
    filter: brightness(1.3);
  }

  ${xSmall({
    width: "40px",
    height: "30px",
  })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Text>
        <P1>Sign up for News Letters.</P1>
        <P2>
          get E-mail updates about our latest shop and{" "}
          <Span>Special Offers.</Span>
        </P2>
      </Text>
      <Form>
        <Input placeholder="Enter your email..." required />
        <Button title="send">
          <IoMdSend
            style={{
              color: "#fff",
            }}
          />
        </Button>
      </Form>
    </Container>
  );
};

export default Newsletter;
