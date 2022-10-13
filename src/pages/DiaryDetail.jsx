import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getDiaryItem } from "../features/diarySlice";

function DiaryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    dispatch(getDiaryItem(id));
  }, []);

  const item = useSelector((state) => state.diary.item);
  console.log("item", item);

  return (
    <>
      <Header />
      다이어리 상세
    </>
  );
}

export default DiaryDetail;
