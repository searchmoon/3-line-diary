// import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import moment from "moment";
import { Calendar } from "react-calendar";
import styled from "styled-components";
import { DefaultLayout } from "../components/layout/layout";
function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarStyle>
      <Header />
      <DefaultLayout>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
          calendarType="US"
          locale="en-US"
        />
        <h3>View by date</h3>
      </DefaultLayout>
    </CalendarStyle>
  );
}
const CalendarStyle = styled.div`
  background-color: #f8ede2;
  color: #444;
  min-height: calc(100vh - 60px);
  h3 {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
  }
`;
export default CalendarPage;
