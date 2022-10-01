import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}
const GlobalStyles = createGlobalStyle`
    ${reset};
`;
export default App;
