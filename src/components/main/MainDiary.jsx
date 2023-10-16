import React, { useCallback, useState, useEffect } from "react";
import { DefaultLayout } from "../layout/Layout";
import styled from "styled-components";
import { respSize } from "../common/Common";
import { useDispatch, useSelector } from "react-redux";
import { addDiaryList, setStorageList } from "../../features/diarySlice";
import { Calendar } from "react-calendar";
import "../../styles/calendar.css";
import moment from "moment";
import DiaryItem from "./DiaryItem";
import Pagination from "../Pagination";
import Header from "../Header";

function MainDiary(props) {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.diary.lists);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  //pagenation 하기
  const lastPostIndex = currentPage * postsPerPage;
  // ex) 20 = 2 * 10
  // ex) 12 = 2 * 6
  const firstPostIndex = lastPostIndex - postsPerPage;
  // ex) 10 = 20 - 10
  // ex) 6 = 12 - 6
  const currentPosts = lists.slice(firstPostIndex, lastPostIndex);
  const onePageList = postsPerPage * 5;
  const current5Page = lists.slice(onePageList);
  //  totalPosts(10) 나누기 postsPerPage(3) = 에서 올림 (ceil) 하면 총 페이지 수(4) 나옴.
  //  pages 가 5 이상일때 페이지네이션 하기. 1~5까지, 6~10까지 이런식으로. 페이지네이션 된걸 또 페이지네이션?
  // totalPosts가  postsPerPage(3) * 5 이상일 때부터 pagination. 어렵넹ㅎ
  // pages 가 5 이상일때

  const [textValue, setTextValue] = useState("");

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
  //moment 라이브러리 사용하기 위한 useState(start)
  const [value, onChange] = useState(new Date());
  //(end)
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
      <Header />
      <DefaultLayout>
        <button onClick={props.handleClick}>다크모드 토글</button>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
          calendarType="US"
          locale="en-US"
        />
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
        <div className={"imgimg"}></div>
        <Ul>
          {currentPosts.map((list) => (
            <DiaryItem list={list} key={list.id} value={value} />
          ))}
        </Ul>
        <Pagination
          totalPosts={lists.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </DefaultLayout>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  color: ${(props) => props.theme.bgText};
  line-height: 1.4;
  width: 100%;
  background-color: ${(props) => props.theme.bgBody};
  min-height: calc(100vh - 60px);
  height: 100%;
  //background: url("/images/black-bg.png") no-repeat;
  //background-size: cover;
  ${DefaultLayout} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .selected-date {
    margin-top: 12px;
    font-size: 20px;
    background-size: cover;
    color: ${(props) => props.theme.text};
  }
  .diary-box {
    margin: 0 auto;
    width: 100%;
    textarea {
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.lightDashed};
      max-width: 400px;
      font-size: 16px;
      width: 100%;
      line-height: 1.6;
      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.bgText};
      padding: 12px;
      display: block;
      margin: 20px auto 15px;
      &:focus {
        outline: 1px solid gray;
      }
    }
    .done-btn {
      color: ${(props) => props.theme.text};
      font-size: 14px;
      font-weight: 700;
      background-color: ${(props) => props.theme.bgText};
      border: 1px solid ${(props) => props.theme.lightDashed};
      border-radius: 10px;
      padding: 6px 17px;
      content-visibility: auto;
      display: block;
      margin: 0 auto 12px;
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
  max-width: 370px;
  width: 100%;
  padding: 8px;
`;

export default MainDiary;
