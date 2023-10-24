import React, { useCallback, useState } from "react";
import styled from "styled-components";
import InputBottomLine from "../common/input/InputBottomLine";
import BtnPlain from "../common/buttons/BtnPlain";
import { useLocation } from "react-router-dom";

const SignInBasicForm = ({ getDataForm, firebaseError }) => {
  const initialState = {
    username: "",
    password: "",
  };
  // const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(initialState);
  // const [errorMsg, setErrorMsg] = useState("");
  // const [userErrorMsg, setUserErrorMsg] = useState("");
  // const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  // const [disabled, setDisabled] = useState(false);
  const { username, password } = inputValue;

  const handleChangeInput = useCallback(
    (e) => {
      const nextInputValue = {
        ...inputValue,
        [e.target.name]: e.target.value,
      };
      setInputValue(nextInputValue);
      console.log(e.target.value);
      console.log(username);
      console.log(password);
      console.log(inputValue);
    },
    [inputValue]
  );

  const handleSubmitSignIn = (e) => {
    getDataForm(username, password);
    e.preventDefault();
  };

  return (
    <FormStyle>
      <div>
        {/*<input onChange={handleChangeInput} ref={inputRef} value={inputValue.username} type={'text'} name={'username'}></input>*/}
        <InputBottomLine
          onChange={handleChangeInput}
          value={username}
          type={"text"}
          name={"username"}
          placeholder={"아이디"}
        />
        {/*{userErrorMsg && <p className={'error-msg'}>{userErrorMsg}</p>}*/}
        <InputBottomLine
          onChange={handleChangeInput}
          value={password}
          type={"password"}
          name={"password"}
          placeholder={"비밀번호"}
        />
        {/* {pwdErrorMsg && <p className={" error-msg"}>{pwdErrorMsg}</p>} */}
      </div>
      {/* {errorMsg && <p className={"error-msg"}>{errorMsg}</p>} */}
      <BtnPlain
        onClick={handleSubmitSignIn}
        // disabled={disabled}
        width={"100%"}
      >
        로 그 인
      </BtnPlain>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  min-height: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 30px;
  border-radius: 20px;
  .login-btn {
    margin-top: 50px;
  }
`;

export default SignInBasicForm;
