import React, { useCallback, useState } from "react";
import { DefaultLayout } from "./layout/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import SettingModal from "./SettingModal";

function Header({ leftIcon }) {
  const [openModal, setOpenModal] = useState(false);

  const handleGoSetting = useCallback(() => {
    // const settingBtn = document.querySelector(".setting-modal");
    // settingBtn.classList.toggle("on");
    setOpenModal(!openModal);
    console.log(openModal);
    document.body.style.overflow = "hidden";
    //모달창 스크롤 방지
  }, [openModal]);

  return (
    <HeaderLayout>
      <DefaultLayout>
        <div className="inline-header">
          {leftIcon ? (
            <Link to="/">
              <HiOutlineChevronLeft size={22} />
            </Link>
          ) : (
            <Link to="/calendar">
              <BiCalendar size={22} />
            </Link>
          )}
          <div className="title">
            <Link to="/">3 LINE DIARY</Link>
          </div>
          <IoSettingsOutline
            size={20}
            onClick={handleGoSetting}
            style={{ cursor: "pointer" }}
          />
          {openModal && (
            <SettingModal openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </DefaultLayout>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.bgText};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  border-bottom: 2px dashed ${(props) => props.theme.dashed};
  ${DefaultLayout} {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bgText};
  }
  .inline-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
export default Header;
