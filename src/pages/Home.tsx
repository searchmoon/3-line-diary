import React from "react";
import MainDiary from "../components/main/MainDiary";

function Home(props) {
  return (
    <div>
      <MainDiary handleClick={props.handleClick} />
    </div>
  );
}

export default Home;
