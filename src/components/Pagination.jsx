import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [onActiveArrow, setOnActiveArrow] = useState(false);

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  console.log("pages", pages);
  console.log("totalPosts", totalPosts);
  console.log(
    "(Math.ceil(totalPosts / postsPerPage)",
    Math.ceil(totalPosts / postsPerPage)
  );

  const handleBackClick = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);
  const handleForwardClick = useCallback(() => {
    if (Math.floor(totalPosts / postsPerPage) >= currentPage) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage]);
  //  totalPosts(10) 나누기 postsPerPage(3) = 에서 올림 (ceil) 하면 총 페이지 수(4) 나옴.
  //  pages 가 5 이상일때 페이지네이션 하기. 1~5까지, 6~10까지 이런식으로. 페이지네이션 된걸 또 페이지네이션?
  // totalPosts가  postsPerPage(3) * 5 이상일 때부터 pagination. 어렵넹ㅎ
  // pages 가 5 이상일때
  useEffect(() => {
    if (totalPosts > postsPerPage * 5) {
      setOnActiveArrow(true);
    } else {
      setOnActiveArrow(false);
    }
  }, [totalPosts]);
  return (
    <PageStyle>
      {onActiveArrow && (
        <ArrowBackIos className="back icon" onClick={handleBackClick} />
      )}
      {pages.map((page, i) => {
        return (
          <button
            className="page-number"
            key={i}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {onActiveArrow && (
        <ArrowForwardIos
          className="forward icon"
          onClick={handleForwardClick}
        />
      )}
    </PageStyle>
  );
};

const PageStyle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  .page-number {
    margin: 7px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    position: relative;
    font-weight: 500;
    color: #444;
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
  .icon {
    cursor: pointer;
    width: 16px;
  }
`;
export default Pagination;
