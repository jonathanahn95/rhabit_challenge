import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
  </div>
);

export default App;
