import React, { useCallback, useState, useEffect } from "react";
import { DefaultLayout } from "../layout/layout";
import styled from "styled-components";
import { respSize } from "../common/common";
import { useDispatch, useSelector } from "react-redux";
import { addDiaryList, setStorageList } from "../../features/diarySlice";
import { Calendar } from "react-calendar";
import "../../styles/calendar.css";
import moment from "moment";
import DiaryItem from "./DiaryItem";
import Pagination from "../Pagination";

function MainDiary() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.diary.lists);
  console.log("lists", lists);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  // ex) 20 = 2 * 10
  // ex) 12 = 2 * 6
  const firstPostIndex = lastPostIndex - postsPerPage;
  // ex) 10 = 20 - 10
  // ex) 6 = 12 - 6
  const currentPosts = lists.slice(firstPostIndex, lastPostIndex);
  console.log("currentPosts", currentPosts);

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

  const handleTextChange = useCallback(
    (e) => {
      setTextValue(e.target.value);
    },
    [setTextValue]
  );

  const handleDoneClick = useCallback(() => {
    dispatch(
      addDiaryList({
        value: textValue,
        id: new Date().getTime(),
        date: moment(value).format("YYYY/ MM/ DD/ ddd"),
        dateformat: moment(value).format("YYMMDD"),
      })
    );
    setTextValue("");
  }, [dispatch(addDiaryList)]);

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
        <div className={"selected-date"}>
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
          {currentPosts.map((list) => (
            <DiaryItem list={list} key={list.id} value={value} />
          ))}
        </Ul>
        {console.log("currentPosts", currentPosts)}
        <Pagination
          totalPosts={lists.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </DefaultLayout>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  margin: 0 auto;
  color: #444;
  line-height: 1.4;
  background-color: #f8ede2;
  min-height: calc(100vh - 60px);
  ${DefaultLayout} {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  .selected-date {
    margin-top: 12px;
    font-size: 20px;
  }
  .diary-box {
    margin: 0 auto;
    width: 100%;
    textarea {
      border-radius: 5px;
      border: 1px solid #ddd;
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
      color: #40684a;
      font-size: 16px;
      font-weight: 700;
      background-color: #dbe9de;
      border: 1px solid #ccc;
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
  max-width: 400px;
  width: 100%;
  //display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  //grid-template-columns: repeat(1, 1fr);
  //grid-template-row: repeat(auto-fill, minmax(300px, 1fr));
  //grid-gap: 10px;
  //display: flex;
  //flex-wrap: wrap;
  //max-width: 900px;
  //background-color: ivory;

  // margin: 0 auto;
  //justify-content: center;
  // flex-direction: column;
  padding: 8px;
`;

export default MainDiary;
