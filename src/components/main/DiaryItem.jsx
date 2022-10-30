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
  margin: 7px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  cursor: pointer;
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
