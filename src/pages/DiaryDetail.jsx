import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import {
  doneEditList,
  deleteList,
  setStorageList,
  getDiaryItem,
} from "../features/diarySlice";

function DiaryDetail() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = location.state;

  console.log("item", item);
  console.log("location state", location.state);
  console.log("location", location);

  const lists = useSelector((state) => state.diary.lists);

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

  const [isEditing, setIsEditing] = useState(false);
  const [doneEditText, setDoneEditText] = useState(item.value);

  // const diaryId = location.state.id;
  // const value = location.state.value;
  // const date = location.state.date;
  const handleEditText = useCallback(() => {
    setIsEditing(!isEditing);
  }, []);
  const handleDoneEdit = useCallback(
    (item) => {
      dispatch(
        doneEditList({
          value: doneEditText,
          id: item.id,
          date: item.date,
        })
      );
      setIsEditing(!isEditing);
    },
    [dispatch(doneEditList)]
  );
  const handleDeleteList = useCallback(
    (item) => {
      dispatch(
        deleteList({
          value: item.value,
          id: item.id,
          date: item.date,
        })
      );
      console.log(item);
      alert("삭제 완료");
    },
    [dispatch(deleteList)]
  );
  const handleTextChange = useCallback(
    (e) => {
      setDoneEditText(e.target.value);
    },
    [setDoneEditText]
  );

  useEffect(() => {
    console.log("params", id);
    dispatch(getDiaryItem(id));
  }, []);

  return (
    <DiaryDetailStyle>
      <Header leftIcon={"FaChevronLeft"} />
      <div className="wrap-diarylist">
        {isEditing ? (
          <textarea
            onChange={handleTextChange}
            value={doneEditText}
            height={"auto"}
          ></textarea>
        ) : (
          <pre>{doneEditText}</pre>
        )}
        <br />
        <div className="btn-box">
          <span>{item.date}</span>
          {isEditing ? (
            <button onClick={() => handleDoneEdit(item)}>수정완료</button>
          ) : (
            <button onClick={handleEditText}>수정</button>
          )}
          <button onClick={() => handleDeleteList(item)}>삭제</button>
        </div>
      </div>
    </DiaryDetailStyle>
  );
}

const DiaryDetailStyle = styled.div`
  background-color: #f7efeb;
  .wrap-diarylist {
    height: 100%;
    min-height: calc(100vh - 60px);
  }
`;

export default DiaryDetail;
