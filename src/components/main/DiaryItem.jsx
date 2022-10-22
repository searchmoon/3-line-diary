import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ list }) => {
  const navigate = useNavigate();

  const handleGoDetail = (list) => {
    navigate(`/diaryDetail/${list.id}`, {
      state: {
        value: list.value,
        id: list.id,
        date: list.date,
        dateformat: list.dateformat,
      },
    });
  };
  return (
    <Layout onClick={() => handleGoDetail(list)}>
      <Li>
        <pre>{list.value}</pre>
        <p>{list.date}</p>
      </Li>
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
`;
const Li = styled.li`
  background-color: gray;
  margin: 10px;
  max-width: 400px;
  width: 100%;
  .wrap-diarylist {
    height: 100%;
    min-height: 100px;
    background-color: gray;
    position: relative;
    padding-bottom: 30px;
    white-space: pre-line;

    text-area {
      white-space: pre-line;
    }
  }
  .btn-box {
    position: absolute;
    right: 5px;
    bottom: 5px;
    button {
      margin-left: 3px;
    }
  }
`;
export default DiaryItem;
