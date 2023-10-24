import styled from "@emotion/styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInBasicForm from "../components/sign/SignInBasicForm";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase";
import { setUserInfo } from "../features/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [userData, setUserData] = useState({}); //로그인 한 후의 정보를 담아준다.

  const provider = new GoogleAuthProvider(); //GoogleAuthProvider를 호출하고 provider 인스턴스 생성함

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

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        // google 로그인 해줄 때 로그인 정보가 여기에 담긴다.
        setUserData(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // user 정보가 있으면 "/" 경로로 가기
      console.log(user);
      if (!user) {
        navigate("/signIn");
      } else if (user && pathname === "/signIn") {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
      //useEffect 훅의 cleanup 함수.
      //컴포넌트가 언마운트될 때 또는 두 번째 매개변수로 전달한 배열 내의 값이 변경될 때 실행
      //여기서는 unsubscribe 함수를 호출하여 Firebase의 onAuthStateChanged 구독을 해제한다.
      //이것은 불필요한 리소스 낭비와 메모리 누수를 방지하는 기능을 함
    };
  }, [pathname]);

  return (
    <SignInStyle>
      <p className={"main-title"}>3 LINE DIARY</p>
      <SignInBasicForm
        getDataForm={handleSignIn}
        firebaseError={firebaseError}
      />
      <div className={"wrap-btn"}>
        <Link className={"link"} to={"/signUp"}>
          회원가입
        </Link>
        |<Link onClick={handleAuth}>Google로 로그인하기</Link>
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
