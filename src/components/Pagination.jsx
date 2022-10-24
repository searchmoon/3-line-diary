import React from "react";
import styled from "styled-components";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  console.log("pages", pages);
  console.log("totalPosts", totalPosts);
  return (
    <PageStyle>
      {pages.map((page, i) => {
        return (
          <button key={i} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </PageStyle>
  );
};

const PageStyle = styled.div`
  button {
    margin: 7px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    position: relative;
    &:not(:first-child):after {
      content: "";
      display: block;
      width: 1px;
      height: 16px;
      background-color: gray;
      position: absolute;
      top: 1px;
      left: -8px;
    }
  }
`;
export default Pagination;
