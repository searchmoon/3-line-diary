import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ list }) => {
  const navigate = useNavigate();

  const handleGoDetail = useCallback((list) => {
    navigate(`/diaryDetail/${list.id}`, {
      state: {
        value: list.value,
        id: list.id,
        date: list.date,
        dateformat: list.dateformat,
      },
    });
  }, []);
  return (
    <Li onClick={() => handleGoDetail(list)}>
      <pre className={"content"}>{list.value}</pre>
      <p className={"date"}>{list.date}</p>
    </Li>
  );
};
const Li = styled.li`
  background-color: white;
  width: 100%;
  min-height: 70px;
  height: 100%;
  margin-bottom: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px dashed #ccc;
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
