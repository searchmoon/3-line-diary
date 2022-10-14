import React, { useCallback, useState, useEffect } from "react";
import { DefaultLayout } from "../layout/layout";
import styled from "styled-components";
import { respSize } from "../common/common";
import { useDispatch, useSelector } from "react-redux";
import { addDiaryList, setStorageList } from "../../features/diarySlice";
import { Calendar } from "react-calendar";
import "./calendar.css";
import moment from "moment";
import DiaryItem from "./DiaryItem";

function MainDiary() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.diary.lists);

  const [textValue, setTextValue] = useState("");
  const [value, onChange] = useState(new Date());

  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };
  useEffect(() => {
    if (jsonLocalStorage.getItem("diaryList")) {
      dispatch(setStorageList(jsonLocalStorage.getItem("diaryList")));
    }
    //if(jsonLocalStorage.getItem('diaryList'))의 값이 있을때만 불러오기!
  }, []);

  useEffect(() => {
    jsonLocalStorage.setItem("diaryList", lists);
  }, [lists]);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
    console.log("이거", e.target.value);
    // console.log("리스트", diaryList);
  };
  console.log(textValue);

  const handleDoneClick = () => {
    dispatch(
      addDiaryList({
        value: textValue,
        id: new Date().getTime(),
        date: moment(value).format("YYYY/ MM/ DD"),
        dateformat: moment(value).format("YYMMDD"),
      })
    );
    console.log("왜 안돼?");
    console.log(textValue);
    // console.log(diaryList);
    setTextValue("");
  };

  return (
    <MainLayout>
      <DefaultLayout>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
          calendarType="US"
          locale="en-US"
        />

        {console.log("날짜", moment(value))}
        <div>
          {moment(value).format("YYYY-MM-DD")}
          {" 's Diary"}
        </div>
        <div className="diary-box">
          <textarea
            type="text"
            rows={7}
            placeholder={"write your day"}
            value={textValue}
            onChange={handleTextChange}
          ></textarea>
          {textValue && (
            <button className="done-btn" onClick={handleDoneClick}>
              Done
            </button>
          )}
        </div>
        <Ul>
          {lists.map((list) => (
            <DiaryItem list={list} key={list.id} value={value} />
          ))}
        </Ul>
      </DefaultLayout>
    </MainLayout>
  );
}

const MainLayout = styled.div`
dia  
margin: 0 auto;

  ${DefaultLayout} {
    display: flex;
    flex-direction: column;
    background-color: lightsalmon;
    align-items: center;
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
    .done-btn {
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
      .done-btn {
      }
    }
  }
`;
const Ul = styled.ul`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  // grid-template-row: repeat(auto-fill, minmax(300px, 1fr));
  // grid-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  background-color: ivory;
  // margin: 0 auto;
  justify-content: center;
  // flex-direction: column;
`;

export default MainDiary;
