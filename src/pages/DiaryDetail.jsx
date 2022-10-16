import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
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
  const handleEditText = () => {
    setIsEditing(!isEditing);
  };
  const handleDoneEdit = (item) => {
    dispatch(
      doneEditList({
        value: doneEditText,
        id: item.id,
        date: item.date,
      })
    );
    setIsEditing(!isEditing);
  };
  const handleDeleteList = (item) => {
    dispatch(
      deleteList({
        value: item.value,
        id: item.id,
        date: item.date,
      })
    );
    console.log(item);
    alert("삭제 완료");
  };
  const handleTextChange = (e) => {
    setDoneEditText(e.target.value);
  };
  useEffect(() => {
    console.log("params", id);
    dispatch(getDiaryItem(id));
  }, []);

  return (
    <>
      <Header leftIcon={"FaChevronLeft"} />
      다이어리 상세페이지
      {isEditing ? (
        <>
          <div className="wrap-diarylist">
            <textarea
              onChange={handleTextChange}
              value={doneEditText}
              height={"auto"}
            ></textarea>
            <br />
            <div className="btn-box">
              <span>{item.date}</span>
              <button onClick={() => handleDoneEdit(item)}>수정완료</button>
              <button onClick={() => handleDeleteList(item)}>삭제</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="wrap-diarylist">
            {doneEditText}
            <br />
            <div className="btn-box">
              <span>{item.date}</span>
              {console.log(item.date)}
              <button onClick={handleEditText}>수정</button>
              <button onClick={() => handleDeleteList(item)}>삭제</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DiaryDetail;
