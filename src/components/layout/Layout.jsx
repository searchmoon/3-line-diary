import styled from "styled-components";
import { respSize } from "../common/Common";

export const DefaultLayout = styled.div`
  box-sizing: border-box;
  max-width: ${(props) => props.maxWidth || 1340}px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${(props) => props.maxWidth || 1340 + 60}px) {
    padding: 0 32px;
  }
  @media (max-width: ${respSize.mobile}px) {
    padding: 0 16px;
  }
`;
