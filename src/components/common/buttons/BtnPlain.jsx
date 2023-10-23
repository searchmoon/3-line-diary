import React from "react";
import styled from "@emotion/styled";

const BtnPlain = ({
  children,
  icon,
  width,
  padding,
  disabled,
  color,
  onClick,
  ...rest
}) => {
  return (
    <Button
      width={width}
      padding={padding}
      disabled={disabled}
      color={color}
      onClick={onClick}
      {...rest}
    >
      {icon && <div className={"icon-box"}>{icon}</div>}
      <p className={"txt"}>{children}</p>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : "15px 20px")};
  border-radius: 5px;
  // background-color: ${(props) => props.theme.lightDashed};
  background-color: gray;
  color: white;
  margin-top: 10px;
  width: ${(props) => props.width};
  .icon-box {
    color: ${(props) => props.theme.lightDashed};
    margin-right: 10px;
  }
  .txt {
    color: ${(props) => props.theme.lightDashed};
    font-weight: 600;
  }
`;

export default BtnPlain;

// background-color: ${(props) =>
//   props.disabled
//     ? Colors.disabled
//     : props.color
//     ? props.color
//     : Colors.primaryMain};
