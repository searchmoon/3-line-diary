import React, { useCallback, useState } from "react";
import { DefaultLayout } from "./layout/Layout";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import SettingModal from "./SettingModal";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

function Header({ leftIcon }) {
  const [openModal, setOpenModal] = useState(false);
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleGoSetting = useCallback(() => {
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";
    //모달창 스크롤 방지
  }, [openModal]);

  console.log(auth);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("로그아웃 되었습니다.");
        navigate("/");
        //setUserData({}) //setUserData는 redux 에 담아준 후에 가져오기. login page 에 있다
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
          <div>
            <Link className="title" to="/">
              3 LINE DIARY
            </Link>
          </div>
          <div className="right-navBox">
            {user ? (
              <div onClick={handleLogout} className="sign-box">
                <FiLogOut size={20} />
                <p>logout</p>
              </div>
            ) : (
              <Link to={"/signIn"}>
                <div className="sign-box">
                  <FiLogIn size={20} />
                  <p>login</p>
                </div>
              </Link>
            )}
            <IoSettingsOutline
              size={20}
              onClick={handleGoSetting}
              style={{ cursor: "pointer" }}
            />
          </div>
          {openModal && <SettingModal setOpenModal={setOpenModal} />}
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
    .right-navBox {
      display: flex;
      align-items: center;
      .sign-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        p {
          font-size: 12px;
        }
      }
    }
  }
`;
export default Header;
