import { Fragment } from "react";
import { BrowserRouter, Navigate } from 'react-router-dom'

import Heade from './components/helper/header'
import BaseRouter from "./router/router";
function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Heade />
        <h1>this is a App</h1>
        <BaseRouter />
        {/* <Navigate to='/smartpark/aqsc' /> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
