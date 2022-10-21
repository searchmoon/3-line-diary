import React, { useCallback, useState } from "react";
import { DefaultLayout } from "./layout/layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaBars, FaInstagram } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { BiBell, BiMoon, BiCalendar, BiX } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";

function Header({ leftIcon }) {
  const [openModal, setOpenModal] = useState(false);
  const handleGoSetting = useCallback(() => {
    // const settingBtn = document.querySelector(".setting-modal");
    // settingBtn.classList.toggle("on");
    setOpenModal(!openModal);
    console.log(openModal);
  }, [openModal]);

  return (
    <HeaderLayout>
      <DefaultLayout>
        {leftIcon ? (
          <Link to="/">
            <HiOutlineChevronLeft size={20} />
          </Link>
        ) : (
          <Link to="/calendar">
            <BiCalendar size={22} />
          </Link>
        )}
        <div className="title">
          <Link to="/">3LINE DIARY</Link>
        </div>
        {openModal ? (
          <BiX size={24} onClick={handleGoSetting} />
        ) : (
          <IoSettingsOutline size={20} onClick={handleGoSetting} />
        )}
        {openModal && (
          <div className="setting-modal">
            <li>
              <MdLanguage />
              <span>Language</span>
            </li>
            <li>
              <BiBell />
              <span>Notifications</span>
            </li>
            <li>
              <BiMoon />
              <span>Dark Mode</span>
            </li>
            <li>
              <FaInstagram />
              <span>Instagram</span>
            </li>
          </div>
        )}
      </DefaultLayout>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.div`
  width: 100%;
  background-color: #fff;
  color: #444;
  margin: 0 auto;
  ${DefaultLayout} {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .setting-modal {
    position: absolute;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    background-color: white;
    width: 300px;
    padding: 40px 30px;
    li {
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
  }
`;
export default Header;
