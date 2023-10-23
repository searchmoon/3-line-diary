import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import InputBottomLine from "../common/input/InputBottomLine";
import BtnPlain from "../common/buttons/BtnPlain";

const SignInBasicForm = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState("");
  const [userErrorMsg, setUserErrorMsg] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChangeInput = useCallback(
    (e) => {
      const nextInputValue = {
        ...inputValue,
        [e.target.name]: e.target.value,
      };
      setInputValue(nextInputValue);
      console.log(e.target.value);
      console.log(inputValue.username);
      console.log(inputValue.password);
      console.log(inputValue);
    },
    [inputValue]
  );

  const handleSubmitLoginInfo = useCallback();

  return (
    <FormStyle>
      <div>
        {/*<input onChange={handleChangeInput} ref={inputRef} value={inputValue.username} type={'text'} name={'username'}></input>*/}
        <InputBottomLine
          onChange={handleChangeInput}
          value={inputValue.username}
          type={"text"}
          name={"username"}
          placeholder={"아이디"}
        />
        {/*{userErrorMsg && <p className={'error-msg'}>{userErrorMsg}</p>}*/}
        <InputBottomLine
          onChange={handleChangeInput}
          value={inputValue.password}
          type={"password"}
          name={"password"}
          placeholder={"비밀번호"}
        />
        {pwdErrorMsg && <p className={" error-msg"}>{pwdErrorMsg}</p>}
      </div>
      {errorMsg && <p className={"error-msg"}>{errorMsg}</p>}
      <BtnPlain
        onClick={handleSubmitLoginInfo}
        disabled={disabled}
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
