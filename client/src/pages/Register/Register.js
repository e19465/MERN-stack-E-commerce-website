import styled from "styled-components";
import REGBACK from "../../assests/reg.png";
import { Link } from "react-router-dom";

const Contaier = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(dodgerblue, #fff);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url(${REGBACK}) no-repeat center center / cover;
  background-size: 70%;
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border: 1px solid midnightblue;
  width: 70%;
  height: 70%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  transition: all 1s;
`;

const Title = styled.h1`
  color: midnightblue;
  font-weight: 700;
  width: 100%;
  height: 50px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const Input = styled.input`
  min-width: 48%;
  color: #333;
  font-size: 17px;
  width: 40%;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
  background-color: #f5f5f5;

  &::placeholder {
    font-size: 14px;
    color: #333;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 40px;
  align-self: flex-start;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid midnightblue;
  background-color: transparent;
  color: midnightblue;
  font-weight: 700;
  transition: all 1s;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: teal;
    color: #fff;
  }
`;

const Agreement = styled.p`
  color: midnightblue;
  padding: 10px;
  letter-spacing: 1px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 900;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: darkred;
  font-weight: 700;
`;

const Register = () => {
  return (
    <Contaier>
      <Left />
      <Right>
        <Wrapper>
          <Title>Create an account</Title>
          <Form>
            <InputWrapper>
              <Input type="text" placeholder="first name" required />
              <Input type="text" placeholder="last name" required />
              <Input type="text" placeholder="user name" required />
              <Input
                type="password"
                placeholder="password"
                required
                autoComplete="off"
                autoCorrect="off"
              />
              <Input
                type="password"
                placeholder="confirm password"
                required
                autoComplete="off"
                autoCorrect="off"
              />
              <Input type="email" placeholder="email..." required />
            </InputWrapper>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the{" "}
              <StyledLink>Privacy Policy.</StyledLink>
            </Agreement>
            <Button type="submit">create</Button>
          </Form>
        </Wrapper>
      </Right>
    </Contaier>
  );
};

export default Register;
