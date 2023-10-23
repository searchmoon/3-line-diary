import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import SignInBasicForm from "../components/sign/SignInBasicForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import { setUserInfo } from "../features/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();

  const auth = getAuth(app);

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUserInfo({
            email: userCredential.user.email,
            id: userCredential.user.uid,
            token: userCredential.user.refreshToken,
          })
        );
        navigate("/");
        console.log("로그인 완료");
      })
      .catch((error) => {
        return error && setFirebaseError("에러!!!");
      });
  };

  return (
    <SignInStyle>
      <p className={"main-title"}>3 LINE DIARY</p>
      <SignInBasicForm
        getDataForm={handleSignIn}
        firebaseError={firebaseError}
      />
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
