import styled from "styled-components";
import SignUpBasicForm from "../components/sign/SignUpBasicForm";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../features/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const auth = getAuth(app);

  const dispatch = useDispatch();

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUserInfo({
            email: userCredential.user.email,
            id: userCredential.user.uid,
            token: userCredential.user.refreshToken,
          })
        );
        // dispatch(setUserId(userCredential.user.uid));
        navigate("/signIn");
      })
      .catch((error) => {
        return error && setFirebaseError(error?.message);
      });
  };
  return (
    <SignUpStyle>
      <p className={"main-title"}>3 LINE DIARY</p>
      <SignUpBasicForm
        getDataForm={handleSignUp}
        firebaseError={firebaseError}
      />
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
