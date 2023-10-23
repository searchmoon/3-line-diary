import React from "react";
import styled from "@emotion/styled";

const InputBottomLine = ({
  onChange,
  value,
  type,
  placeholder,
  name,
  ref,
  ...rest
}) => {
  return (
    <InputBottomLineStyle
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      ref={ref}
      {...rest}
    ></InputBottomLineStyle>
  );
};

const InputBottomLineStyle = styled.input`
  padding: 20px 10px;
  border: none;
  border-radius: 0;
  // border-bottom: 1px solid ${(props) => props.theme.lightDashed};
  border-bottom: 2px dashed gray;
  width: 100%;
  margin-bottom: 6px;
  &:focus {
    outline: none;
  }
`;

export default InputBottomLine;
