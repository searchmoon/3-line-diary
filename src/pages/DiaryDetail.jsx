import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { DefaultLayout } from "../components/layout/Layout";
import {
  doneEditList,
  deleteList,
  setStorageList,
  getDiaryItem,
} from "../features/diarySlice";
import ModalMsg from "../components/common/ModalMsg";
import useAlert from "../components/hooks/useAlert";

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
  }, []);

  useEffect(() => {
    jsonLocalStorage.setItem("diaryList", lists);
  }, [lists]);

  const [isEditing, setIsEditing] = useState(false);
  const [doneEditText, setDoneEditText] = useState(item.value);

  const handleEditText = useCallback(() => {
    setIsEditing(!isEditing);
  }, []);

  const { alert, handleAlert } = useAlert();

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
      handleAlert({
        message: "Edit success",
        time: undefined,
      });
    },
    [dispatch(doneEditList)]
  );

  // const { alert, handleAlert } = useAlert();

  const handleDeleteList = useCallback(
    (item, e) => {
      e.preventDefault();
      dispatch(
        deleteList({
          value: item.value,
          id: item.id,
          date: item.date,
          dateformat: item.dateformat,
        })
      );
      handleAlert({ message: "delete success", time: undefined, path: "/" });
    },
    [dispatch, navigate]
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
            <button onClick={(e) => handleDeleteList(item, e)}>Delete</button>
          </div>
        </div>
        {alert.show && <ModalMsg message={alert.message} />}
      </DefaultLayout>
    </DiaryDetailStyle>
  );
}

const DiaryDetailStyle = styled.div`
  background-color: ${(props) => props.theme.bgBody};
  min-height: calc(100vh - 60px);
  height: 100vh;
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
        background-color: ${(props) => props.theme.bgText};
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
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.lightDashed};
        display: inline-block;
        padding: 4px 8px;
        font-size: 16px;
        margin: 0 5px 5px 0;
        border-radius: 5px;
        border: 1px solid #bbb;
        &:active {
          background-color: ${(props) => props.theme.dashed};
          color: ${(props) => props.theme.text};
        }
      }
    }
  }
`;

export default DiaryDetail;
