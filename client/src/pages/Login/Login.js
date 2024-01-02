import styled from "styled-components";
import LOGBACK from "../../assests/log.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../Redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

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
  &:disabled {
    background-color: #000;
    color: #fff;
    cursor: not-allowed;
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

const InfoP = styled.div`
  font-size: 17px;
  color: darkred;
  font-weight: bolder;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 7px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

const Login = () => {
  const { isFetching, isError } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const LOGIN_URL = "http://localhost:5000/api/auth/login";
  const handleLogin = async (e) => {
    dispatch(loginStart());
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post(LOGIN_URL, {
        username: username,
        password: password,
      });
      dispatch(loginSuccess(response.data));
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } catch (err) {
      dispatch(loginFailure());
      console.log(err);
    }
  };

  return (
    <Contaier>
      <Left />
      <Right>
        <Wrapper>
          <Title>Sign In</Title>
          <Form onSubmit={handleLogin}>
            <InputWrapper>
              <Input
                type="text"
                placeholder="user name"
                ref={usernameRef}
                required
              />
              <Input
                type="password"
                placeholder="password"
                required
                autoComplete="off"
                autoCorrect="off"
                ref={passwordRef}
              />
            </InputWrapper>
            <Button type="submit" disabled={isFetching}>
              login
            </Button>
          </Form>
          <Reg>
            Do not have an account? <StyledLink>Register Here.</StyledLink>
          </Reg>
          <Reg>
            Forgot Password? <StyledLink>Reset Here.</StyledLink>
          </Reg>
          {isFetching && <InfoP>Loading...</InfoP>}
          {isError && !isFetching && <InfoP>Error! try again.</InfoP>}
        </Wrapper>
      </Right>
    </Contaier>
  );
};

export default Login;
