import React, { Fragment } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <Fragment>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
