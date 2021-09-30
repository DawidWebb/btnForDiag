import StoreProvider from "../src/Store/StoreProvider";
import { Fragment } from "react";
import { Main } from "./components";

function App() {
  return (
    <StoreProvider>
      <Fragment>
        <Main />
      </Fragment>
    </StoreProvider>
  );
}

export default App;
