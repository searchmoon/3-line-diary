import React, { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ list }) => {
  const navigate = useNavigate();

  const handleGoDetail = useCallback(() => {
    navigate(`/diaryDetail/${list.id}`, {
      state: {
        value: list.value,
        id: list.id,
        date: list.date,
        dateformat: list.dateformat,
      },
    });
  }, [navigate, list]);
  return (
    <Li onClick={handleGoDetail}>
      <pre className={"content"}>{list.value}</pre>
      <p className={"date"}>{list.date}</p>
    </Li>
  );
};

const Li = styled.li`
  background-color: ${(props) => props.theme.bgText};
  color: ${(props) => props.theme.text};
  width: 100%;
  min-height: 70px;
  height: 100%;
  margin-bottom: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px dashed ${(props) => props.theme.lightDashed};
  cursor: pointer;
  border-radius: 10px;
  .content {
    white-space: pre-line;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
  }
  .date {
    margin-top: 10px;
    text-align: right;
  }
`;
export default DiaryItem;
