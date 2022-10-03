import React, { useCallback, useState } from "react";
import { DefaultLayout } from "../layout/layout";
import styled from "styled-components";
import { respSize } from "../common/common";
import DiaryList from "./DiaryList";

function MainDiary() {
  const [textValue, setTextValue] = useState("");
  const [diaryList, setDiaryList] = useState([]);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
    console.log("이거", e.target.value);
    console.log("리스트", diaryList);
  };
  console.log(textValue);

  const handleClick = () => {
    setDiaryList([
      ...diaryList,
      {
        value: textValue,
        id: new Date().getTime(),
        isEdit: false,
      },
    ]);
    console.log("왜 안돼?");
    console.log(textValue);
    console.log(diaryList);
    // setTextValue("");
  };

  return (
    <MainLayout>
      <DefaultLayout>
        <div className="diary-box">
          <textarea
            type="text"
            rows={7}
            placeholder={"write your day"}
            value={textValue}
            onChange={handleTextChange}
          ></textarea>
          {textValue && <button onClick={handleClick}>Done</button>}
        </div>
        {diaryList.map((list) => (
          <DiaryList list={list} key={list.id} />
        ))}
      </DefaultLayout>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  ${DefaultLayout} {
    // display: flex;
    // flex-direction: column;
    background-color: blue;
  }
  .diary-box {
    margin: 0 auto;
    background-color: skyblue;
    width: 100%;
    textarea {
      border-radius: 5px;
      border: 1px solid #aaa;
      max-width: 400px;
      font-size: 16px;
      width: 100%;
      line-height: 1.6;
      color: #444;
      margin-bottom: 10px;
      padding: 12px;
      display: block;
      margin: 20px auto 15px;
      &:focus {
        outline: 1px solid gray;
      }
    }
    button {
      color: white;
      font-size: 16px;
      background-color: burlywood;
      border: none;
      border-radius: 5px;
      padding: 7px 20px;
      content-visibility: auto;
      display: block;
      margin: 0 auto 15px;
    }
  }

  @media (max-width: ${respSize.mobile}px) {
    .diary-box {
      textarea {
        padding: 8px;
        font-size: 14px;
        width: 100%;
        line-height: 1.4;
      }
      button {
      }
    }
  }
`;
export default MainDiary;
