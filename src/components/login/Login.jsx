import React from "react";
import logo from "/assets/images/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  border: 2px solid #7b91a7;
  border-radius: 10px;
  margin-top: 7%;
  img {
    width: auto;
    height: 80px;
    margin-top: 90px;
    margin-bottom: 30px;
  }

  form {
    border-radius: 10px;
  }

  input {
    border: 2px solid #7b91a7;
    border-radius: 5px;
    padding: 10px 7px;
    margin-bottom: 30px;
    display: block;
    width: 93%;
  }

  button {
    border: 2px solid #003a75;
    border-radius: 5px;
    height: 39px;
    width: 100%;
    margin: 70px 0;
    color: white;
    background-color: #003a75;
    cursor: pointer;
  }

  p {
    color: #7b91a7;
    font-size: small;
    margin-bottom: 70px;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <LoginBox>
        <div>
          <img src={logo} alt="logo.png" />
          <form>
            <input type="text" placeholder="아이디" />

            <input type="password" placeholder="비밀번호" />

            <button onClick={()=> {navigate("/admin")}}>로그인</button>
          </form>
          <p>© 2023. (주)제이솔루션 all rights reserved.</p>
        </div>
      </LoginBox>
    </Container>
  );
}
