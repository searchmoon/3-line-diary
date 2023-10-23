import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Calendar } from "react-calendar";
import styled from "styled-components";
import { DefaultLayout } from "../components/layout/Layout";
import DiaryItem from "../components/main/DiaryItem";
import { SentimentDissatisfied } from "@mui/icons-material";

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const lists = useSelector((state) => state.diary.lists);

  let selectedDate = moment(value).format("YYMMDD");
  const view = lists.filter((list) => selectedDate == list.dateformat);

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
            <>
              <p className="notice">
                there's no diary-list
                <SentimentDissatisfied
                  style={{ width: "20px", height: "20px" }}
                />
              </p>
            </>
          )}
        </Ul>
      </DefaultLayout>
    </CalendarStyle>
  );
}
const CalendarStyle = styled.div`
  background-color: ${(props) => props.theme.bgBody};
  color: ${(props) => props.theme.text};
  min-height: calc(100vh - 60px);
  height: 100vh;
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
    background-color: #${(props) => props.theme.lightDashed};
    padding: 5px 40px;
    border-radius: 20px;
  }
  p {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const Ul = styled.ul`
  max-width: 370px;
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  .notice {
    margin-top: 10px;
    background-color: ${(props) => props.theme.lightDashed};
    padding: 10px 0;
    height: 100px;
    color: ${(props) => props.theme.bgText};
    display: flex;
    border: 2px dashed ${(props) => props.theme.bgText};
    //flex-direction: column;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
`;
export default CalendarPage;
