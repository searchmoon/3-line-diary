import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { DefaultLayout } from "../components/layout/Layout";
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
  }, []);

  useEffect(() => {
    jsonLocalStorage.setItem("diaryList", lists);
  }, [lists]);

  const [isEditing, setIsEditing] = useState(false);
  const [doneEditText, setDoneEditText] = useState(item.value);

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
          dateformat: item.dateformat,
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
          dateformat: item.dateformat,
        })
      );
      alert("Delete completed");
      window.location.href = "/3-line-diary";
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
    dispatch(getDiaryItem(id));
  }, []);

  return (
    <DiaryDetailStyle>
      <Header leftIcon={"FaChevronLeft"} />
      <DefaultLayout>
        <div className="wrap-diary-list">
          <div className="text-area">
            {isEditing ? (
              <textarea
                onChange={handleTextChange}
                value={doneEditText}
                height={"auto"}
              ></textarea>
            ) : (
              <pre>{doneEditText}</pre>
            )}
          </div>
          <div className="btn-box">
            <span>{item.date}</span>
            {isEditing ? (
              <button onClick={() => handleDoneEdit(item)}>Done</button>
            ) : (
              <button onClick={handleEditText}>Edit</button>
            )}
            <button onClick={() => handleDeleteList(item)}>Delete</button>
          </div>
        </div>
      </DefaultLayout>
    </DiaryDetailStyle>
  );
}

const DiaryDetailStyle = styled.div`
  background-color: ${(props) => props.theme.bgBody};
  min-height: calc(100vh - 60px);
  height: 100%;
  color: ${(props) => props.theme.text};
  line-height: 1.4;
  .wrap-diary-list {
    max-width: 600px;
    width: 100%;
    min-height: 30vh;
    height: 100%;
    background-color: ${(props) => props.theme.bgText};
    margin: 15px auto;
    border: 2px dashed ${(props) => props.theme.dashed};
    border-radius: 10px;
    position: relative;
    .text-area {
      textarea {
        border-radius: 5px;
        min-height: 200px;
        height: 100%;
        border: none;
        font-size: 16px;
        width: 100%;
        color: ${(props) => props.theme.text};
        padding: 8px 12px;
        display: block;
        &:focus {
          outline: none;
        }
      }
      pre {
        padding: 8px 12px;
      }
    }
    .btn-box {
      text-align: right;
      display: flex;
      align-items: center;
      position: absolute;
      right: 5px;
      bottom: 5px;
      span {
        margin-right: 5px;
      }
      button {
        color: ${(props) => props.theme.bgText};
        background-color: ${(props) => props.theme.lightDashed};
        display: inline-block;
        padding: 4px 8px;
        font-size: 16px;
        margin: 0 5px 5px 0;
        border-radius: 5px;
        border: 1px solid #bbb;
        &:active {
          background-color: ${(props) => props.theme.dashed};
          color: ${(props) => props.theme.bgText};
        }
      }
    }
  }
`;

export default DiaryDetail;
