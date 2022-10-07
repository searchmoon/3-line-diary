import React, { useCallback, useState } from "react";
import styled from "styled-components";

const DiaryList = ({ list, diaryList, setDiaryList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [doneEditText, setDoneEditText] = useState(list.value);

  const handleEditText = () => {
    setIsEditing(!isEditing);
  };
  const handleDoneEdit = (list) => {
    setDiaryList(
      [
        ...diaryList.filter((item) => item.id !== list.id),
        {
          value: doneEditText,
          id: list.id,
        },
      ].sort((a, b) => a.id - b.id)
    );
    setIsEditing(!isEditing);
  };
  const handleDeleteList = (list) => {
    setDiaryList(diaryList.filter((item) => item.id !== list.id));
  };
  const handleTextChange = (e) => {
    setDoneEditText(e.target.value);
  };
  return (
    <Layout>
      <Li>
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
                <button onClick={() => handleDoneEdit(list)}>수정완료</button>
                <button onClick={() => handleDeleteList(list)}>삭제</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="wrap-diarylist">
              {doneEditText}
              <br />
              <div className="btn-box">
                <button onClick={handleEditText}>수정</button>
                <button onClick={() => handleDeleteList(list)}>삭제</button>
              </div>
            </div>
          </>
        )}
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
export default DiaryList;
