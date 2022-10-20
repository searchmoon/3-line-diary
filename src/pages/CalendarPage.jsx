// import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import moment from "moment";
import { Calendar } from "react-calendar";
import styled from "styled-components";
function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarStyle>
      <Header />
      <div>날짜별로 보기</div>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        calendarType="US"
        locale="en-US"
      />
    </CalendarStyle>
  );
}
const CalendarStyle = styled.div`
  color: #444;
`;
export default CalendarPage;
