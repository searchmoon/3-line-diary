import styled from "styled-components";

export const DefaultLayout = styled.div`
  max-width: ${(props) => props.maxWidth || 1340}px;
  margin: 0 auto;
  width: 100%;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;

  //   width: ${(props) => (props.width ? props.width + "px" : "100%")};
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   justify-self: center;

  //   margin: 0 auto;
  //   @media (max-width: ${(props) => (props.maxWidth || 1340) + 60}px) {
  //     padding: 0 32px;
  //   }
`;
