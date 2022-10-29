// import React from "react";
import Header from "../components/Header";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Calendar } from "react-calendar";
import styled from "styled-components";
import { DefaultLayout } from "../components/layout/layout";
function CalendarPage() {
  const [value, onChange] = useState(new Date());

  const lists = useSelector((state) => state.diary.lists);

  // const [viewByDate, setViewByDate] = useState();
  let selectedDate = moment(value).format("YYMMDD");
  console.log(
    "제발",
    lists.filter((list) => selectedDate == list.dateformat)
  );
  const view = lists.filter((list) => selectedDate == list.dateformat);
  // const handleDiaryView = useCallback(() => {
  // setViewByDate([
  // lists.filter((list) => selectedDate == list.dateformat),
  // ]);
  // }, []);
  console.log("selectedDate", typeof selectedDate);
  console.log("list.dateformat", lists[0].dateformat);

  // console.log("viewByDate", viewByDate);
  console.log("lists", lists);
  console.log("value", value);

  return (
    <CalendarStyle>
      <Header />
      <DefaultLayout>
        <Calendar
          onChange={onChange}
          // onClick={handleDiaryView}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
          calendarType="US"
          locale="en-US"
        />
        <h3>View by date</h3>
        <p>{moment(value).format("YYMMDD")}</p>

        {view?.map((list) => (
          <>
            <li>{list.date}</li>
            <li>{list.value}</li>
          </>
        ))}
      </DefaultLayout>
    </CalendarStyle>
  );
}
const CalendarStyle = styled.div`
  background-color: #f8ede2;
  color: #444;
  // min-height: calc(100vh - 60px);
  min-height: 100vh;
  height: 100%;
  h3 {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
  }
`;
export default CalendarPage;
