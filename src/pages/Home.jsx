import React from "react";
import MainDiary from "../components/main/MainDiary";
import styled from "styled-components";

function Home() {
  return (
    <HomeWrap>
      <MainDiary />
    </HomeWrap>
  );
}
const HomeWrap = styled.div`
`;


export default Home;

