import React from 'react';
import styled from "styled-components";
import {BiBell, BiMoon, BiX} from "react-icons/bi";
import {MdLanguage} from "react-icons/md";
import {FaInstagram} from "react-icons/fa";
import {FormControlLabel, Switch} from "@mui/material";
import {useCallback, useState} from "react";

const SettingModal = ({openModal, setOpenModal}) => {

    const handleClickClose = useCallback(() => {
        setOpenModal(!openModal);
        document.body.style.overflow = "unset";
    }, [openModal]);

    // const [darkmode, setDarkmode] = useState("light");

    // const handleModeChange = useCallback(() => {
        // const darkMode = document.querySelector(".modal-content");
        // darkMode.classList.toggle("dark");
        // setDarkmode((prev) => (prev === "light" ? "dark" : "light"));
        // }, [darkmode])
    // console.log(darkmode);
    return (
        <ModalWrap>
            <ul className= "modal-content" >
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
                    <FormControlLabel control={<Switch onChange={handleModeChange} color={"default"}/>} label="Dark Mode" labelPlacement="start" />
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
      background-color: white;
      max-width: 260px;
      width: 70vw;
      padding: 18px 15px;
      z-index: 10;
      //&#dark {
      //  background-color: #1e1e1e;
      //}
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
          background-color: #aaa;
          color: #fff;
        }

        p {
          margin-left: 10px;
          height: 18px;
        }
      }
    }
`

export default SettingModal;
