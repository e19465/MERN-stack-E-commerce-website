import styled from "styled-components";
import LOGBACK from "../../assests/log.png";
import { Link } from "react-router-dom";

const Contaier = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(limegreen, #fff);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url(${LOGBACK}) no-repeat center center / cover;
  background-size: 60%;
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
  width: 60%;
  height: 60%;
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
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0;
`;

const Input = styled.input`
  min-width: 100%;
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
  width: 100%;
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

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: darkred;
  font-weight: 700;
`;

const Reg = styled.p`
  width: 100%;
  padding: 5px 0;
  font-size: 15px;
  color: midnightblue;
  font-weight: 700;
`;

const Login = () => {
  return (
    <Contaier>
      <Left />
      <Right>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <InputWrapper>
              <Input type="text" placeholder="user name" required />
              <Input
                type="password"
                placeholder="password"
                required
                autoComplete="off"
                autoCorrect="off"
              />
            </InputWrapper>
            <Button type="submit">login</Button>
          </Form>
          <Reg>
            Do not have an account? <StyledLink>Register Here.</StyledLink>
          </Reg>
          <Reg>
            Forgot Password? <StyledLink>Reset Here.</StyledLink>
          </Reg>
        </Wrapper>
      </Right>
    </Contaier>
  );
};

export default Login;
