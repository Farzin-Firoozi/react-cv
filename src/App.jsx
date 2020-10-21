import React from "react";
import Logo from "./components/Logo";

import "./App.scss";
// import DelayedComponent from "./components/Delayed";

const App = () => {
  return (
    <div className="my-app d-flex flex-column align-items-center justify-content-center">
      <div className="logo-wrapper">
        <Logo />
      </div>
      {/* <DelayedComponent waitBeforeShow={8000}>
        <h1 style={{ color: "white" }}>Farzan Goozoo</h1>
      </DelayedComponent> */}
    </div>
  );
};

export default App;
