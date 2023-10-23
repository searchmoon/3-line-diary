import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false });
  const navigate = useNavigate();

  const handleAlert = ({ message, time = 1500, path }) => {
    setAlert({ show: true, message });

    setTimeout(() => {
      if (path === undefined) {
        window.history.back();
      } else navigate(path);
      setAlert({ show: false });
    }, time);
  };

  return { alert, handleAlert };
};

export default useAlert;
