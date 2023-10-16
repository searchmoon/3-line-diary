import styled from "styled-components";
import { BiBell, BiMoon, BiX } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Switch } from "@mui/material";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../features/themeSlice";

const SettingModal = ({ setOpenModal }) => {
  const mode = useSelector((state) => state.theme.mode);

  const handleClickClose = useCallback(() => {
    setOpenModal((prev) => !prev);
    document.body.style.overflow = "unset";
    console.log(mode);
  }, [setOpenModal]);

  const dispatch = useDispatch();

  const handleModeChange = () => {
    dispatch(setDarkMode(mode));
  };

  return (
    <ModalWrap>
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
          <p>Language</p>
        </li>
        <li>
          <BiBell />
          <p>Notifications</p>
        </li>
        <li>
          <FaInstagram />
          <p>Instagram</p>
        </li>
        <li>
          <BiMoon />
          <p>Dark Mode</p>
          <Switch color={"default"} checked={mode} onClick={handleModeChange} />
        </li>
      </ul>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
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
    background-color: ${(props) => props.theme.bgText};
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

      :last-child {
        padding: 0 7px;
      }

      :hover:not(:last-child) {
        background-color: ${(props) => props.theme.lightDashed};
        color: ${(props) => props.theme.bgText};
      }

      p {
        margin-left: 10px;
        height: 18px;
      }
    }
  }
`;

export default SettingModal;
