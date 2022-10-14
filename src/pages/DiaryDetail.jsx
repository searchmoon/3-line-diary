import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { getDiaryItem } from "../features/diarySlice";

function DiaryDetail() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const diaryId = location.state.id;
  const value = location.state.value;
  const date = location.state.date;

  useEffect(() => {
    console.log("params", id);
    dispatch(getDiaryItem(id));
  }, []);

  const item = useSelector((state) => state.diary.item);
  console.log("item", item);

  return (
    <>
      <Header />
      다이어리 상세
      <p>{diaryId}</p>
      <p>{value}</p>
      <p>{date}</p>
    </>
  );
}

export default DiaryDetail;
