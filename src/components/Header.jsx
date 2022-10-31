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
    document.body.style.overflow = "hidden";
    //모달창 스크롤 방지
  }, [openModal]);

  const handleClickClose = useCallback(() => {
    setOpenModal(!openModal);
    document.body.style.overflow = "unset";
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
            <Link to="/">3LINE DIARY</Link>
          </div>
          <IoSettingsOutline
            size={20}
            onClick={handleGoSetting}
            style={{ cursor: "pointer" }}
          />
          {openModal && (
            <div className="modal-wrap">
              <ul className="modal-content">
                <div className="close-box">
                  <BiX
                    size={24}
                    onClick={handleClickClose}
                    style={{ cursor: "pointer" }}
                  />
                </div>
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
              </ul>
            </div>
          )}
          </div>
        </DefaultLayout>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.div`
  height: 60px;
  width: 100%;
  background-color: #fff;
  color: #444;
  margin: 0 auto;
  ${DefaultLayout} {
    width: 100%;
    height: 100%;
    background-color: #fff;
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
    .modal-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.6);

      .modal-content {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: white;
        max-width: 260px;
        width: 70vw;
        padding: 18px 15px;
        z-index: 10;

        .close-box {
          text-align: right;
          margin-bottom: 20px;
        }

        li {
          padding: 10px 7px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-radius: 10px;

          :hover {
            background-color: #aaa;
            color: #fff;
          }

          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
export default Header;
