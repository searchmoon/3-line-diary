import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import InputBottomLine from "../common/input/InputBottomLine";
import BtnPlain from "../common/buttons/BtnPlain";
import { useForm } from "react-hook-form";

const SignUpBasicForm = ({ getDataForm, firebaseError }) => {
  const initialState = {
    username: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(initialState);
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
    [inputValue, username, password]
  );

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    console.log(firebaseError);
    getDataForm(username, password);
  };

  return (
    <FormStyle>
      <div>
        <InputBottomLine
          onChange={handleChangeInput}
          value={username}
          type={"text"}
          name={"username"}
          placeholder={"아이디"}
        />
        {firebaseError.includes("auth/invalid-email") && (
          <p>this is invalid-email</p>
        )}
        <InputBottomLine
          onChange={handleChangeInput}
          value={password}
          type={"password"}
          name={"password"}
          placeholder={"비밀번호"}
        />
        {firebaseError.includes("least 6") && (
          <p>Password should be at least 6 characters</p>
        )}
        {/* setInterval */}

        {/* {pwdErrorMsg && <p className={" error-msg"}>{pwdErrorMsg}</p>} */}
      </div>
      {/* {errorMsg && <p className={"error-msg"}>{errorMsg}</p>} */}
      <BtnPlain
        onClick={handleSubmitSignUp}
        firebaseError={firebaseError}
        // disabled={disabled}
        width={"100%"}
      >
        회 원 가 입
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
  .login-btn {
    margin-top: 50px;
  }
`;

export default SignUpBasicForm;
