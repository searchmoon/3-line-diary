import styled from "styled-components";

const ModalMsg = ({ message }) => {
  return (
    <Div>
      <span>{message}</span>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bgText};
    min-width: 200px;
    padding: 18px 15px;
    z-index: 10;
    border-radius: 10px;
  }
`;
export default ModalMsg;
