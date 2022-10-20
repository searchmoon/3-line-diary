// import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import moment from "moment";
import { Calendar } from "react-calendar";

function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header />
      <div>날짜별로 보기</div>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        calendarType="US"
        locale="en-US"
      />
    </>
  );
}

export default CalendarPage;
