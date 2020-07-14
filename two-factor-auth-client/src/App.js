import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Profile from "./profile/Profile";
import QrCode from "./qrcode/QrCode";
import VerifyCode from "./verifycode/VerifyCode";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Profile {...props} />} />
          <Route
            exact
            path="/login"
            render={(props) => <Signin {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />
          <Route
            exact
            path="/qrcode"
            render={(props) => <QrCode {...props} />}
          />
          <Route
            exact
            path="/verify"
            render={(props) => <VerifyCode {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
