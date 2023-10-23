import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import SignInBasicForm from "../components/sign/SignInBasicForm";

const SignIn = () => {
  return (
    <SignInStyle>
      <p className={"main-title"}>3 LINE DIARY</p>
      <SignInBasicForm />
      <div className={"wrap-btn"}>
        <Link className={"link"} to={"/signUp"}>
          회원가입 | Google로 로그인하기
        </Link>
      </div>
    </SignInStyle>
  );
};

const SignInStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-color: ${(props) => props.theme.bgBody};
  .main-title {
    font-size: 24px;
    margin-bottom: 40px;
    color: ${(props) => props.theme.bgText};
  }
  .wrap-btn {
    margin-top: 30px;
    display: flex;
    width: 100%;

    justify-content: center;
    font-size: 10px;
    .link {
      font-size: 14px;
      color: ${(props) => props.theme.bgText};
    }
  }
`;
export default SignIn;
