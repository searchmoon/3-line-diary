import React, { useCallback, useState } from "react";
import styled from "styled-components";

function DiaryList({ list, diaryList, setDiaryList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [doneEditText, setDoneEditText] = useState(list.value);

  const handleEditText = () => {
    setIsEditing(!isEditing);
  };
  const handleDoneEdit = () => {
    setDiaryList([
      ...diaryList,
      {
        value: doneEditText,
        id: list.id,
      },
    ]);
    setIsEditing(!isEditing);
  };
  const handleDeleteList = (list) => {
    setDiaryList(diaryList.filter((item) => item.id !== list.id));
  };
  const handleTextChange = (e) => {
    setIsEditing(e.target.value);
  };

  return (
    <Layout>
      <Li>
        <div>
          {isEditing ? (
            <>
              <textarea onChange={handleTextChange}>{doneEditText}</textarea>
              <br />
              <button onClick={handleDoneEdit}>수정완료</button>
            </>
          ) : (
            <>
              {doneEditText}
              <br />
              <button onClick={handleEditText}>수정</button>
            </>
          )}
          <button onClick={() => handleDeleteList(list)}>삭제</button>
        </div>
      </Li>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
`;
const Li = styled.li`
  background-color: gray;
  margin: 10px;
  width: 100%;
`;

export default DiaryList;
