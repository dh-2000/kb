import { Fragment } from "react";
import { BrowserRouter } from 'react-router-dom'

import Heade from './components/helper/header'
import BaseRouter from "./router/router";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
          <Heade />
          <h1>this is a App</h1>
          <BaseRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
