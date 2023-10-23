import styled from "styled-components";
import SignUpBasicForm from "../components/sign/SignUpBasicForm";

const SignUp = () => {
  return (
    <SignUpStyle>
      <p className={"main-title"}>3 LINE DIARY</p>
      <SignUpBasicForm />
    </SignUpStyle>
  );
};

const SignUpStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .main-title {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
export default SignUp;
