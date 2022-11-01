import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Calendar } from "react-calendar";
import styled from "styled-components";
import { DefaultLayout } from "../components/layout/layout";
import DiaryItem from "../components/main/DiaryItem";

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const lists = useSelector((state) => state.diary.lists);

  let selectedDate = moment(value).format("YYMMDD");
  const view = lists.filter((list) => selectedDate == list.dateformat);
  console.log("selectedDate", typeof selectedDate);
  console.log("lists", lists);
  console.log("value", value);
  console.log("view", view);
  return (
    <CalendarStyle>
      <Header leftIcon={"FaChevronLeft"} />
      <DefaultLayout>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
          calendarType="US"
          locale="en-US"
        />
        <h3>View by date</h3>
        <p>{moment(value).format("YYYY-MM-DD")}'s Diary</p>

        <Ul>
          {view.length ? (
            view?.map((list) => (
              <DiaryItem list={list} key={list.id} value={value} />
            ))
          ) : (
            <p className="notice">there's no diary-list</p>
          )}
        </Ul>
      </DefaultLayout>
    </CalendarStyle>
  );
}
const CalendarStyle = styled.div`
  //background-color: #f7efeb;
  background-color: #fff;
  background-color: #f5f5f5;
  color: #444;
  min-height: calc(100vh - 60px);
  height: 100%;
  width: 100%;
  ${DefaultLayout} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    margin: 20px 0;
    font-size: 20px;
  }
  p {
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
  }
`;
const Ul = styled.ul`
  max-width: 400px;
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  .notice {
    margin-top: 10px;
    background-color: #999;
    padding: 10px 0;
    color: #fff;
  }
`;
export default CalendarPage;
